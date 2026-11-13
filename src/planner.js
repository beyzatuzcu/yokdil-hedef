import {topics,patterns,cards} from './content.js';
import {moreCards} from './studyBank.js';
import {extendedCards} from './extendedVocabulary.js';
import {clamp,neededCorrect} from './helpers.js';
import {todayTR} from './exams.js';
import {examTopics} from './ydsTopics.js';

const DAY=86400000;
// Tekrarlı sözlük girdilerini kelime+örnek bakımından ayır; mevcut kart ID'lerini koru.
export const allCards=[...cards,...moreCards,...extendedCards];
export const flatPatterns=patterns.flatMap((g,group)=>g.items.map(([text,meaning],i)=>({id:`p${group}-${i}`,text,meaning,group:g.group})));
const dayValue=s=>Date.parse(`${s}T00:00:00Z`);
export const addDays=(s,n)=>new Date(dayValue(s)+n*DAY).toISOString().slice(0,10);
export const diffDays=(a,b)=>Math.round((dayValue(b)-dayValue(a))/DAY);
/**
 * Sınava kalan süre ve hedef puana bağlı yoğunluk.
 * “Yeni” kartlar ilk gösterimlerinde yeni sayılır; daha sonra tekrar havuzuna geçer.
 * Sınırlı kart havuzunda aynı kartı yapay olarak yeni göstermeyiz.
 */
