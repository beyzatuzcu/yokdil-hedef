export const additionalLessons = {
  "cloze": {
    "goal": "Tek boşluğu değil, paragrafın ana fikrini, bağlaç yönünü ve dilbilgisel yapıyı birlikte değerlendirmek.",
    "overview": [
      "Cloze Test'te genellikle aynı metinde birden fazla boşluk yer alır. Soru tek bir kelimeyi bilmekten ibaret değildir: Paragraf boyunca konu, neden-sonuç ilişkisi, özne ve zaman uyumu korunur. Bu yüzden ilk iş bütün paragrafı hızla okumaktır.",
      "Her boşluk için üç soru sor: Buraya hangi tür sözcük gerekir? Metnin hangi düşüncesi sürüyor? Seçeneklerden hangisi hem yapıya hem bağlama uyuyor? Sadece boşluğun çevresindeki iki kelimeyle seçim yapmak risklidir."
    ],
    "chapters": [
      {
        "title": "1. Paragrafın haritasını çıkar",
        "idea": "İlk ve son cümle çoğu zaman metnin konusunu, orta cümleler gerekçeyi veya sonucu verir.",
        "explanation": "Okurken metne bir cümlelik Türkçe başlık koy. Örneğin: 'Yeni aşının etkisi ve sınırlılıkları'. Böylece ortada olumlu bulgular anlatılırken 'however' sonrası bir sınırlama gelmesini beklersin. Boşluklara tek tek atlamadan önce paragrafın hangi iddiayı kanıtladığını belirlemek dikkat hatalarını azaltır.",
        "example": "New vaccines have reduced infection rates. However, their long-term effectiveness remains uncertain.",
        "translation": "Yeni aşılar enfeksiyon oranlarını azalttı. Bununla birlikte uzun vadeli etkililikleri belirsizliğini koruyor.",
        "reason": "İlk cümle olumlu etki, ikinci cümle sınırlılık sunuyor. Böyle bir geçişte however uygundur; therefore sonucu yanlış bir yönde ilan eder.",
        "trap": "Bir şık dilbilgisel olarak doğru olsa da paragrafın genel yönünü bozabilir."
      },
      {
        "title": "2. Önce boşluğun görevi: bağlaç mı, fiil mi, isim mi?",
        "idea": "Boşluk sözcük türünü belirledikten sonra seçenek sayısı azalır.",
        "explanation": "Önünde 'the' varsa boşluğun isim ya da sıfatla başlayan bir isim öbeği olma ihtimalini kontrol et; önünde modal varsa çoğunlukla yalın fiil gerekir. 'The samples ___ collected' cümlesindeki boşluk yardımcı fiil olabilir: 'were collected'. '___ the findings were promising' yapısında ise bir bağlaç aranır: 'Although'.",
        "example": "The results _____ published after the data had been verified.",
        "translation": "Veriler doğrulandıktan sonra sonuçlar yayımlandı.",
        "reason": "'published' V3 biçiminde ve özne 'results' yayımı yapan değil; 'were published' edilgen geçmiş kurar.",
        "trap": "Cümlenin yüklemini belirlemeden yalnızca boşluk öncesine bakıp fiil zamanı seçme."
      },
      {
        "title": "3. Önceki ve sonraki cümleyle çapraz kontrol",
        "idea": "Bir boşluğun yanıtı başka cümledeki zamir veya tekrar eden anlamdan çıkar.",
        "explanation": "'This approach', 'these findings', 'such changes', 'they', 'it' gibi referanslar önceki ifadeye dayanır. 'This approach' deniyorsa önceki cümlede bir yöntem anlatılmış olmalıdır. Boşlukta yeni bir özne seçmeden önce referansı bul. Çözüm sırasında yalnızca bir cümle değil, mümkünse boşluğun iki yanını oku.",
        "example": "Researchers used a non-invasive technique. This method reduced the risk of complications.",
        "translation": "Araştırmacılar girişimsel olmayan bir teknik kullandı. Bu yöntem komplikasyon riskini azalttı.",
        "reason": "'This method' önceki 'non-invasive technique'e gönderme yapar. Ortadaki boşluk yöntemin uygulanmasını anlatmalıdır, yeni ilgisiz bir kavramı değil.",
        "trap": "Cümlenin içinde mantıklı görünen ama önceki zamirin gönderimini koparan seçeneği ele."
      },
      {
        "title": "4. Yakın iki seçenek arasında karar",
        "idea": "Kalıp uyumu ve kesinlik seviyesi son eleme aşamasıdır.",
        "explanation": "'Can/may/might' olasılık; 'must' zorunluluk verir. Araştırma metinlerinde 'suggest' ile 'prove' aynı iddia değildir. İki seçenek de gramer bakımından yerleşiyorsa, önce yazarın ne kadar kesin konuştuğuna bak. Bağlam 'limited evidence' diyorsa 'prove conclusively' fazla iddialı olabilir.",
        "example": "Although the preliminary results are encouraging, further studies are needed to _____ their reliability.",
        "translation": "İlk sonuçlar umut verici olsa da güvenilirliklerini ___ için ek çalışmalar gereklidir.",
        "reason": "İlk sonuçlar kesin değil; 'confirm their reliability' bağlama uyar. 'Ignore their reliability' bilimsel amaçla uyuşmaz.",
        "trap": "'Encouraging' kelimesini kesin kanıt gibi yorumlama."
      }
    ],
    "worked": [
      {
        "type": "Metin akışından bağlaç seçimi",
        "question": "The intervention reduced symptoms in most patients. _____, some participants experienced mild side effects.",
        "options": [
          "Therefore",
          "Moreover",
          "However",
          "For example",
          "Consequently"
        ],
        "answer": 2,
        "steps": [
          "İlk cümle olumlu sonuç: semptomlar azaldı.",
          "İkinci cümle olumsuz sınırlama: yan etki görüldü.",
          "Zıtlık için 'However' gerekir. C."
        ],
        "takeaway": "Tek cümle çevirisi değil, iki iddia arasındaki yön belirleyicidir."
      },
      {
        "type": "İskelete bakarak dilbilgisi",
        "question": "These findings _____ by several independent trials over the past decade.",
        "options": [
          "have supported",
          "have been supported",
          "supporting",
          "will supporting",
          "had support"
        ],
        "answer": 1,
        "steps": [
          "Özne 'findings' araştırmalarca destekleniyor: passive.",
          "'over the past decade' bugüne uzanan bir zaman dilimi, present perfect uygun.",
          "have been supported = present perfect passive. B."
        ],
        "takeaway": "Cloze sorularında da önce active/passive, sonra zaman."
      }
    ],
    "check": {
      "question": "The study involved only a small number of participants. _____, the findings should be interpreted with caution.",
      "options": [
        "Likewise",
        "As a result",
        "Despite",
        "Whereas",
        "In addition to"
      ],
      "answer": 1,
      "explanation": "B) As a result. Küçük örneklem bir sınırlamadır; bundan dolayı sonuçlar dikkatli yorumlanmalıdır. İlk cümle neden, ikinci cümle sonuçtur."
    },
    "revision": [
      "Paragrafa Türkçe bir cümlelik konu başlığı ver.",
      "Her boşluk için sözcük türü + ilişki + dilbilgisi kontrolü yap.",
      "This/these/they zamirlerinin gönderimini işaretle.",
      "Birden fazla boşluğun cevapları birbirini tutuyor mu son kez oku."
    ]
  },
  "translation": {
    "goal": "Sözcük benzerliğine aldanmadan özne, yüklem, olumsuzluk, zaman, koşul ve niteleme ilişkisini korumak.",
    "overview": [
      "YÖKDİL çeviri sorularında birebir kelime dizilişi değil, anlam eşdeğerliği aranır. Çeldiriciler çoğunlukla kelimeleri büyük ölçüde korur ama bir koşulu tersine çevirir, bir olumsuzluğu atar veya nitelemenin bağlı olduğu ismi değiştirir.",
      "Çeviriye seçeneklerden başlama. Önce kaynak cümlenin ana iskeletini Türkçe olarak kur: özne, ana yüklem, zaman, olumlu/olumsuz yön, varsa şart ve göreli cümlecik. Sonra bu kontrol listesini şıklarla karşılaştır."
    ],
    "chapters": [
      {
        "title": "1. Önce özne ve ana yüklemi belirle",
        "idea": "Yan cümleleri geçici olarak çıkar; ana yargı kalsın.",
        "explanation": "'The findings of the study, which was conducted in three countries, suggest...' cümlesinde ana özne 'the findings', ana yüklem 'suggest'tir. 'which was conducted...' çalışmayı niteler. Bir seçenek bulguların değil araştırmacıların bir şeyi düşündürdüğünü söylüyorsa kaymıştır.",
        "example": "The findings suggest that early intervention may prevent complications.",
        "translation": "Bulgular, erken müdahalenin komplikasyonları önleyebileceğini düşündürmektedir.",
        "reason": "'suggest' = işaret etmek/düşündürmek; 'may' = olasılık. 'Bulgular erken müdahalenin kesinlikle önlediğini kanıtladı' çevirisi iki kez anlamı güçlendirip bozar.",
        "trap": "suggest → prove; may → must gibi kesinlik artışlarına dikkat."
      },
      {
        "title": "2. Olumsuzluk ve sınırlandırıcı sözcükler",
        "idea": "not, only, hardly, unless, no longer, rather than gibi küçük sözcükler puan getirir.",
        "explanation": "'Not all studies agree' = bütün çalışmalar hemfikir değildir; 'All studies do not agree' cümlesi bazı bağlamlarda belirsiz olabilir. 'Only if' = ancak ... ise. 'Unless' = ... olmadıkça. 'Rather than' = ... yerine. Bunlar görünüşte kısa ama anlamı ters çevirebilen ifadelerdir.",
        "example": "The treatment should not be prescribed unless the benefits outweigh the risks.",
        "translation": "Yararları risklerinden ağır basmadıkça tedavi reçete edilmemelidir.",
        "reason": "'unless' olumsuz koşul kurar; 'should not' ana yargıyı olumsuz yapar. Çevirinin 'yararlar üstün gelirse verilmemelidir' demesi ters anlama gelir.",
        "trap": "Unless ve not ikilisini aceleyle çift olumsuzluk sayıp doğru anlamı kaybetme."
      },
      {
        "title": "3. Zaman ve edilgenliği koru",
        "idea": "'has been shown', 'was observed', 'will be required' birbirinden farklı zaman ve kesinlik anlatır.",
        "explanation": "'Has been shown to...' araştırmalarla bugüne kadar gösterildiğini, 'was observed' geçmişte gözlemlendiğini, 'will be required' ileride gerekli olacağını belirtir. Ayrıca passive çeviride kimi zaman Türkçede edilgen çatıyı doğal biçimde korumak gerekir. 'The samples were analysed' = örnekler analiz edildi.",
        "example": "Several factors have been identified as possible causes of the decline.",
        "translation": "Azalmanın olası nedenleri olarak çeşitli etkenler belirlenmiştir.",
        "reason": "'have been identified' present perfect passive, 'possible' olasılık sınırı koyar. 'Kesin nedenler belirlenecektir' hem zaman hem kesinlik hatasıdır.",
        "trap": "possible, likely, may, might sözcüklerini atlamak metnin bilimsel kesinliğini değiştirir."
      },
      {
        "title": "4. Niteleme zincirini parçalara ayır",
        "idea": "Relative clause ve of öbekleri hangi isme bağlıysa Türkçede de aynı ismi nitelemelidir.",
        "explanation": "'The effect of a policy designed to reduce inequality' = eşitsizliği azaltmak için tasarlanmış politikanın etkisi. 'designed to...' ifadesi 'policy'yi niteler, 'effect'i değil. İleri düzey çeldiriciler aynı sözcükleri kullanıp niteleme ilişkisini karıştırır.",
        "example": "The data collected from patients receiving treatment were analysed separately.",
        "translation": "Tedavi gören hastalardan toplanan veriler ayrı ayrı analiz edildi.",
        "reason": "'receiving treatment' hastaları; 'collected from patients' verileri niteler. Ana yüklem 'were analysed' = analiz edildi.",
        "trap": "Tedavi görenin veri olduğunu söyleyen anlamsız çevirileri ilk bakışta ele."
      },
      {
        "title": "5. Son kontrol: beş kritik unsur",
        "idea": "Çeviriyi doğru seçmeden önce özne, fiil, zaman, olumsuzluk ve bağlacın hepsi korunmuş olmalı.",
        "explanation": "Seçenekleri tek tek Türkçe yeniden yazmak zaman kaybettirir. Kaynak cümledeki beş kritik unsuru işaretle ve her şıkkı yalnızca bunlara göre ele. 'Although' → -e rağmen; 'because' → çünkü; 'therefore' → bu nedenle. Bu işaretçiler bütün metni çevirmeden doğru seçeneği buldurabilir.",
        "example": "Although the results were promising, the researchers emphasized the need for further trials.",
        "translation": "Sonuçlar umut verici olmasına rağmen araştırmacılar ek deneylere duyulan ihtiyacı vurguladı.",
        "reason": "Zıtlık korunmalı ('although'); sonuçlar umut verici ama yeni deney gerekli. İhtiyacın ortadan kalktığını söyleyen çeviri yanlış.",
        "trap": "Bir seçenek 10 kelimenin 9'unu doğru taşısa bile 'although'yu 'because'a çeviriyorsa yanlıştır."
      }
    ],
    "worked": [
      {
        "type": "Kesinlik ve olumsuzluk",
        "question": "'The results may indicate a relationship, but they do not establish causation.' cümlesinin doğru anlamı hangisidir?",
        "options": [
          "Sonuçlar nedenselliği kanıtlamış olabilir.",
          "Sonuçlar bir ilişkiye işaret edebilir, ancak nedenselliği ortaya koymaz.",
          "Sonuçlar arasında kesin bir neden-sonuç ilişkisi vardır.",
          "Sonuçlar ilişki olmadığını kanıtlar.",
          "Sonuçlar yalnızca nedenselliği açıklar."
        ],
        "answer": 1,
        "steps": [
          "May indicate = işaret edebilir: kesinlik değil, ihtimal.",
          "But = ancak; do not establish = ortaya koymaz/kanıtlamaz.",
          "Bu üç işareti koruyan seçenek B."
        ],
        "takeaway": "May/might ve do not gibi küçük ifadeler çeviri sorusunda belirleyicidir."
      },
      {
        "type": "Koşul ilişkisini koruma",
        "question": "'Unless additional evidence emerges, the conclusion should remain tentative.' için doğru çeviri hangisidir?",
        "options": [
          "Ek kanıtlar ortaya çıkarsa sonuç kesin kabul edilmelidir.",
          "Ek kanıtlar ortaya çıkmadıkça sonuç ihtiyatlı değerlendirilmelidir.",
          "Ek kanıtların ortaya çıkması sonuçların kesinliğini gösterir.",
          "Sonuç ihtiyatlı olduğu için kanıt gerekmez.",
          "Ek kanıtlar sonuçları değiştiremez."
        ],
        "answer": 1,
        "steps": [
          "Unless = ... olmadıkça.",
          "Should remain tentative = kesin değil, geçici/ihtiyatlı kalmalı.",
          "İki unsuru birlikte taşıyan B."
        ],
        "takeaway": "Unless işaretini olumsuz koşul olarak çevir."
      }
    ],
    "check": {
      "question": "'The findings are unlikely to be generalized to the entire population.' cümlesinin anlamı nedir?",
      "options": [
        "Bulgular kesin olarak tüm topluma genellenir.",
        "Bulguların tüm nüfusa genellenmesi pek olası değildir.",
        "Bulgular tüm nüfusa genellenmek zorundadır.",
        "Bulguların tamamı nüfusa aittir.",
        "Bulgular yalnızca nüfus tarafından üretilmiştir."
      ],
      "answer": 1,
      "explanation": "B) 'unlikely' = pek olası değil; 'be generalized' = genellenmek. Olumsuz olasılık ve edilgenlik birlikte korunmalıdır."
    },
    "revision": [
      "Çeviride önce ana yargıyı 5 kelimeyle Türkçe özetle.",
      "only, unless, rather than, may, not gibi kritik sözcükleri işaretle.",
      "Relative clause'un hangi ismi nitelediğini doğrula.",
      "Kelime benzerliği değil, anlam eşdeğerliği ara."
    ]
  },
  "completion": {
    "goal": "Boşluğu tek başına güzel bir cümleyle değil, öncesi ve sonrasının zorunlu kıldığı mantıkla tamamlamak.",
    "overview": [
      "Cümle tamamlama, parça ile bütün arasındaki mantık bağını ölçer. Verilen cümle bir neden, sonuç, karşıtlık, koşul ya da amaç kuruyorsa eksik bölümün bu ilişkiyi sürdürmesi gerekir.",
      "Seçeneklerdeki zaman, özne, zamir ve bağlaçlara bak. Bir seçenek dilbilgisel olarak kusursuz olsa bile cümlenin yarısıyla aynı fikri kurmuyorsa elenir."
    ],
    "chapters": [
      {
        "title": "1. Boşluk hangi yarıda, hangi görevde?",
        "idea": "Verilen yarının işaretçileri eksik bölümün görevini söyler.",
        "explanation": "'Although the initial trial was successful, _____' yapısında boşluğa beklenmedik sınırlama gelir. '_____ because the sample size was too small' yapısında boşluk sonuç veya karar olur. Parçayı Türkçeye çevir ve 'ne eksik?' sorusunu sor.",
        "example": "Although the device was accurate, it was too expensive for routine use.",
        "translation": "Cihaz doğru sonuç verse de rutin kullanım için fazla pahalıydı.",
        "reason": "Although bir beklenti tersliği kurar. İki parça da olumlu veya ikisi de olumsuzsa zıtlık güçsüz kalır.",
        "trap": "Although ile iki benzer olumlu bilgi veren şıkkı ele."
      },
      {
        "title": "2. Zamir ve ortak özne zinciri",
        "idea": "it, they, this, such, these zamirlerinin gönderimi kaybolmamalı.",
        "explanation": "İlk parçada 'the participants' deniyorsa ikinci parçada 'they' katılımcıları anlatabilir. Ama 'it' tekil başka bir nesne gerektirebilir. 'This finding' sözü önce ifade edilmiş bir bulguyu gerektirir. Referansı olmayan zamir, dilbilgisi doğru olsa bile bağlam kırığı yaratır.",
        "example": "The participants received regular feedback, which helped them maintain motivation.",
        "translation": "Katılımcılar düzenli geri bildirim aldı; bu durum motivasyonlarını sürdürmelerine yardımcı oldu.",
        "reason": "'which' önceki eylemin sonucunu açıklar, 'them' katılımcılara gönderme yapar.",
        "trap": "Gönderimi belli olmayan 'they/it' kullanılan bir seçeneği sırf dilbilgisi doğru diye seçme."
      },
      {
        "title": "3. Sebep–sonuç ve koşul ilişkisi",
        "idea": "Cümle 'bu yüzden', 'ancak ... ise', 'olmadıkça' diyorsa seçenek bunu tamamlamalıdır.",
        "explanation": "'Unless additional funding is provided, ...' ifadesi fon sağlanmazsa ne olacağını sorar. 'If the results are replicated, ...' ifadesi sonuç tekrarlandığı takdirde ne yapılacağını sorar. Soru kökünde zaman/koşul ilişkisini ters çevirmek sık bir tuzaktır.",
        "example": "Unless the sample size is increased, the findings may remain inconclusive.",
        "translation": "Örneklem büyüklüğü artırılmadıkça bulgular kesin sonuca ulaşamayabilir.",
        "reason": "Kısıtlı örneklemin sonucu belirsizliktir. Unless + olumsuz koşul bu mantığı taşır.",
        "trap": "Unless'ı 'if' ile aynı yönde sanıp olumlu şart veren cevabı seçme."
      },
      {
        "title": "4. Anlamsal köprü: tekrar değil ilerleme",
        "idea": "İkinci parça birincinin aynısını tekrarlamaz; örnek, sonuç, gerekçe ya da karşıtlık ekler.",
        "explanation": "'Recent studies have identified several risk factors, ...' ardından bu faktörlerin ne yaptığı veya neden önemli olduğu gelebilir. Tamamen başka bir konuya geçmek uymaz. 'Similarly' paralel bilgi; 'therefore' sonuç; 'however' karşıtlık gerektirir. Önce ilişkiyi bir okla çiz.",
        "example": "The data were incomplete; therefore, the researchers postponed their analysis.",
        "translation": "Veriler eksikti; bu nedenle araştırmacılar analizlerini erteledi.",
        "reason": "Eksik veri → erteleme doğal neden–sonuç akışıdır.",
        "trap": "Sadece aynı konu kelimelerini içeren ama ilişki kurmayan şık doğru değildir."
      }
    ],
    "worked": [
      {
        "type": "Zıtlık köprüsü",
        "question": "Although digital learning tools can improve access to education, _____ .",
        "options": [
          "they may also deepen existing inequalities",
          "they are available on many devices",
          "technology has developed rapidly",
          "some students attend universities",
          "digital tools require software"
        ],
        "answer": 0,
        "steps": [
          "Although + olumlu bilgi: erişimi artırabilir.",
          "Devamı bunun karşıt maliyetini veya sınırlamasını vermeli.",
          "Eşitsizliği derinleştirebilir seçeneği zıtlık kurar. A."
        ],
        "takeaway": "Bağlaç hangi düşünceyi zorunlu kılıyorsa onu seç."
      },
      {
        "type": "Neden/sonuç köprüsü",
        "question": "Since the initial sample was not representative, _____ .",
        "options": [
          "the findings were treated with caution",
          "the population had several groups",
          "all research relies on evidence",
          "the survey included many questions",
          "the experiment used a computer"
        ],
        "answer": 0,
        "steps": [
          "Since burada -dığı için anlamındadır.",
          "Temsil gücü olmayan örneklem → sonuçları dikkatli yorumlamak gerekir.",
          "A seçeneği ilişkinin sonucunu verir."
        ],
        "takeaway": "Since hem zamansal hem nedensel olabilir; anlamdan ayır."
      }
    ],
    "check": {
      "question": "Unless the data are checked for errors, _____ .",
      "options": [
        "the conclusions may be misleading",
        "the method was widely accepted",
        "researchers have always studied this topic",
        "the laboratory is located abroad",
        "the sample was selected randomly"
      ],
      "answer": 0,
      "explanation": "A) the conclusions may be misleading. Veriler hata açısından kontrol edilmedikçe sonuçlar yanıltıcı olabilir: koşul ve sonuç tutarlı."
    },
    "revision": [
      "Cümlenin ilk yarısını tek başına Türkçe özetle.",
      "Bağlaç veya koşul varsa eksik bölümün hangi görevi gördüğünü söyle.",
      "it/they/this referansını kontrol et.",
      "Şık yalnız konuca benzer değil, neden-sonuç olarak da uyumlu olmalı."
    ]
  },
  "paragraph": {
    "goal": "Ana fikir, ayrıntı, çıkarım ve yazarın tutumu sorularını birbirine karıştırmadan metinden kanıt bulmak.",
    "overview": [
      "YÖKDİL okuma sorularında doğru cevap genellikle metnin İngilizce ifadesinin aynısını kullanmaz; daha kısa, başka kelimelerle (paraphrase) aktarır. Bu yüzden bütün metni Türkçeye birebir çevirmeye çalışmak yerine soru türünü tanıyıp ilgili kanıtı bulmak zaman kazandırır.",
      "Okuma sırasında her paragrafın yanına 3–5 kelimelik not koy: sorun, yöntem, bulgu, sınırlama, sonuç. 'However', 'despite', 'therefore', 'in contrast' gibi yön değiştiren ifadeler genellikle ana argümanı ve doğru cevabı gösterir."
    ],
    "chapters": [
      {
        "title": "1. Ana fikir sorusu: örnek değil ana iddia",
        "idea": "Main idea/best title sorusu metnin bütününü kapsamalı; tek ayrıntıyı değil.",
        "explanation": "Bir metinde hastalık yaygınlığı, yeni tedavi ve tedavinin sınırlılıkları varsa, başlık bunların ortak iddiasını özetler. Tek bir cümlede geçen yaş grubunu başlık yapan seçenek çoğu zaman aşırı dar kalır. Metnin giriş ve sonuç cümlesini, ara paragrafların tekrar eden kavramlarıyla karşılaştır.",
        "example": "Digital health services can improve access, but their benefits depend on infrastructure and equitable design.",
        "translation": "Dijital sağlık hizmetleri erişimi artırabilir; ancak yararları altyapıya ve adil tasarıma bağlıdır.",
        "reason": "Bu metnin ana fikri 'dijital sağlık hizmetlerinin fırsatları ve sınırlamaları'dır. Sadece 'yeni yazılımlar' veya 'bir cihazın fiyatı' ayrıntı seviyesinde kalır.",
        "trap": "Başlığa genel bir kelime koymak yeterli değildir; metnin ana gerilimini ve iddiasını yansıtmalı."
      },
      {
        "title": "2. Ayrıntı sorusu: kanıtın yerini bul",
        "idea": "According to the passage / Which statement is true? sorusunda metne dönerek satır kanıtı ara.",
        "explanation": "Soru kökündeki anahtar sözcükleri belirle: country, intervention, population, year, outcome. Metinde aynı kelime olmasa bile eş anlamlı karşılığını bul. 'decrease' metinde 'decline', 'participants' metinde 'subjects' olabilir. Doğru şık metindeki bir bilgiyle desteklenebilir olmalı; dışarıdan bildiğin gerçekler yeterli değildir.",
        "example": "The intervention reduced hospital admissions among older adults but showed limited benefits for younger patients.",
        "translation": "Müdahale yaşlı yetişkinlerde hastane yatışlarını azalttı ancak genç hastalarda yararı sınırlı kaldı.",
        "reason": "'Intervention benefits all ages equally' yanlış olur. İki grup arasındaki fark metinde açıkça belirtiliyor.",
        "trap": "Paragraftaki tek doğru kelimeyi taşıyan ama özne/grup/zaman değiştiren seçeneklere dikkat."
      },
      {
        "title": "3. Inference: metnin izin verdiği çıkarım",
        "idea": "Çıkarım metinde aynen yazmak zorunda değil ama metnin mantıken desteklediği sınırlar içinde kalır.",
        "explanation": "'May', 'some', 'often', 'suggest' gibi ifadeler kesinlik düzeyini belirler. 'Some participants experienced improvement' cümlesinden 'all patients will recover' çıkmaz. Eğer metin gözlemsel ilişki anlatıyorsa nedenselliği kesin kabul eden cevap da yanlıştır. Çıkarım için en az bir somut cümleyi kanıt olarak göster.",
        "example": "The researchers found an association between sleep duration and performance, although causality remains unclear.",
        "translation": "Araştırmacılar uyku süresi ile performans arasında bir ilişki buldu; ancak nedensellik belirsiz.",
        "reason": "'Sleep certainly causes improved performance' metinden çıkarılamaz. 'Further research is needed to determine causality' çıkarımı desteklenebilir.",
        "trap": "Metinde 'associated with' yazarken şık 'causes' diyorsa anlam güçlendirilmiştir."
      },
      {
        "title": "4. Referans soruları: this, they, such",
        "idea": "Zamirin yerini doldurarak okuma testi yap.",
        "explanation": "'These findings' hangi sonuçlara gönderme yapıyor? Önceki cümle ya da paragrafta yakın kavramı ara. 'They' çoğul kişileri veya nesneleri gösterir; en yakın çoğul isim her zaman doğru olmayabilir, anlam da uyumlu olmalı. Referansın yerine aday ismi koyup cümleyi yeniden oku.",
        "example": "The researchers compared two methods. They found that the second was more accurate.",
        "translation": "Araştırmacılar iki yöntemi karşılaştırdı. İkinci yöntemin daha doğru olduğunu buldular.",
        "reason": "'They' araştırmacılara gönderme yapar; yöntemler bulgu 'bulmaz'. Dilbilgisi ile gerçek anlam birlikte değerlendirilir.",
        "trap": "Zamiri sadece en yakın isimle eşleştirme; fiili kimin yapabileceğini de kontrol et."
      },
      {
        "title": "5. Süre yönetimi ve eleme",
        "idea": "Her bilinmeyen kelimede durma; soru kökü çözüm rotanı belirlesin.",
        "explanation": "Önce soruyu oku, sonra metinde ilgili kısmı hedefle. Ana fikir sorusunda bütün paragrafı; ayrıntı sorusunda ilgili cümle ve komşularını; çıkarımda birden fazla cümleyi kullan. Kesinlik bildiren 'always, never, exclusively, entirely' seçeneklerini metinden doğrula. Tekrar okuyorsan kendine şunu sor: hangi cümle bu şıkkı ispatlıyor?",
        "example": "Most participants reported improvement after the programme.",
        "translation": "Katılımcıların çoğu programdan sonra iyileşme bildirdi.",
        "reason": "'Most' = çoğu; 'all' = tamamı değildir. 'All participants recovered' metni aşırı geneller.",
        "trap": "Doğru cevabın metindeki kelimelerin birebir kopyası olmasını bekleme; doğru paraphrase olabilir."
      }
    ],
    "worked": [
      {
        "type": "Ana fikir",
        "question": "'Urban green spaces may improve well-being and reduce heat exposure, but access remains unequal across neighbourhoods.' Ana fikir hangisi?",
        "options": [
          "Every neighbourhood has enough green areas.",
          "Green spaces offer benefits, yet unequal access limits these benefits.",
          "Cities no longer experience heat waves.",
          "Only rural areas need green spaces.",
          "Green spaces always cause economic growth."
        ],
        "answer": 1,
        "steps": [
          "Olumlu yön: yeşil alanlar iyilik halini artırabilir ve sıcaklığa maruziyeti azaltabilir.",
          "Sınırlama: erişim mahalleler arasında eşit değildir.",
          "İki yönü birlikte taşıyan B şıkkıdır."
        ],
        "takeaway": "Ana fikir çoğu kez 'fayda + sınırlama' ikilisini tek cümlede toplar."
      },
      {
        "type": "Çıkarımda kesinlik seviyesi",
        "question": "'The findings suggest a possible link between diet and memory, although further studies are required.' Hangisi çıkarılabilir?",
        "options": [
          "Diet conclusively determines memory.",
          "No link exists between diet and memory.",
          "Researchers consider the link plausible but not yet confirmed.",
          "All people have the same dietary needs.",
          "Further studies are unnecessary."
        ],
        "answer": 2,
        "steps": [
          "Suggest + possible = olası ilişki.",
          "Further studies required = kanıt kesin değil.",
          "C seçeneği bu iki bilgiyi korur."
        ],
        "takeaway": "Sınavda 'possible/suggest' ifadelerini 'prove/always' diye güçlendiren şıkları ele."
      }
    ],
    "check": {
      "question": "Metin: 'The new method lowered costs in pilot studies, but its long-term effectiveness has not yet been established.' Hangisi desteklenir?",
      "options": [
        "The method has been proven effective over decades.",
        "The method increased costs in all studies.",
        "Pilot results showed lower costs, while long-term effectiveness remains uncertain.",
        "The method was never tested.",
        "Long-term evaluation is unnecessary."
      ],
      "answer": 2,
      "explanation": "C) Pilot uygulamalarda maliyet azaldı ama uzun dönem etki henüz kanıtlanmadı. 'But' sonrası sınırlama anahtar bilgidir."
    },
    "revision": [
      "Soru türünü seç: ana fikir / ayrıntı / çıkarım / referans.",
      "Her paragrafı 3–5 Türkçe kelimeyle özetle.",
      "Çıkarım için hangi cümlenin kanıt olduğunu göster.",
      "Most/some/may/suggest sözcüklerini all/must/prove ile karıştırma."
    ]
  },
  "paragraphComplete": {
    "goal": "Eksik cümleyi aynı konudan olduğu için değil, önceki ve sonraki cümlelerle mantıksal bağ kurduğu için seçmek.",
    "overview": [
      "Paragraf tamamlama sorularında seçeneklerin çoğu konuyla ilgili görünebilir. Doğru seçenek, boşluğun öncesindeki düşünceyi sürdürürken sonrasındaki cümleye de geçiş sağlamalıdır.",
      "Bu nedenle boşluğa iki taraftan bak: Yukarıdaki cümle ne vaat ediyor? Aşağıdaki cümle hangi referansla başlıyor? 'This', 'these', 'such', 'however', 'for this reason' gibi işaretler eksik cümlenin rolünü belirler."
    ],
    "chapters": [
      {
        "title": "1. Önce–sonra köprüsü",
        "idea": "Boşluktan önceki cümleyi A, sonraki cümleyi B diye düşün: eksik cümle A→B geçişi kurar.",
        "explanation": "A cümlesi bir sorunu tanıtıp B cümlesi çözümün yararını anlatıyorsa boşlukta çözüm yöntemi beklenir. A yeni teknoloji, B 'this approach' diyorsa boşlukta yaklaşımın tanımlanması gerekebilir. Her seçeneği iki komşu cümleyle ayrı ayrı dene.",
        "example": "Many regions face severe water shortages. [A new system collects and reuses rainwater.] This approach can reduce pressure on conventional supplies.",
        "translation": "Birçok bölge ciddi su kıtlığı yaşıyor. [Yeni bir sistem yağmur suyunu topluyor ve yeniden kullanıyor.] Bu yaklaşım geleneksel su kaynakları üzerindeki baskıyı azaltabilir.",
        "reason": "'This approach' önceki cümlede tanıtılan yağmur suyu sistemine gönderme yapar. Ortada sistem tanıtılmazsa referans kopar.",
        "trap": "Sonraki cümledeki 'this' neyi gösteriyor sorusunu atlama."
      },
      {
        "title": "2. Bağlaçların mantıksal talebi",
        "idea": "However zıtlık, therefore sonuç, for example örnek, moreover ek bilgi gerektirir.",
        "explanation": "Boşluk sonrası 'However' ile başlıyorsa boşluğun genelde aksi yönde bir önceki iddiayı kurması gerekir. 'For this reason' varsa önceki cümlede bir neden olmalı. Paragrafın her yerinde yalnız konunun değil, mantıksal akışın da tutarlı olmasına bak.",
        "example": "Remote work can reduce commuting time. However, it may also create difficulties in team communication.",
        "translation": "Uzaktan çalışma işe gidiş geliş süresini azaltabilir. Buna rağmen ekip iletişiminde zorluklar yaratabilir.",
        "reason": "However'ın öncesinde olumlu fayda, sonrasında dezavantaj var. İkinci cümle yine fayda söyleseydi geçiş anlamsızlaşabilirdi.",
        "trap": "'However'ı gördüğünde sıradan yeni bilgi değil, beklentinin tersini ara."
      },
      {
        "title": "3. Zamir ve belirli isim öbekleri",
        "idea": "This method, such changes, these findings gibi ifadelerin önceki referansını bul.",
        "explanation": "'This solution' deniyorsa daha önce bir çözüm önerilmiş olmalı; sırf problem tanımlanması yeterli olmayabilir. 'Such an effect' için önce belirli bir etki anlatılmalıdır. 'They' için gönderim yapılacak mantıklı çoğul özne aranır. Uygun aday isim seçenekte geçiyor mu kontrol et.",
        "example": "Researchers introduced a low-cost screening tool. This tool enabled earlier detection.",
        "translation": "Araştırmacılar düşük maliyetli bir tarama aracı geliştirdi. Bu araç daha erken tespiti mümkün kıldı.",
        "reason": "'This tool' ilk cümlede tanıtıldı. Bu referans, paragraf bütünlüğünü güçlendiriyor.",
        "trap": "İlgi alanı aynı diye referansı olmayan belirsiz bir cümleyi seçme."
      },
      {
        "title": "4. Paragrafın yönünü koru",
        "idea": "Genelden özele, sorundan çözüme, yöntemden bulguya ve bulgudan sınırlamaya ilerleyişi izle.",
        "explanation": "Bir araştırma paragrafı sıklıkla 'problem → yöntem → bulgu → yorum/sınırlama' akışındadır. Eksik cümlenin hangi basamağa denk geldiğini belirle. Son cümle bir çıkarımsa, boşlukta onu destekleyen somut bulgu bulunmalıdır. Metnin konusunu değiştiren veya geriye gereksiz dönen seçenekler zayıftır.",
        "example": "The study compared two teaching methods. Students using the interactive method performed better. These findings suggest that active learning may enhance outcomes.",
        "translation": "Çalışma iki öğretim yöntemini karşılaştırdı. Etkileşimli yöntemi kullanan öğrenciler daha iyi performans gösterdi. Bu bulgular aktif öğrenmenin sonuçları geliştirebileceğini düşündürüyor.",
        "reason": "Araştırma yöntemi → bulgu → yorum sırası doğal ve tutarlıdır.",
        "trap": "Bir 'sonuç' cümlesini henüz yöntem açıklanmadan erkene yerleştirme."
      }
    ],
    "worked": [
      {
        "type": "Referans köprüsü",
        "question": "Many coastal cities experience frequent flooding. _____. This strategy can lower the impact of extreme rainfall.",
        "options": [
          "Some cities were founded centuries ago.",
          "Local governments are installing permeable pavements and rain gardens.",
          "Coastal regions support diverse wildlife.",
          "Tourism is important for many economies.",
          "People have used maps for a long time."
        ],
        "answer": 1,
        "steps": [
          "İlk cümle sorun: sel.",
          "Son cümlede 'This strategy' = daha önce tanıtılan belirli çözüm.",
          "Geçirgen kaldırım ve yağmur bahçesi strateji sunar. B."
        ],
        "takeaway": "This strategy → önceki cümlede somut strateji aranır."
      },
      {
        "type": "Bilgi akışı",
        "question": "The trial initially showed promising results. _____. Researchers therefore recommended a larger follow-up study.",
        "options": [
          "All results were immediately considered final.",
          "However, the sample was too small for definitive conclusions.",
          "The laboratory opened many years ago.",
          "The equipment was available in several colours.",
          "The participants enjoyed reading books."
        ],
        "answer": 1,
        "steps": [
          "Başlangıçta olumlu sonuç var.",
          "Bitişte daha büyük çalışma öneriliyor: neden?",
          "Küçük örneklem belirsizlik doğurur; B iki tarafı bağlar."
        ],
        "takeaway": "Boşluk hem önceki hem sonraki cümleyi açıklamalı."
      }
    ],
    "check": {
      "question": "The new policy aims to increase public transport use. _____. As a result, more residents may choose buses instead of private cars.",
      "options": [
        "Cities also have museums.",
        "The policy includes lower ticket prices and more frequent services.",
        "Some people prefer different music styles.",
        "Transport systems were invented long ago.",
        "Private vehicles are manufactured in factories."
      ],
      "answer": 1,
      "explanation": "B) Düşük bilet fiyatı ve sık sefer somut teşvik; devamındaki 'As a result' ile otobüs tercihinin artması sonucuna bağlanır."
    },
    "revision": [
      "Boşluğun üstüne A, altına B etiketi koy; A→?→B köprüsünü kur.",
      "'This/these/such' ifadesinin işaret ettiği ismi belirle.",
      "Bağlaçların hangi ilişkiyi gerektirdiğini kontrol et.",
      "Yalnız ortak kelimeye bakma; düşünce akışını bozup bozmadığını sorgula."
    ]
  },
  "irrelevant": {
    "goal": "Paragrafın ana konusu değişmeden ilerlerken bu akışa hizmet etmeyen tek cümleyi ayırt etmek.",
    "overview": [
      "Anlam bütünlüğünü bozan cümle sorusu kelime farklılığını değil, düşünce kopukluğunu ölçer. Beş cümlenin dördü aynı argümana katkı yaparken biri farklı yön veya odak açar. Aynı sözcüklerin tekrar edilmesi bile o cümleyi ilgili yapmaz.",
      "Özellikle konu–örnek ayrımına dikkat et: Bir paragraf iklim değişikliğinin tarıma etkisini anlatırken 'sulama yöntemleri' örneği ilgili olabilir. Ancak 'tarımın tarihsel kökenleri'ne ayrıntılı geçiş, varsa bağlantı gösterilmedikçe akışı bozabilir."
    ],
    "chapters": [
      {
        "title": "1. Paragrafı tek cümleyle özetle",
        "idea": "İlk iş her cümleyi değil, paragrafın ortak iddiasını bulmaktır.",
        "explanation": "Cümleleri I–V şeklinde ayrı ayrı Türkçe 2–4 kelimeyle özetle. Örneğin I: sıcaklık artışı, II: kuraklık, III: ürün verimi, IV: tarihî tarım aletleri, V: uyum yöntemleri. Ortak çizgi iklimin verime etkisiyse IV şüphelidir. Ama doğrudan seçmeden IV'ün bir örnek olup olmadığını kontrol et.",
        "example": "Rising temperatures can reduce crop yields. Drought makes irrigation more difficult. Farmers therefore explore climate-resilient crops.",
        "translation": "Artan sıcaklıklar ürün verimini azaltabilir. Kuraklık sulamayı zorlaştırır. Bu nedenle çiftçiler iklime dayanıklı ürünlere yönelir.",
        "reason": "Bu cümleler ortak neden-sonuç zinciri kuruyor: sıcaklık/kuraklık → verim sorunu → çözüm.",
        "trap": "Aynı kelimeyi kullanmayan bir cümle bile ana düşünceyi geliştirebilir."
      },
      {
        "title": "2. Önceki ve sonraki cümle bağlantısı",
        "idea": "Kopuk cümleyi çıkardığında iki yanındaki cümle daha doğal bağlanmalıdır.",
        "explanation": "Şüpheli cümleyi geçici olarak sil. Geride kalanlar mantıklı bir bütün oluşturuyorsa doğru adaya yaklaşmışsındır. Silince 'this result' gibi gönderimi boşta kalan zamir oluşuyorsa o cümle önemli olabilir. Böylece yalnız konuya değil referans zincirine de bakarsın.",
        "example": "A study compared two treatment protocols. One protocol reduced recovery time. This finding led to further research.",
        "translation": "Bir çalışma iki tedavi protokolünü karşılaştırdı. Biri iyileşme süresini kısalttı. Bu bulgu yeni araştırmalara yol açtı.",
        "reason": "Son cümlede 'This finding' ikinci cümledeki azalmaya gönderme yapar. İkinci cümle çıkarılırsa referans kopar.",
        "trap": "Ortadaki teknik ayrıntıyı anlaşılmıyor diye otomatik eleme."
      },
      {
        "title": "3. Aynı konu, farklı odak tuzağı",
        "idea": "Her cümlede 'education' kelimesi geçmesi, bütün cümlelerin aynı fikir üzerinde olduğu anlamına gelmez.",
        "explanation": "Diyelim paragraf çevrim içi eğitimde erişim eşitsizliğini ele alıyor. 'Rural students may have limited internet access' ilgili; 'The history of universities dates back centuries' eğitimle ilgili ama erişim eşitsizliği iddiasını desteklemez. Anahtar kelimeleri değil düşünceyi takip et.",
        "example": "Digital courses can reach remote learners. However, unequal internet access limits participation. Affordable connectivity is therefore important.",
        "translation": "Dijital dersler uzaktaki öğrencilere ulaşabilir; ancak eşitsiz internet erişimi katılımı sınırlar. Bu nedenle uygun fiyatlı bağlantı önemlidir.",
        "reason": "Erişim fırsatı, engel ve çözüm tek bir argüman zinciri oluşturur.",
        "trap": "Sırf bütün cümlelerde 'internet/education' geçiyor diye anlam kopukluğunu göz ardı etme."
      },
      {
        "title": "4. Geçiş sözcükleriyle kontrol",
        "idea": "However, therefore, furthermore, for example, such gibi ifadeler bütünlüğün işaret levhalarıdır.",
        "explanation": "Bir cümle 'Therefore' ile başlıyorsa öncesinde onun nedeni bulunmalıdır. 'For example' sonrası az önceki genel fikrin örneği gelir. Şüpheli cümleyi kaldırınca bu ilişkiler daha net hale geliyorsa onu elemek mantıklıdır. Ama geçişin doğal kurulması için o cümle gerekiyorsa bırak.",
        "example": "The trial involved few participants. Therefore, its conclusions should be interpreted cautiously.",
        "translation": "Deneye az katılımcı alındı. Bu nedenle sonuçlar ihtiyatlı yorumlanmalıdır.",
        "reason": "Az katılımcı → düşük genelleme gücü → ihtiyatlı yorum. Therefore açık neden-sonuç bağını doğrular.",
        "trap": "'Moreover' ile başlayan cümle önceki bilgiyi desteklemiyorsa kopukluğu gösterebilir."
      }
    ],
    "worked": [
      {
        "type": "Konudan kopma",
        "question": "Hangisi akışı bozar? I) Urban trees reduce surface temperatures. II) They also improve air quality. III) The history of ancient trade routes is complex. IV) Tree planting can support urban health. V) Cities increasingly invest in green infrastructure.",
        "options": [
          "I",
          "II",
          "III",
          "IV",
          "V"
        ],
        "answer": 2,
        "steps": [
          "Ana konu kent ağaçlarının çevresel ve sağlık yararları.",
          "I, II, IV, V doğrudan bu konuyu geliştiriyor.",
          "III antik ticaret yollarına geçiyor; mantıksal köprü yok. C."
        ],
        "takeaway": "Kopukluk farklı bir kelime değil, farklı ana iddiadır."
      },
      {
        "type": "Aynı anahtar kelimeye aldanma",
        "question": "Hangisi akışı bozar? I) Online education can expand access. II) Internet inequality may still exclude some learners. III) Universities were founded in many historical periods. IV) Low-cost connections could improve participation. V) Policymakers should address digital barriers.",
        "options": [
          "I",
          "II",
          "III",
          "IV",
          "V"
        ],
        "answer": 2,
        "steps": [
          "Ana konu: çevrim içi eğitime erişim ve dijital eşitsizlik.",
          "III 'universities' diyerek eğitimle ilgili görünür ama tarihsel kuruluş bilgisini açar.",
          "III çıkarıldığında I→II→IV→V sorunsuz akış. C."
        ],
        "takeaway": "Aynı alan içinde olmak paragraf bütünlüğü kurmak için yeterli değildir."
      }
    ],
    "check": {
      "question": "Hangisi çıkarılmalı? I) Air pollution increases respiratory risks. II) Exposure is particularly harmful for vulnerable groups. III) Some ancient civilizations developed unique writing systems. IV) Reducing emissions can improve public health. V) Clean transport policies may help achieve this.",
      "options": [
        "I",
        "II",
        "III",
        "IV",
        "V"
      ],
      "answer": 2,
      "explanation": "C) III. Diğer cümleler hava kirliliği, sağlık etkisi ve emisyon azaltma çözümü etrafında ilerlerken III yazı sistemlerine geçer."
    },
    "revision": [
      "Her cümleyi 2–4 kelimelik Türkçe başlıkla not et.",
      "Ortak ana iddiayı bul, farklı odağa geçen cümleyi işaretle.",
      "Şüpheli cümleyi çıkarıp iki tarafı yeniden oku.",
      "'This/therefore/for example' bağlarının kaybolup kaybolmadığını denetle."
    ]
  }
};
