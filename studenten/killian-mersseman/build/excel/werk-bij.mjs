import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import {loadECB,usdRate,ECB_URL} from './wisselkoersen.mjs';
import {readSelection,applyQuarterControls} from './kwartaalkeuze.mjs';

// Gebruik de meegeleverde artifact-runtime, geen projectafhankelijkheden.
const require = createRequire(import.meta.url);
const runtime = process.env.ARTIFACT_NODE_MODULES || path.join(os.homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node');
const { Workbook, SpreadsheetFile, FileBlob } = await import(require.resolve('@oai/artifact-tool', { paths: [runtime] }));
const own = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(own, '../..');
const out = process.env.TRACKER_OUTPUT_DIR || path.join(root, 'outputs/kwartaalopvolging');
const output = path.join(out, 'kwartaalopvolging.xlsx');
const companies = [
  ['NFLX','Netflix'],['UBER','Uber'],['NVO','Novo Nordisk'],['LLY','Eli Lilly'],
  ['AMZN','Amazon'],['GOOGL','Alphabet'],['SPGI','S&P Global'],['NVDA','NVIDIA'],['AMD','AMD'],['CVX','Chevron']
];
const metrics = ['FCF','Schuld','Omzetgroei'];
const statuses = ['Nog te controleren','Gecontroleerd','Onzeker','Niet gevonden'];
const types = ['Kwartaal','Halfjaar','Negen maanden','Jaar','Peildatum'];
const headers = ['Sleutel','Ticker','Maatstaf','Begin','Einde / peildatum','Periodetype','Bronwaarde','Bronvaluta','Methode','Definitie','Rapport','Bronpagina','Bronbedragen / bewijs','Controle','Opmerking','Broneenheid','USD per bronvaluta','Koersdatum','Waarde USD / groei'];
const dateSerial = x => x == null ? null : Math.round((new Date(`${x}T00:00:00Z`).getTime() - Date.UTC(1899,11,30))/86400000);
const dateString = x => x == null || x === '' ? null : typeof x === 'number' ? new Date(Date.UTC(1899,11,30)+x*86400000).toISOString().slice(0,10) : x instanceof Date ? x.toISOString().slice(0,10) : String(x).slice(0,10);
const key = r => `${r.ticker}|${r.metric}|${r.end}`;
function validate(r) {
  if (!companies.some(c=>c[0]===r.ticker) || !metrics.includes(r.metric)) throw Error('Onbekende ticker of maatstaf');
  for (const f of ['end', ...(r.metric==='Schuld' ? [] : ['start'])]) {
    if (typeof r[f]!=='string' || !/^\d{4}-\d{2}-\d{2}$/.test(r[f]) || new Date(`${r[f]}T00:00:00Z`).toISOString().slice(0,10)!==r[f]) throw Error(`Ongeldige datum: ${f}`);
  }
  if (r.start && r.start > r.end) throw Error('Begin valt na einde');
  if (!types.includes(r.period_type) || !statuses.includes(r.status)) throw Error('Ongeldig periodetype of controlestatus');
  if (r.metric==='Schuld' && r.period_type!=='Peildatum') throw Error('Schuld vereist Peildatum');
  if (r.metric==='Omzetgroei' && r.period_type!=='Kwartaal') throw Error('Omzetgroei moet kwartaalgroei zijn');
  if (r.value!==null && (typeof r.value!=='number' || !Number.isFinite(r.value))) throw Error('Waarde moet een getal of null zijn');
  if (r.value!==null && r.metric!=='Omzetgroei' && !/^[A-Z]{3}$/.test(r.currency||'')) throw Error('Geldbedrag vereist oorspronkelijke valuta');
  if (r.value!==null && (!r.source || !r.page || !r.definition || !r.method)) throw Error('Bron, pagina, definitie en methode zijn verplicht');
  if (r.value===null && !r.note) throw Error('Ontbrekende waarde vereist uitleg');
}
const fromRow = a => ({ ticker:a[1],metric:a[2],start:dateString(a[3]),end:dateString(a[4]),period_type:a[5],value:a[6]===''||a[6]==null?null:a[6],currency:a[7]||null,method:a[8],definition:a[9],source:a[10],page:a[11],evidence:a[12],status:a[13],note:a[14] });
let records = [];
let existing = false;
let savedFilters = null;
let savedQuarterSelection=null;
try {
  await fs.access(output); existing = true;
  const previous = await SpreadsheetFile.importXlsx(await FileBlob.load(output));
  const values = previous.worksheets.getItem('Historiek').getUsedRange().values;
  records = values.slice(5).filter(a=>a[1]).map(fromRow);
  savedFilters = previous.worksheets.getItem('Grafieken').getRange('B5:B10').values;
  savedQuarterSelection=readSelection(previous.worksheets.getItem('Grafieken'));
} catch(e) { if (existing) throw e; if (e.code!=='ENOENT') throw e; }
let incomingPath=null,confirmTicker=null,fxFile=null;
const args=process.argv.slice(2);
for(let i=0;i<args.length;i++){
 if(args[i]==='--bevestig')confirmTicker=args[++i];
 else if(args[i]==='--koersenbestand')fxFile=args[++i];
 else if(args[i].startsWith('--')||incomingPath)throw Error('Onbekend of dubbel argument');
 else incomingPath=args[i];
}
if(confirmTicker&&!companies.some(c=>c[0]===confirmTicker))throw Error('Onbekende bevestigingsticker');
if (incomingPath) {
  const incoming = JSON.parse(await fs.readFile(path.resolve(incomingPath),'utf8')).records;
  if (!Array.isArray(incoming) || incoming.length===0) throw Error('JSON vereist een niet-lege records-lijst');
  for (const r of incoming) {
    validate(r);
    const old = records.find(x=>key(x)===key(r));
    if (old) {
      if (JSON.stringify(toRow(old))===JSON.stringify(toRow(r))) continue;
      throw Error(`Bestaande meting niet overschreven: ${key(r)}. Controleer of corrigeer deze eerst in Excel.`);
    }
    records.push(r);
  }
}
function toRow(r) { return [key(r),r.ticker,r.metric,dateSerial(r.start),dateSerial(r.end),r.period_type,r.value,r.currency||'',r.method||'',r.definition||'',r.source||'',r.page||'',r.evidence||'',r.status,r.note||'',r.metric==='Omzetgroei'?'Fractie':'Miljoen']; }
records.forEach(validate);
if(confirmTicker)for(const r of records.filter(r=>r.ticker===confirmTicker)){
 r.status='Gecontroleerd';
 const confirmation=`Door Killian als correct bevestigd op ${new Date().toISOString().slice(0,10)}.`;
 if(!r.note?.includes(confirmation))r.note=confirmation+' '+(r.note||'');
}
if (new Set(records.map(key)).size!==records.length) throw Error('Dubbele metingen in historiek');
records.sort((a,b)=>a.ticker.localeCompare(b.ticker)||a.end.localeCompare(b.end)||a.metric.localeCompare(b.metric));
// Geen stil terugvallen op een oude koers bij een netwerkfout.
const fx=await loadECB({localXml:fxFile,archiveDir:process.env.TRACKER_FX_ARCHIVE_DIR||path.join(own,'koersen')});
for(const r of records)if(r.metric!=='Omzetgroei'&&r.value!==null)usdRate(fx,r.currency);
await fs.mkdir(out,{recursive:true});
const wb=Workbook.create();
const overview=wb.worksheets.add('Vergelijking');
const graphs=wb.worksheets.add('Grafieken');
const hist=wb.worksheets.add('Historiek');
const exchange=wb.worksheets.add('Wisselkoersen');
const colors={ navy:'#17324D',blue:'#215A8E',pale:'#EEF3F8',amber:'#FFF1CC',text:'#172B3A',muted:'#596B79' };
function base(s,range) { s.showGridLines=false; s.getRange(range).format.font={name:'Arial',size:10,color:colors.text};s.getRange(range).format.rowHeight=24;s.getRange(range).format.verticalAlignment='center'; }
function title(s,txt,note) { s.getRange('A2').values=[[txt]];s.getRange('A2').format.font={name:'Arial',size:16,bold:true,color:colors.navy};s.getRange('A3').values=[[note]];s.getRange('A3').format.font={name:'Arial',size:10,color:colors.muted}; }
function header(s,range) {s.getRange(range).format={fill:colors.navy,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},wrapText:true,rowHeight:34,horizontalAlignment:'center',verticalAlignment:'center'};}
const currencies=Object.keys(fx.rates).sort();
const usdRow=currencies.indexOf('USD')+6;
base(exchange,`A1:E${currencies.length+7}`);exchange.tabColor='#C8D8E6';
title(exchange,'Wisselkoersen naar USD',`ECB-koersdatum ${fx.rate_date}; opgehaald ${fx.retrieved_at.slice(0,16).replace('T',' ')} UTC.`);
exchange.getRange('A4').values=[['Actuele referentiekoers voor alle verslagperioden; geen historische verslagkoers. Vernieuwen: voer de update uit.']];
exchange.getRange('A5:E5').values=[['Valuta','Per 1 EUR','USD per valuta-eenheid','Koersdatum','Bron']];header(exchange,'A5:E5');
exchange.getRange(`A6:E${currencies.length+5}`).values=currencies.map(c=>[c,fx.rates[c],null,dateSerial(fx.rate_date),c==='EUR'?'Basisvaluta EUR = 1':ECB_URL]);
for(let i=0;i<currencies.length;i++)exchange.getRange(`C${i+6}`).formulas=[[`=$B$${usdRow}/B${i+6}`]];
exchange.getRange('A:A').format.columnWidth=12;exchange.getRange('B:C').format.columnWidth=24;exchange.getRange('D:D').format.columnWidth=17;exchange.getRange('E:E').format.columnWidth=85;
exchange.getRange(`B6:B${currencies.length+5}`).setNumberFormat('0.000000');exchange.getRange(`C6:C${currencies.length+5}`).setNumberFormat('0.00000000');exchange.getRange(`D6:D${currencies.length+5}`).setNumberFormat('dd-mm-yyyy');
exchange.freezePanes.freezeRows(5);
base(hist,`A1:S${Math.max(16,records.length+6)}`);hist.tabColor='#D8C5A5';
title(hist,'Historiek per bedrijf','Bronbedragen blijven behouden. USD-bedragen gebruiken de recentst opgehaalde ECB-koers; groei blijft ongewijzigd.');
hist.getRange('A5:S5').values=[headers];
if(records.length) hist.getRange(`A6:P${records.length+5}`).values=records.map(toRow);
for(let i=0;i<records.length;i++){
 const r=records[i],n=i+6,fxrow=currencies.indexOf(r.currency)+6;
 if(r.metric==='Omzetgroei')hist.getRange(`S${n}`).formulas=[[`=IF(G${n}="","",G${n})`]];
 else if(r.value!==null){
  hist.getRange(`Q${n}`).formulas=[[`='Wisselkoersen'!C${fxrow}`]];
  hist.getRange(`R${n}`).formulas=[[`='Wisselkoersen'!D${fxrow}`]];
  hist.getRange(`S${n}`).formulas=[[`=IF(G${n}="","",G${n}*Q${n})`]];
 }
}
hist.tables.add(`A5:S${Math.max(6,records.length+5)}`,true,'KwartaalHistoriek');
header(hist,'A5:S5');
hist.getRange('A:A').format.columnWidth=36;hist.getRange('B:C').format.columnWidth=15;
hist.getRange('D:E').format.columnWidth=15;hist.getRange('F:I').format.columnWidth=18;
hist.getRange('J:J').format.columnWidth=65;hist.getRange('K:L').format.columnWidth=30;
hist.getRange('M:M').format.columnWidth=65;hist.getRange('N:N').format.columnWidth=23;
hist.getRange('O:O').format.columnWidth=85;hist.getRange('P:P').format.columnWidth=14;
hist.getRange('Q:S').format.columnWidth=24;
hist.getRange(`Q6:Q${Math.max(6,records.length+5)}`).setNumberFormat('0.00000000');
hist.getRange(`R6:R${Math.max(6,records.length+5)}`).setNumberFormat('dd-mm-yyyy');
hist.getRange(`S6:S${Math.max(6,records.length+5)}`).setNumberFormat('#,##0.0;(#,##0.0);"—"');
for(let i=0;i<records.length;i++)if(records[i].metric==='Omzetgroei')hist.getRange(`S${i+6}`).setNumberFormat('0.0%;(0.0%);"—"');
hist.getRange(`D6:E${Math.max(6,records.length+5)}`).setNumberFormat('dd-mm-yyyy');
hist.getRange(`G6:G${Math.max(6,records.length+5)}`).setNumberFormat('#,##0.0;(#,##0.0);"—"');
hist.getRange(`G6:G${Math.max(6,records.length+5)}`).format.font.color='#0000FF';
for(let i=0;i<records.length;i++) if(records[i].metric==='Omzetgroei') hist.getRange(`G${i+6}`).setNumberFormat('0.0%;(0.0%);"—"');
hist.getRange('N6:N2005').dataValidation={rule:{type:'list',values:statuses}};
hist.getRange('F6:F2005').dataValidation={rule:{type:'list',values:types}};
hist.getRange('B6:B2005').dataValidation={rule:{type:'list',values:companies.map(c=>c[0])}};
hist.getRange(`N6:N${Math.max(6,records.length+5)}`).format.fill=colors.amber;
hist.getRange('N6:N2005').conditionalFormats.add('containsText',{text:'Onzeker',format:{fill:'#FCE1DE',font:{color:'#9C2424'}}});
hist.freezePanes.freezeRows(5);hist.freezePanes.freezeColumns(3);
for(let i=0;i<records.length;i++){
 const r=records[i];
 const lines=Math.max(Math.ceil((r.definition||'').length/72),Math.ceil((r.page||'').length/32),Math.ceil((r.evidence||'').length/72),Math.ceil((r.note||'').length/95));
 if(lines>1){hist.getRange(`J${i+6}:P${i+6}`).format.wrapText=true;hist.getRange(`A${i+6}:S${i+6}`).format.rowHeight=Math.max(24,lines*14+10);}
}

