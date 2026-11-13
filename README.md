# 🎓 YÖKDİL HEDEF — Gün Gün Sınav Hazırlık Uygulaması

**Hedef puanını belirle, sınava kadar gün gün görev oluştur, yaptıklarını işaretle, deneme çöz, eksiklerini gör.**

Web ve mobil cihazda çalışan, kurulabilir **PWA**. Genel İngilizce eğitimi değil; YÖKDİL sınav türlerine, kelime/kalıp ezberine, süreli deneme ve yanlış analizine odaklıdır. Kullanıcı hesabı veya API anahtarı gerekmez.

## Özellikler

- **Hedef puan:** 0–100 arası. Örneğin **70 puan için 56 doğru** (80 soru, iptal yoksa).
- **Günlük kişisel plan:** Sınava kalan günlerin tamamı için ayrı ayrı konu, kelime kartları, kalıplar, soru hedefi ve yanlış analizi görevleri. Deneme günleri zamanla sıklaşır.
- **107 günlük örnek:** 13 Kasım 2026 başlangıç ve 28 Şubat 2027 YÖKDİL/1 sınavı seçildiğinde **107 gün**, 1. gün 13 Kasım, son gün 27 Şubat.
- **Tek tek tikleme:** Her görevi tamamlandıkça işaretle, geçmişte eksik kalan günlere geri dön. Soru oturumları tamamlanınca uygun günlük görev kendiliğinden işaretlenebilir.
- **Durum değerlendirme:** Tamamlanan görev oranı, geçen günlere göre plan uyumu, yeterli veri biriktiğinde yaklaşık puan ve aralık. Sınav tarihinde planın tam/eksik bitişi.
- **Soru ve deneme:** Her biri cevap açıklamalı, 5 seçenekli **özgün** YÖKDİL tarzı sorular. 80 soruluk / 180 dakikalık tam prova, 20 soruluk / 40 dakikalık mini deneme, konu ve yanlış tekrar testleri. Soru havuzu sınırlı olduğundan farklı denemelerde aynı sorular tekrar edebilir.
- **Sınav alanları:** Sağlık, Fen, Sosyal Bilimler. Alanına göre soru ve kelime listesi.
- **Konu kampı:** YÖKDİL tipi boşluk, tense/passive, bağlaç, cloze, çeviri, cümle tamamlama, paragraf tamamlama, anlam bütünlüğü ve okuma stratejileri.
- **Akademik kelime & kritik kalıp:** 170+ kelime kartı, kalıp bankası, öğrendim/tekrar listesi, günlük hedef kartları.
- **Resmî 2027 takvimi:** ÖSYM YÖKDİL/1, YÖKDİL/2 ve e-YÖKDİL tarihlerinin başvuru, geç başvuru ve sonuç bilgileri; canlı geri sayım; `.ics` takvim daveti.
- **Çıkmış sorular:** 2026 resmî ÖSYM soru kitapçıklarına ve sınav arşivine bağlantılar.
- **Yedekleme & soru içe aktarma:** Çalışma verilerini JSON yedekle / yükle. Hak sahibi olduğun soruları örnek şemayla içe aktar.

## GitHub üzerinden yayımlama (bilgisayara Node kurmadan)

1. Bu ZIP dosyasını **klasöre çıkar**. GitHub'ın web arayüzü ZIP dosyasını doğrudan çalışan bir repoya dönüştürmez; içindeki dosyaları yüklemek gerekir.
2. GitHub'da **New repository** oluştur (örneğin `yokdil-hedef`).
3. Repo içine dosyaları yükle. **`.github/workflows/pages.yml` dosyasının da klasör yapısıyla birlikte repo içinde olması gerekir.** GitHub Desktop veya Git kullanmak, gizli `.github` klasörünü de aktarmak açısından en kolay yoldur.
4. Repo için **Settings → Pages → Build and deployment → Source: GitHub Actions** seçeneğini aç.
5. `main` dalına yüklemenin ardından Actions sekmesindeki `Publish YOKDIL Hedef to GitHub Pages` iş akışı `npm install`, test ve build işlemlerini otomatik yapar. Başarılı olduğunda site adresin genellikle `https://KULLANICI.github.io/yokdil-hedef/` olur (repo adına bağlı).
6. Telefonda bu adresi aç → tarayıcıdan **Ana ekrana ekle / Uygulamayı yükle**. HTTPS olduğu için PWA kurulumu desteklenir. iPhone'da Safari paylaş menüsünü, Android'de Chrome'un yükleme seçeneğini kullan.

