

// Oturumdaki mevcut kullanıcı verilerini alıyoruz
let currentUserData = JSON.parse(sessionStorage.getItem('currentUserData'));

// localStorage'dan kullanıcının verilerini alıyoruz
let data = JSON.parse(localStorage.getItem(currentUserData.email));

// Giriş kutusunun değerini gösterme
let inputunValusuGosterme = document.getElementById('input');
inputunValusuGosterme.value = data.yeniKelimeCikmaSayisi;

// Değişiklikleri kaydeden işlev
function save() {
    let input = document.getElementById('input');

    if (input.value) {
        if (input.value >= 5 && input.value <= 15) {
            data.yeniKelimeCikmaSayisi = input.value;
            localStorage.setItem(data.email, JSON.stringify(data));
            alert('The number of appearances of new words has been successfully updated');
        } else {
            alert('Please enter a number between 5 and 15');
        }
    } else {
        alert('This option cannot be left blank');
    }
}

// PDF indirme düğmesine tıklandığında PDF oluşturulur ve indirilir
document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    const doc = new jsPDF();
    let cordinateY = 10;
    doc.setFontSize(10);

    // Başlıkları ekliyoruz
    doc.text("WORDS", 8, cordinateY);
    doc.text("LEVEL", 95, cordinateY);
    doc.text("CORRECT ANSWER DATE", 160, cordinateY);
    cordinateY = (cordinateY + 10);

    // Verileri PDF'e ekliyoruz
    for (let key in data) {
        if (key != "name" && key != "email" && key != "password" && key != "yeniKelimeCikmaSayisi") {
            doc.text(data[key].kelime.toString(), 10, cordinateY);

            if (data[key].kere) {
                doc.text(data[key].kere.toString(), 100, cordinateY);
            } else {
                doc.text("0", 100, cordinateY);
            }

            if (data[key].cevablamaTarihi) {
                doc.text(data[key].cevablamaTarihi.toString(), 175, cordinateY);
            } else {
                doc.text("not answered", 175, cordinateY);
            }

            cordinateY = (cordinateY + 10);
        }
    }

    // PDF'i kaydediyoruz
    doc.save('VERILER.pdf');
});

