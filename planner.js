import {topics,patterns,cards} from './content.js';
import {moreCards} from './studyBank.js';
import {clamp,neededCorrect} from './helpers.js';
import {todayTR} from './exams.js';

const DAY=86400000;
export const allCards=[...cards,...moreCards];
export const flatPatterns=patterns.flatMap((g,group)=>g.items.map(([text,meaning],i)=>({id:`p${group}-${i}`,text,meaning,group:g.group})));
const dayValue=s=>Date.parse(`${s}T00:00:00Z`);
export const addDays=(s,n)=>new Date(dayValue(s)+n*DAY).toISOString().slice(0,10);
export const diffDays=(a,b)=>Math.round((dayValue(b)-dayValue(a))/DAY);
const topicFor=(n)=>topics[(n+Math.floor(n/7))%topics.length];

export function generatePlan({planStart,examDate,target,field}){
  const start=planStart || todayTR();
  if (start>=examDate)return [];
  const length=clamp(diffDays(start,examDate),0,600);
  const required=neededCorrect(target);
  const intensity=target>=85?3:target>=70?2:target>=55?1:0;
  const vocabCount=[7,9,11,14][intensity];
  const questionCount=[12,16,22,30][intensity];
  return Array.from({length},(_,i)=>{
    const date=addDays(start,i), day=i+1, phase=(i/Math.max(1,length));
    const topic=topicFor(i);
    const mode=phase<.23?'Temel kurma':phase<.7?'Soru pratiği':'Deneme & hız';
    const mock=phase>.15 && (i%14===13 || (phase>.78 && i%7===6));
    const recovery=i%7===6;
    // Daily cards are selected from the chosen field + general bank, never irrelevant fields.
    const chosen=allCards.filter(c=>c.field==='Genel'||c.field===field);
    const vocab=Array.from({length:vocabCount},(_,j)=>chosen[(i*vocabCount+j)%chosen.length]);
    const pat=Array.from({length:2+Math.min(1,intensity)},(_,j)=>flatPatterns[(i*3+j)%flatPatterns.length]);
    const qCount=Math.min(45,questionCount+(phase>.7?8:phase>.23?4:0));
    const tasks=[
      {id:'topic',type:'topic',label:recovery?'Haftalık konu özeti & eksik kapatma':`${topic.title} • konu tekrarı`,detail:recovery?'Haftanın zorlandığın iki başlığını not et.':`${topic.summary}`,minutes:recovery?20:topic.minutes,topicId:topic.id},
      {id:'words',type:'words',label:`${vocabCount} akademik kelime ${phase>.3?'(+ eski kart tekrarı)':''}`,detail:vocab.slice(0,4).map(v=>v.word).join(' · ')+ ' ...',minutes:15+intensity*3,items:vocab.map(x=>x.id)},
      {id:'patterns',type:'patterns',label:`${pat.length} kritik bağlaç / kalıp`,detail:pat.map(x=>x.text).join(' · '),minutes:12,items:pat.map(x=>x.id)},
      {id:'questions',type:'questions',label:`${qCount} hedefli soru çöz`,detail:`Alan: ${field} • Doğru hedefi: yaklaşık ${Math.round(qCount*required/80)} / ${qCount}`,minutes:Math.round(qCount*2.3),count:qCount,category:topic.id},
      {id:'review',type:'review',label:recovery?'Haftalık yanlış analizi':'Yanlış defteri + aralıklı tekrar',detail:recovery?'Bu hafta işaretlediğin yanlışların tamamını incele.':'Yanlış soruların nedenlerini ve aldatıcı seçenekleri gözden geçir.',minutes:recovery?25:12},
    ];
    if(mock) tasks.push({id:'mock',type:'mock',label:'80 soruluk süreli tam deneme',detail:'180 dakika • deneme sonrası yanlış sınıflandırma.',minutes:180});
    return {day,date,phase:mode,week:Math.ceil(day/7),topic,required,wordIds:vocab.map(x=>x.id),patternIds:pat.map(x=>x.id),tasks,minutes:tasks.reduce((sum,t)=>sum+t.minutes,0),mock};
  });
}
export function dailyStats(plan,daily,reference=todayTR()){
  const completed=(d)=>d.tasks.filter(t=>daily?.[d.date]?.[t.id]).length;
  const completedTasks=plan.reduce((a,d)=>a+completed(d),0);
  const totalTasks=plan.reduce((a,d)=>a+d.tasks.length,0);
  const due=plan.filter(d=>d.date<=reference);
  const dueTasks=due.reduce((a,d)=>a+d.tasks.length,0);
  const doneDue=due.reduce((a,d)=>a+completed(d),0);
  const perfect=plan.filter(d=>completed(d)===d.tasks.length).length;
  const missed=due.filter(d=>completed(d)<d.tasks.length);
  return {completedTasks,totalTasks,dueTasks,doneDue,perfect,missed,overall:totalTasks?Math.round(completedTasks/totalTasks*100):0,adherence:dueTasks?Math.round(doneDue/dueTasks*100):0,planCompleted:totalTasks>0&&completedTasks===totalTasks};
}
export function estimateScore(attempts=[]){
  // Exam-style questions are not normed; provide an indicative practice score, not a prediction of ÖSYM outcome.
  if(!attempts.length)return {ready:false,unique:0,total:0};
  const latest=new Map();
  for(const att of attempts){
    for(const answer of att.answers||[]){if(answer.chosen!==null&&answer.chosen!==undefined)latest.set(answer.id,{correct:answer.correct,kind:att.kind});}
  }
  const observations=[...latest.values()];
  const n=observations.length;
  if(n<20)return {ready:false,unique:n,total:n,missing:20-n};
  const p=observations.reduce((a,x)=>a+(x.correct?1:0),0)/n;
  // Simple Wilson score interval; only illustrative accuracy uncertainty, excludes difficulty and test conditions.
  const z=1.64,denom=1+z*z/n,center=(p+z*z/(2*n))/denom;
  const half=z/denom*Math.sqrt(p*(1-p)/n+z*z/(4*n*n));
  return {ready:true,unique:n,total:n,point:Math.round(p*100*10)/10,low:Math.round(clamp(center-half,0,1)*100),high:Math.round(clamp(center+half,0,1)*100),accuracy:Math.round(p*100),dataLabel:'Son çözülen benzersiz sorular'};
}
export function planStatus(plan,stats,target,estimate){
  if(!plan.length)return {title:'Plan sona erdi',detail:'Yeni sınav seçerek yeniden plan oluşturabilirsin.',tone:'muted'};
  if(todayTR()>=addDays(plan.at(-1).date,1)&&!stats.planCompleted)return {title:'Çalışma planı eksik kaldı',detail:`${stats.completedTasks}/${stats.totalTasks} görev tamamlandı (%${stats.overall}). Son puan göstergenle birlikte değerlendirmelisin.`,tone:'warn'};
  if(stats.planCompleted)return {title:'Planın tamamlandı!',detail:estimate.ready?(estimate.point>=target?'Çalışma hedefi tamam, deneme puanı hedef seviyede.':'Çalışma tamam; soru doğruluğunu artırman gerekiyor.'):'Plan tamam; tahmin için en az 20 farklı soru çöz.',tone:'good'};
  if(!estimate.ready)return {title:'Puan verisi birikiyor',detail:`Tahmin için ${estimate.missing||20} farklı soru daha çöz. Günlük görevleri işaretlemeye devam et.`,tone:'neutral'};
  if(estimate.point>=target&&stats.adherence>=75)return {title:'Hedefe doğru ilerliyorsun',detail:'Alıştırma doğruluğun hedefe yakın veya üstünde; tempoyu sürdür.',tone:'good'};
  if(estimate.point<target)return {title:'Doğruluk hedefin altında',detail:`Mevcut alıştırma göstergesi ${estimate.point}; ${target} için yanlışlarını azaltmaya odaklan.`,tone:'warn'};
  return {title:'Günlük çalışma düzenini artır',detail:'Soru doğruluğun iyi; planın geciken görevlerini tamamla.',tone:'warn'};
}
