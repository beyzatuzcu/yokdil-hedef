// Reproducible app icon/splash source files. No proprietary font or image required.
import sharp from 'sharp';
import {mkdir} from 'node:fs/promises';
const dir=new URL('../assets/',import.meta.url);
await mkdir(dir,{recursive:true});
const design=(size=1024)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 1024 1024">
<rect width="1024" height="1024" fill="#172446"/>
<rect x="143" y="212" width="738" height="491" rx="75" fill="#f7f7ff"/>
<path d="M254 373h505M254 480h363" stroke="#7062ee" stroke-width="54" stroke-linecap="round"/>
<circle cx="751" cy="757" r="164" fill="#7b6af5"/>
<path d="m661 764 64 65 121-152" fill="none" stroke="#ffffff" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
await sharp(Buffer.from(design())).png().toFile(new URL('logo.png',dir));
console.info('Created assets/logo.png for native icons and splash screens');
