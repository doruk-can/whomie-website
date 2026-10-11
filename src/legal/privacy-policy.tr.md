# Whomie Gizlilik Politikası ve Aydınlatma Metni

**Son güncelleme: 11 Ekim 2026**

> **Kısaca**
>
> Bu özet kolaylık olsun diye hazırlandı. Özet ile aşağıdaki metin farklı bir şey söylüyorsa, aşağıdaki tam metin geçerlidir.
>
> - Whomie, oda veya ev arkadaşı arayan insanların birbirini bulmasını sağlar. Bunun için profiliniz, oda ilanınız ve konumunuz (4. bölüme bakın) diğer Whomie kullanıcılarına gösterilir.
> - Profillere ve ilanlara yalnızca Whomie'ye giriş yapmış kişiler göz atabilir. E-posta adresinizi, soyadınızı ve şifrenizi hiçbir kullanıcı göremez.
> - Konumunuzu yalnızca uygulamayı kullanırken ve yalnızca siz izin verirseniz kullanırız.
> - Reklam göstermeyiz. Analiz (analytics) aracı kullanmayız. Sizi başka uygulama ve sitelerde takip etmeyiz. Verilerinizi satmayız.
> - Barındırma, fotoğraf depolama, sohbet, e-posta, harita, giriş ve bildirimler için hizmet sağlayıcılarla çalışırız. Çoğu Amerika Birleşik Devletleri'ndedir. 5. bölümde hepsini sayıyoruz.
> - Hesabınızı uygulamadan istediğiniz zaman silebilirsiniz: Ayarlar → Hesabı Sil. Sonrasında ne olduğunu 7. bölüm anlatıyor.
> - KVKK ve AB'deyseniz GDPR kapsamında haklarınız var. Kullanmak için admin@whomie.com adresine yazın.

## İçindekiler

