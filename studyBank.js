/* Özgün öğrenme kartları; alanı belirtildi, ticari sözlük alıntısı değildir. */
const lines=`assess|değerlendirmek|assess the impact|Genel
contribute|katkıda bulunmak|contribute to development|Genel
significant|önemli; istatistiksel olarak anlamlı|significant improvement|Genel
consistent|tutarlı|consistent with the evidence|Genel
reluctant|isteksiz|reluctant to participate|Genel
inevitable|kaçınılmaz|inevitable consequence|Genel
subsequent|sonraki, müteakip|subsequent studies|Genel
prior|önceki|prior knowledge|Genel
in accordance with|-e uygun olarak|in accordance with standards|Genel
in terms of|bakımından|in terms of cost|Genel
in response to|-e karşılık olarak|in response to demand|Genel
in light of|ışığında|in light of findings|Genel
as opposed to|-e karşılık|as opposed to the former|Genel
in the absence of|yokluğunda|in the absence of evidence|Genel
to a great extent|büyük ölçüde|to a great extent|Genel
in relation to|-le ilgili olarak|in relation to the study|Genel
thereby|böylece|thereby reducing risks|Genel
hence|bu nedenle|hence the need for action|Genel
conversely|tersine|conversely the rate increased|Genel
likewise|aynı şekilde|likewise the results suggest|Genel
albeit|her ne kadar|albeit limited|Genel
notwithstanding|-e rağmen|notwithstanding the risk|Genel
in turn|buna karşılık; sırasıyla|which in turn leads to|Genel
attribute to|-e bağlamak|attribute the change to climate|Genel
be associated with|-le ilişkili olmak|associated with higher risk|Genel
be exposed to|-e maruz kalmak|exposed to pollutants|Genel
be subject to|-e tabi olmak|subject to review|Genel
pose a threat|tehdit oluşturmak|pose a threat to species|Genel
be likely to|olası olmak|likely to increase|Genel
be required to|zorunda olmak|required to provide evidence|Genel
undertake|üstlenmek; yürütmek|undertake research|Genel
obtain|elde etmek|obtain reliable data|Genel
reveal|ortaya çıkarmak|reveal a pattern|Genel
maintain|sürdürmek|maintain stability|Genel
estimate|tahmin etmek|estimate prevalence|Genel
induce|yol açmak; tetiklemek|induce a change|Genel
exceed|aşmak|exceed the limit|Genel
restrict|kısıtlamak|restrict access|Genel
facilitate|kolaylaştırmak|facilitate collaboration|Genel
ensure|sağlamak|ensure accuracy|Genel
adequate|yeterli|adequate resources|Genel
sufficient|yeterli|sufficient evidence|Genel
scarce|kıt|scarce resources|Genel
robust|sağlam; güçlü|robust findings|Genel
plausible|makul, olası|plausible explanation|Genel
controversial|tartışmalı|controversial issue|Genel
comprehensive|kapsamlı|comprehensive assessment|Genel
preliminary|ön|preliminary findings|Genel
conclusive|kesin sonuca götüren|conclusive evidence|Genel
affordable|karşılanabilir|affordable treatment|Genel
considerable|kayda değer|considerable variation|Genel
widespread|yaygın|widespread use|Genel
distinct|farklı, ayrı|distinct categories|Genel
relevant|ilgili|relevant information|Genel
inconsistent|tutarsız|inconsistent results|Genel
prominent|öne çıkan|prominent feature|Genel
likelihood|olasılık|likelihood of success|Genel
implication|çıkarım; olası sonuç|implications for policy|Genel
advancement|ilerleme|technological advancements|Genel
discrepancy|uyuşmazlık, fark|discrepancy between results|Genel
shortcoming|eksiklik|methodological shortcomings|Genel
feasible|uygulanabilir|feasible approach|Genel
obstacle|engel|obstacle to progress|Genel
constraint|kısıt|budget constraints|Genel
proportion|oran|a high proportion|Genel
substitute|yerine koymak|substitute one method for another|Genel
outcome|sonuç|clinical outcomes|Sağlık
incidence|yeni vaka görülme sıklığı|incidence rate|Sağlık
mortality|ölüm oranı|mortality rate|Sağlık
morbidity|hastalık görülme, hastalık yükü|morbidity burden|Sağlık
screening|tarama|screening program|Sağlık
diagnosis|tanı|early diagnosis|Sağlık
prognosis|hastalığın öngörülen seyri|favorable prognosis|Sağlık
symptom|belirti|persistent symptoms|Sağlık
efficacy|etkililik|treatment efficacy|Sağlık
dosage|doz|recommended dosage|Sağlık
side effect|yan etki|adverse side effects|Sağlık
inflammatory|iltihabi|inflammatory response|Sağlık
chronic|kronik|chronic condition|Sağlık
acute|akut|acute infection|Sağlık
contagious|bulaşıcı|contagious disease|Sağlık
immune response|bağışıklık tepkisi|immune response|Sağlık
pathogen|hastalık etkeni|pathogen transmission|Sağlık
susceptibility|yatkınlık|susceptibility to disease|Sağlık
preventive|önleyici|preventive measures|Sağlık
randomized|rastgele atanmış|randomized trial|Sağlık
placebo|etkisiz madde|placebo group|Sağlık
clinical trial|klinik çalışma|clinical trial results|Sağlık
complication|komplikasyon|postoperative complications|Sağlık
rehabilitation|rehabilitasyon|rehabilitation program|Sağlık
sedentary|hareketsiz|sedentary lifestyle|Sağlık
nutrient|besin öğesi|essential nutrients|Sağlık
deficiency|eksiklik|vitamin deficiency|Sağlık
hereditary|kalıtsal|hereditary disorder|Sağlık
mechanism|mekanizma|underlying mechanism|Fen
magnitude|büyüklük|magnitude of the change|Fen
compound|bileşik|chemical compound|Fen
reactive|tepkimeye giren|reactive material|Fen
absorb|soğurmak|absorb heat|Fen
release|salmak|release energy|Fen
emit|yaymak|emit radiation|Fen
conductivity|iletkenlik|thermal conductivity|Fen
resistant|dayanıklı|resistant material|Fen
degradation|bozulma|material degradation|Fen
precipitation|yağış; çökelme|annual precipitation|Fen
drought|kuraklık|prolonged drought|Fen
contamination|kirlenme|soil contamination|Fen
pollutant|kirletici|air pollutants|Fen
biodiversity|biyolojik çeşitlilik|loss of biodiversity|Fen
habitat|yaşam alanı|habitat fragmentation|Fen
renewable|yenilenebilir|renewable energy|Fen
nonrenewable|yenilenemez|nonrenewable resources|Fen
efficiency|verimlilik|energy efficiency|Fen
fluctuation|dalgalanma|temperature fluctuations|Fen
threshold|eşik|critical threshold|Fen
transformation|dönüşüm|chemical transformation|Fen
synthesis|sentez|protein synthesis|Fen
distribution|dağılım|species distribution|Fen
abundance|bolluk|relative abundance|Fen
catalyst|katalizör|act as a catalyst|Fen
intermittent|kesintili, aralıklı|intermittent supply|Fen
urbanization|kentleşme|rapid urbanization|Sosyal
governance|yönetişim|corporate governance|Sosyal
participation|katılım|political participation|Sosyal
legislation|mevzuat|new legislation|Sosyal
regulation|düzenleme|regulatory framework|Sosyal
compliance|uyum|regulatory compliance|Sosyal
incentive|teşvik|financial incentives|Sosyal
subsidy|sübvansiyon|government subsidies|Sosyal
revenue|gelir|tax revenue|Sosyal
expenditure|harcama|public expenditure|Sosyal
welfare|refah|social welfare|Sosyal
poverty|yoksulluk|poverty reduction|Sosyal
migration|göç|rural-to-urban migration|Sosyal
demographic|demografik|demographic shift|Sosyal
literacy|okuryazarlık|digital literacy|Sosyal
attainment|kazanım; erişilen düzey|educational attainment|Sosyal
curriculum|müfredat|school curriculum|Sosyal
perception|algı|public perception|Sosyal
prejudice|önyargı|social prejudice|Sosyal
bias|yanlılık|selection bias|Sosyal
attitude|tutum|consumer attitudes|Sosyal
inequity|hakkaniyetsizlik|health inequity|Sosyal
resilience|dayanıklılık|community resilience|Sosyal
stakeholder|paydaş|stakeholder engagement|Sosyal
labor force|işgücü|labor force participation|Sosyal
intergenerational|kuşaklar arası|intergenerational mobility|Sosyal
socioeconomic|sosyoekonomik|socioeconomic status|Sosyal`;
export const moreCards=lines.trim().split('\n').map((l,i)=>{const [word,meaning,example,field]=l.split('|');return {id:`m${i+1}`,word,meaning,example,field};});
