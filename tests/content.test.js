import test from 'node:test';
import assert from 'node:assert/strict';
import {questions,topics} from '../src/content.js';
import {extraQuestions} from '../src/extraQuestions.js';
import {paragraphQuestions} from '../src/paragraphQuestions.js';
import {balancedMock,sectionTargets} from '../src/examSimulation.js';
import {validateQuestions} from '../src/helpers.js';
const all=[...questions,...extraQuestions,...paragraphQuestions].filter(q=>q.category!=='Diyalog');

test('Soru kimlikleri tekil, cevaplar geçerli',()=>{
 assert.equal(new Set(all.map(q=>q.id)).size,all.length);
 for(const q of all){assert.equal(q.options.length,5,q.id);assert.ok(q.answer>=0&&q.answer<5,q.id);assert.ok(q.explanation.length>5,q.id);}
});
test('Her alan için 80 soruluk karışık, tekrar içermeyen deneme',()=>{
 for(const f of ['Sağlık','Fen','Sosyal']){
  const pool=all.filter(q=>q.field===f||q.field==='Genel');
  const mock=balancedMock(pool);
  assert.equal(mock.length,80,`${f} havuzu`);
  assert.equal(new Set(mock.map(q=>q.id)).size,80);
  for(const [cat,amount] of sectionTargets){assert.equal(mock.filter(q=>q.category===cat).length,amount,`${f} ${cat}`);}
 }
});
test('Soru dosyası şeması çalışıyor',()=>{
 const q={question:'Test question?',options:['a','b','c','d','e'],answer:1};
 assert.equal(validateQuestions([q]).length,1);
 assert.throws(()=>validateQuestions([{...q,answer:9}]));
});
test('Konu başlıkları sınava yönelik',()=>{
 assert.equal(topics.length,9);
 assert.ok(topics.some(t=>t.title==='Paragraf Tamamlama'));
 assert.ok(!topics.some(t=>t.id==='dialogue'));
});
