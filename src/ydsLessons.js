export const ydsLessons={
  "restatement": {
    "goal": "Uzun bir YDS cümlesini anlam kaybı yaşamadan başka sözcüklerle söyleyen şıkkı ayırt etmek.",
    "overview": [
      "Restatement, kelime bilgisi kadar anlam sınırlarını da ölçer. Doğru seçenek orijinal cümlenin öznesini, yüklemini, kesinlik düzeyini, koşul ve olumsuzluk yönünü değiştirmez.",
      "Şıklarda sıklıkla 'only if ↔ unless', 'despite ↔ although', 'owing to ↔ because of', 'have yet to ↔ have not ... yet' gibi eşdeğer yapılar bulunur. Her yakın anlam gibi görünen ifade birbirinin yerine geçmez."
    ],
    "chapters": [
      {
        "title": "1. Cümlenin değiştirilemeyen dört parçasını bul",
        "idea": "Özne, eylem, koşul ve kesinlik cümlenin omurgasıdır.",
        "explanation": "'Some researchers suggest that X may improve Y' derken hem 'some' hem 'suggest' hem 'may' belirsizlik katar. 'All researchers have proved X improves Y' aynı fikrin kesin ve evrensel hâle getirilmiş versiyonudur; yakın anlam değildir. Önce ölçülenleri bir not halinde yaz: some / suggest / may / improve.",
        "example": "The findings suggest that early intervention may reduce costs.",
        "translation": "Bulgular erken müdahalenin maliyetleri azaltabileceğine işaret ediyor.",
        "reason": "Suggest ve may ihtimal taşır. 'The findings prove early intervention always reduces costs' eşdeğer değildir.",
        "trap": "Might/may → definitely veya some → all dönüşümü yakın anlamı bozar."
      },
      {
        "title": "2. Unless, only if ve koşul tuzakları",
        "idea": "Olumsuz şartın yönü değişirse sonuç da değişir.",
        "explanation": "'The project will fail unless funding is obtained' = fon sağlanmazsa proje başarısız olur. Benzer ifade: 'Obtaining funding is necessary for the project to succeed.' Ancak 'If funding is obtained, the project will certainly succeed' daha güçlü bir iddiadır: gerekli şart her zaman yeterli şart değildir.",
        "example": "The policy is unlikely to succeed unless local authorities cooperate.",
        "translation": "Yerel yönetimler iş birliği yapmadıkça politikanın başarıya ulaşması pek olası değildir.",
        "reason": "İş birliği başarı için gerekli görünüyor; ancak iş birliği mutlaka başarı garantisi sağlamaz.",
        "trap": "Only if 'ancak ... olursa'; if '... olursa' ifadelerini aynı güçte sanma."
      },
      {
        "title": "3. Zıtlık ve neden-sonucu eşdeğer yapıyla söyle",
        "idea": "Despite + isim, although + cümle; because of + isim, because + cümle.",
        "explanation": "'Despite the delay, the project was completed' → 'Although the project was delayed, it was completed'. 'Owing to the shortage, production fell' → 'Production fell because supplies were insufficient'. Yapı dönüşse de özne/eylem ve ilişki korunur.",
        "example": "Despite substantial progress, the cause remains unknown.",
        "translation": "Kayda değer ilerlemeye rağmen neden bilinmiyor.",
        "reason": "'Although substantial progress has been made, the cause is still unidentified' aynı zıtlığı anlatır.",
        "trap": "Despite'ı because of ile değiştirmek neden-sonuç ilişkisi kurar ve anlamı bozar."
      },
      {
        "title": "4. Eş değer sözcük değil, eş değer iddia",
        "idea": "Kelimeler değişebilir ancak mantıksal kapsam aynı kalmalıdır.",
        "explanation": "'Only a minority of participants reported improvement' → 'Few participants said they had improved'. Ama 'The majority benefited' tam tersidir. 'Have yet to reach a conclusion' → 'have not reached a conclusion so far'. Böylece önce nicelik/kesinlik/olumsuzluk, ardından sözcük eş anlamlılığı incelenir.",
        "example": "The committee has yet to reach a final decision.",
        "translation": "Komite henüz nihai bir karar vermedi.",
        "reason": "'The committee has not made a final decision so far' aynı durumu bildirir. 'Will never decide' ise geleceğe ilişkin farklı iddiadır.",
        "trap": "Yet = henüz, never = hiçbir zaman değildir."
      }
    ],
    "worked": [
      {
        "type": "Koşulu dönüştür",
        "question": "Unless additional evidence emerges, the conclusion will remain tentative.",
        "options": [
          "If no further evidence appears, the conclusion will still be provisional.",
          "The conclusion is certain regardless of evidence.",
          "Additional evidence has already made the finding final.",
          "Evidence cannot change any conclusion.",
          "The conclusion is final if new evidence is absent."
        ],
        "answer": 0,
        "steps": [
          "Unless = if ... not.",
          "Remain tentative = geçici/ihtiyatlı kalmak.",
          "A hem olumsuz şartı hem kesin olmama durumunu korur."
        ],
        "takeaway": "Gerekli ve yeterli koşulu karıştırma."
      }
    ],
    "check": {
      "question": "'Only a small number of participants experienced side effects.' hangi cümleyle eşdeğerdir?",
      "options": [
        "Every participant had side effects.",
        "Most experienced serious effects.",
        "Few participants reported side effects.",
        "No participants were monitored.",
        "The study involved only children."
      ],
      "answer": 2,
      "explanation": "C) Few participants ... = az sayıda katılımcı. 'Only a small number' olumsuzluk değil sınırlı nicelik anlatır."
    },
    "revision": [
      "Özne-yüklem-zaman-koşul-kesinlik beşlisini işaretle.",
      "Unless ↔ if ... not, despite ↔ although yapı dönüşümünü çalış.",
      "Only/some/most/all ve may/must ayrımını kontrol et.",
      "Benzer kelimeli ama iddiası farklı şıkları ele."
    ]
  },
  "dialogue": {
    "goal": "YDS diyalog sorularında önceki ve sonraki konuşmaya göre mantıklı tek repliği seçmek.",
    "overview": [
      "Diyalog tamamlama sorusu genel İngilizce konuşma pratiği değil; anlam ilişkisi ve akıl yürütme sınavıdır. Eksik repliği yalnız önündeki konuşmayla değil, hemen sonrasındaki cevaba göre de seçersin.",
      "Önce eksik bölümün işlevini bul: öneri mi, itiraz mı, açıklama mı, soru mu, koşul mu? 'That would help' ifadesi bir yardım önerisinin; 'I hadn't considered that' yeni bir bakış açısının; 'You're right' bir iddianın ardından gelir."
    ],
    "chapters": [
      {
        "title": "1. Sonraki yanıtı önce oku",
        "idea": "Boşluk sonrası replik, eksik cümlenin ne yapmış olduğunu gösterir.",
        "explanation": "A: 'I can't access the report.' B: '___' A: 'That's a good idea. I'll call the library.' Son replikten B'nin kütüphaneyi aramayı önermiş olması gerektiği anlaşılır. Seçeneklerin gramerinden önce iletişim işlevini ele.",
        "example": "A: I am not sure how to verify these figures. B: Why don't we compare them with last year's report? A: That makes sense.",
        "translation": "A: Rakamları nasıl doğrulayacağımı bilmiyorum. B: Geçen yılın raporuyla karşılaştırsak? A: Mantıklı.",
        "reason": "'That makes sense' doğrudan öneriyi onaylar; uzun açıklama gerektirmez.",
        "trap": "Aynı konuyla ilgili ama 'That makes sense' yanıtına mantıklı şekilde bağlanmayan seçenek yanlış olabilir."
      },
      {
        "title": "2. Repliğin niyetini etiketle",
        "idea": "Öneri, bilgi isteme, şüphe, açıklama veya düzeltme seçenekleri farklı cevaplar doğurur.",
        "explanation": "'Could you explain ...?' açıklama bekler. 'Do you agree?' görüş bekler. 'Would it help if ...?' öneri sunar. Sonraki repliğe bakıp niyet etiketini koyarsan ilgisiz seçenekleri kolayca çıkarırsın.",
        "example": "A: Would revising the sample size improve reliability? B: Probably, but we would need a larger budget. A: I see; funding is the main obstacle.",
        "translation": "A: Örneklem büyüklüğünü değiştirmek güvenilirliği artırır mı? B: Muhtemelen, ama daha büyük bütçe gerekir. A: Anlıyorum, finansman engel.",
        "reason": "B teknik bir olasılık + bütçe kısıtı bildiriyor; A'nın son cümlesi 'funding' bilgisine gönderme yapıyor.",
        "trap": "Sonraki repliğin hiçbir terimine bağlanmayan iddiaları ele."
      },
      {
        "title": "3. Zamir ve işaret sözcüklerini takip et",
        "idea": "That, it, they, such a problem ifadelerinin önceki replikte karşılığı olmalı.",
        "explanation": "'That might explain the difference' cevabındaki 'that' önceki konuşmada belirtilmiş bir sebebi işaret eder. Eksik cümle bir sebep sunmuyorsa referans kopar. Aynı şekilde 'They were delivered late' cevabındaki 'they' önceden çoğul bir nesne gerektirir.",
        "example": "A: The participants were recruited from different age groups. B: That could explain the variation in responses.",
        "translation": "A: Katılımcılar farklı yaş gruplarından seçildi. B: Bu, yanıtların farklılığını açıklayabilir.",
        "reason": "That = yaş grubu farklılığı. Variation açıklaması böylece anlam kazanır.",
        "trap": "Zamir referansı olmayan cümleyi sırf konuya yakın diye seçme."
      },
      {
        "title": "4. Üç adımlı 25 saniye tekniği",
        "idea": "Son yanıtı anlamlandır, eksik repliğin işlevini seç, iki tarafa birlikte uyumu denetle.",
        "explanation": "1: Boşluğun altındaki yanıtı Türkçeye özetle. 2: Bu yanıtı tetikleyen soru/öneri/gerekçeyi belirle. 3: Şıkların yalnız birinin hem önceki hem sonraki mesajı tutarlı bağlayıp bağlamadığına bak. İki şık kalırsa zamir ya da neden-sonuç bağlantısını kontrol et.",
        "example": "A: The findings differ from those reported last year. B: Perhaps the two studies used different methods. A: That's possible; we should compare their procedures.",
        "translation": "A: Bulgular geçen yıla göre farklı. B: Belki yöntemler farklıydı. A: Olabilir; prosedürleri karşılaştırmalıyız.",
        "reason": "B olası neden söylüyor; A bundan türeyen kontrol önerisiyle karşılık veriyor.",
        "trap": "Sadece ilk repliğe uyup son repliğe uymayan seçeneği kabul etme."
      }
    ],
    "worked": [
      {
        "type": "Son replikten geriye git",
        "question": "A: 'I cannot locate the full article.' B: '_____' A: 'Thanks, I will ask them this afternoon.'",
        "options": [
          "The library staff may be able to get you a copy.",
          "The article was published last year.",
          "I do not enjoy academic writing.",
          "That seems irrelevant to the project.",
          "You should already know the answer."
        ],
        "answer": 0,
        "steps": [
          "'ask them' çoğul bir kişi grubuna gider.",
          "A, B'nin önerdiği bir gruba soru soracağını söylüyor.",
          "Library staff uygun referanstır. Doğru A."
        ],
        "takeaway": "Them zamiri = library staff; öneri ve referans birlikte eşleşir."
      }
    ],
    "check": {
      "question": "A: 'Our results were less reliable than expected.' B: '_____' A: 'That's true; we only tested fifteen participants.'",
      "options": [
        "The location of the conference is beautiful.",
        "Perhaps the sample size was too small.",
        "The paper was printed in colour.",
        "All participants have the same name.",
        "I enjoyed the music."
      ],
      "answer": 1,
      "explanation": "B) Perhaps the sample size was too small. Sonraki replik 15 katılımcıya atıf yapıyor."
    },
    "revision": [
      "Boşluk sonrası repliği önce oku.",
      "Eksik cümlenin işlevini belirle: soru/öneri/itiraz/gerekçe.",
      "That/it/they gönderimlerini eşleştir.",
      "Seçeneğin iki komşu repliğe de uyduğunu doğrula."
    ]
  }
};
