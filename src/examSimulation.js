import {shuffle} from './helpers.js';

// 2026-YÖKDİL/2 English sample booklets had these approximate section sizes.
// We do not claim that ÖSYM promises exactly the same composition in future tests.
export const sectionTargets=[
  ['Kelime',8],['Dilbilgisi',6],['Bağlaç',6],
  ['Cloze Test',10],['Cümle Tamamlama',11],['Çeviri',12],
  ['Paragraf Tamamlama',6],['Anlam Bütünlüğü',6],['Paragraf',15]
];
export const ydsSectionTargets=[
 ['Kelime',6],['Dilbilgisi',6],['Bağlaç',5],['Cloze Test',10],['Diyalog',5],['Yakın Anlam',5],['Cümle Tamamlama',10],['Çeviri',6],['Paragraf Tamamlama',5],['Anlam Bütünlüğü',5],['Paragraf',17]
];
// Yaklaşık alıştırma ağırlıklarıdır; resmî ÖSYM soru dağılımı taahhüdü değildir.
export function balancedMock(pool,examKind='YOKDIL'){
  const targets=examKind==='YDS'?ydsSectionTargets:sectionTargets;
  const picked=[],used=new Set();
  for(const [category,n] of targets){
    for(const q of shuffle(pool.filter(x=>x.category===category)).slice(0,n)){
      if(!used.has(q.id)){picked.push(q);used.add(q.id);}
    }
  }
  for(const q of shuffle(pool)){
    if(picked.length>=80)break;
    if(!used.has(q.id)){picked.push(q);used.add(q.id);}
  }
  return picked.slice(0,80);
}
