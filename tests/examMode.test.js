import test from 'node:test';
import assert from 'node:assert/strict';
import {examsFor,nextExamFor} from '../src/exams.js';
import {ydsQuestions} from '../src/ydsQuestions.js';
import {examTopics} from '../src/ydsTopics.js';
import {questions} from '../src/content.js';
import {extraQuestions} from '../src/extraQuestions.js';
import {paragraphQuestions} from '../src/paragraphQuestions.js';
import {balancedMock} from '../src/examSimulation.js';
import {generatePlan} from '../src/planner.js';

test('YDS ve YOKDIL takvimleri karışmaz',()=>{
 assert.ok(examsFor('YDS').length>=8);
 assert.ok(examsFor('YOKDIL').length>=5);
 assert.ok(examsFor('YDS').every(e=>e.kind==='YDS'&&e.date&&e.applicationStart&&e.applicationEnd));
 assert.ok(examsFor('YOKDIL').every(e=>e.kind==='YOKDIL'));
 assert.equal(examsFor('YDS').find(e=>e.id==='2027-yds-1')?.date,'2027-03-28');
 assert.equal(examsFor('YDS').find(e=>e.id==='2027-yds-2')?.date,'2027-11-21');
 assert.equal(examsFor('YOKDIL').find(e=>e.id==='2027-1')?.date,'2027-02-28');
 assert.equal(nextExamFor('YDS','2026-11-13').id,'2027-yds-1');
});

test('YDS günlük program sınav tarihi ve konu türüne göre oluşur',()=>{
 const p=generatePlan({planStart:'2026-11-13',examDate:'2027-03-28',target:70,field:'Genel',examKind:'YDS'});
 assert.equal(p.length,135);
 assert.equal(p[0].date,'2026-11-13');
 assert.equal(p.at(-1).date,'2027-03-27');
 assert.ok(p.every(d=>d.examKind==='YDS'&&d.tasks.some(t=>t.type==='topic')&&d.tasks.some(t=>t.type==='questions')));
 assert.ok(p.some(d=>d.topic.id==='dialogue'));
 assert.ok(p.some(d=>d.topic.id==='restatement'));
 const other=generatePlan({planStart:'2026-11-13',examDate:'2027-02-28',target:70,field:'Sağlık',examKind:'YOKDIL'});
 assert.equal(other.length,107);
 assert.ok(other.every(d=>!['dialogue','restatement'].includes(d.topic.id)));
});

test('YDS’ye özel özgün sorular geçerli ve 80 soruluk prova mümkün',()=>{
 assert.ok(ydsQuestions.length>=40);
 assert.ok(ydsQuestions.some(q=>q.category==='Diyalog'));
 assert.ok(ydsQuestions.some(q=>q.category==='Yakın Anlam'));
 assert.ok(ydsQuestions.every(q=>q.field==='Genel'&&q.examKind==='YDS'&&q.options.length===5&&q.answer>=0&&q.answer<5));
 const pool=[...questions,...extraQuestions,...paragraphQuestions,...ydsQuestions].filter(q=>q.field==='Genel'||q.examKind==='YDS');
 const mock=balancedMock(pool,'YDS');
 assert.equal(mock.length,80);
 assert.equal(new Set(mock.map(q=>q.id)).size,80);
 assert.ok(mock.some(q=>q.category==='Diyalog'));
 assert.ok(mock.some(q=>q.category==='Yakın Anlam'));
});

test('Seçilen sınavın konu kampı sadece kendi başlıklarını gösterir',()=>{
 assert.ok(examTopics('YDS').some(t=>t.id==='dialogue'));
 assert.ok(examTopics('YDS').some(t=>t.id==='restatement'));
 assert.ok(!examTopics('YOKDIL').some(t=>t.id==='dialogue'));
});
