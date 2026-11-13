import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';
export default defineConfig({
  base:'./',
  plugins:[react(),VitePWA({
    registerType:'autoUpdate',includeAssets:['icon.svg','icon-192.png','icon-512.png','ornek-sorular.json'],
    manifest:{name:'YDS & Dil Sınavı Hedef — Sınav Hazırlık',short_name:'YÖKDİL Hedef',description:'YDS veya YÖKDİL seçimi, sınav takvimi, kişisel çalışma planı, soru ve deneme',theme_color:'#17204a',background_color:'#f6f8fc',display:'standalone',start_url:'./',scope:'./',icons:[{src:'icon-192.png',sizes:'192x192',type:'image/png',purpose:'any maskable'},{src:'icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'},{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]}
  })]
});
