

// 'data-info' id'sine sahip HTML elementini alıyoruz
var datainfo = document.getElementById('data-info');

// Oturumdaki mevcut kullanıcı verilerini alıyoruz
var currentUserData2 = JSON.parse(sessionStorage.getItem("currentUserData"));

// Kullanıcının e-posta adresini alıyoruz
var userEmail = currentUserData2.email;

// LocalStorage'dan kullanıcının verilerini alıyoruz
var kullaniciData = JSON.parse(localStorage.getItem(userEmail));

// Kullanıcı verilerini döngü ile dolaşıyoruz
for (var key in kullaniciData) {
  
  // Belirli anahtarları atlıyoruz (ad, e-posta, şifre, yeniKelimeCikmaSayisi)
  if (key != "name" && key != "email" && key != "password" && key != "yeniKelimeCikmaSayisi") {

    // Yeni bir div elementi oluşturuyoruz
    let divElement = document.createElement('div');
    
    // Anahtara karşılık gelen veriyi alıyoruz
    var veri = kullaniciData[key];
    
    // Eğer veri bir kelime içeriyorsa
    if (veri.kelime) {
      // Yeni div elementini 'datainfo' elementine ekliyoruz
      datainfo.appendChild(divElement);

      // Yeni bir h1 elementi oluşturuyoruz ve kelimeyi içine yazıyoruz
      var ingilizce = document.createElement('h1');
      ingilizce.innerHTML = veri.kelime;

      // Kelimeyi içeren h1 elementini div elementine ekliyoruz
      divElement.appendChild(ingilizce);
    }
    
    // Eğer veri bir anlam içeriyorsa
    if (veri.anlami) {
      // Yeni div elementini 'datainfo' elementine ekliyoruz
      datainfo.appendChild(divElement);

      // Yeni bir h1 elementi oluşturuyoruz ve anlamı içine yazıyoruz
      var turkce = document.createElement('h1');
      turkce.innerHTML = veri.anlami;

      // Anlamı içeren h1 elementini div elementine ekliyoruz
      divElement.appendChild(turkce);
    }
    
    // Eğer veri bir açıklama metni içeriyorsa
    if (veri.aciklamaMetin) {
      // Yeni div elementini 'datainfo' elementine ekliyoruz
      datainfo.appendChild(divElement);

      // Yeni bir p elementi oluşturuyoruz ve açıklama metnini içine yazıyoruz
      var anlami = document.createElement('p');
      anlami.innerHTML = veri.aciklamaMetin;

      // Açıklama metnini içeren p elementini div elementine ekliyoruz
      divElement.appendChild(anlami);
    }
    
    // Eğer veri bir resim kaynağı içeriyorsa
    if (veri.resimSrc) {
      // Yeni div elementini 'datainfo' elementine ekliyoruz
      datainfo.appendChild(divElement);

      // Yeni bir img elementi oluşturuyoruz ve resim kaynağını içine yazıyoruz
      var imgElement = document.createElement('img');
      imgElement.src = veri.resimSrc;

      // Resim elementini div elementine ekliyoruz
      divElement.appendChild(imgElement);
    }
  }
}