base(overview,'A1:J41');overview.tabColor=colors.navy;
title(overview,'Kwartaalopvolging in USD',`Geld in miljoen USD, omgerekend met ECB-koers van ${fx.rate_date}. Groei blijft het gerapporteerde percentage.`);
overview.getRange('A5:J5').values=[['Ticker','Bedrijf / maatstaf','Waarde','Valuta','Begin','Einde / peildatum','Periodetype','Controle','Toelichting','Bronrij']];
header(overview,'A5:J5');
let row=6;
for(const [ticker,name] of companies) for(const metric of metrics){
  overview.getRange(`A${row}:B${row}`).values=[[ticker,`${name} — ${metric}`]];
  const available=records.map((r,i)=>({...r,row:i+6})).filter(r=>r.ticker===ticker&&r.metric===metric).sort((a,b)=>b.end.localeCompare(a.end));
  if(available.length){const d=available[0].row;
    for(const [dest,src] of [['C','S'],['E','D'],['F','E'],['G','F'],['H','N'],['I','O']]) overview.getRange(`${dest}${row}`).formulas=[[`=IF('Historiek'!${src}${d}="","",'Historiek'!${src}${d})`]];
    if(metric!=='Omzetgroei')overview.getRange(`D${row}`).values=[['USD']];
    overview.getRange(`J${row}`).values=[[d]];
  }else overview.getRange(`H${row}`).values=[['Nog geen rapport']];
  if(metric==='Omzetgroei') overview.getRange(`C${row}`).setNumberFormat('0.0%;(0.0%);"—"');else overview.getRange(`C${row}`).setNumberFormat('#,##0.0;(#,##0.0);"—"');
  if(metric==='FCF') overview.getRange(`A${row}:J${row}`).format.fill=colors.pale;
  row++;
}
overview.getRange('A:A').format.columnWidth=10;overview.getRange('B:B').format.columnWidth=33;
overview.getRange('C:D').format.columnWidth=14;overview.getRange('E:F').format.columnWidth=17;
overview.getRange('G:G').format.columnWidth=17;overview.getRange('H:H').format.columnWidth=23;
overview.getRange('I:I').format.columnWidth=63;overview.getRange('J:J').format.columnWidth=11;
overview.getRange('E6:F35').setNumberFormat('dd-mm-yyyy');
overview.getRange('I6:I35').format.wrapText=true;overview.getRange('A6:J35').format.rowHeight=44;
for(let i=0;i<companies.length;i++)for(let j=0;j<metrics.length;j++){
 const latest=records.filter(r=>r.ticker===companies[i][0]&&r.metric===metrics[j]).sort((a,b)=>b.end.localeCompare(a.end))[0];
 if(latest?.note) overview.getRange(`A${6+i*3+j}:J${6+i*3+j}`).format.rowHeight=Math.max(44,Math.ceil(latest.note.length/66)*14+10);
}
overview.getRange('H6:H35').conditionalFormats.add('containsText',{text:'Nog te controleren',format:{fill:colors.amber}});
overview.getRange('H6:H35').conditionalFormats.add('containsText',{text:'Onzeker',format:{fill:'#FCE1DE',font:{color:'#9C2424'}}});
overview.getRange('A38').values=[['Nieuwe run: voeg één bedrijfsrapport toe via de instructies in build/prompt-v3-enkel-bedrijf.md.']];
overview.getRange('A39').values=[['De update bewaart de historiek. Bij identieke bedrijfsnaam, maatstaf en einddatum wordt een conflict niet overschreven.']];
overview.getRange('A40').values=[['Grafieken gebruiken eigen periodefilters; een ontbrekend bedrag blijft ontbrekend.']];
overview.freezePanes.freezeRows(5);

