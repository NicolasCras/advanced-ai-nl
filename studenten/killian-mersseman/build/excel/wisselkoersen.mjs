import fs from 'node:fs/promises';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

export const ECB_URL='https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
export function parseECB(xml, now=new Date()) {
 const date=xml.match(/<Cube\s+time=['"](\d{4}-\d{2}-\d{2})['"]/);
 if(!date)throw Error('ECB-bestand bevat geen geldige koersdatum');
 if(!Number.isFinite(Date.parse(date[1]))||new Date(date[1]).toISOString().slice(0,10)!==date[1])throw Error('Ongeldige ECB-koersdatum');
 if(date[1]>now.toISOString().slice(0,10))throw Error('ECB-koersdatum ligt in de toekomst');
 const rates={EUR:1};
 for(const m of xml.matchAll(/<Cube\s+currency=['"]([A-Z]{3})['"]\s+rate=['"]([\d.]+)['"]\s*\/>/g)){
   const value=Number(m[2]);if(!Number.isFinite(value)||value<=0||rates[m[1]]!==undefined)throw Error('Ongeldige of dubbele ECB-koers');
   rates[m[1]]=value;
 }
 if(!rates.USD)throw Error('ECB-bestand bevat geen USD-koers');
 const ageDays=(Date.parse(now.toISOString().slice(0,10))-Date.parse(date[1]))/86400000;
 if(ageDays>7)throw Error(`ECB-koers is ${ageDays} dagen oud; update gestopt zonder bestaande Excel te vervangen`);
 return {source:'Europese Centrale Bank',url:ECB_URL,base:'EUR',rate_date:date[1],retrieved_at:now.toISOString(),rates};
}
export async function loadECB({localXml,archiveDir}={}){
 let xml;
 if(localXml)xml=await fs.readFile(localXml,'utf8');
 else {
  try {xml=execFileSync('curl',['-L','--fail','--silent','--show-error','--max-time','20',ECB_URL],{encoding:'utf8',maxBuffer:1024*1024});}
  catch(e){throw Error('Actuele ECB-koersen niet opgehaald. Excel is niet bijgewerkt. Probeer opnieuw met netwerktoegang. '+e.message);}
 }
 const snapshot=parseECB(xml);
 if(archiveDir){
  await fs.mkdir(archiveDir,{recursive:true});
  const name=path.join(archiveDir,`${snapshot.rate_date}.json`);
  try {
   const old=JSON.parse(await fs.readFile(name,'utf8'));
   if(JSON.stringify(old.rates)!==JSON.stringify(snapshot.rates))throw Error('ECB-koersen voor dezelfde datum wijken af van het archief; controle vereist');
  }catch(e){if(e.code!=='ENOENT')throw e;await fs.writeFile(name,JSON.stringify(snapshot,null,2)+'\n',{flag:'wx'});}
  await fs.writeFile(path.join(archiveDir,'laatste.json'),JSON.stringify(snapshot,null,2)+'\n');
 }
 return snapshot;
}
export function usdRate(snapshot,currency){
 const rate=snapshot.rates[currency];
 if(!Number.isFinite(rate)||rate<=0)throw Error(`Geen ECB-koers voor ${currency}; geen nul of geschatte koers gebruikt`);
 return snapshot.rates.USD/rate;
}
