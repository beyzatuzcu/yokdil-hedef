import {topics as baseTopics} from './content.js';
export const ydsTopics=[
  {...baseTopics.find(t=>t.id==='vocab'),summary:'YDS çok anlamlı akademik sözcükler, yakın anlam, phrasal verb ve edat eşleşmeleri.'},
  {...baseTopics.find(t=>t.id==='grammar'),summary:'YDS tense, inversion, passive, reduced clauses ve koşul yapılarında şık eleme.'},
  {...baseTopics.find(t=>t.id==='connectors'),summary:'YDS zıtlık, neden-sonuç, karşılaştırma ve koşul bağlantıları.'},
  {...baseTopics.find(t=>t.id==='cloze'),summary:'YDS paragraf içindeki 5 boşluğu bağlam, yapı ve referansla çözme.'},
  {id:'restatement',title:'Yakın Anlam / Restatement',tag:'YDS özel',minutes:35,summary:'Cümle anlamını değiştirmeden yeniden ifade etme: olumsuzluk, koşul, zaman ve kapsam.',rules:['Only if, unless, even if, no longer gibi kritik yönleri işaretle.','Sözcükleri değil özne-özellik-yüklem anlamını koru.','May/might ile must ve some ile all ayrımını gör.'],trap:'Benzer kelimelerle farklı iddia kuran seçeneklere dikkat.'},
  {id:'dialogue',title:'Diyalog Tamamlama',tag:'YDS özel',minutes:30,summary:'Konuşmacının amacı, bir sonraki yanıt, zamir ve soru-cevap uyumunu çöz.',rules:['Boşluğun hem öncesini hem sonrasını oku.','Öneri, itiraz, açıklama, gerekçe gibi iletişim işlevini belirle.','That/it/they zamirlerinin gönderimini bul.'],trap:'Konuya uygun görünen ancak bir sonraki repliğin yanıtlayamadığı seçeneği ele.'},
  {...baseTopics.find(t=>t.id==='translation')},
  {...baseTopics.find(t=>t.id==='completion')},
  {...baseTopics.find(t=>t.id==='paragraph')},
  {...baseTopics.find(t=>t.id==='paragraphComplete')},
  {...baseTopics.find(t=>t.id==='irrelevant')}
];
export const examTopics=kind=>kind==='YDS'?ydsTopics:baseTopics;
