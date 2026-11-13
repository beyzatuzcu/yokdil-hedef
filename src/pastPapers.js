/* Resmî ÖSYM yayımlama sayfaları ve yalnızca bağlantılar: sınav sorularının kendisi saklanmaz. */
export const pastPapers=[
  {
    "id": "yds-2026-1",
    "kind": "YDS",
    "year": 2026,
    "session": "YDS/1",
    "title": "2026 YDS/1 · İngilizce",
    "url": "https://www.osym.gov.tr/2026yds1-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi",
    "fields": [
      "Genel"
    ],
    "verified": true
  },
  {
    "id": "yds-2025-2",
    "kind": "YDS",
    "year": 2025,
    "session": "YDS/2",
    "title": "2025 YDS/2 · İngilizce",
    "url": "https://www.osym.gov.tr/2025yds2-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi",
    "fields": [
      "Genel"
    ],
    "verified": true
  },
  {
    "id": "yds-2025-1",
    "kind": "YDS",
    "year": 2025,
    "session": "YDS/1",
    "title": "2025 YDS/1 · İngilizce",
    "url": "https://osym.gov.tr/SinavGrubu/Index/7",
    "fields": [
      "Genel"
    ],
    "verified": false
  },
  {
    "id": "yds-2025-ingilizce",
    "kind": "YDS",
    "year": 2025,
    "session": "YDS/İngilizce",
    "title": "2025 YDS/İngilizce",
    "url": "https://osym.gov.tr/SinavGrubu/Index/7",
    "fields": [
      "Genel"
    ],
    "verified": false
  },
  {
    "id": "yds-2024-2",
    "kind": "YDS",
    "year": 2024,
    "session": "YDS/2",
    "title": "2024 YDS/2 · İngilizce",
    "url": "https://osym.gov.tr/SinavGrubu/Index/7",
    "fields": [
      "Genel"
    ],
    "verified": false
  },
  {
    "id": "yds-2024-1",
    "kind": "YDS",
    "year": 2024,
    "session": "YDS/1",
    "title": "2024 YDS/1 · İngilizce",
    "url": "https://osym.gov.tr/SinavGrubu/Index/7",
    "fields": [
      "Genel"
    ],
    "verified": false
  },
  {
    "id": "yokdil-2026-2",
    "kind": "YOKDIL",
    "year": 2026,
    "session": "YÖKDİL/2",
    "title": "2026 YÖKDİL/2",
    "url": "https://osym.gov.tr/2026-yokdil2-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi",
    "fields": [
      "Sağlık",
      "Fen",
      "Sosyal"
    ],
    "verified": true
  },
  {
    "id": "yokdil-2026-1",
    "kind": "YOKDIL",
    "year": 2026,
    "session": "YÖKDİL/1",
    "title": "2026 YÖKDİL/1",
    "url": "https://osym.gov.tr/SinavGrubu/Index/12",
    "fields": [
      "Sağlık",
      "Fen",
      "Sosyal"
    ],
    "verified": false
  },
  {
    "id": "yokdil-2025-2",
    "kind": "YOKDIL",
    "year": 2025,
    "session": "YÖKDİL/2",
    "title": "2025 YÖKDİL/2",
    "url": "https://osym.gov.tr/SinavGrubu/Index/12",
    "fields": [
      "Sağlık",
      "Fen",
      "Sosyal"
    ],
    "verified": false
  },
  {
    "id": "yokdil-2025-1",
    "kind": "YOKDIL",
    "year": 2025,
    "session": "YÖKDİL/1",
    "title": "2025 YÖKDİL/1",
    "url": "https://www.osym.gov.tr/2025yokdil1-sinavi-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi",
    "fields": [
      "Sağlık",
      "Fen",
      "Sosyal"
    ],
    "verified": true
  },
  {
    "id": "yokdil-2024-2",
    "kind": "YOKDIL",
    "year": 2024,
    "session": "YÖKDİL/2",
    "title": "2024 YÖKDİL/2",
    "url": "https://osym.gov.tr/SinavGrubu/Index/12",
    "fields": [
      "Sağlık",
      "Fen",
      "Sosyal"
    ],
    "verified": false
  },
  {
    "id": "yokdil-2024-1",
    "kind": "YOKDIL",
    "year": 2024,
    "session": "YÖKDİL/1",
    "title": "2024 YÖKDİL/1",
    "url": "https://osym.gov.tr/SinavGrubu/Index/12",
    "fields": [
      "Sağlık",
      "Fen",
      "Sosyal"
    ],
    "verified": false
  }
];
export const getPastPapers=(kind,year='all')=>pastPapers.filter(p=>p.kind===kind&&(year==='all'||p.year===Number(year)));
export const ANSWERS=['A','B','C','D','E'];
export function parseQuestionNumbers(raw){
 const input=String(raw||'').trim();
 if(!input)throw Error('Soru numaralarını yaz: örnek 1-8 veya 1,3,12,45.');
 const seen=new Set();
 for(const token of input.split(/[\s,;]+/).filter(Boolean)){
   const range=token.match(/^(\d{1,2})-(\d{1,2})$/);
   if(range){
     const a=Number(range[1]),b=Number(range[2]);
     if(a<1||b>80||a>b)throw Error('Soru aralığı 1–80 içinde ve artan sırada olmalı.');
     for(let i=a;i<=b;i++)seen.add(i);
   }else if(/^\d{1,2}$/.test(token)){
     const n=Number(token);
     if(n<1||n>80)throw Error('Soru numarası 1–80 arasında olmalı.');
     seen.add(n);
   }else throw Error('Soru numarası biçimi geçersiz. Örnek: 1-8 veya 1,3,12,45.');
 }
 return [...seen].sort((a,b)=>a-b);
}
export function parseAnswerKey(raw){
 const text=String(raw||'').trim().toUpperCase().replace(/İ/g,'I');
 if(!text)return {};
 const key={};
 // "1:A, 2:C, 63:E" ya da "1-A 2-C" eşlemeleri.
 const tokens=text.split(/[\s,;]+/).filter(Boolean);
 const numbered=tokens.every(t=>/^\d{1,2}[:=\-][A-E]$/.test(t));
 if(numbered){
   for(const item of tokens){
     const [,n,value]=item.match(/^(\d{1,2})[:=\-]([A-E])$/);
     if(Number(n)<1||Number(n)>80)throw Error('Anahtar soru numaraları 1–80 arasında olmalı.');
     key[Number(n)]=value;
   }
   return key;
 }
 // "A B C D ..." veya "ABCDE..." biçimi sırayla 1. sorudan başlatılır.
 const flat=text.replace(/[\s,;]+/g,'');
 if(!/^[A-E]+$/.test(flat))throw Error('Cevap anahtarı: 1:A 2:C biçiminde veya ABCDE... yazılmalı.');
 if(flat.length>80)throw Error('Cevap anahtarı 80 sorudan uzun olamaz.');
 for(let i=0;i<flat.length;i++)key[i+1]=flat[i];
 return key;
}
export function gradePastPaper(questionNumbers,answers={},key={}){
 const numbers=[...new Set(questionNumbers)].filter(n=>Number.isInteger(n)&&n>=1&&n<=80);
 const keyed=numbers.filter(n=>ANSWERS.includes(key[n]));
 const correct=keyed.filter(n=>answers[n]===key[n]).length;
 const incorrect=keyed.filter(n=>ANSWERS.includes(answers[n])&&answers[n]!==key[n]).length;
 const blank=keyed.length-correct-incorrect;
 const answered=numbers.filter(n=>ANSWERS.includes(answers[n])).length;
 const full=numbers.length===80&&keyed.length===80;
 return {total:numbers.length,answered,keyed:keyed.length,correct,incorrect,blank,unkeyed:numbers.length-keyed.length,
   samplePercent:keyed.length?Math.round(correct/keyed.length*1000)/10:null,
   fullScore:full?Math.round(correct*1.25*100)/100:null};
}
