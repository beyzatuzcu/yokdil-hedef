# Android ve iOS mağaza yayın rehberi

> Bu depo **Capacitor 8** ile Android/iOS paketine dönüştürülebilir. GitHub Pages yayını aynen devam eder. Mağazada otomatik olarak yayınlanmaz: geliştirici hesabı, kimlik doğrulaması, sertifika/imza, cihaz testleri ve mağaza incelemesi gereklidir.

## Hazır olanlar

- React/Vite uygulaması native `dist` paketi içinde çalışır; GitHub Pages web sürümü korunur.
- `capacitor.config.json`: uygulama adı, uygulama kimliği, webDir.
- `npm run build:mobile`: yerel native dosyalar için Vite çıktısı.
- `npm run mobile:add:android` / `npm run mobile:add:ios`: platform + ikon oluşturma ve eşitleme.
- `.github/workflows/mobile-build.yml`: Android test APK'sı + iOS simülatör doğrulama.
- `public/privacy.html`, `public/support.html`: mağaza bilgilerinde kullanılabilecek taslak sayfalar.

## 1. Önce uygulama kimliğini kesinleştir

`capacitor.config.json` içindeki `appId` şu anda **`com.yokdilhedef.study`** örnek kimliğidir. **Mağazaya ilk yüklemeden önce** sizin kontrolünüzdeki benzersiz ters alan adı biçiminde bir kimlik seçin; örn. `com.sirketiniz.sinavhedef`. Yayın sonrası Android/iOS kimliğini değiştirmek çoğu durumda yeni uygulama olarak değerlendirilir. Mağaza sahibi, marka, sürüm ve sözleşme bilgilerinin gerçekliği hesap sahibince doğrulanmalıdır.

`appName` = "YDS YÖKDİL Hedef". ÖSYM logosu veya resmî kurum ilişkisi iddiası kullanılmaz.

## 2. Android testi (GitHub üzerinden bilgisayara kurulum gerektirmez)

1. GitHub projesinde **Actions → Validate Android and iOS native apps → Run workflow**.
2. `android` işi yeşil olursa çalışma sayfasının **Artifacts** bölümünde `yds-yokdil-android-debug-apk` görünür.
3. Bu ZIP içindeki `app-debug.apk` yalnızca **cihaz testi** içindir. Google Play'e gönderilecek imzalı **release AAB değildir**.
4. Test cihazında ilk açılış, dersler, kayıt, içe/dışa aktarma, PDF/ÖSYM bağlantıları, 80 soruluk deneme ve ekran ölçülerini doğrulayın.

Kendi bilgisayarınızda Android Studio ile:
```bash
npm install
npm run mobile:add:android
npm run mobile:open:android
```
Android Studio'da **Build → Generate Signed Bundle / APK → Android App Bundle (AAB)** kullanın. İmza anahtarını güvenli bir yerde saklayın, **GitHub'a yüklemeyin**. Release paketi için **Android 16/API 36+** hedefini Android projesi ayarlarında teyit edin.

## 3. iPhone / iPad testi ve App Store

GitHub Actions `ios` işi **imzasız iOS simülatör derlemesini** kontrol eder. App Store Connect'e gönderilecek **imzalı IPA** bu iş akışından çıkmaz. Apple Developer üyeliği ve imza sertifikası/provisioning profile gerekir.

Mac + Xcode 26 veya üstüyle:
```bash
npm install
npm run mobile:add:ios
npm run mobile:open:ios
```
Xcode içinde `ios/App/App.xcworkspace` açın. **Signing & Capabilities** bölümünden kendi Apple Developer takımınızı seçin, Bundle Identifier'ı güncelleyin, gerçek cihazda test edin. **Product → Archive**, ardından **Distribute App → App Store Connect** ile yükleyin; TestFlight testlerini tamamlayın.

## 4. Kaynak kod güncellenince

Web için GitHub Pages otomatik yayınlanır. Mevcut `android/` veya `ios/` projenizde şu komutlar yeterlidir:
```bash
npm install
npm run mobile:sync
```
Native proje veya plugin değiştiyse Android Studio/Xcode'da yeni derleme oluşturun. Web sitesindeki otomatik güncelleme **mağaza uygulamalarını güncellemez**.

## 5. Mağaza sayfası için eksik kontrol listesi

- Google Play Console / Apple Developer ve hesap doğrulaması
- Benzersiz uygulama kimliği, sahiplik ve marka bilgisi
- Android imzalı release **AAB**, iOS imzalı **IPA**
- Uygulama açıklaması, kategori, gerçek cihaz ekran görüntüleri, 1024px ikon, yaş derecelendirmesi
- **Gizlilik politikası:** `https://beyzatuzcu.github.io/yokdil-hedef/privacy.html`
- **Destek sayfası:** `https://beyzatuzcu.github.io/yokdil-hedef/support.html`
- Google Play **Data safety** ve Apple **App Privacy** anketleri: cevapları yayımlanacak sürümün gerçek veri akışına göre verilmeli
- Üçüncü taraf kaynaklar ve ÖSYM bağlantıları için telif/hak sahipliği kontrolü; resmî kurum bağlantısı olmadığı açıkça belirtilmeli
- Çıkmış soru PDF'sinin açılması, uygulama yedeği, zamanlayıcı ve ağ bağlantısı kesildiğindeki davranış için gerçek cihaz testleri
- Apple 4.2 **Minimum Functionality** değerlendirmesi: mağazanın yalnız web sayfası sarmalayıcısından daha fazla değer beklediğini unutmayın
- Google'ın hesap türüne göre gerekli kapalı test ve üretim erişimi süreci

## Güvenlik

Asla `.jks`, `.keystore`, `.p12`, signing şifresi veya Apple API anahtarı GitHub'a commit etmeyin. Bu depo bilinçli olarak imzalama bilgisi içermez. Geliştirme/simulator derlemesi ile üretim mağaza teslimi ayrıdır.

Capacitor resmî dokümantasyon: https://capacitorjs.com/docs
Google Play: https://support.google.com/googleplay/android-developer/answer/11926878
Apple App Review: https://developer.apple.com/app-store/review/guidelines/
