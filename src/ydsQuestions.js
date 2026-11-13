/* YDS sınav tekniğine göre hazırlanmış özgün alıştırmalar, ÖSYM çıkmış soruları değildir. */
const raw=[
  [
    "Kelime",
    "The government implemented a series of measures to _____ the effects of the economic downturn.",
    [
      "exacerbate",
      "mitigate",
      "dismiss",
      "overlook",
      "trigger"
    ],
    1,
    "Mitigate the effects = etkileri hafifletmek. 'Measures' ve 'economic downturn' olumlu bir önlem amacı gösterir."
  ],
  [
    "Kelime",
    "The researcher pointed out a major _____ in the argument, namely the lack of reliable evidence.",
    [
      "flaw",
      "asset",
      "remedy",
      "incentive",
      "outcome"
    ],
    0,
    "Flaw = kusur/zayıf nokta. Lack of evidence anlatımı bir eksikliğe işaret eder."
  ],
  [
    "Kelime",
    "The proposal was considered _____ because it required resources far beyond the allocated budget.",
    [
      "feasible",
      "sustainable",
      "impractical",
      "efficient",
      "comprehensive"
    ],
    2,
    "Impractical = uygulanabilir olmayan. Bütçenin çok üstünde kaynak gerektirmesi olumsuz değerlendirmeyi gerektirir."
  ],
  [
    "Kelime",
    "The changes are expected to _____ considerable benefits for local communities.",
    [
      "yield",
      "hinder",
      "diminish",
      "withhold",
      "refrain"
    ],
    0,
    "Yield benefits = fayda sağlamak. 'Expected to' ardından yalın fiil gelir."
  ],
  [
    "Kelime",
    "Despite initial skepticism, the theory gained _____ acceptance among scientists.",
    [
      "widespread",
      "negligible",
      "temporary",
      "reluctant",
      "irrelevant"
    ],
    0,
    "Gain widespread acceptance = geniş kabul görmek; despite ilk kuşku ile sonraki kabullenme arasında zıtlık oluşturur."
  ],
  [
    "Dilbilgisi",
    "Had the researchers taken the warnings more seriously, the equipment _____ damaged.",
    [
      "would not have been",
      "will not be",
      "had not",
      "has not been",
      "would not"
    ],
    0,
    "Devrik üçüncü tip koşul: Had + özne + V3, would have + V3; edilgen için been gerekir."
  ],
  [
    "Dilbilgisi",
    "Only after the report had been released _____ the extent of the problem.",
    [
      "the public realized",
      "did the public realize",
      "the public had realized",
      "has the public realized",
      "the public realizing"
    ],
    1,
    "Only after öne alındığında ana cümlede inversion gerekir: did + özne + yalın fiil."
  ],
  [
    "Dilbilgisi",
    "The committee recommended that the proposal _____ before any funds were allocated.",
    [
      "revising",
      "is revised",
      "be revised",
      "had revised",
      "would revising"
    ],
    2,
    "Recommend that + özne + (should) be + V3: öneri/istek subjunctive edilgen."
  ],
  [
    "Dilbilgisi",
    "Not until several independent studies were completed _____ the treatment widely accepted.",
    [
      "was",
      "it was",
      "had",
      "has",
      "being"
    ],
    0,
    "Not until öne alınırsa inversion: was the treatment widely accepted."
  ],
  [
    "Dilbilgisi",
    "The findings, _____ in several journals, have attracted considerable attention.",
    [
      "publishing",
      "were published",
      "published",
      "publish",
      "to publishing"
    ],
    2,
    "Reduced relative clause: findings which were published → findings published."
  ],
  [
    "Bağlaç",
    "The policy was introduced to reduce inequality; _____, its actual effects were difficult to measure.",
    [
      "therefore",
      "otherwise",
      "however",
      "similarly",
      "moreover"
    ],
    2,
    "Olumlu amaç ile ölçüm güçlüğü arasında zıtlık var: however."
  ],
  [
    "Bağlaç",
    "_____ more funds are made available, the project is unlikely to be completed on schedule.",
    [
      "Unless",
      "Because of",
      "Despite",
      "Whereas",
      "Moreover"
    ],
    0,
    "Unless = olmadıkça. Finansman olmazsa zamanında tamamlanamaz."
  ],
  [
    "Bağlaç",
    "The theory remains controversial _____ several recent studies have provided supporting evidence.",
    [
      "even though",
      "because of",
      "in addition to",
      "therefore",
      "in case"
    ],
    0,
    "Even though + tam cümle, beklenmedik zıtlık."
  ],
  [
    "Bağlaç",
    "_____ having extensive experience, the candidate struggled with the unfamiliar software.",
    [
      "Although",
      "Despite",
      "Because",
      "In order to",
      "Consequently"
    ],
    1,
    "Despite + V-ing: deneyimli olmasına rağmen. Although sonrasında özne-fiil beklenir."
  ],
  [
    "Bağlaç",
    "The city expanded its bus network _____ more residents could use public transportation.",
    [
      "owing to",
      "so that",
      "in spite of",
      "as a result",
      "whereas"
    ],
    1,
    "So that + özne + modal/fiil ile amaç bildirir."
  ],
  [
    "Cloze Test",
    "The rapid growth of online services has made data protection increasingly _____.",
    [
      "essential",
      "optional",
      "irrelevant",
      "obsolete",
      "unnecessary"
    ],
    0,
    "Çevrim içi hizmetler büyüdükçe veri koruma daha gerekli hâle gelir: essential."
  ],
  [
    "Cloze Test",
    "Although the survey reached thousands of participants, its findings cannot be _____ to every population.",
    [
      "applied",
      "generalized",
      "refused",
      "created",
      "overlooked"
    ],
    1,
    "Generalize findings to a population = bulguları topluma genellemek. Although ile sınırlama gelir."
  ],
  [
    "Cloze Test",
    "The researchers used a larger sample; _____, their conclusions became more reliable.",
    [
      "nevertheless",
      "as a result",
      "in contrast",
      "even though",
      "otherwise"
    ],
    1,
    "Büyük örneklem → daha güvenilir sonuç; as a result."
  ],
  [
    "Cloze Test",
    "It is important to account _____ potential differences between the two groups.",
    [
      "of",
      "from",
      "for",
      "at",
      "by"
    ],
    2,
    "Account for = hesaba katmak/açıklamak, kalıp for edatıyla kullanılır."
  ],
  [
    "Cloze Test",
    "The new method has the advantage _____ being less expensive than conventional procedures.",
    [
      "on",
      "at",
      "from",
      "of",
      "for"
    ],
    3,
    "Have the advantage of + V-ing/isim."
  ],
  [
    "Cümle Tamamlama",
    "Although the initiative received considerable public support, _____ .",
    [
      "its long-term financial viability remains uncertain",
      "its objective was to help local schools",
      "several meetings took place in the capital",
      "the programme was officially launched",
      "the proposal contained numerous sections"
    ],
    0,
    "Although zıtlık gerektirir: destek var, finansal sürdürülebilirlik belirsiz."
  ],
  [
    "Cümle Tamamlama",
    "Unless the findings are replicated in independent studies, _____ .",
    [
      "they should not be regarded as conclusive",
      "the experiments have already proved the theory",
      "the sample was collected last summer",
      "the equipment can be purchased online",
      "the published paper is written in English"
    ],
    0,
    "Unless → doğrulanmadıkça kesin sayılmamalı; koşul ve sonuç uyumu."
  ],
  [
    "Cümle Tamamlama",
    "The number of commuters using bicycles increased sharply after _____ .",
    [
      "the city introduced safer cycle lanes",
      "the annual report had been published elsewhere",
      "some countries rely on different currencies",
      "the research was unrelated to transport",
      "private companies changed their logos"
    ],
    0,
    "After + şehir güvenli bisiklet şeritleri ekledi → bisiklet kullanımında artış."
  ],
  [
    "Cümle Tamamlama",
    "Since the available evidence is still limited, _____ .",
    [
      "further investigations are required",
      "the hypothesis has been conclusively proved",
      "there is no reason to collect more data",
      "all experts necessarily agree",
      "the findings cannot be questioned"
    ],
    0,
    "Since burada because anlamındadır; sınırlı kanıt → daha fazla araştırma."
  ],
  [
    "Cümle Tamamlama",
    "The company invested in renewable energy technology so that _____ .",
    [
      "it could reduce its dependence on fossil fuels",
      "its electricity consumption had increased years before",
      "several universities were founded",
      "customers visited other countries",
      "the prices of all products remained unchanged"
    ],
    0,
    "So that amaç bildirir: fosil yakıt bağımlılığını azaltmak."
  ],
  [
    "Çeviri",
    "'Not all the proposed measures are expected to produce immediate results.' için en doğru çeviri hangisidir?",
    [
      "Önerilen önlemlerin hiçbirinin sonuç üretmesi beklenmemektedir.",
      "Önerilen önlemlerin tamamının hemen sonuç vermesi beklenmemektedir.",
      "Bütün önlemler kesinlikle hemen sonuç verecektir.",
      "Hemen sonuç vermeyen önlemler önerilmemiştir.",
      "Önlemlerin tamamı beklenmedik sonuçlar üretmiştir."
    ],
    1,
    "Not all = hepsi değil; 'hiçbiri' anlamına gelmez. Expected to = beklenmektedir."
  ],
  [
    "Çeviri",
    "'The relationship appears to be stronger than previously assumed.' için doğru çeviri hangisidir?",
    [
      "İlişki önceden varsayılandan daha güçlü görünmektedir.",
      "İlişki daha önce kesin olarak kanıtlanmıştır.",
      "Varsayımlar ilişkiden daha güçlüdür.",
      "İlişkinin var olmadığı anlaşılmıştır.",
      "İlişki eskiden daha zayıf kabul ediliyordu ve yok olmuştur."
    ],
    0,
    "Appears = görünmektedir, kesinlik değil; stronger than previously assumed karşılaştırması korunmalı."
  ],
  [
    "Çeviri",
    "'The project will proceed only if sufficient funding is secured.' doğru çeviri nedir?",
    [
      "Proje, yeterli finansman sağlanmasa da devam edecektir.",
      "Proje finansmanı sağlamayı amaçlamıyor.",
      "Proje ancak yeterli finansman sağlanırsa devam edecektir.",
      "Proje devam ettiği için finansman sağlanmıştır.",
      "Projenin devam etmesi finansmanı engelleyecektir."
    ],
    2,
    "Only if = ancak ... olursa. Koşulun yönü önemlidir."
  ],
  [
    "Çeviri",
    "'The results should be interpreted cautiously, given the small sample size.' doğru çeviri nedir?",
    [
      "Örneklem küçük olsa da sonuçlar kesindir.",
      "Sonuçlar örneklem büyüklüğünü artırmıştır.",
      "Örneklem küçük olduğundan sonuçlar dikkatle yorumlanmalıdır.",
      "Sonuçlar örneklemden bağımsızdır.",
      "Sonuçlar yalnızca büyük örneklemler için geçerlidir."
    ],
    2,
    "Given = göz önüne alındığında/olduğu için; should be interpreted cautiously = dikkatle yorumlanmalıdır."
  ],
  [
    "Paragraf",
    "'Public libraries do more than lend books. They provide access to digital resources, community events and study spaces, particularly benefiting people who lack such facilities at home.' Ana fikir hangisidir?",
    [
      "Libraries primarily sell electronic equipment.",
      "Public libraries support communities through services beyond book lending.",
      "All citizens have adequate study spaces at home.",
      "Community events are unrelated to libraries.",
      "Printed books have become illegal."
    ],
    1,
    "Birden çok hizmet örnekleniyor; ana fikir kütüphanelerin ödünç vermenin ötesindeki rolü."
  ],
  [
    "Paragraf",
    "'While renewable energy capacity has expanded considerably, inadequate storage infrastructure can make it difficult to maintain a stable supply.' What can be inferred?",
    [
      "Storage capacity is one challenge in relying on renewables.",
      "Renewable energy has never expanded.",
      "Storage technology has been banned.",
      "All electricity is produced by wind.",
      "A stable supply is always guaranteed."
    ],
    0,
    "While zıtlık kuruyor: büyüyen kapasiteye rağmen depolama sınırı."
  ],
  [
    "Paragraf",
    "'The study found a correlation between commuting time and stress levels, but the researchers cautioned that other factors might explain this pattern.' Which statement is supported?",
    [
      "Commuting definitely causes stress.",
      "The observed association does not establish a definite cause.",
      "The study proved all other factors irrelevant.",
      "Every worker travels the same distance.",
      "Stress cannot be measured."
    ],
    1,
    "Correlation nedensellik kanıtı değildir; 'other factors' ihtimali özellikle belirtilmiş."
  ],
  [
    "Paragraf",
    "'The company initially focused on domestic customers. After its products gained popularity, it began exporting to neighbouring countries.' What happened first?",
    [
      "The company expanded overseas.",
      "It stopped operating domestically.",
      "Its products became popular in its home market.",
      "Its foreign branches were closed.",
      "It stopped manufacturing products."
    ],
    2,
    "Initially domestic → popularity → exporting. Sıralama bilgisi."
  ],
  [
    "Paragraf Tamamlama",
    "Many urban areas are replacing concrete surfaces with green spaces. _____. As a result, local temperatures may decrease during heat waves.",
    [
      "Vegetation provides shade and contributes to cooling through evaporation.",
      "Concrete was invented many centuries ago.",
      "Cities have different municipal boundaries.",
      "Some residents work in office buildings.",
      "Weather forecasts can be inaccurate."
    ],
    0,
    "Yeşil alan → gölge/buharlaşma → sıcaklığın azalması. Köprü gerekli."
  ],
  [
    "Paragraf Tamamlama",
    "The initial results appeared promising. _____. For this reason, the research team recommended a larger trial.",
    [
      "However, only a small group of participants had been studied.",
      "All questions had already been answered.",
      "The findings were beyond any doubt.",
      "The topic became irrelevant overnight.",
      "There was no need for further testing."
    ],
    0,
    "Küçük örneklem sınırlaması, daha büyük deneme önerisini gerekçelendirir."
  ],
  [
    "Anlam Bütünlüğü",
    "Which sentence disrupts the flow? I) Efficient public transport can reduce congestion. II) It can also lower urban emissions. III) Some ancient artists used natural pigments. IV) Investment in reliable services may encourage drivers to switch. V) Transport planning is therefore important for sustainable cities.",
    [
      "I",
      "II",
      "III",
      "IV",
      "V"
    ],
    2,
    "III sanat malzemelerine geçiyor, toplu ulaşım argümanını kesiyor."
  ],
  [
    "Anlam Bütünlüğü",
    "Which sentence is irrelevant? I) A balanced diet may support long-term health. II) Nutrient needs vary between individuals. III) Dietary guidance should therefore be flexible. IV) Early printing presses transformed book production. V) Health professionals can help personalize dietary advice.",
    [
      "I",
      "II",
      "III",
      "IV",
      "V"
    ],
    3,
    "IV matbaa tarihi ile ilgili, beslenme tavsiyesi akışını bozuyor."
  ],
  [
    "Diyalog",
    "A: 'The report is due tomorrow, but some figures are still missing.' B: '_____' A: 'That would help; I can send you the draft this afternoon.'",
    [
      "Why don't I check the figures while you finish the draft?",
      "You should have avoided reading the report.",
      "I have never heard of this company.",
      "The deadline was last month.",
      "There is no need to submit anything."
    ],
    0,
    "B yardım önermeli; A 'That would help' diye yanıt veriyor."
  ],
  [
    "Diyalog",
    "A: 'Do you think the new regulations will reduce pollution?' B: '_____' A: 'True, effective enforcement is just as important.'",
    [
      "The policy was introduced decades ago.",
      "They might, but much depends on how strictly they are enforced.",
      "I have already booked a holiday.",
      "Pollution is always beneficial.",
      "No regulations have ever been discussed."
    ],
    1,
    "A 'enforcement important' diye onaylıyor; B uygulama sıkılığına değinmeli."
  ],
  [
    "Diyalog",
    "A: 'I couldn't access the article through the university database.' B: '_____' A: 'That's a good idea; I'll contact them now.'",
    [
      "You should never use academic sources.",
      "Perhaps the library staff can help you obtain it.",
      "All articles are written in one language.",
      "The database has always been free.",
      "I dislike the topic of the article."
    ],
    1,
    "B library staff'a danışmayı öneriyor; A onları arayacağını söylüyor."
  ],
  [
    "Diyalog",
    "A: 'The survey results seem inconsistent with last year's findings.' B: '_____' A: 'Yes, comparing the sampling methods might explain the difference.'",
    [
      "The results are always identical.",
      "Maybe the two studies used different samples.",
      "There is no reason to examine the method.",
      "The questionnaire was printed on paper.",
      "Last year will never occur again."
    ],
    1,
    "Sampling methods karşılaştırılması, örneklemlerin farklılığı önerisini takip eder."
  ],
  [
    "Diyalog",
    "A: 'Is there any evidence that the training improved productivity?' B: '_____' A: 'Then we should probably wait before drawing conclusions.'",
    [
      "The evidence is still preliminary and the sample is small.",
      "It has been proved beyond doubt.",
      "We can ignore all data.",
      "The course was held in a large room.",
      "Everyone enjoyed the lunch."
    ],
    0,
    "Son cümlede çıkarımı erteleme, B'de kanıtın sınırlı oluşuna bağlı."
  ],
  [
    "Yakın Anlam",
    "'The policy is unlikely to succeed unless local authorities cooperate.' Which option best restates it?",
    [
      "The policy will certainly succeed without local authorities.",
      "Cooperation from local authorities is necessary for the policy to have a good chance of succeeding.",
      "The policy has already succeeded independently of the authorities.",
      "Local authorities never cooperate with anyone.",
      "The policy is designed to prevent all cooperation."
    ],
    1,
    "Unless olmazsa anlamı: yerel yönetim desteği olmadan başarı beklenmez."
  ],
  [
    "Yakın Anlam",
    "'Despite considerable progress, the researchers have yet to identify the main cause.' Which sentence is closest in meaning?",
    [
      "Although they have made substantial progress, the researchers still do not know the main cause.",
      "The researchers identified the cause as soon as they started.",
      "No progress has been made toward the research.",
      "The main cause is no longer relevant.",
      "The study was abandoned because of success."
    ],
    0,
    "Despite = although; have yet to = hâlâ ... yapmadılar."
  ],
  [
    "Yakın Anlam",
    "'The committee postponed the decision owing to the lack of reliable evidence.' Which option is closest?",
    [
      "The decision was delayed because sufficient trustworthy evidence was unavailable.",
      "The committee accelerated the decision despite strong evidence.",
      "The decision was postponed after all evidence had been verified.",
      "No one considered the reliability of the evidence.",
      "Evidence was ignored because the decision was final."
    ],
    0,
    "Owing to = because of; postponed = delayed."
  ],
  [
    "Yakın Anlam",
    "'Only a few of the proposals were considered feasible.' Which option preserves the meaning?",
    [
      "Every proposal was practical.",
      "A small number of proposals were judged to be workable.",
      "None of the proposals was examined.",
      "Most proposals had already been implemented.",
      "All proposals were rejected without review."
    ],
    1,
    "Only a few = az sayıda; feasible = uygulanabilir, workable."
  ],
  [
    "Yakın Anlam",
    "'The findings do not rule out the possibility of an alternative explanation.' Closest meaning?",
    [
      "The findings prove that the proposed explanation is false.",
      "The results leave open the chance that another explanation may be valid.",
      "The researchers rejected every possible explanation.",
      "Alternative explanations are impossible.",
      "The findings conclusively establish one explanation."
    ],
    1,
    "Do not rule out = olasılığı dışlamamak; kesin sonuca varmamak."
  ]
];
export const ydsQuestions=raw.map(([category,question,options,answer,explanation],i)=>({id:`yds-${String(i+1).padStart(3,'0')}`,category,field:'Genel',examKind:'YDS',question,options,answer,explanation,source:'Özgün YDS alıştırması'}));
