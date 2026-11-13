import React,{useState} from 'react';
import {GraduationCap,ArrowRight,ArrowLeft,CalendarDays,Target,CheckCircle2} from 'lucide-react';
import {examsFor,nextExamFor,turkishDay,todayTR,kindName} from './exams.js';
export default function SetupWizard({data,onKind,onExam,onTarget,onField,onFinish}){
 const [step,setStep]=useState(()=>data.examKind?'details':'kind');
 const chosen=data.examKind||'YOKDIL';
 const options=examsFor(chosen).filter(e=>e.date>=todayTR());
 const exam=options.find(x=>x.id===data.selectedExam)||options[0]||nextExamFor(chosen);
 const remaining=exam?Math.max(0,Math.round((Date.parse(exam.date+'T00:00:00Z')-Date.parse(todayTR()+'T00:00:00Z'))/86400000)):0;
 return <div className="welcome-backdrop"><div className="welcome-modal exam-setup-modal">
   <div className="welcome-logo"><GraduationCap size={28}/></div>
   {step==='kind'?<>
     <p className="eyebrow">SINAVA ÖZEL HAZIRLIK</p>
     <h2>Hangi sınava hazırlanıyorsun?</h2>
     <p>Önce sınavını seç. Sonraki adımda gerçek sınav tarihini ve hedef puanını belirleyip sana özel günlük plan oluşturalım.</p>
     <div className="exam-kind-picker">
       <button onClick={()=>{onKind('YDS');setStep('details');}}><strong>YDS</strong><span>Genel akademik İngilizce sınavı</span><small>Diyalog • yakın anlam • çeviri • paragraf • dilbilgisi</small><ArrowRight size={20}/></button>
       <button onClick={()=>{onKind('YOKDIL');setStep('details');}}><strong>YÖKDİL</strong><span>Sağlık, Fen veya Sosyal Bilimler</span><small>Alan odaklı kelime • cloze • çeviri • paragraf</small><ArrowRight size={20}/></button>
     </div>
   </>:<>
     <button className="exam-back-link" onClick={()=>setStep('kind')}><ArrowLeft size={16}/> Sınav seçimine dön</button>
     <p className="eyebrow">{kindName(chosen)} SINAV PROGRAMIN</p>
     <h2>Hedefini seç, gün gün çalış.</h2>
     <p>Sınav tarihini ve puanı belirlediğinde konu, kelime, kalıp, soru ve deneme görevleri otomatik hesaplanır.</p>
     <label className="field-label">Hedef puanım</label>
     <div className="welcome-score"><button onClick={()=>onTarget(Math.max(0,data.target-5))}>−</button><strong>{data.target}</strong><button onClick={()=>onTarget(Math.min(100,data.target+5))}>+</button><span>{Math.ceil((Number(data.target)||0)/1.25)} doğru hedefi</span></div>
     <label className="field-label">Hedeflediğim sınav</label>
     <select value={exam?.id||''} onChange={e=>onExam(e.target.value)}>{options.map(e=><option key={e.id} value={e.id}>{e.name} • {turkishDay(e.date)}</option>)}</select>
     {chosen==='YOKDIL'&&<><label className="field-label">YÖKDİL alanım</label><div className="welcome-fields">{['Sağlık','Fen','Sosyal'].filter(x=>exam?.fields.includes(x)).map(x=><button key={x} className={data.field===x?'wf-active':''} onClick={()=>onField(x)}>{x}</button>)}</div></>}
     <div className="exam-setup-count"><CalendarDays size={20}/><div><b>{exam?.name} • {exam?turkishDay(exam.date):''}</b><span>Sınava {remaining} gün • kişisel çalışma planı hazırlanacak</span></div></div>
     <button className="button btn-primary fill welcome-button" onClick={onFinish}><CheckCircle2 size={18}/> {remaining} günlük planımı oluştur <ArrowRight size={17}/></button>
     <small>Kaydın yalnız bu cihazda saklanır; sınav seçimini sonradan ayarlardan değiştirebilirsin.</small>
   </>}
 </div></div>;
}
