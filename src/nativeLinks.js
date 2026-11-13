import {Capacitor} from '@capacitor/core';
import {Browser} from '@capacitor/browser';

// Open external public sources (ÖSYM, GitHub, etc.) in the system web context.
// Local blob: PDF files and relative navigation stay inside the application.
export function initializeNativeLinks(){
  if(!Capacitor.isNativePlatform()||typeof document==='undefined')return ()=>{};
  const intercept=event=>{
    const element=event.target;
    const anchor=element?.closest?.('a[href]');
    if(!anchor)return;
    const href=anchor.getAttribute('href');
    if(!href||!/^https:\/\//i.test(href))return;
    event.preventDefault();
    event.stopPropagation();
    Browser.open({url:href}).catch(error=>console.warn('External link could not be opened',error));
  };
  document.addEventListener('click',intercept,true);
  return ()=>document.removeEventListener('click',intercept,true);
}
