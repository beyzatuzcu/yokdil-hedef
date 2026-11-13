import test from 'node:test';
import assert from 'node:assert/strict';
import {generatePlan,addDays,dailyStats,estimateScore,allCards,flatPatterns} from '../src/planner.js';
import {neededCorrect} from '../src/helpers.js';
import {exams} from '../src/exams.js';
import {paragraphQuestions} from '../src/paragraphQuestions.js';

const args={planStart:'2026-11-13',examDate:'2027-02-28',target:70,field:'Sağlık'};
test('70 hedef 56 doğruya karşılık gelir',()=>assert.equal(neededCorrect(70),56));
test('2027 YÖKDİL/1 takvimi ve 107 günlük program',()=>{
 const p=generatePlan(args);
 assert.equal(exams[0].date,'2027-02-28');
 assert.equal(p.length,107);
 assert.equal(p[0].date,'2026-11-13');
 assert.equal(p.at(-1).date,'2027-02-27');
 assert.ok(p[0].tasks.length>=7);
 assert.equal(p.at(-1).day,107);
 assert.ok(p.some(d=>d.mock));
 assert.ok(p.every(d=>d.tasks.some(t=>t.type==='words')&&d.tasks.some(t=>t.type==='questions')));
 assert.ok(p.every(d=>d.wordIds.every(id=>allCards.find(c=>c.id===id&&['Genel','Sağlık'].includes(c.field)))));
});
test('Günlük tikler ve telafi hesabı',()=>{
 const p=generatePlan(args);
 const done=Object.fromEntries(p[0].tasks.map(t=>[t.id,true]));
 const x=dailyStats(p,{[p[0].date]:done},'2026-11-14');
 assert.equal(x.perfect,1);
 assert.equal(x.missed.length,1);
 assert.equal(x.completedTasks,p[0].tasks.length);
});
test('20 farklı çözüm olmadan puan tahmini verilmez',()=>{
 const a=estimateScore([{answers:[{id:'q1',chosen:0,correct:true}]}]);
 assert.equal(a.ready,false);
});
test('Tekil cevap doğruluğuna göre örnek tahmin',()=>{
 const answers=Array.from({length:40},(_,i)=>({id:`test${i}`,chosen:1,correct:i<28}));
 const e=estimateScore([{answers}]);
 assert.equal(e.ready,true);
 assert.equal(e.point,70);
 assert.ok(e.low<e.point&&e.high>e.point);
});
test('Alanlar arası kelime kartı seçimi ve tarih aritmetiği',()=>{
 assert.equal(addDays('2026-11-13',107),'2027-02-28');
 for(const field of ['Sağlık','Fen','Sosyal']){
 const p=generatePlan({...args,field});assert.equal(p.length,107);
 assert.ok(p[0].wordIds.every(id=>allCards.some(c=>c.id===id&&['Genel',field].includes(c.field))));
 }
 assert.ok(flatPatterns.length>=20);
 assert.ok(paragraphQuestions.length>=20);
});

test('64 günlük YDS planında yoğun konu, soru, kelime ve tekrar görevleri',()=>{
 const plan=generatePlan({planStart:'2027-01-23',examDate:'2027-03-28',target:70,field:'Genel',examKind:'YDS'});
 assert.equal(plan.length,64);
 const day=plan[0];
 assert.ok(day.tasks.filter(t=>t.type==='topic').length>=2);
 assert.ok(day.tasks.find(t=>t.type==='questions').count>=40);
 assert.ok(day.wordIds.length>=15);
 assert.ok(day.reviewWordIds.length>=day.wordIds.length);
 assert.ok(day.tasks.some(t=>t.id==='vocabReview'));
 assert.ok(plan.some(d=>d.mock));
 assert.ok(plan.filter(d=>d.mock).every(d=>d.tasks.filter(t=>t.type==='topic').length===1));
 assert.ok(day.minutes>160);
});

test('Yeni kelime kartları aynı plan içinde tekrar yeni diye atanmaz',()=>{
 const plan=generatePlan({planStart:'2027-01-23',examDate:'2027-03-28',target:70,field:'Genel',examKind:'YDS'});
 const ids=plan.flatMap(d=>d.wordIds);
 assert.equal(new Set(ids).size,ids.length);
});