export function studyLoad({daysLeft,target=70,examKind='YOKDIL'}){
  const rush=daysLeft<=21?3:daysLeft<=45?2:daysLeft<=75?1:0;
  const aspiration=target>=85?2:target>=70?1:0;
  const extra=examKind==='YDS'?1:0;
  const newWords=Math.min(28,10+rush*3+aspiration*2+extra);
  const reviewWords=Math.min(55,14+rush*8+aspiration*5+extra*3);
  const questions=Math.min(75,22+rush*9+aspiration*7+extra*3);
  const patterns=Math.min(10,3+rush+aspiration+extra);
  const mockEvery=daysLeft<=30?5:daysLeft<=75?7:10;
  return {rush,newWords,reviewWords,questions,patterns,mockEvery,
    topicsPerDay:daysLeft<=90?2:1};
}
function cardRotation(cards,day,totalPerDay){
  if(!cards.length)return [];
  const start=((day*totalPerDay)%cards.length);
  return Array.from({length:Math.min(totalPerDay,cards.length)},(_,j)=>cards[(start+j)%cards.length]);
}
function selectDailyCards(cards,i,newDaily,reviewDaily,length){
  // Yeni kartlar benzersiz, tüm plan boyunca bir kere yeni olarak sunulur.
  const newStart=i*newDaily;
  const fresh=cards.slice(newStart,newStart+newDaily);
  const previouslySeen=cards.slice(0,Math.min(cards.length,newStart));
  const remainingReview=reviewDaily;
  let revisions=[];
  if(previouslySeen.length){
    const seed=(i*17)%previouslySeen.length;
    revisions=Array.from({length:Math.min(remainingReview,previouslySeen.length)},(_,j)=>previouslySeen[(seed+j*7)%previouslySeen.length]);
    // Küçük havuzda 7 adımının ortak böleni tekrara yol açabilir.
    revisions=[...new Map(revisions.map(c=>[c.id,c])).values()];
    if(revisions.length<Math.min(remainingReview,previouslySeen.length)){
      for(const c of previouslySeen){
        if(revisions.length>=Math.min(remainingReview,previouslySeen.length))break;
        if(!revisions.some(x=>x.id===c.id))revisions.push(c);
      }
    }
  }
  return {fresh,revisions};
}
export function generatePlan({planStart,examDate,target,field,examKind='YOKDIL'}){
  const start=planStart||todayTR();
  if(start>=examDate)return [];
  const length=clamp(diffDays(start,examDate),0,600);
  const required=neededCorrect(target);
  const load=studyLoad({daysLeft:length,target,examKind});
  const syllabus=examTopics(examKind);
  const yds=examKind==='YDS';
  const selected=allCards.filter(c=>c.field==='Genel'||c.field===field);
  // Dizinin ilk günlerde sürekli aynı sıralamayı vermemesi için deterministik yer değiştirme.
  const cardPool=[...selected.filter((_,j)=>j%2===0),...selected.filter((_,j)=>j%2!==0)];
  return Array.from({length},(_,i)=>{
    const date=addDays(start,i), day=i+1, phase=i/Math.max(1,length);
    const mode=phase<.2?'Temel ve hız kazanma':phase<.72?'Yoğun soru + konu':'Deneme ve eksik kapatma';
    const recovery=i%7===6;
    const fullMock=i>=Math.min(6,Math.floor(length*.12))&&((day%load.mockEvery===0)||(phase>.78&&day%5===0));
    const primary=syllabus[(i+Math.floor(i/6))%syllabus.length];
    const secondary=syllabus[(i+Math.floor(i/6)+Math.ceil(syllabus.length/2))%syllabus.length];
    const allocation=selectDailyCards(cardPool,i,load.newWords,load.reviewWords,length);
    const newCards=allocation.fresh;
    const reviewCards=allocation.revisions;
    const pat=cardRotation(flatPatterns,i,load.patterns);
    const qCount=Math.min(80,load.questions+(phase>.72?7:phase>.2?3:0));
    const questions=fullMock?Math.max(12,Math.round(qCount*.4)):qCount;
    const tasks=[];
    tasks.push({
      id:'topic',type:'topic',label:recovery?`Haftalık analiz: ${primary.title}`:`${primary.title} • ayrıntılı konu`,
      detail:recovery?'Bu konudaki kritik kuralları ve yanlışları yeniden değerlendir.':`${primary.summary} • konu mantığı + çözümlü örnek + uygulama`,
      minutes:recovery?30:primary.minutes+15,topicId:primary.id
    });
    if(!fullMock && load.topicsPerDay>=2){
      tasks.push({id:'topic2',type:'topic',label:`${secondary.title} • ikinci konu ve uygulama`,
        detail:`${secondary.summary} • çözümlü örnekleri incele ve birkaç soru çöz`,
        minutes:secondary.minutes+10,topicId:secondary.id});
    }
    tasks.push({id:'words',type:'words',label:newCards.length?`${newCards.length} yeni akademik kelime`:'Yeni kelime havuzu bitti • zorlandıklarını pekiştir',
      detail:newCards.length?newCards.slice(0,5).map(c=>c.word).join(' · '):'Mevcut havuzdaki kelimelerin eşdizim ve örneklerini yeniden öğren.',
      minutes:Math.max(12,Math.round(newCards.length*1.6)),items:newCards.map(c=>c.id)});
    const effectiveReview=reviewCards.length?reviewCards:(newCards.length?newCards:cardRotation(cardPool,i,load.reviewWords));
    tasks.push({id:'vocabReview',type:'vocabReview',label:`${effectiveReview.length} kelimeyi aktif tekrar et`,
      detail:'Türkçe anlamı görmeden hatırla; edat, kalıp ve örnek cümleyi kontrol et.',
      minutes:Math.max(12,Math.round(effectiveReview.length*.65)),items:effectiveReview.map(c=>c.id)});
    tasks.push({id:'patterns',type:'patterns',label:`${pat.length} kritik ${yds?'YDS':'YÖKDİL'} bağlaç / kalıp`,
      detail:pat.map(x=>x.text).join(' · '),minutes:Math.max(12,pat.length*3),items:pat.map(x=>x.id)});
    tasks.push({id:'questions',type:'questions',label:`${questions} hedefli soru çöz`,
      detail:`${yds?'YDS genel İngilizce':'YÖKDİL '+field} • hedef ${Math.round(questions*required/80)} doğru • konu/soru tipi analizi`,
      minutes:Math.round(questions*2.2),count:questions,category:primary.id});
    tasks.push({id:'review',type:'review',label:recovery?'Haftalık yanlış + eksik konu analizi':'Yanlış defteri ve tekrar',
      detail:recovery?'Haftanın yanlışlarını türlerine ayır; zorlandığın iki konuyu listele.':'Yanlışlarını kelime, bağlaç, dilbilgisi ve paragraf olarak sınıflandır.',
      minutes:recovery?35:20});
    if(fullMock)tasks.push({id:'mock',type:'mock',label:'80 soruluk süreli tam deneme',
      detail:`180 dakika • ${yds?'YDS':'YÖKDİL'} prova ve değerlendirme. Deneme gününde ikinci konu çıkarıldı, soru yükü azaltıldı.`,minutes:180});
    return {day,date,phase:mode,examKind,week:Math.ceil(day/7),topic:primary,secondaryTopic:fullMock?null:secondary,required,
      wordIds:newCards.map(c=>c.id),reviewWordIds:effectiveReview.map(c=>c.id),patternIds:pat.map(x=>x.id),
      tasks,minutes:tasks.reduce((sum,t)=>sum+t.minutes,0),mock:fullMock,load};
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
