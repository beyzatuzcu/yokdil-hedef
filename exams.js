// Kaynak: ÖSYM 2027 Sınav Takvimi, 28 Ekim 2026.
// https://dokuman.osym.gov.tr/web/2026/10/osym-2027-yili-sinav-takvimi-7d09wi-28090734.pdf
// Saat bilgisi resmî tabloda verilmediği için geri sayım sınav GÜNÜNÜN başlangıcınadır.
export const officialCalendar = 'https://www.osym.gov.tr/osym-2027-yili-sinav-takvimi-aciklandi';
export const officialCalendarPdf = 'https://dokuman.osym.gov.tr/web/2026/10/osym-2027-yili-sinav-takvimi-7d09wi-28090734.pdf';
export const exams = [
  {id:'2027-1',name:'2027-YÖKDİL/1',date:'2027-02-28',applicationStart:'2027-01-12',applicationEnd:'2027-01-20',late:'2027-01-28',result:'2027-03-26',type:'Basılı',fields:['Sağlık','Fen','Sosyal']},
  {id:'2027-e-sosyal',name:'e-YÖKDİL 2027/1 · Sosyal',date:'2027-05-29',applicationStart:'2027-05-04',applicationEnd:'2027-05-12',late:null,result:'2027-05-29',type:'Elektronik',fields:['Sosyal']},
  {id:'2027-e-saglik',name:'e-YÖKDİL 2027/2 · Sağlık',date:'2027-05-30',applicationStart:'2027-05-04',applicationEnd:'2027-05-12',late:null,result:'2027-05-30',type:'Elektronik',fields:['Sağlık']},
  {id:'2027-e-fen',name:'e-YÖKDİL 2027/3 · Fen',date:'2027-06-05',applicationStart:'2027-05-04',applicationEnd:'2027-05-27',late:null,result:'2027-06-05',type:'Elektronik',fields:['Fen']},
  {id:'2027-2',name:'2027-YÖKDİL/2',date:'2027-07-25',applicationStart:'2027-06-08',applicationEnd:'2027-06-16',late:'2027-06-23',result:'2027-08-13',type:'Basılı',fields:['Sağlık','Fen','Sosyal']}
];
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
