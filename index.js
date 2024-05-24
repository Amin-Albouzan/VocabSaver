


const data=[];





// Bu fonksiyon, hesap oluşturma (sign up) sayfasına girilen verileri alır ve bir diziye kaydeder, ardından localStorage'a kaydeder.


function signUp()
{
  let names=document.getElementById("name");
  let email=document.getElementById("email");
  let password=document.getElementById("password");
  let emailOrPassword=document.getElementById("emailOrPassword");
  let confrm=document.getElementById("confrm");
  let passwordOrConfrm=document.getElementById("passwordOrConfrm");
  
  
// kullancının girdıgı veriler boş alan yoksa 

if(names.value!="" && email.value!="" && password.value!="" && confrm.value!="")
{

  // kullancının girdıgı veriler bir object icinde yaziyorum

let cats=
{
name:names.value,
email:email.value,
password:password.value,
yeniKelimeCikmaSayisi:"10"
}
  
//  kulancinin girdigi 2 kere sifreyi ayni ise
if(cats.password===confrm.value)

{

  // burda kullancinin girdigi email  bir hesap varmi bakiyorum.

  let signUpData = JSON.parse(localStorage.getItem(cats.email));
  if(signUpData)
  {
    passwordOrConfrm.innerHTML="*The email is already in use."
    return;
  }


// her sey tamamsa veriler localStorage'a kaydeder.

  data.push(cats); 
  for(let i=0;i<data.length;i++)
  {
//Burada bilgileri localStorage içerisine kaydettim ve verileri tekrar almak istersem diye anahtarın adını e-posta olarak ayarladım.
    localStorage[cats.email] = JSON.stringify(data[i]);

   
  }

  






passwordOrConfrm.style.color='green';
  passwordOrConfrm.innerHTML=" &#10004 We have created an account for you.You will be redirected to the login page";
  setTimeout(function() {
    location.reload();
    names.value=null;
    email.value=null;
    window.location.href='signIn.html'
  }, 3000);



 



}



//  kulancinin girdigi 2 kere sifreyi ayni degilse 
else{

  passwordOrConfrm.innerHTML="*The password does not match";
 

}






}







// kullancının girmedigi boş alan varsa
else
{
  passwordOrConfrm.innerHTML="*Please do not leave empty space";
}







}













// Bu fonksiyon kullanıcı tarafından girilen bilgiyi alır ve localsorage de var olup olmadığını kontrol eder.
function signIn() {
  
  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  // Burada kullanıcının geri çağırma anahtarına girdiği e-postayı localstorage'a yerleştirerek verileri alıyorum.
  // Boş bir değer döndürüyorsa bu, hesabın mevcut olmadığı anlamına gelir

  let loginData = JSON.parse(localStorage.getItem(loginEmail));
  if (loginEmail !== "" && loginPassword !== "") {

  if (loginData && loginData.email === loginEmail && loginData.password === loginPassword) {


  sessionStorage.setItem("currentUserData", JSON.stringify(loginData));
  window.location.href = 'home.html';

}
 else {
        emailOrPassword.innerHTML = "* The email or password is incorrect";
       
      }
  }
 
}









// هذه الدالة تقوم باخذ الايميل الذي ادخله العميل والتاكد منه في حال وجوده في الذاكرة ام لا


let uyari=document.getElementById("uyari");
let ForgetPasswordDelete=document.getElementById("ForgetPasswordDelete");
let yeniSifreGonderildi=document.getElementById("yeniSifreGonderildi");



// kullancinin giris bilgileri  
 let ForgetEmailData;

// forget password sayfasinda kullanciden emailini h=girmesini istenilecek 
// eger kullancinin girdigi email localStorage yoksa ona hata verecek 



function EmailTest()
{
let ForgetEmail=document.getElementById("ForgetEmail").value;
 ForgetEmailData=JSON.parse(localStorage.getItem(ForgetEmail));
  
  

if(ForgetEmailData)
{
  ForgetPasswordDelete.style.display="none";
  yeniSifreGonderildi.style.display="block";
}


else{
uyari.innerHTML="*The email you entered does not exist"
}



}


// kullancinin girdigi email localStorage de varsa ondan emiline gonderilen password isteyecek
// (bu inputta kullancinin her hangi bir sey yazdiginida emiline gonderilen password sayacak ve onu 
//   new password sayifasina iletecek )



function yeniSifreGonderilditest()
{
let gonderilenSifreUyari=document.getElementById("gonderilenSifreUyari");
let yeniSifreGonderilenValuesu=document.getElementById("yeniSifreGonderilenValuesu").value;
let newPassword=document.getElementById("newPassword");

if(yeniSifreGonderilenValuesu)
{
  yeniSifreGonderildi.style.display="none"
  newPassword.style.display="block"









//  console.log( ForgetEmailData);


}

else{

  gonderilenSifreUyari.innerHTML="* This option should not remain empty"

}






}





// new password sayifasinda kullancidan yeni sifreyi girmesini isteyecek ve yeniden localStoragete
// kaydedecek

function newPassword()
{
  
let enterNewPassword=document.getElementById("enterNewPassword").value;
let EnterNewConfrm=document.getElementById("EnterNewConfrm").value;
let newPasswordUyari=document.getElementById("newPasswordUyari");

if(enterNewPassword===EnterNewConfrm)
{
  ForgetEmailData.password=enterNewPassword;
  localStorage.setItem(ForgetEmailData.email,JSON.stringify(ForgetEmailData));
  newPasswordUyari.style.color="green";
  newPasswordUyari.innerHTML="&#10004 The password has been successfully changed"



  setTimeout(function() {
    location.reload();
    window.location.href = 'signIn.html';
    
  }, 3000);







}

else{

  newPasswordUyari.innerHTML="*The password does not match"
}

}




