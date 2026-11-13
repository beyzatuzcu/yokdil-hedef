import sharp from 'sharp';
import {mkdir,readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../',import.meta.url));
const assets=path.join(root,'assets');
const store=path.join(root,'store-assets');
await Promise.all([mkdir(assets,{recursive:true}),mkdir(path.join(store,'google-play'),{recursive:true}),mkdir(path.join(store,'app-store'),{recursive:true})]);
const iconSvg=await readFile(path.join(root,'branding/app-mark.svg'));

const resizePng=async(size,file)=>sharp(iconSvg).resize(size,size).flatten({background:'#172446'}).removeAlpha().png().toFile(file);
await Promise.all([
  resizePng(1024,path.join(assets,'logo.png')),
  resizePng(1024,path.join(store,'app-store','icon-1024.png')),
  resizePng(512,path.join(store,'google-play','icon-512.png'))
]);
const splashSvg=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="2732" height="2732"><rect width="2732" height="2732" fill="#172446"/><circle cx="1366" cy="1250" r="970" fill="#281a62" opacity=".4"/></svg>`);
const mark=await sharp(iconSvg).resize(1050,1050).png().toBuffer();
await sharp(splashSvg).composite([{input:mark,left:841,top:720}]).png().toFile(path.join(assets,'splash.png'));
const splashDark=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="2732" height="2732"><rect width="2732" height="2732" fill="#0b1230"/></svg>`);
await sharp(splashDark).composite([{input:mark,left:841,top:720}]).png().toFile(path.join(assets,'splash-dark.png'));

const graphic=`<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="500">
<defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#152153"/><stop offset="1" stop-color="#2d1d72"/></linearGradient></defs>
<rect width="1024" height="500" fill="url(#bg)"/>
<circle cx="930" cy="38" r="280" fill="#8065e8" opacity=".13"/>
<circle cx="75" cy="460" r="250" fill="#9988ee" opacity=".10"/>
<text x="420" y="190" font-family="Arial,DejaVu Sans,sans-serif" fill="#ffffff" font-size="58" font-weight="bold">YDS &amp; YÖKDİL</text>
<text x="420" y="257" font-family="Arial,DejaVu Sans,sans-serif" fill="#ab98ff" font-size="58" font-weight="bold">HEDEF</text>
<text x="421" y="324" font-family="Arial,DejaVu Sans,sans-serif" fill="#e5e3ff" font-size="24">Sınavını seç, hedefe planlı hazırlan.</text>
<rect x="418" y="356" width="150" height="50" rx="25" fill="#5f4bd2"/>
<text x="493" y="387" text-anchor="middle" font-family="Arial,DejaVu Sans,sans-serif" font-size="18" font-weight="bold" fill="white">Günlük plan</text>
<rect x="580" y="356" width="166" height="50" rx="25" fill="#4c3e99"/>
<text x="663" y="387" text-anchor="middle" font-family="Arial,DejaVu Sans,sans-serif" font-size="18" font-weight="bold" fill="white">Süreli deneme</text>
</svg>`;
const logo=await sharp(iconSvg).resize(300,300).png().toBuffer();
await sharp(Buffer.from(graphic)).composite([{input:logo,left:85,top:98}]).png().toFile(path.join(store,'google-play','feature-graphic-1024x500.png'));
console.log('Generated native icon/splash and Google Play / App Store store-listing artwork.');