base(graphs,'A1:R61');graphs.tabColor=colors.blue;
title(graphs,'Bedrijven vergelijken in USD',`ECB-koersdatum ${fx.rate_date}. Alle geldbedragen in miljoen USD; periodefilters blijven gelden.`);
graphs.getRange('A5:B10').values=[['Weergavevaluta','USD'],['FCF-periodetype','Halfjaar'],['FCF begin',dateSerial('2026-01-01')],['FCF einde / schuldpeildatum',dateSerial('2026-06-30')],['Omzetgroei begin',dateSerial('2026-04-01')],['Omzetgroei einde',dateSerial('2026-06-30')]];
graphs.getRange('A:A').format.columnWidth=34;graphs.getRange('B:B').format.columnWidth=18;graphs.getRange('C:R').format.columnWidth=12;
graphs.getRange('B6:B10').format.fill=colors.amber;graphs.getRange('B7:B10').setNumberFormat('dd-mm-yyyy');
graphs.getRange('B5').dataValidation={rule:{type:'list',values:['USD']}};
graphs.getRange('B6').dataValidation={rule:{type:'list',values:types.filter(t=>t!=='Peildatum')}};
graphs.getRange('A12').values=[['USD tegen de actuele opgehaalde koers, geen historische koers. Groei is kwartaalgroei tegenover hetzelfde kwartaal vorig jaar.']];
graphs.getRange('A13').values=[['Bekijk de controlestatus en toelichting per meting in Historiek; ook ongecontroleerde waarden kunnen in de grafieken staan.']];
graphs.getRange('A48:D48').values=[['Ticker','FCF (miljoen)','Schuld (miljoen)','Omzetgroei (%)']];header(graphs,'A48:D48');
const rr=Math.max(2005,records.length+5);
const range=c=>`'Historiek'!$${c}$6:$${c}$${rr}`;
for(let i=0;i<companies.length;i++){
 const r=i+49;graphs.getRange(`A${r}`).values=[[companies[i][0]]];
 for(const [col,metric,extra] of [
   ['B','FCF',`,${range('D')},$B$7,${range('E')},$B$8,${range('F')},$B$6`],
   ['C','Schuld',`,${range('E')},$B$8`],
   ['D','Omzetgroei',`,${range('D')},$B$9,${range('E')},$B$10`]
 ]) {
   const criteria=`${range('B')},$A${r},${range('C')},"${metric}"${extra}`;
   graphs.getRange(`${col}${r}`).formulas=[[`=IF(COUNTIFS(${criteria},${range('G')},"<>")=0,NA(),SUMIFS(${range('S')},${criteria}))`]];
 }
}
graphs.getRange('B49:C58').setNumberFormat('#,##0.0;(#,##0.0);"—"');graphs.getRange('D49:D58').setNumberFormat('0.0%');
graphs.getRange('A60').values=[['#N/A in de grafiekgegevens betekent dat voor die selectie geen getal beschikbaar is; het is geen nul.']];
for(const [col,titleText,left,right,fmt] of [['B','FCF per bedrijf (miljoen USD)','A16','I30','#,##0.0'],['C','Financiële schuld per bedrijf (miljoen USD)','J16','R30','#,##0.0'],['D','Kwartaalomzetgroei tegenover vorig jaar','A32','I46','0.0%']]) {
 const chart=graphs.charts.add('bar',[graphs.getRange('A48:A58'),graphs.getRange(`${col}48:${col}58`)]);
 chart.title=titleText;chart.titleTextStyle.typeface='Arial';chart.titleTextStyle.fontSize=13;
 chart.hasLegend=false;chart.xAxis={axisType:'textAxis',textStyle:{typeface:'Arial',fontSize:10}};
 const metric=col==='B'?'FCF':col==='C'?'Schuld':'Omzetgroei';
 chart.yAxis={min:Math.min(0,...records.filter(r=>r.metric===metric&&r.value!==null).map(r=>r.metric==='Omzetgroei'?r.value:r.value*usdRate(fx,r.currency))),numberFormatCode:fmt,numberFormatSourceLinked:false,textStyle:{typeface:'Arial',fontSize:10}};
 chart.series.items[0].fill=colors.blue;chart.setPosition(left,right);
}
wb.recalculate();
console.log((await wb.inspect({kind:'region',sheetId:'Vergelijking',range:'A6:H11',maxChars:3500,tableMaxRows:6,tableMaxCols:8})).ndjson);
console.log((await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:20},maxChars:1500})).ndjson);
// Verifieer dat de periodefilters echt herberekenen en ontbrekende cijfers geen nul worden.
graphs.getRange('B8').values=[[dateSerial('2099-09-30')]];wb.recalculate();
if(graphs.getRange('B49').values[0][0]!== '#N/A') throw Error('Periodefilter gaf onverwacht een waarde voor een ontbrekende periode');
graphs.getRange('B8').values=[[dateSerial('2026-06-30')]];wb.recalculate();
const seedFCF=records.find(r=>r.ticker==='NFLX'&&r.metric==='FCF'&&r.start==='2026-01-01'&&r.end==='2026-06-30'&&r.currency==='USD'&&r.period_type==='Halfjaar');
if(seedFCF?.value!=null&&graphs.getRange('B49').values[0][0]!==seedFCF.value) throw Error('FCF-grafiekcontrole mislukt');
if(savedFilters){graphs.getRange('B6:B10').values=savedFilters.slice(1);wb.recalculate();}
const reportYears=records.map(r=>Number(r.end.slice(0,4)));
const firstYear=Math.min(new Date().getUTCFullYear(),...reportYears)-1,lastYear=Math.max(new Date().getUTCFullYear()+5,...reportYears);
applyQuarterControls(wb,{selection:savedQuarterSelection||{type:'Kwartaal',year:2026,quarter:'Q2'},years:Array.from({length:lastYear-firstYear+1},(_,i)=>firstYear+i),recordCount:records.length});
wb.recalculate();
if(process.env.PREVIEW==='1') for(const [sheetName,range,file] of [['Vergelijking','A1:J17','vergelijking'],['Grafieken','A1:R46','grafieken'],['Historiek','A1:I11','historiek'],['Historiek','J5:S11','bronverwijzingen'],['Wisselkoersen','A1:E17','wisselkoersen']]) {
 const img=await wb.render({sheetName,range,scale:1,format:'png'});await fs.writeFile(path.join(out,`${file}.png`),new Uint8Array(await img.arrayBuffer()));
}
const temp=path.join(out,'kwartaalopvolging.tmp.xlsx');
await (await SpreadsheetFile.exportXlsx(wb)).save(temp);
if(existing) await fs.copyFile(output,path.join(os.tmpdir(),'killian-kwartaalopvolging-vorige.xlsx'));
await fs.rename(temp,output);
console.log(JSON.stringify({bestand:output,metingen:records.length,bedrijven:companies.length,koersdatum:fx.rate_date,koersbron:fx.url,usdPerDKK:fx.rates.DKK?usdRate(fx,'DKK'):null}));
