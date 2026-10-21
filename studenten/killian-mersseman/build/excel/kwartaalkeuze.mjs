// Gedeelde grafiekbediening voor een bestaande werkmap en toekomstige imports.
export function readSelection(sheet){
 if(sheet.getRange('A7').values[0][0]==='Jaar')return {
  type:sheet.getRange('B6').values[0][0],year:Number(sheet.getRange('B7').values[0][0]),quarter:sheet.getRange('B8').values[0][0]
 };
 const serial=sheet.getRange('B10').values[0][0];
 const date=typeof serial==='number'?new Date(Date.UTC(1899,11,30)+serial*86400000):new Date();
 return {type:'Kwartaal',year:date.getUTCFullYear(),quarter:`Q${Math.floor(date.getUTCMonth()/3)+1}`};
}

export function applyQuarterControls(wb,{selection,years,recordCount=0}={}){
 const s=wb.worksheets.getItem('Grafieken');
 selection=selection||readSelection(s);
 years=years||[selection.year-1,selection.year,selection.year+1,selection.year+2,selection.year+3,selection.year+4,selection.year+5];
 s.getRange('A5:B11').clear({applyTo:'contents'});
 s.getRange('A5:B11').format.fill='#FFFFFF';
 s.getRange('B5:B11').dataValidation={rule:{type:'none'},inCellDropDown:false};
 s.getRange('A5:B8').values=[['Weergavevaluta','USD'],['FCF-periodetype',selection.type],['Jaar',selection.year],['Kwartaal',selection.quarter]];
 s.getRange('B7:B8').setNumberFormat('General');
 s.getRange('B6:B8').format.fill='#FFF1CC';
 s.getRange('B6').dataValidation={rule:{type:'list',values:['Kwartaal','Halfjaar','Negen maanden','Jaar']},inCellDropDown:true};
 s.getRange('B7').dataValidation={rule:{type:'list',values:[...new Set(years)].sort((a,b)=>a-b).map(String)},inCellDropDown:true};
 s.getRange('B8').dataValidation={rule:{type:'list',values:['Q1','Q2','Q3','Q4']},inCellDropDown:true};
 s.getRange('E5:E8').values=[['FCF begin'],['FCF einde'],['Kwartaal begin'],['Einde kwartaal / schuldpeildatum']];
 s.getRange('E:E').format.columnWidth=34;s.getRange('F:F').format.columnWidth=18;
 s.getRange('F7').formulas=[['=DATE($B$7,(VALUE(RIGHT($B$8,1))-1)*3+1,1)']];
 s.getRange('F8').formulas=[['=DATE($B$7,VALUE(RIGHT($B$8,1))*3+1,0)']];
 s.getRange('F5').formulas=[['=IF($B$6="Kwartaal",F7,IF($B$6="Halfjaar",IF(OR($B$8="Q2",$B$8="Q4"),DATE($B$7,IF($B$8="Q2",1,7),1),""),IF($B$6="Negen maanden",IF($B$8="Q3",DATE($B$7,1,1),""),IF($B$6="Jaar",IF($B$8="Q4",DATE($B$7,1,1),""),""))))']];
 s.getRange('F6').formulas=[['=IF(F5="","",F8)']];
 s.getRange('F5:F8').setNumberFormat('dd-mm-yyyy');
 s.getRange('A10').values=[['Halfjaar: kies Q2 of Q4. Negen maanden: Q3. Jaar: Q4. Datums worden automatisch berekend.']];
 s.getRange('A11').formulas=[['=IF($F$5="","Geen FCF-periode voor deze combinatie. Pas kwartaal of periodetype aan.","")']];
 s.getRange('A11').format.font={name:'Arial',size:10,color:'#9C2424'};
 s.getRange('H5').values=[['Kalenderkwartalen; afwijkende fiscale datums blijven apart.']];
 const end=Math.max(2005,recordCount+5),range=c=>`'Historiek'!$${c}$6:$${c}$${end}`;
 for(let r=49;r<=58;r++)for(const [col,metric,extra]of[
  ['B','FCF',`,${range('D')},$F$5,${range('E')},$F$6,${range('F')},$B$6`],
  ['C','Schuld',`,${range('E')},$F$8`],
  ['D','Omzetgroei',`,${range('D')},$F$7,${range('E')},$F$8`]
 ]){
  const criteria=`${range('B')},$A${r},${range('C')},"${metric}"${extra}`;
  const body=`IF(COUNTIFS(${criteria},${range('G')},"<>")=0,NA(),SUMIFS(${range('S')},${criteria}))`;
  s.getRange(`${col}${r}`).formulas=[[col==='B'?`=IF($F$5="",NA(),${body})`:`=${body}`]];
 }
 return selection;
}
