

// Oturumdaki mevcut kullanıcı verilerini alıyoruz
let currentUserData = JSON.parse(sessionStorage.getItem('currentUserData'));

// Kullanıcının adını görüntüleyen HTML elementine kullanıcı adını ekliyoruz
document.getElementById('userName').innerHTML = "USER NAME: " + currentUserData.name;

// Kullanıcının e-posta adresini görüntüleyen HTML elementine e-posta adresini ekliyoruz
document.getElementById('userEmail').innerHTML = "EMAIL: " + currentUserData.email;

// Kullanıcının localStorage'da kayıtlı verilerini alıyoruz
let data = JSON.parse(localStorage.getItem(currentUserData.email));

// Soruların sayısını sayacak bir değişken tanımlıyoruz
let sorularSayisi = 0;

// Kullanıcının verilerini döngüyle dolaşıyoruz
for (let key in data) {
    // Anahtarlar 'name', 'email', 'password' veya 'yeniKelimeCikmaSayisi' değilse
    if (key != 'name' && key != 'email' && key != 'password' && key != 'yeniKelimeCikmaSayisi') {
        // Soruların sayısını arttırıyoruz
        sorularSayisi++;
    }
}

// HTML'de belirtilen alana eklenen soruların sayısını görüntülüyoruz
document.getElementById("sorularSayisi").innerHTML = "NUMBER OF ADDED QUESTIONS: " + sorularSayisi;

// Kullanıcının yeni kelime çıkarma sayısını görüntülüyoruz
document.getElementById("yeniKelimeCikmaSayisi").innerHTML = "NUMBER OF NEW WORDS: " + data.yeniKelimeCikmaSayisi;


