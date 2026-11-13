import test from 'node:test';
import assert from 'node:assert/strict';
import {pastPapers,getPastPapers,parseQuestionNumbers,parseAnswerKey,gradePastPaper} from '../src/pastPapers.js';

test('YDS ve YÖKDİL geçmiş kitapçıkları ayrı listelenir',()=>{
 assert.ok(pastPapers.some(x=>x.kind==='YDS'));
 assert.ok(pastPapers.some(x=>x.kind==='YOKDIL'));
 assert.ok(pastPapers.every(x=>x.url.startsWith('https://')&&x.fields.length));
 assert.ok(getPastPapers('YDS',2025).every(x=>x.kind==='YDS'&&x.year===2025));
 assert.ok(getPastPapers('YOKDIL',2026).every(x=>x.kind==='YOKDIL'&&x.year===2026));
});
test('ÖSYM örnek kitapçığının ayrık soru numaraları seçilir',()=>{
 assert.deepEqual(parseQuestionNumbers('1-3, 8, 16, 80'),[1,2,3,8,16,80]);
 assert.deepEqual(parseQuestionNumbers('1,1,2'),[1,2]);
 assert.equal(parseQuestionNumbers('1-80').length,80);
 for(const bad of ['0','81','6-4','1-81','abc'])assert.throws(()=>parseQuestionNumbers(bad));
});
test('Cevap anahtarı farklı giriş formatlarında okunur',()=>{
 assert.deepEqual(parseAnswerKey('1:A 3:C 80:E'),{1:'A',3:'C',80:'E'});
 assert.deepEqual(parseAnswerKey('1-A 2-C'),{1:'A',2:'C'});
 assert.deepEqual(parseAnswerKey('ACBE'),{1:'A',2:'C',3:'B',4:'E'});
 assert.throws(()=>parseAnswerKey('91:A'));
 assert.throws(()=>parseAnswerKey('C F A'));
});
test('Eksik resmî anahtarla kesin puan uydurulmaz',()=>{
 const p=gradePastPaper([1,2,3],{1:'A',2:'B',3:'D'},{1:'A',2:'C'});
 assert.equal(p.correct,1);
 assert.equal(p.incorrect,1);
 assert.equal(p.keyed,2);
 assert.equal(p.unkeyed,1);
 assert.equal(p.fullScore,null);
});
test('80 sorunun tümünün anahtarı varsa 100 puan ölçeği kullanılabilir',()=>{
 const nums=Array.from({length:80},(_,i)=>i+1);
 const key=Object.fromEntries(nums.map(n=>[n,'A']));
 const answers=Object.fromEntries(nums.map((n,i)=>[n,i<56?'A':'B']));
 const graded=gradePastPaper(nums,answers,key);
 assert.equal(graded.fullScore,70);
 assert.equal(graded.correct,56);
 assert.equal(graded.incorrect,24);
});
