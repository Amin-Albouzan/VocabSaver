# Web Uygulaması Projesi

## Genel Bakış

Bu proje, kullanıcı hesabı yönetimi, profil yönetimi ve quiz işlevlerini içeren bir web uygulamasıdır. Uygulamanın ana özellikleri şunlardır:

1. **Kullanıcı Kaydı ve Girişi**
   - Kullanıcılar, ad, e-posta ve şifre sağlayarak bir hesap oluşturabilirler.
   - Veriler doğrulanır ve `localStorage`'a kaydedilir.
   - Kullanıcılar, e-posta ve şifre kullanarak giriş yapabilirler.

2. **Profil Yönetimi**
   - Kullanıcılar profil bilgilerini görüntüleyebilir ve güncelleyebilir.
   - Profil verileri, kullanıcının adı, e-posta adresi ve diğer ilgili ayrıntıları içerir.

3. **Quiz İşlevselliği**
   - Uygulama, kullanıcıların quiz yapabileceği bir quiz özelliği içerir.
   - Quiz sonuçları ve kullanıcı ilerlemesi uygulama içinde yönetilir.

## Proje Yapısı

Proje, aşağıdaki dosya ve dizinlerden oluşur:

### HTML Dosyaları
- `add.html`: Yeni veri veya özellik ekleme arayüzü.
- `home.html`: Giriş yaptıktan sonraki ana sayfa.
- `passwordForgetEkranı.html`: Şifre kurtarma arayüzü.
- `profile.html`: Kullanıcı profili sayfası.
- `Quiz.html`: Quiz arayüzü.
- `settings.html`: Kullanıcı ayarları sayfası.
- `signIn.html`: Giriş sayfası.
- `signUp.html`: Kayıt sayfası.

### CSS Dosyaları
- `add.css`: Veri ekleme sayfası için stiller.
- `home.css`: Ana sayfa için stiller.
- `profile.css`: Profil sayfası için stiller.
- `Quiz.css`: Quiz sayfası için stiller.
- `settings.css`: Ayarlar sayfası için stiller.
- `signIn.css`: Giriş sayfası için stiller.
- `signUp.css`: Kayıt sayfası için stiller.

### JavaScript Dosyaları
- `home.js`: Ana sayfa için script.
- `index.js`: Kullanıcı hesabı yönetimi ve `localStorage` işlemlerini yöneten ana script.
- `profile.js`: Profil sayfası için script.
- `Quiz.js`: Quiz işlevselliği için script.
- `seettings.js`: Ayarlar sayfası için script.

## Kullanım Talimatları

### Projeyi Kurma
1. Tüm dosyaların bir web sunucu ortamına yerleştirildiğinden emin olun.
2. `index.html` dosyasını bir web tarayıcısında açarak uygulamayı kullanmaya başlayın.

### Hesap Oluşturma
1. Kayıt sayfasına (`signUp.html`) gidin.
2. Gerekli alanları doldurun ve formu gönderin.
3. Veriler `localStorage`'a kaydedilecek ve giriş sayfasına yönlendirileceksiniz.

### Giriş Yapma
1. Giriş sayfasına (`signIn.html`) gidin.
2. E-posta ve şifrenizi girerek giriş yapın.
3. Ana sayfaya (`home.html`) yönlendirileceksiniz.

### Profilinizi Yönetme
1. Giriş yaptıktan sonra profil sayfasına (`profile.html`) gidin.
2. Profil bilgilerinizi gerektiği gibi güncelleyin.

### Quiz Yapma
1. Quiz sayfasına (`Quiz.html`) gidin.
2. Talimatları izleyerek quiz yapın ve sonuçlarınızı görüntüleyin.