> Site adresini sadece senin kullanman şart değil; kamuya açık GitHub Pages yayını herkes tarafından açılabilir. Kişisel çalışma verileri **siteye yüklenmez**; cihazdaki tarayıcıda tutulur.

### Alternatif: yerelde çalıştırma

Node.js 20.19+ veya Node.js 22+ gerektirir.

```bash
npm install
npm run dev
```

Aç: `http://localhost:5173`

```bash
npm test
npm run build
```

`dist/` çıktısını Netlify, Vercel veya başka statik sunucuya da yükleyebilirsin. GitHub Pages yayını için proje zaten iş akışı içerir.

## Puan tahmini nasıl çalışır?

- **80 soruda 100 puan**: Soru iptali olmayan olağan puanlamada bir doğru **1,25 puan**. Yanlışlar doğrulardan düşülmez.
- Uygulama **en az 20 farklı soruda** cevap verene kadar tahmin üretmez.
- Aynı soruyu tekrar çözersen yalnızca en son cevabı kullanılır. Doğruluk oranı 100 puan ölçeğine taşınır; yaklaşık bir belirsizlik aralığı hesaplanır.
- Bu **öğrenme göstergesidir**, psikometrik olarak kalibre edilmiş ÖSYM tahmini değildir. Soru zorlukları ve gerçek sınav koşulları farklı olabilir; 70 görülmesi gerçek sınavda 70 alınacağı anlamına gelmez.
- İşaretlenen görevlerin tamamlanması ayrı hesaplanır: yalnız tik atarak sınav puanı yükseltilmez.
- En az 7 gün geçince o ana kadarki günlük görev uyumu, **mevcut tempoyla yaklaşık plan tamamlanma oranı** olarak gösterilir. Bu da garanti değil, basit bir hız göstergesidir.

## Telif & sınav takvimi

ÖSYM'nin resmî soruları bu repoda **yoktur**. ÖSYM'nin duyurusunda soruların çoğaltılması ve yayımlanmasına ilişkin telif uyarısı vardır. Uygulama kendi yazılmış **özgün alıştırmalar** ve ÖSYM'nin resmî kaynaklarına **bağlantı** içerir. Resmî soruları yalnız kullanım hakkına sahip olduğun takdirde, telif ve kullanım koşullarına uygun biçimde kullan.

Takvim: [ÖSYM 2027 sınav takvimi (28 Ekim 2026)](https://www.osym.gov.tr/osym-2027-yili-sinav-takvimi-aciklandi) | [Takvim PDF](https://dokuman.osym.gov.tr/web/2026/10/osym-2027-yili-sinav-takvimi-7d09wi-28090734.pdf)

ÖSYM takvimi güncellenebilir, uygulama kendiliğinden internetten güncel tarih çekmez; yeni bir takvim açıklandığında `src/exams.js` içindeki tarihleri revize et. Sınav saatleri kaynak tabloda belirtilmediğinden geri sayım **sınav gününün 00:00 (Türkiye saati)** başlangıcınadır.

## Cihazlar arasında durum

**Otomatik senkronizasyon yoktur.** Web ve telefonda aynı site açılır, ancak ilerleme her tarayıcının `localStorage` alanındadır. Telefon ve bilgisayar arasında taşımak için **Ayarlar → JSON yedeğini indir → diğer cihazdan geri yükle**. Yedeğin içinde soru cevapları ve çalışma ilerlemesi vardır.

## Dosyalar

- `src/App.jsx` — Uygulama ekranları, soru çözümü, puan grafiği ve günlük tikler
- `src/planner.js` — Hedefe göre günlük program, tamamlanma ve tahmini puan
- `src/content.js` — Konu, kelime, kalıp, özgün temel sorular
- `src/studyBank.js` — Akademik kelime havuzu
- `src/extraQuestions.js` / `src/paragraphQuestions.js` — Özgün ek soru havuzu
- `src/exams.js` — ÖSYM sınav takvimi, soru kaynak bağlantıları
- `src/styles.css` — Masaüstü / mobil tasarım
- `.github/workflows/pages.yml` — GitHub Pages otomatik yayınlama
- `tests/planner.test.js` — Günlük plan ve hedef hesap testleri
- `public/ornek-sorular.json` — Kişisel soru içe aktarma şeması

**Bağımsız çalışmadır. ÖSYM tarafından geliştirilmemiş veya onaylanmamıştır.**