1. [Biz kimiz](#who-we-are)
2. [Hangi verileri topluyoruz](#what-we-collect)
3. [Verilerinizi neden kullanıyoruz, hukuki sebepler](#legal-bases)
4. [Diğer kullanıcılar neyi görür](#what-others-see)
5. [Verileriniz kimlere aktarılır](#sharing)
6. [Yurt dışına aktarım](#international-transfers)
7. [Verileri ne kadar saklıyoruz](#retention)
8. [Güvenlik](#security)
9. [Haklarınız](#your-rights)
10. [Çocuklar](#children)
11. [Cihaz izinleri](#permissions)
12. [Reklam, analiz, takip ve satış yok](#no-ads-no-tracking)
13. [Bu metindeki değişiklikler](#changes)
14. [İletişim](#contact)

---

<a id="who-we-are"></a>
## 1. Biz kimiz

Whomie, oda veya ev arkadaşı arayanlar için bir mobil uygulamadır. Profil oluşturur, bir konumun yakınındaki kişilere ve oda ilanlarına bakar, onları filtreler ve sohbet edersiniz.

Uygulamanın yayıncısı bireysel geliştirici Doruk Can'dır: [[DECIDE: full legal name and postal address]]. Bu metinde "Whomie", "biz" ve "bizim" yayıncıyı ifade eder.

6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, bu metinde anlatılan kişisel verilerin **veri sorumlusu** biziz. Yani verilerin neden ve nasıl işleneceğine biz karar veririz. AB Genel Veri Koruma Tüzüğü ("GDPR") sizin için geçerliyse, GDPR'a göre de veri sorumlusu ("controller") biziz.

Bu metin, KVKK'nın 10. maddesi uyarınca **aydınlatma metni** olarak da hazırlanmıştır.

Bize **admin@whomie.com** adresinden ulaşabilirsiniz.

<a id="what-we-collect"></a>
## 2. Hangi verileri topluyoruz

Kişisel verilerinizi üç yoldan, uygulama aracılığıyla elektronik ortamda topluyoruz: uygulamaya sizin girdiğiniz bilgiler; izin verdiğinizde cihazınızın gönderdiği bilgiler (örneğin konum); Google veya LinkedIn ile giriş yaptığınızda bu hizmetlerin gönderdiği bilgiler.

| Veri | Neden kullanıyoruz | Nerede saklanır | Kimlere aktarılır |
|---|---|---|---|
| **Hesap bilgileri:** ad, soyad, e-posta adresi, şifre, doğum tarihi, uygulama dili | Hesabınızı açmak ve yürütmek, giriş yapmanızı sağlamak, 18 yaşından büyük olduğunuzu kontrol etmek | Veritabanımız. Şifreniz okunabilir hâlde değil, yalnızca bcrypt özeti (hash) olarak saklanır | Barındırma sağlayıcılarımız. Giriş yapmış diğer kullanıcılar doğum tarihinizi değil, adınızı ve yaşınızı görür (4. bölüm) |
| **Profil:** cinsiyet, cinsiyet tercihi, uyruk, diller, özellikler ve tercihler, hakkımda yazısı, en yüksek bütçe, en kısa kalış süresi, tercih edilen taşınma tarihi, eğitim (okul, bölüm, mezuniyet yılı), iş (unvan, şirket) | Profilinizi göstermek, kişilerin arama ve filtreleme yapabilmesi | Veritabanımız | Barındırma sağlayıcılarımız. Giriş yapmış diğer kullanıcılar bir kısmını görür (4. bölüm); uyruğunuzu ve cinsiyet tercihinizi asla görmez |
| Profil ve oda ilanı **fotoğrafları** | Profilinizde veya ilanınızda göstermek | Amazon S3; Amazon CloudFront üzerinden sunulur | Giriş yapmış diğer kullanıcılar, fotoğrafın bağlantısına sahip herkes (4. bölüm), Amazon Web Services |
| **Konum:** koordinatlar, ilçe ve şehir | Yakınınızdaki kişileri ve odaları göstermek | Veritabanımız | Giriş yapmış diğer kullanıcılar (4. bölüm), barındırma sağlayıcılarımız, cihazınızın harita servisi (5. bölüm) |
| **Oda ilanı:** konum, açıklama, kira, depozito, fatura tipi, en kısa kalış süresi, müsait olma tarihi, fotoğraflar | İlanınızı yayınlamak | Veritabanımız; fotoğraflar Amazon S3'te | Giriş yapmış diğer kullanıcılar, haritadaki tam konumu dahil (4. bölüm); barındırma sağlayıcılarımız |
| **Sohbet:** sohbet odaları ve mesajlar (gönderen, metin, saat, okunma zamanı) | Diğer kullanıcılarla yazışmanızı sağlamak | Google Firebase Cloud Firestore | Uygulamada yalnızca sohbetteki kişilere gösterilir; Google |
| **Bildirim anahtarı:** cihazınızın Expo push token'ı | Size bildirim göndermek | Veritabanımızda hesabınızla birlikte | Expo, Apple ve Google bildirim servisleri |
| **Google veya LinkedIn ile giriş:** ad, e-posta adresi, profil kimlikleri, sağlayıcının erişim anahtarı (access token); LinkedIn'den ayrıca profil fotoğrafı ve pozisyonlar | O sağlayıcıyla giriş yapmanızı sağlamak | Veritabanımızda hesabınızla birlikte | Google veya LinkedIn (bu verileri bize onlar gönderir) |
| **Güvenlik verileri:** e-posta doğrulama ve şifre sıfırlama kodları, son giriş ve çıkış tarihleri | E-postanızı doğrulamak, şifrenizi sıfırlamak, hesabınızı korumak | Veritabanımız; kodlar Amazon SES ile e-postayla gönderilir | Amazon Web Services |
| **Şikâyetler ve engellemeler:** kimin kimi şikâyet ettiği, şikâyetin bir kullanıcı mı ilan mı hakkında olduğu; engellediğiniz kişiler | Whomie'yi güvenli tutmak, engellenen kişileri gizlemek | Veritabanımız | Barındırma sağlayıcılarımız |
| **İletişim formu:** ad soyad, e-posta adresi, mesaj | Size cevap vermek | Veritabanımız | Barındırma sağlayıcılarımız |
| **Uygulama güncellemeleri:** uygulama açılırken güncelleme kontrol edildiğinde gönderilen IP adresiniz ve bir uygulama kurulum kimliği | Uygulama güncellemelerini ulaştırmak | Expo'nun güncelleme servisi | Expo |
| **Teknik veriler:** istek verileri ve IP adresleri | Sunucuyu çalıştırmak, hataları bulmak, güvenliği sağlamak | Heroku ve New Relic | Heroku, New Relic |
| **Cihazınızda:** oturum anahtarınız, bildirim anahtarınız ve diliniz | Oturumunuzu açık tutmak, dilinizi hatırlamak | Cihazınızın güvenli depolama alanı | Kimseye |

admin@whomie.com adresine yazarsanız, e-postanız ve yazdıklarınız Google Workspace'te barındırılan posta kutumuzda saklanır.

Sağlık, din veya siyasi görüş gibi **özel nitelikli kişisel veriler** istemiyoruz. Lütfen bunları hakkımda yazınıza veya sohbetlere eklemeyin.

"Veritabanımız", sunucumuzun kullandığı bir MongoDB veritabanıdır ve şurada barındırılır: [[DECIDE: MongoDB hosting provider and region]].

<a id="legal-bases"></a>
## 3. Verilerinizi neden kullanıyoruz, hukuki sebepler

Verilerinizi yalnızca 2. bölümdeki amaçlarla işleriz. Hukuki sebep amaca göre değişir.

| Amaç | KVKK (madde 5) | GDPR (madde 6) |
|---|---|---|
| Hesabınızı, profilinizi ve ilanınızı yürütmek; 18 yaş kontrolü; yakındaki kişi ve odaları göstermek; sohbet; bildirimler; Google veya LinkedIn ile giriş | Sizinle yaptığımız sözleşmenin kurulması veya ifası için gerekli olması (m. 5/2-c) | Sözleşmenin ifası (m. 6/1-b) |
| Hizmetin güvenliği, şikâyet ve engellemelerin işlenmesi, kötüye kullanımın önlenmesi, sunucu kayıtları | Temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimiz (m. 5/2-f) | Meşru menfaat (m. 6/1-f) |
| Mesajlarınıza cevap vermek | Meşru menfaatimiz (m. 5/2-f); konu hesabınızsa sözleşme (m. 5/2-c) | Meşru menfaat (m. 6/1-f) veya sözleşme (m. 6/1-b) |
| Yasal yükümlülükler, örneğin bir resmî makamın hukuka uygun talebine cevap vermek | Hukuki yükümlülüğümüzü yerine getirmek (m. 5/2-ç) | Hukuki yükümlülük (m. 6/1-c) |
| Bir hakkın tesisi, kullanılması veya korunması | Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması (m. 5/2-e) | Meşru menfaat (m. 6/1-f) |

Konumunuz ve bildirimler yalnızca cihazınızda izin verdiğinizde kullanılır. Bu izinleri cihaz ayarlarından istediğiniz zaman kapatabilirsiniz.

Hakkınızda hukuki veya benzer önemde sonuç doğuran, yalnızca otomatik işlemeye dayalı kararlar vermeyiz. Arama filtreleri gördüklerinizi yalnızca sıralar ve daraltır.

<a id="what-others-see"></a>
## 4. Diğer kullanıcılar neyi görür

Profilleri ve ilanları yalnızca giriş yapmış kullanıcılar görebilir.

- **Profilinizde** adınız, yaşınız, fotoğraflarınız, hakkımda yazınız, cinsiyetiniz, dilleriniz, özellikleriniz, eğitiminiz, işiniz, en yüksek bütçeniz, en kısa kalış süreniz, tercih ettiğiniz taşınma tarihi ve konumunuz görünür. Diğer kullanıcılar doğum tarihinizi değil, yaşınızı görür.
- **Oda ilanınızda** ilanın kendisi ile adınız, yaşınız, eğitiminiz, işiniz ve fotoğraflarınız görünür. İlanın tam konumu, sokak düzeyindeki bir haritada nokta olarak gösterilir.
- **Konumunuz:** [[DECIDE: the backend returns exact coordinates to other users — round them or show only district/city before publishing; then describe it here]]
- **Sohbetleriniz** uygulamada yalnızca sohbetteki kişilere gösterilir.
- **Fotoğraflarınız** giriş gerektirmeyen web bağlantılarında saklanır: bir fotoğrafın bağlantısına sahip olan herkes onu açabilir.
- E-posta adresinizi, soyadınızı, şifrenizi, uyruğunuzu ve cinsiyet tercihinizi diğer kullanıcılar **hiçbir zaman** görmez.

Diğer kullanıcılar paylaştıklarınızı kopyalayabilir veya ekran görüntüsünü alabilir; bunu kontrol edemeyiz. Yalnızca paylaşmaktan rahatsız olmayacağınız şeyleri paylaşın.

<a id="sharing"></a>
## 5. Verileriniz kimlere aktarılır

Verilerinizi yalnızca diğer kullanıcılarla (4. bölüm) ve aşağıdaki hizmet sağlayıcılarla paylaşırız. Bu sağlayıcılar bizim adımıza ve talimatlarımızla çalışan **veri işleyenlerdir** ve verilerinizi en az bu metindeki kadar korumakla yükümlüdür.

| Sağlayıcı | Bizim için ne yapar | İşlediği veriler |
|---|---|---|
| **Heroku** (Salesforce) | Sunucumuzu çalıştırır | Sunucumuzdan geçen tüm veriler, IP adresleri dahil |
| [[DECIDE: MongoDB hosting provider and region]] | Veritabanımızı barındırır | Hesap, profil, konum, ilanlar, bildirim anahtarları, şikâyetler, engellemeler, iletişim mesajları |
| **New Relic** | Sunucunun performansını izler | Teknik istek verileri ve IP adresleri |
| **Amazon Web Services** (Amazon S3, Amazon CloudFront, Amazon SES) | Fotoğrafları saklar ve sunar; doğrulama ve şifre sıfırlama e-postalarını gönderir | Fotoğraflar; e-posta adresiniz ve size gönderdiğimiz kodlar |
| **Google Firebase** (Cloud Firestore) | Sohbet mesajlarını saklar ve iletir | Sohbet odaları ve mesajlar |
| **Google Maps ve Google Geocoding** | Harita gösterir, yer arar | Aradığınız yerler ve baktığınız harita bölgesi |
| **Cihazınızın harita servisi:** Apple (iOS) veya Google (Android) | Koordinatlarınızı ilçe ve şehre çevirir | Koordinatlarınız |
| **Expo** | Bildirimleri ve uygulama güncellemelerini gönderir | Bildirim anahtarınız ve bildirim (metin geneldir, "Whomie" ve kısa bir ileti; sohbetlerinizin içeriği değildir); güncellemeler için IP adresiniz ve bir uygulama kurulum kimliği |
| **Apple ve Google bildirim servisleri** | Bildirimleri cihazınıza ulaştırır | Bildirim anahtarınız ve bildirim |
| **Google Workspace** | admin@whomie.com posta kutumuzu barındırır | Bize gönderdiğiniz e-postalar |
| **Google ve LinkedIn ile giriş** | Seçerseniz mevcut hesabınızla giriş yapmanızı sağlar | Bize gönderdikleri veriler (2. bölüm); Apple ile giriş sunulursa Apple için de aynısı geçerlidir |

Koordinatlarınızı ilçe ve şehre cihazınızın harita servisi (iOS'ta Apple, Android'de Google) çevirir.

Kanun gerektirdiğinde, örneğin bir mahkemenin veya resmî makamın hukuka uygun talebi üzerine ya da kullanıcıların güvenliğini korumak için de veri paylaşabiliriz.

<a id="international-transfers"></a>
## 6. Yurt dışına aktarım

Sağlayıcılarımızın çoğu Amerika Birleşik Devletleri merkezlidir: Heroku (Salesforce), New Relic, Amazon Web Services, Google, Apple, Expo ve LinkedIn. Verileriniz ABD'de veya Türkiye ve AB dışındaki başka ülkelerde saklanabilir ya da işlenebilir.

Bu ülkeler kişisel verileri Türkiye veya AB kadar korumayabilir. KVKK'nın 9. maddesi ve GDPR'ın V. bölümü, yurt dışına aktarım için bir güvence şartı arar. Dayandığımız güvence: [[DECIDE: transfer safeguard — e.g. KVKK standard contracts notified to the KVKK Authority, and EU Standard Contractual Clauses]].

<a id="retention"></a>
## 7. Verileri ne kadar saklıyoruz

**Hesabınız açık olduğu sürece** hesabınızı, profilinizi, fotoğraflarınızı, ilanınızı ve sohbetlerinizi saklarız; hizmet bunlar olmadan çalışmaz.

**Kaldırdığınız fotoğraflar** ve sildiğiniz bir ilanın fotoğrafları şu süre içinde depolamadan silinir: [[DECIDE: period — app/backend must implement]].

**Hesabınızı sildiğinizde** (uygulamada: Ayarlar → Hesabı Sil):

- Hesabınız ve oda ilanınız canlı hizmetten hemen kaldırılır. Diğer kullanıcılar artık bunları bulamaz.
- Hesabınızın ve ilanınızın bir kopyası arşivde tutulur [[DECIDE: reason for keeping the archive copy, e.g. to handle reports or legal claims]] ve şu süre sonunda silinir: [[DECIDE: archive purge period, e.g. 30 days — backend must implement]].
- Profil ve ilan fotoğraflarınız Amazon S3'ten şu süre içinde silinir: [[DECIDE: same period — backend must implement]].
- Yazıştığınız kişiler sohbetlerinizi artık uygulamada görmez. Sohbet odaları ve mesajlar şu zamana kadar Google Firebase Cloud Firestore'da saklanır: [[DECIDE: period, or delete/anonymise — backend must implement]].
- Şikâyetler ve iletişim formu mesajları şu süre saklanır: [[DECIDE: retention period and reason for reports and contact messages]].
- Sunucu kayıtları ve izleme verileri şu süre saklanır: [[DECIDE: retention period for Heroku and New Relic logs]].

Kanun bazı verileri daha uzun saklamamızı gerektiriyorsa veya bir hukuki uyuşmazlık için gerekiyorsa, yalnızca o verileri, yalnızca gerektiği kadar saklarız. Saklama sebebi ortadan kalkınca verileri KVKK'nın 7. maddesi uyarınca siler, yok eder veya anonim hâle getiririz. Adımlar [hesap silme sayfamızda](https://www.whomie.com/tr/delete-account/) anlatılıyor.

<a id="security"></a>
## 8. Güvenlik

Verilerinizi korumak için makul önlemler alırız:

- Şifreniz yalnızca bcrypt özeti olarak saklanır; biz de okuyamayız.
- Oturum anahtarınız cihazınızın güvenli depolama alanında tutulur.
- Profillere ve ilanlara yalnızca giriş yapmış kullanıcılar göz atabilir; e-posta adresleri ve şifreler hiç gösterilmez.

Hiçbir sistem tamamen güvenli değildir. Verilerinizi etkileyen bir ihlal olursa, kanunun gerektirdiği şekilde size ve yetkili makamlara bildiririz.

<a id="your-rights"></a>
## 9. Haklarınız

**KVKK'nın 11. maddesi uyarınca ilgili kişi olarak** şu haklara sahipsiniz:

- kişisel verilerinizin işlenip işlenmediğini öğrenmek, işlenmişse bilgi talep etmek;
- işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenmek;
- yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilmek;
- eksik veya yanlış işlenmişse düzeltilmesini istemek;
- 7. maddedeki şartlar çerçevesinde silinmesini veya yok edilmesini istemek;
- düzeltme veya silme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini istemek;
- verilerin yalnızca otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etmek;
- kanuna aykırı işleme nedeniyle zarara uğrarsanız zararınızın giderilmesini talep etmek.

**GDPR sizin için geçerliyse**, verilerinize erişme, düzeltme ve silme; işlenmesini kısıtlama veya itiraz etme; verilerinizi taşınabilir biçimde alma ve verdiğiniz bir rızayı istediğiniz zaman geri alma haklarınız vardır.

**Haklarınızı nasıl kullanırsınız?** Profilinizi düzeltmek, kullanıcıları engellemek veya hesabınızı silmek için uygulamayı kullanabilirsiniz. Diğer talepler için, başvurunun size ait olduğunu anlayabilmemiz için hesabınızın e-posta adresinden admin@whomie.com adresine yazın. 1. bölümdeki posta adresimize yazılı olarak da başvurabilirsiniz. Kimliğinizi doğrulamanızı isteyebiliriz. Başvuru ücretsizdir. Talebinizi en kısa sürede ve en geç 30 gün içinde sonuçlandırırız (KVKK m. 13; GDPR'da bir ay).

**Şikâyet.** KVKK'ya göre önce bize başvurmanız gerekir. Başvurunuz reddedilirse, 30 gün içinde cevap vermezsek veya cevabımızı yetersiz bulursanız, Kişisel Verileri Koruma Kurulu'na (kvkk.gov.tr) şikâyette bulunabilirsiniz. AB'deyseniz, ülkenizdeki veri koruma otoritesine şikâyette bulunabilirsiniz.

<a id="children"></a>
## 10. Çocuklar

Whomie yalnızca 18 yaş ve üzeri kişiler içindir. Kayıt olurken doğum tarihinizi girersiniz; 18 yaşından küçükseniz uygulama devam etmenize izin vermez. Bir kullanıcının 18 yaşından küçük olduğunu öğrenirsek hesabını sileriz.

<a id="permissions"></a>
## 11. Cihaz izinleri

Uygulama aşağıdaki izinleri ister. Hayır diyebilir veya fikrinizi daha sonra cihaz ayarlarından değiştirebilirsiniz.

- **Konum.** Yalnızca uygulamayı kullanırken (ön planda); arka planda asla. En hassas ayarı değil, cihazınızın "dengeli" (balanced) doğruluk ayarını kullanırız.
- **Fotoğraflar.** Profiliniz veya oda ilanınız için fotoğraf seçebilmeniz için. Yalnızca seçtiğiniz fotoğrafları yükleriz.
- **Bildirimler.** Uygulamada yeni bir şey olduğunda size haber vermek için. İstediğiniz zaman kapatabilirsiniz.

<a id="no-ads-no-tracking"></a>
## 12. Reklam, analiz, takip ve satış yok

- Reklam göstermeyiz.
- Uygulamada analiz veya reklam aracı kullanmayız.
- Sizi başka şirketlerin uygulamalarında veya sitelerinde takip etmeyiz.
- Kişisel verilerinizi satmayız ve reklam amacıyla paylaşmayız.

Firebase'i yalnızca sohbet için kullanırız.

<a id="changes"></a>
## 13. Bu metindeki değişiklikler

Uygulama veya mevzuat değiştiğinde bu metni güncelleyebiliriz; o zaman "Son güncelleme" tarihini değiştiririz. Önemli bir değişiklik olursa, yürürlüğe girmeden önce uygulamada veya e-postayla da haber veririz.

<a id="contact"></a>
## 14. İletişim

Sorular, talepler ve şikâyetler: **admin@whomie.com**

Posta adresi: [[DECIDE: full legal name and postal address]]

Bu metin Türkçe ve İngilizce olarak yayınlanmaktadır. Whomie'yi kullanma kuralları [Kullanım Koşulları](https://www.whomie.com/tr/terms-conditions/) sayfasındadır.
