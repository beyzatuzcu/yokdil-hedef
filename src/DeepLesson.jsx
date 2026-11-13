import React,{useState} from 'react';
import {Check,CheckCheck,ArrowRight,AlertCircle,BookOpenCheck} from 'lucide-react';
import {deepLessons} from './lessonsCore.js';
import {additionalLessons} from './lessonsMore.js';
import {ydsLessons} from './ydsLessons.js';
const lessons={...deepLessons,...additionalLessons,...ydsLessons};
const alphabet=['A','B','C','D','E'];

export default function DeepLesson({topic,complete,onComplete,onQuiz,examKind='YOKDIL'}){
  const lesson=lessons[topic.id];
  const examLabel=examKind==='YDS'?'YDS':'YÖKDİL';
  const examText=value=>typeof value==='string'?value.replace(/YÖKDİL|YOKDIL/g,examLabel):value;
  const [answer,setAnswer]=useState(null);
  const [read,setRead]=useState([]);
  if(!lesson)return <p>Bu konu için anlatım bulunamadı.</p>;
  const doneCount=read.length;
  const mark=i=>setRead(prev=>prev.includes(i)?prev.filter(x=>x!==i):[...prev,i]);
  return <section className="panel topic-detail deep-lesson">
    <header className="lesson-header"><span>SINAV ODAKLI DETAYLI DERS</span><h2>{topic.title}</h2><p>Bu dersin hedefi: {examText(lesson.goal)}</p></header>
    <div className="lesson-intro">{lesson.overview.map((line,i)=><p key={i}>{examText(line)}</p>)}</div>
    <div className="lesson-progress"><b>{doneCount} / {lesson.chapters.length} bölüm okundu</b><div><span style={{width:(doneCount/lesson.chapters.length*100)+'%'}}/></div></div>
    <div className="lesson-chapters">{lesson.chapters.map((ch,i)=><article className="lesson-chapter" key={i}>
      <div className="lesson-chapter-title"><span>{String(i+1).padStart(2,'0')}</span><h3>{ch.title}</h3></div>
      <div className="lesson-idea"><b>Mantığı:</b> {examText(ch.idea)}</div>
      <p>{examText(ch.explanation)}</p>
      <div className="lesson-example"><small>ÖRNEK CÜMLE</small><strong>{ch.example}</strong><em>{ch.translation}</em></div>
      <div className="lesson-reason"><b>Bu örnek neden böyle?</b><p>{examText(ch.reason)}</p></div>
      <div className="lesson-trap"><AlertCircle size={17}/><div><b>{examKind==='YDS'?'YDS':'YÖKDİL'} soru tuzağı</b><p>{examText(ch.trap)}</p></div></div>
      <button className={'lesson-mark '+(read.includes(i)?'marked':'')} onClick={()=>mark(i)}>{read.includes(i)?<CheckCheck size={15}/>:<Check size={15}/>} {read.includes(i)?'Bölümü okudum ✓':'Bu bölümü okudum'}</button>
    </article>)}</div>
    <div className="lesson-practice"><span className="lesson-label">ADIM ADIM SORU ÇÖZÜMÜ</span><h3>Şıklar neden doğru ya da yanlış?</h3><p>Önce soruyu kendin çözmeye çalış, ardından çözüm aşamalarını aç.</p>{lesson.worked.map((w,i)=><details className="lesson-worked" key={i}><summary><b>{i+1}. {w.type}</b><span>{w.question}</span><small>Çözüm adımlarını göster</small></summary><div className="lesson-worked-body"><div className="lesson-choices">{w.options.map((o,j)=><p className={w.answer===j?'right':''} key={j}>{alphabet[j]}) {o}</p>)}</div><div className="lesson-solution"><b>Doğru cevap: {alphabet[w.answer]}</b><ol>{w.steps.map((st,j)=><li key={j}>{st}</li>)}</ol><p><b>Akılda kalsın:</b> {examText(w.takeaway)}</p></div></div></details>)}</div>
    <div className="lesson-self-check"><span className="lesson-label">KENDİNİ DENE</span><h3>Bu konuyu anladın mı?</h3><p>{lesson.check.question}</p><div className="lesson-options">{lesson.check.options.map((op,i)=><button key={i} className={(answer===i?'chosen ':'')+(answer!==null&&i===lesson.check.answer?'correct ':'')+(answer===i&&answer!==lesson.check.answer?'incorrect':'')} onClick={()=>setAnswer(i)}><b>{alphabet[i]}</b>{op}</button>)}</div>{answer!==null&&<div className="lesson-feedback"><b>{answer===lesson.check.answer?'✓ Doğru!':'Doğru cevap: '+alphabet[lesson.check.answer]}</b><p>{examText(lesson.check.explanation)}</p></div>}</div>
    <div className="lesson-recap"><h3><BookOpenCheck size={20}/> Sınav öncesi tekrar kartı</h3><ul>{lesson.revision.map((line,i)=><li key={i}>{examText(line)}</li>)}</ul></div>
    <div className="topic-actions"><button className="button btn-outline" onClick={onComplete}>{complete?<CheckCheck size={17}/>:<Check size={17}/>} {complete?'Konuyu çalıştım ✓ — geri al':'Konuyu çalıştım'}</button><button className="button btn-primary" onClick={onQuiz}>Bu konudan soru çöz <ArrowRight size={16}/></button></div>
    <p className="tiny-note">Sorular özgündür, ÖSYM çıkmış soru kitabından alınmamıştır. “Konuyu çalıştım” kaydı korunur; bölüm içi işaretler ders ekranı açıkken geçerlidir.</p>
  </section>;
}