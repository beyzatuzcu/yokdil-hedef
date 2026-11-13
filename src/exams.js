// Kaynak: ÖSYM 2027 Sınav Takvimi, 28 Ekim 2026.
// https://dokuman.osym.gov.tr/web/2026/10/osym-2027-yili-sinav-takvimi-7d09wi-28090734.pdf
// Saat bilgisi resmî tabloda verilmediği için geri sayım sınav GÜNÜNÜN başlangıcınadır.
export const officialCalendar = 'https://www.osym.gov.tr/osym-2027-yili-sinav-takvimi-aciklandi';
export const officialCalendarPdf = 'https://dokuman.osym.gov.tr/web/2026/10/osym-2027-yili-sinav-takvimi-7d09wi-28090734.pdf';
export const exams = [
  {kind:'YOKDIL',id:'2027-1',name:'2027-YÖKDİL/1',date:'2027-02-28',applicationStart:'2027-01-12',applicationEnd:'2027-01-20',late:'2027-01-28',result:'2027-03-26',type:'Basılı',fields:['Sağlık','Fen','Sosyal']},
  {kind:'YOKDIL',id:'2027-e-sosyal',name:'e-YÖKDİL 2027/1 · Sosyal',date:'2027-05-29',applicationStart:'2027-05-04',applicationEnd:'2027-05-12',late:null,result:'2027-05-29',type:'Elektronik',fields:['Sosyal']},
  {kind:'YOKDIL',id:'2027-e-saglik',name:'e-YÖKDİL 2027/2 · Sağlık',date:'2027-05-30',applicationStart:'2027-05-04',applicationEnd:'2027-05-12',late:null,result:'2027-05-30',type:'Elektronik',fields:['Sağlık']},
  {kind:'YOKDIL',id:'2027-e-fen',name:'e-YÖKDİL 2027/3 · Fen',date:'2027-06-05',applicationStart:'2027-05-04',applicationEnd:'2027-05-27',late:null,result:'2027-06-05',type:'Elektronik',fields:['Fen']},
  {kind:'YOKDIL',id:'2027-2',name:'2027-YÖKDİL/2',date:'2027-07-25',applicationStart:'2027-06-08',applicationEnd:'2027-06-16',late:'2027-06-23',result:'2027-08-13',type:'Basılı',fields:['Sağlık','Fen','Sosyal']}
  ,{kind:'YDS',id:'2026-yds-2',name:'2026-YDS/2',date:'2026-11-22',applicationStart:'2026-09-30',applicationEnd:'2026-10-08',late:'2026-10-14',result:'2026-12-10',type:'Basılı',fields:['Genel']}
  ,{kind:'YDS',id:'2026-eyds-12',name:'e-YDS 2026/12 · İngilizce',date:'2026-12-19',applicationStart:'2026-12-02',applicationEnd:'2026-12-10',late:null,result:'2026-12-19',type:'Elektronik',fields:['Genel']}
  ,{kind:'YDS',id:'2027-eyds-1',name:'e-YDS 2027/1 · İngilizce',date:'2027-01-16',applicationStart:'2027-01-04',applicationEnd:'2027-01-07',late:null,result:'2027-01-16',type:'Elektronik',fields:['Genel']}
  ,{kind:'YDS',id:'2027-eyds-2',name:'e-YDS 2027/2 · İngilizce',date:'2027-02-06',applicationStart:'2027-01-20',applicationEnd:'2027-01-28',late:null,result:'2027-02-06',type:'Elektronik',fields:['Genel']}
  ,{"kind":"YDS","id":"2027-eyds-4","name":"e-YDS 2027/4 · İngilizce","date":"2027-04-24","applicationStart":"2027-04-07","applicationEnd":"2027-04-14","late":null,"result":"2027-04-24","type":"Elektronik","fields":["Genel"]}
  ,{"kind":"YDS","id":"2027-eyds-6","name":"e-YDS 2027/6 · İngilizce","date":"2027-06-26","applicationStart":"2027-06-09","applicationEnd":"2027-06-17","late":null,"result":"2027-06-26","type":"Elektronik","fields":["Genel"]}
  ,{"kind":"YDS","id":"2027-eyds-9","name":"e-YDS 2027/9 · İngilizce","date":"2027-08-21","applicationStart":"2027-08-04","applicationEnd":"2027-08-12","late":null,"result":"2027-08-21","type":"Elektronik","fields":["Genel"]}
  ,{"kind":"YDS","id":"2027-eyds-10","name":"e-YDS 2027/10 · İngilizce","date":"2027-09-25","applicationStart":"2027-09-08","applicationEnd":"2027-09-16","late":null,"result":"2027-09-25","type":"Elektronik","fields":["Genel"]}
  ,{"kind":"YDS","id":"2027-eyds-11","name":"e-YDS 2027/11 · İngilizce","date":"2027-10-16","applicationStart":"2027-09-29","applicationEnd":"2027-10-07","late":null,"result":"2027-10-16","type":"Elektronik","fields":["Genel"]}
  ,{"kind":"YDS","id":"2027-eyds-12","name":"e-YDS 2027/12 · İngilizce","date":"2027-12-18","applicationStart":"2027-12-01","applicationEnd":"2027-12-09","late":null,"result":"2027-12-18","type":"Elektronik","fields":["Genel"]}
  ,{kind:'YDS',id:'2027-yds-1',name:'2027-YDS/1',date:'2027-03-28',applicationStart:'2027-02-03',applicationEnd:'2027-02-11',late:'2027-02-18',result:'2027-04-21',type:'Basılı',fields:['Genel']}
  ,{kind:'YDS',id:'2027-yds-2',name:'2027-YDS/2',date:'2027-11-21',applicationStart:'2027-10-05',applicationEnd:'2027-10-13',late:'2027-10-20',result:'2027-12-10',type:'Basılı',fields:['Genel']}
];
export const ydsSourceLinks = [
  {name:'2026-YDS/1 — Resmî soru kitapçığı (%10)',detail:'ÖSYM tarafından yayımlanan İngilizce soruların izin verilen bölümü',url:'https://www.osym.gov.tr/2026yds1-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi',year:'2026'},
  {name:'YDS — Resmî sınav duyuruları ve arşiv',detail:'YDS dönemleri ve yayımlanan soru kitapçığı duyuruları',url:'https://osym.gov.tr/SinavGrubu/Index/7',year:'Arşiv'},
  {name:'ÖSYM Aday İşlemleri',detail:'YDS ve e-YDS başvuru bilgileri',url:'https://ais.osym.gov.tr/',year:'ÖSYM'}
];
export const kindName=kind=>kind==='YDS'?'YDS':'YÖKDİL';
export const examsFor=kind=>exams.filter(e=>e.kind===kind).sort((a,b)=>a.date.localeCompare(b.date));
export const nextExamFor=(kind,from=todayTR())=>examsFor(kind).find(e=>e.applicationEnd>=from&&e.type==='Basılı')||examsFor(kind).find(e=>e.date>=from&&e.type==='Basılı')||examsFor(kind).find(e=>e.date>=from)||examsFor(kind).at(-1);
export const sourceLinks = [
  {name:'2026-YÖKDİL/2 — Resmî soru kitapçıkları (%10)',detail:'Sağlık, Fen ve Sosyal soru kitapçıkları',url:'https://osym.gov.tr/2026-yokdil2-sinavi-temel-soru-kitapciklarinin-yayimlanmasi-10',year:'2026'},
  {name:'2026-YÖKDİL/1 — Sorular ve cevap anahtarları',detail:'ÖSYM tarafından yayımlanan %10’luk içerik',url:'https://www.osym.gov.tr/2026yokdil1-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi',year:'2026'},
  {name:'YÖKDİL — Resmî sınav arşivi',detail:'Dönemlere göre duyurular, soru ve cevaplar',url:'https://osym.gov.tr/SinavGrubu/Index/12',year:'Arşiv'},
  {name:'ÖSYM Aday İşlemleri',detail:'Başvurular ve aday işlemleri',url:'https://ais.osym.gov.tr/',year:'ÖSYM'},
];
export function turkishDay(date){return new Intl.DateTimeFormat('tr-TR',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Istanbul'}).format(new Date(date+'T12:00:00+03:00'));}
export function timestampInTR(date){return new Date(`${date}T00:00:00+03:00`).getTime();}
export function todayTR(){return new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Istanbul',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
export function calendarDaysLeft(date){const a=Date.parse(todayTR()+'T00:00:00Z'), b=Date.parse(date+'T00:00:00Z');return Math.round((b-a)/86400000);}
export function countdownParts(date,now){let left=Math.max(0,timestampInTR(date)-now);return {days:Math.floor(left/86400000),hours:Math.floor(left/3600000)%24,minutes:Math.floor(left/60000)%60,seconds:Math.floor(left/1000)%60};}
export function applicationStatus(exam){const today=todayTR();if(today<exam.applicationStart)return 'Başvuru bekleniyor';if(today<=exam.applicationEnd)return 'Başvurular açık';if(exam.late===today)return 'Bugün geç başvuru';if(today<exam.date)return 'Başvuru süresi doldu';if(today===exam.date)return 'Bugün sınav';return 'Sınav gerçekleşti';}
