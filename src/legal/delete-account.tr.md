# Whomie hesabınızı silin

**Son güncelleme: 11 Ekim 2026**

> **Kısaca**
>
> Bu özet kolaylık olsun diye hazırlandı. Özet ile aşağıdaki metin farklı bir şey söylüyorsa, aşağıdaki tam metin geçerlidir.
>
> - Hesabınızı uygulamadan silin: Ayarlar → Hesabı Sil.
> - Uygulamaya erişemiyor musunuz? Hesabınızın e-posta adresinden, konu satırı "Delete my account" olan bir e-postayı admin@whomie.com adresine gönderin.
> - Profiliniz ve oda ilanınız Whomie'den hemen kaldırılır.
> - Bazı veriler sınırlı bir süre saklanır. 3. bölümde listeleniyor.

<a id="in-the-app"></a>
## 1. Hesabınızı uygulamadan silin

1. Whomie'yi açın ve giriş yapın.
2. **Profil** sekmesini açın ve **dişli simgesine** (Ayarlar) dokunun.
3. **Hesabı Sil**'e dokunun.
4. Onaylayın.

Hesap silme işlemi geri alınamaz.

<a id="what-is-deleted"></a>
## 2. Neler, ne zaman silinir

**Hemen:** hesabınız, profiliniz ve oda ilanınız Whomie'den kaldırılır. Diğer kullanıcılar artık sizi veya ilanınızı bulamaz; siz de artık giriş yapamazsınız. Yazıştığınız kişiler sohbetlerinizi artık uygulamada görmez.

**Daha sonra:** hesabınızın ve ilanınızın bir kopyası arşivde tutulur ve şu süre sonunda silinir: [[DECIDE: archive purge period, e.g. 30 days — backend must implement]]. Profil ve ilan fotoğraflarınız şu süre içinde silinir: [[DECIDE: same period — backend must implement]].

**Daha önce kaldırılan fotoğraflar:** uygulamayı kullanırken kaldırdığınız fotoğraflar ve sildiğiniz ilanların fotoğrafları şu süre içinde depolamadan silinir: [[DECIDE: period — app/backend must implement]].

<a id="what-is-kept"></a>
## 3. Neler saklanır, neden

- **Sohbetler:** sohbet odaları ve mesajlar şu zamana kadar Google Firebase Cloud Firestore'da saklanır: [[DECIDE: period, or delete/anonymise — backend must implement]].
- **Şikâyetler ve iletişim formu mesajları** şu süre saklanır: [[DECIDE: retention period and reason for reports and contact messages]].
- **Kanunen saklamamız gereken** veya bir hukuki uyuşmazlık için ihtiyaç duyduğumuz veriler yalnızca gerektiği kadar saklanır.

Ayrıntılar [Gizlilik Politikası ve Aydınlatma Metni](https://www.whomie.com/tr/privacy-policy/#retention)'nde.

<a id="by-email"></a>
## 4. Uygulamayı kullanamıyorsanız

Konu satırı **"Delete my account"** olan bir e-postayı **admin@whomie.com** adresine gönderin. Talebin size ait olduğunu anlayabilmemiz için e-postayı Whomie hesabınızın e-posta adresinden gönderin. Onaylamanızı isteyebiliriz. Hesabınızı yukarıda anlatıldığı gibi siler ve en geç 30 gün içinde size cevap veririz.

<a id="contact"></a>
## 5. Sorular

admin@whomie.com adresine yazın.
