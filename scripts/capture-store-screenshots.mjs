/**
 * Headless browser captures of the REAL React app, not fabricated interface mockups.
 * These are desktop Chromium's iPhone/Android viewport emulations. For final Apple
 * approval, verify and retake on the actual target devices.
 */
import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import {mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import assert from 'node:assert/strict';

const out=resolve('store-assets/screenshots');
const base='http://127.0.0.1:4173/';
const child=spawn('node',['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4173','--strictPort'],{stdio:['ignore','pipe','pipe']});
let serverText='';
child.stdout.on('data',b=>serverText+=b);
child.stderr.on('data',b=>serverText+=b);
async function ready(){
 for(let i=0;i<100;i++){
  if(child.exitCode!==null)throw Error('Preview failed: '+serverText);
  try{const r=await fetch(base);if(r.ok)return;}catch{}
  await new Promise(r=>setTimeout(r,200));
 }
 throw Error('Preview startup timed out: '+serverText);
}
const profiles=[
 {name:'android',viewport:{width:432,height:768},deviceScaleFactor:2.5},
 {name:'iphone-6.9',viewport:{width:440,height:956},deviceScaleFactor:3}
];
const states=[
 ['01-hedef-ve-sinav','Genel bakış'],
 ['02-gunluk-calisma-plani','Günlük plan'],
 ['03-ayrintili-konu-anlatimi','Konu kampı'],
 ['04-akademik-kelime-kartlari','Kelime ezberi'],
 ['05-deneme-merkezi','Denemeler'],
 ['06-cikmis-sorular-arsivi','Çıkmış Sorular']
];
const seeded=kind=>({
 target:70,field:kind==='YDS'?'Genel':'Sağlık',
 selectedExam:kind==='YDS'?'2027-yds-1':'2027-1',
 examKind:kind,onboarded:true,topicDone:[],learned:[],bookmarked:[],patternStarred:[],
 planStart:'2026-11-13',daily:{},attempts:[],customQuestions:[],pastPaperProgress:{},pastPaperHistory:[]
});
async function nav(page,label){
 // Use the normal mobile menu, not internal React state manipulation.
 await page.locator('button.mobile-hamburger').click();
 await page.locator('nav.nav-menu button.nav-link').filter({hasText:label}).click();
 await page.waitForTimeout(180);
}
async function capture(browser,profile,kind){
 const ctx=await browser.newContext({viewport:profile.viewport,deviceScaleFactor:profile.deviceScaleFactor,isMobile:true,hasTouch:true,locale:'tr-TR',timezoneId:'Europe/Istanbul',colorScheme:'light',reducedMotion:'reduce'});
 const state=seeded(kind);
 await ctx.addInitScript(data=>localStorage.setItem('yokdil-hedef-v1',JSON.stringify(data)),state);
 const page=await ctx.newPage();
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base,{waitUntil:'domcontentloaded'});
 await page.locator('.app .topbar').waitFor({timeout:15000});
 await page.waitForTimeout(300);
 assert.equal(await page.locator('.welcome-modal:visible').count(),0,'Seeded user should skip initial wizard');
 assert.ok((await page.locator('.brand strong').innerText()).includes(kind==='YDS'?'YDS':'YÖKDİL'));
 const dir=resolve(out,profile.name);
 await mkdir(dir,{recursive:true});
 if(kind==='YDS'){
  for(const [file,label] of states){
   if(label!=='Genel bakış')await nav(page,label);
   assert.equal(await page.locator('.topbar-label').innerText(),label);
   await page.screenshot({path:resolve(dir,file+'.png'),animations:'disabled',timeout:20000});
   console.info(profile.name,kind,label);
  }
  // Real navigation test: start a small test from visible app UI.
  await nav(page,'Soru bankası');
  await page.locator('.section-heading h2').waitFor();
  assert.ok((await page.locator('main').innerText()).includes('Soru bankası'));
  await page.screenshot({path:resolve(dir,'07-soru-bankasi.png'),animations:'disabled'});
 } else {
  await nav(page,'Günlük plan');
  assert.ok((await page.locator('.section-heading h2').innerText()).includes('günlük'));
  await page.screenshot({path:resolve(dir,'08-yokdil-gunluk-plan.png'),animations:'disabled'});
  await nav(page,'Konu kampı');
  assert.ok((await page.locator('.section-heading h2').innerText()).includes('YÖKDİL'));
  await page.screenshot({path:resolve(dir,'09-yokdil-konu-kampi.png'),animations:'disabled'});
 }
 assert.deepEqual(errors,[],'Browser runtime should have no uncaught errors');
 await ctx.close();
}
let browser;
try{
 await ready();
 browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 for(const profile of profiles){
  await capture(browser,profile,'YDS');
  await capture(browser,profile,'YOKDIL');
 }
 console.info('Generated actual-app screenshots in '+out);
}finally{
 if(browser)await browser.close();
 child.kill('SIGTERM');
}
