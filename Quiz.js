// currentUserData'yi sessionStorage'dan al ve JavaScript nesnesine dönüştür
let dataUser = JSON.parse(sessionStorage.getItem('currentUserData'));

// dataUser'ın email'ini kullanarak localStorage'dan verileri al ve JavaScript nesnesine dönüştür
let data = JSON.parse(localStorage.getItem(dataUser.email));

// body elementini seç
let body = document.getElementById('body');

// Yeni div elementleri oluştur
let div = document.createElement('div');
let div2 = document.createElement('div');

// div elementlerini body'e ekle
body.appendChild(div);
body.appendChild(div2);

// Sorular ve sayaçlar için değişkenler
let sorular = [];
let soruNumarasi = 0;
let soruSayisi = 0;

// Geçerli tarihi döndüren fonksiyon
function getCurrentDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Aylar 0'dan başlar, bu yüzden +1 ekliyoruz
    var year = today.getFullYear();

    // Tarihi gün/ay/yıl formatında döndür
    return day + '/' + month + '/' + year;
}

// Soru oluştur ve testi başlat
function createAndTest(key) {
    // Sorular dizisine kelimeyi ekle
    sorular.push(data[key].kelime);
    soruSayisi++;
    soruNumarasi++;

    // Yeni h1 elementi oluştur ve içeriğini ayarla
    let h1Soru = document.createElement('h1');
    h1Soru.innerHTML = soruNumarasi + ") " + data[key].kelime + " anlamı yazınız?";
    div2.appendChild(h1Soru);

    // Yeni input elementi oluştur ve div2'ye ekle
    let inputText = document.createElement('input');
    inputText.type = 'text';
    div2.appendChild(inputText);

    // key değerini local bir değişkende sakla
    let currentKey = key;

    // Kullanıcı bir cevap yazdığında çalışacak olay dinleyicisi
    inputText.addEventListener('input', function() {
        if (inputText.value != "") {
            if (inputText.value === data[currentKey].anlami) {
                // Cevap doğruysa, kere sayısını artır ve cevablamaTarihi'ni güncelle
                (data[currentKey].kere)++;
                data[currentKey].cevablamaTarihi = getCurrentDate();
                localStorage.setItem(dataUser.email, JSON.stringify(data));
                let index = sorular.indexOf(data[currentKey].kelime);
                sorular.splice(index, 1);
            }
        }
    });
}

// Verilerdeki her bir anahtar için döngü
for (var key in data) {
    if (key != "name" && key != "email" && key != "password" && key != "yeniKelimeCikmaSayisi" && data[key].kere < 1 && soruSayisi < data.yeniKelimeCikmaSayisi) {
        // Şartları sağlayan kelimeleri sorular dizisine ekle ve ekranda göster
        sorular.push(data[key].kelime);
        soruSayisi++;
        soruNumarasi++;
        let h1Soru = document.createElement('h1');
        h1Soru.innerHTML = soruNumarasi + ") " + data[key].kelime + " anlamı yazınız?";
        div.appendChild(h1Soru);

        let inputText = document.createElement('input');
        inputText.type = 'text';
        div.appendChild(inputText);

        let currentKey = key;

        inputText.addEventListener('input', function() {
            if (inputText.value != "") {
                if (inputText.value === data[currentKey].anlami) {
                    (data[currentKey].kere)++;
                    data[currentKey].cevablamaTarihi = getCurrentDate();
                    localStorage.setItem(dataUser.email, JSON.stringify(data));
                    let index = sorular.indexOf(data[currentKey].kelime);
                    sorular.splice(index, 1);
                }
            }
        });
    }
}

// Verilerdeki her bir anahtar için döngü (kere > 0 olanlar için)
for (var key in data) {
    if (key != "name" && key != "email" && key != "password" && key != "yeniKelimeCikmaSayisi" && data[key].kere > 0 && soruSayisi < 26) {
        let tarihArray = data[key].cevablamaTarihi.split('/');
        let soruDay = parseInt(tarihArray[0], 10);
        let soruMonth = parseInt(tarihArray[1], 10);
        let soruYear = parseInt(tarihArray[2], 10);

        switch (data[key].kere) {
            case 6:
                if (getCurrentDate().split('/')[2] >= (soruYear + 1) && getCurrentDate().split('/')[1] >= soruMonth && getCurrentDate().split('/')[0] >= soruDay) {
                    createAndTest(key);
                } else {
                    console.log("no 6");
                }
                break;

            case 5:
                if (getCurrentDate().split('/')[2] >= soruYear && getCurrentDate().split('/')[1] >= (soruMonth + 6) && getCurrentDate().split('/')[0] >= soruDay) {
                    createAndTest(key);
                } else {
                    console.log("no 5");
                }
                break;
                
            case 4:
                if (getCurrentDate().split('/')[2] >= soruYear && getCurrentDate().split('/')[1] >= (soruMonth + 3) && getCurrentDate().split('/')[0] >= soruDay) {
                    createAndTest(key);
                } else {
                    console.log("no 4");
                }
                break;

            case 3:
                if (getCurrentDate().split('/')[2] >= soruYear && getCurrentDate().split('/')[1] >= (soruMonth + 1) && getCurrentDate().split('/')[0] >= soruDay) {
                    createAndTest(key);
                } else {
                    console.log("no 3");
                }
                break;

            case 2:
                if (getCurrentDate().split('/')[2] >= soruYear && getCurrentDate().split('/')[1] >= soruMonth && getCurrentDate().split('/')[0] >= (soruDay + 7)) {
                    createAndTest(key);
                } else {
                    console.log("no 2");
                }
                break;

            case 1:
                if (getCurrentDate().split('/')[2] >= soruYear && getCurrentDate().split('/')[1] >= soruMonth && getCurrentDate().split('/')[0] >= (soruDay + 1)) {
                    createAndTest(key);
                } else {
                    console.log("no 1");
                }
                break;
        }
    }
}

// Sorular varsa bir buton oluştur ve ekle
if (sorular.length > 0) {
    let button = document.createElement('button');
    button.innerText = 'Submit';
    button.style.display = 'block';
    div2.appendChild(button);

    // Buton tıklanma olayını dinle
    button.addEventListener('click', function() {
        for (let i = 0; i < sorular.length; i++) {
            data[sorular[i]].kere = 0;
            data[sorular[i]].cevablamaTarihi = null;
            localStorage.setItem(dataUser.email, JSON.stringify(data));
        }

        div.style.display = 'none';
        div2.style.display = 'none';

        let yanlisSoruSayisi = document.createElement('h2');
        yanlisSoruSayisi.innerHTML = "Number of wrong words you answered: " + sorular.length;
        body.appendChild(yanlisSoruSayisi);

        if (sorular.length != 0) {
            let sonuc = document.createElement('h2');
            sonuc.innerHTML = "Wrong words you answered: (" + sorular + ")";
            body.appendChild(sonuc);
        }
    });
} else {
    alert("There are not enough questions, please add words");
    window.location.href = 'home.html';
}

