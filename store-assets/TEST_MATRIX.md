# Mobil cihaz ve mağaza yayın testleri

**Durum türleri:** [x] kod/yapılandırma mevcut; [ ] gerçek cihazda doğrulama bekliyor. Tarayıcı emülasyonu cihaz testi yerine geçmez.

## Otomatik kontroller
- [x] React/Vite web ve Capacitor native derleme komutları
- [x] GitHub Actions Android debug APK üretimi
- [ ] iOS simulator derleme çıktısının başarılı olduğunun kontrolü (Actions durumuna bağlı)
- [ ] Playwright mobil Chromium navigasyon ve ekran yakalama işi başarılı
- [x] Gizlilik ve destek sayfaları projede var
- [ ] Görseller Google Play / Apple yükleme ekranında kabul edildi

## Gerçek Android ve iPhone test adımları
- [ ] İlk kurulumda YDS/YÖKDİL seçimi görünüyor ve seçenekler çalışıyor
- [ ] Hedef puan, sınav tarihi ve YÖKDİL alanı seçiliyor
- [ ] Günlük plan, iki konu, kelime ve tekrar görevleri doğru açılıyor
- [ ] Konu anlatımı ve çözümlü alıştırmalar mobil ekrana sığıyor
- [ ] Kelime kartı dönüyor, öğrenildi işareti kapanıp açıldığında korunuyor
- [ ] 20 soruluk mini deneme başlıyor, süre sayıyor, sonuç kaydı oluşuyor
- [ ] 80 soruluk denemede sayfa/yanıt geçişleri ve süre yönetimi çalışıyor
- [ ] ÖSYM haricî bağlantıları güvenli sistem tarayıcısında açılıyor
- [ ] PDF seçimi/görüntüleme/yeni sekme davranışı gerçek cihazda çalışıyor
- [ ] Çıkmış soru cevapları kaydediliyor ve anahtar yoksa sahte puan hesaplanmıyor
- [ ] JSON yedek dışa aktarımı ve geri yükleme mobil cihazda çalışıyor
- [ ] Uygulama kapatılıp açıldığında yerel çalışma kayıtları kalıyor
- [ ] Düşük internet / uçak modu: paketli konu/kelime ekranları açılıyor, haricî kaynaklar için bağlantı uyarısı anlaşılır
- [ ] Dikey ve yatay ekran, küçük Android, büyük Android, iPhone farklı boyutlar, iPad varsa test edildi
- [ ] Android geri tuşu, iOS safe-area ve klavye açıldığında alanlar kullanılıyor
- [ ] Gizlilik sayfası ve destek sayfası telefonda erişilebilir
- [ ] Uygulama simgesi/başlangıç ekranı görünümü açık/koyu temada test edildi
- [ ] Ekran okuyucu / klavye erişimi / minimum dokunma hedefleri kontrol edildi
- [ ] Tekrarlı denemelerde çökme, bellek tüketimi ve donma yok
- [ ] Kapalı test / TestFlight grubundan kullanıcı geribildirimi kaydedildi

## Mağaza teslim koşulları
- [ ] Android **imzalı release AAB** üretildi, Play Console test kanalı kabul etti
- [ ] iOS **imzalı Archive/IPA** üretildi, App Store Connect / TestFlight kabul etti
- [ ] Geliştirici e-postası, yaş derecelendirmesi ve Data safety/App Privacy bildirimi doğrulandı
- [ ] Resmî ÖSYM bağlantılarının erişilebilirliği ve telif/kurum beyanları kontrol edildi
- [ ] Google Play ikon/feature graphic/ekran görüntüleri kabul edildi
- [ ] Apple App Store ekran görüntüleri gerçek uygulama görüntüleri olarak kabul edildi

## Görsel üretim yöntemi

`npm run store:assets`: 1024px ikon, 512px Play ikonu, 2732px açılış görselleri, 1024×500 Google Play feature graphic.  
`npm run store:screenshots`: çalışan Vite uygulamasını Playwright Chromium mobil emülasyonunda açar, gerçek React ekranlarından görüntüler yakalar. `npm run build` çalıştırılmış olmalıdır.  
`npm run store:prepare`: iki adımı sırayla tamamlar.

**Bu ekran yakalama işi bir gerçek iPhone veya Android cihaz testi değildir.** Görseller tanıtım taslağıdır; mağaza göndermeden önce ilgili native uygulamada tekrar doğrulanmalıdır.
