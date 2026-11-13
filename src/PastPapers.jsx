import React,{useEffect,useMemo,useRef,useState} from 'react';
import {BookOpen,CalendarDays,Clock3,Download,ExternalLink,FileText,Play,Pause,RefreshCcw,Save,ShieldCheck,Upload,CheckCircle2,AlertCircle,ChevronLeft,ChevronRight} from 'lucide-react';
import {pastPapers,parseQuestionNumbers,parseAnswerKey,gradePastPaper,ANSWERS} from './pastPapers.js';
import {kindName} from './exams.js';

const range80=Array.from({length:80},(_,i)=>i+1);
function stamp(sec){return [Math.floor(sec/3600),Math.floor((sec%3600)/60),sec%60].map(n=>String(n).padStart(2,'0')).join(':');}
function uid(p,field){return p.id+'-'+field;}
export default function PastPapers({initialKind='YDS',initialField='Sağlık',saved={},history=[],onSave,onFinish}){
 const [kind,setKind]=useState(initialKind);
 const [field,setField]=useState(initialField);
 const [year,setYear]=useState('all');
 const [paperId,setPaperId]=useState('');
 const [mode,setMode]=useState('sample');
 const [range,setRange]=useState('1-8');
 const [inputKey,setInputKey]=useState('');
 const [inputError,setInputError]=useState('');
 const [pageNumber,setPageNumber]=useState(1);
 const [pdfUrl,setPdfUrl]=useState(null);
 const [pdfName,setPdfName]=useState('');
 const [running,setRunning]=useState(false);
 const [elapsed,setElapsed]=useState(0);
 const [review,setReview]=useState(null);
 const [clock,setClock]=useState(Date.now());
 const activeRef=useRef(null);
 const papers=pastPapers.filter(p=>p.kind===kind&&(year==='all'||String(p.year)===year)&&p.fields.includes(kind==='YDS'?'Genel':field));
 const paper=papers.find(p=>p.id===paperId)||papers[0];
 const key=paper?uid(paper,kind==='YDS'?'Genel':field):'';
 const savedRecord=saved[key]||{};
 const answers=savedRecord.answers||{};
 const answerKey=savedRecord.answerKey||{};
 const localUrl=pdfUrl;
 const selectedNumbers=useMemo(()=>{try{return parseQuestionNumbers(range);}catch{return[];}},[range]);
 const score=useMemo(()=>gradePastPaper(selectedNumbers,answers,answerKey),[selectedNumbers,answers,answerKey]);
 const remaining=Math.max(0,(mode==='full'?180:mode==='sample'?30:180)*60-elapsed);
 useEffect(()=>{if(!running)return;const t=setInterval(()=>{setClock(Date.now());setElapsed(v=>v+1);},1000);return()=>clearInterval(t);},[running]);
 useEffect(()=>{if(remaining===0)setRunning(false);},[remaining]);
 useEffect(()=>()=>{if(activeRef.current)URL.revokeObjectURL(activeRef.current);},[]);
 function changePaper(next){setPaperId(next);setReview(null);setRunning(false);setElapsed(0);setInputError('');setPageNumber(1);disposePDF();}
 function disposePDF(){if(activeRef.current){URL.revokeObjectURL(activeRef.current);activeRef.current=null;}setPdfUrl(null);setPdfName('');}
 function uploadPDF(e){const f=e.target.files?.[0];e.target.value='';if(!f)return; if(f.type!=='application/pdf'&&!f.name.toLowerCase().endsWith('.pdf')){setInputError('Yalnız PDF dosyası seç.');return;} if(f.size>80*1024*1024){setInputError('PDF en fazla 80 MB olabilir.');return;}disposePDF();const url=URL.createObjectURL(f);activeRef.current=url;setPdfUrl(url);setPdfName(f.name);setInputError('');}
 function saveAnswers(patch){onSave(key,{...savedRecord,examKind:kind,paperId:paper?.id,field:kind==='YDS'?'Genel':field,updatedAt:new Date().toISOString(),...patch});}
 function chooseAnswer(n,a){saveAnswers({answers:{...answers,[n]:answers[n]===a?'':a}});setReview(null);}
 function applyKey(){try{const parsed=parseAnswerKey(inputKey);saveAnswers({answerKey:parsed});setInputError('');setReview(null);}catch(e){setInputError(e.message);}}
 function selectRange(nextMode){setMode(nextMode);setRange(nextMode==='full'?'1-80':'1-8');setInputError('');setReview(null);setElapsed(0);setRunning(false);setPageNumber(1);}
 function finish(){if(!selectedNumbers.length){setInputError('Önce geçerli soru numarası seçmelisin.');return;}const result=gradePastPaper(selectedNumbers,answers,answerKey);const attempt={id:'past-'+Date.now(),examKind:kind,kind:'pastPaper',date:new Date().toISOString(),paperId:paper.id,title:paper.title+' · '+(kind==='YDS'?'Genel':field),field:kind==='YDS'?'Genel':field,total:result.total,answered:result.answered,correct:result.correct,incorrect:result.incorrect,blank:result.blank,keyed:result.keyed,unkeyed:result.unkeyed,score:result.fullScore,accuracy:result.samplePercent,seconds:elapsed,numbers:[...selectedNumbers],answers:{...answers}};onFinish(attempt);setReview(result);setRunning(false);}
 const isFull=selectedNumbers.length===80;
 return <div className="past-papers">
  <div className="section-heading"><div><p className="eyebrow">ÖSYM RESMÎ ARŞİVİ • GEÇMİŞ YILLAR</p><h2>Çıkmış sorular ve süreli denemeler</h2><p>Resmî kitapçığı aç, soruları oradan oku, yanıtları uygulamadaki cevap kâğıdına işaretle. Sonuçların kayıt altında kalsın.</p></div></div>
  <section className="panel paper-disclaimer"><ShieldCheck size={20}/><p><strong>Resmî sorular kopyalanmaz.</strong> ÖSYM'nin kamuya açtığı kitapçıklar çoğunlukla %10 örnektir. Tam 80 soruluk kitapçığa yalnız erişim hakkın varsa kendi PDF'inle çalışabilirsin. Cevap anahtarını kendin girersin; uygulama resmî cevapları uydurmaz.</p></section>
  <section className="panel paper-selector">
   <div className="paper-kind-switch"><button className={kind==='YDS'?'active':''} onClick={()=>{setKind('YDS');setYear('all');changePaper('');}}>YDS</button><button className={kind==='YOKDIL'?'active':''} onClick={()=>{setKind('YOKDIL');setYear('all');changePaper('');}}>YÖKDİL</button></div>
   <div className="paper-filters">
    <label>Sınav yılı<select value={year} onChange={e=>{setYear(e.target.value);changePaper('');}}><option value="all">Tüm yıllar</option>{[...new Set(pastPapers.filter(p=>p.kind===kind).map(p=>p.year))].sort((a,b)=>b-a).map(y=><option key={y} value={y}>{y}</option>)}</select></label>
    {kind==='YOKDIL'&&<label>Alan<select value={field} onChange={e=>{setField(e.target.value);changePaper('');}}>{['Sağlık','Fen','Sosyal'].map(f=><option key={f}>{f}</option>)}</select></label>}
   </div>
   <div className="paper-list">{papers.map(p=><button className={'paper-item '+(p.id===paper?.id?'active':'')} key={p.id} onClick={()=>changePaper(p.id)}><FileText size={19}/><span><strong>{p.title}</strong><small>{p.kind==='YOKDIL'?field+' Bilimleri · ':''}{p.year} · ÖSYM yayımlama sayfası</small></span>{p.id===paper?.id&&<CheckCircle2 size={17}/>}</button>)}</div>
  </section>
  {paper&&<>
  <section className="panel paper-workspace">
   <div className="panel-heading"><div><p className="eyebrow">SEÇİLEN KİTAPÇIK</p><h3>{paper.title}{kind==='YOKDIL'?' · '+field:''}</h3></div><span className="paper-official-label">Resmî kaynak</span></div>
   <p className="subtle">ÖSYM sayfasından yayımlanmış kitapçığı ve cevap anahtarını aç. PDF indirdiysen burada yerel olarak görüntüleyebilirsin. PDF uygulamanın sunucusuna yüklenmez.</p>
   <div className="paper-actions"><a className="button btn-primary" href={paper.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={17}/> ÖSYM kitapçığını aç</a>{paper.pdfUrl&&<a className="button btn-outline" href={paper.pdfUrl} target="_blank" rel="noopener noreferrer"><FileText size={17}/> Resmî PDF</a>}<label className="button btn-outline upload-label"><Upload size={17}/> Kendi PDF'ni aç<input type="file" accept=".pdf,application/pdf" onChange={uploadPDF} hidden/></label>{localUrl&&<button className="button btn-outline" onClick={disposePDF}>PDF'yi kapat</button>}</div>
   {localUrl&&<div className="paper-pdf-view"><div><b>{pdfName}</b><a href={localUrl} target="_blank" rel="noreferrer">Yeni sekmede aç <ExternalLink size={14}/></a></div><iframe title="Kendi PDF kitapçık önizlemen" src={localUrl}/><small>Telefonunda PDF burada açılmazsa üstteki “Yeni sekmede aç” bağlantısını kullan.</small></div>}
  </section>
  <section className="panel paper-answer-section">
   <div className="panel-heading"><div><p className="eyebrow">UYGULAMADA DENEME ÇÖZ</p><h3>80 soruluk cevap kâğıdı</h3></div><Clock3 size={23}/></div>
   <div className="paper-mode-switch"><button className={mode==='sample'?'active':''} onClick={()=>selectRange('sample')}>Yayımlanan örnek sorular</button><button className={mode==='full'?'active':''} onClick={()=>selectRange('full')}>80 soruluk tam deneme</button></div>
   <p className="subtle">{mode==='sample'?'ÖSYM örnek PDF’sinde yer alan soru numaralarını aynen yaz. 1-8 yalnızca başlangıç örneğidir; yayımlanan soru numaraları farklı olabilir.':'Tam kitapçığa yasal erişimin varsa 1–80 cevap kâğıdını kullan. Soru metinleri PDF üzerinden okunur.'}</p>
   <div className="paper-settings"><label>Soru numaraları<input value={range} onChange={e=>{setRange(e.target.value);setReview(null);}} placeholder="1-8 veya 1,3,12,45" autoComplete="off"/></label><div><span className="field-label">Süre</span><strong>{mode==='full'?'180 dakika':'30 dakika'}</strong></div><div><span className="field-label">Seçili soru</span><strong>{selectedNumbers.length} / 80</strong></div></div>
   <div className="paper-timer"><strong>{stamp(remaining)}</strong><span>{running?'Süre işliyor':remaining===0?'Süre doldu':'Süre duraklatıldı'}</span><button className="button btn-primary btn-sm" onClick={()=>setRunning(!running)} disabled={remaining===0}>{running?<><Pause size={16}/> Duraklat</>:<><Play size={16}/> Başlat / sürdür</>}</button><button className="button btn-outline btn-sm" onClick={()=>{setRunning(false);setElapsed(0);}}><RefreshCcw size={15}/> Sıfırla</button></div>
   <div className="paper-progress"><span>{score.answered}/{score.total} cevap işaretlendi</span><span>{score.total?Math.round(score.answered/score.total*100):0}%</span></div><div className="paper-progress-line"><span style={{width:(score.total?score.answered/score.total*100:0)+'%'}}/></div>
   <div className="paper-answer-grid">{selectedNumbers.map(n=><div className="paper-answer-row" key={n}><b>{n}</b><div>{ANSWERS.map(a=><button className={answers[n]===a?'selected':''} aria-label={n+'. soru '+a} key={a} onClick={()=>chooseAnswer(n,a)}>{a}</button>)}</div></div>)}</div>
   {!selectedNumbers.length&&<p className="paper-help">Geçerli soru numarası girince cevap kâğıdı açılacak.</p>}
   <details className="paper-key-section"><summary><Save size={17}/> Cevap anahtarını gir ve puanımı hesapla</summary><p>ÖSYM PDF’sindeki cevapları yaz. Örneğin <code>1:A 3:C 7:B</code> veya sorular sırayla 1’den başlıyorsa <code>ABCDE...</code>. Boş anahtar otomatik puan üretmez.</p><textarea rows={3} value={inputKey} onChange={e=>setInputKey(e.target.value)} placeholder="1:A 2:D 3:B ..."/><div className="paper-actions"><button className="button btn-outline" onClick={applyKey}>Anahtarı kaydet</button><span>{Object.keys(answerKey).length} cevabın anahtarı kayıtlı</span></div></details>
   {inputError&&<p role="alert" className="paper-error"><AlertCircle size={16}/>{inputError}</p>}
   <div className="paper-finish"><button className="button btn-primary" disabled={!selectedNumbers.length} onClick={finish}><CheckCircle2 size={18}/> Denemeyi bitir ve sonucu kaydet</button><small>Yanıtlar otomatik kaydedilir. Puan yalnız cevap anahtarı girilmiş sorular için hesaplanır.</small></div>
   {review&&<div className="paper-result" role="status"><h3>Deneme sonucu</h3><div className="paper-result-stats"><span><b>{review.answered}</b>İşaretlenen</span><span><b>{review.correct}</b>Doğru</span><span><b>{review.incorrect}</b>Yanlış</span><span><b>{review.blank}</b>Boş (anahtarlı)</span></div><p>Değerlendirilebilen soru: <b>{review.keyed}/{review.total}</b>. {review.samplePercent===null?'Cevap anahtarı henüz yok.':('Anahtarlı sorularda başarı: %'+review.samplePercent+'.')} {review.fullScore===null?'80 sorunun tamamı ve anahtarı olmadan 100 üzerinden resmî ölçeğe benzer bir puan gösterilmez.':('80 soruluk puan göstergesi: '+review.fullScore+'/100.')}</p></div>}
  </section>
  </>}
  <section className="panel paper-history"><h3>Geçmiş çıkmış soru denemelerim</h3>{history.filter(a=>a.kind==='pastPaper'&&a.examKind===kind).length?<div className="paper-history-list">{history.filter(a=>a.kind==='pastPaper'&&a.examKind===kind).slice().reverse().slice(0,20).map(a=><div key={a.id}><div><b>{a.title}</b><small>{new Date(a.date).toLocaleDateString('tr-TR')} · {a.answered}/{a.total} cevap · {stamp(a.seconds)}</small></div><strong>{a.score!==null&&a.score!==undefined?a.score+'/100':a.accuracy!==null&&a.accuracy!==undefined?'%'+a.accuracy+' (örnek)':'Anahtar bekliyor'}</strong></div>)}</div>:<p className="subtle">Henüz bu sınav için kaydedilmiş çıkmış soru denemen yok.</p>}</section>
 </div>;
}
