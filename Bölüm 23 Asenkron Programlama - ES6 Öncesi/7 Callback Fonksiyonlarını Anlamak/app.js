// Callback Fonksiyonlarını Anlamak.

// callback fonksiyonları normal fonksiyondur ama bu fonksiyonları başka 
// fonksiyonlara parametre olarak gönderebiliyoruz.

// Callback fonksiyonları sayesinde asenkron işlemlerimizi yönetebiliyoruz.

// const langs = ["Python", "Java", "C++"];

// langs.forEach(function(lang){  // burada forEach'e parametre olarak fonksiyon göndermiş olduk.
//     console.log(lang);
// });


// addEventListener da bir callback fonksiyonudur.

// document.getElementById("btn").addEventListener("click", function(){
//     console.log("Tıkla");
// });


// Asenkron işlemleri callback sayesinde yönetmek.

// function process1(){
//     setTimeout(function(){
//         console.log("Process1");
//     }, 3000);
// }

// function process2(){
//     setTimeout(function(){
//         console.log("Process2");
//     },2000);
// }

// process1();
// process2();

// Process2'nin process1'den sonra başlamasını istersek.

// function process1(callback){  // fonksiyonumuzun bir elemen almasını istiyoruz.
//     setTimeout(function(){
//         console.log("Process1");
//         callback(); // içine aldığı elemanı burada çalıştıracak.
//     }, 3000);
// }

// function process2(){
//     setTimeout(function(){
//         console.log("Process2");
//     },2000);
// }

// process1(process2);


// Başka bir örnek

let langs = ["Java", "Python", "C++"];

function addLang(lang, callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi...");
        callback();
    }, 2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    }, 2000);
}

addLang("javascript", getAllLangs);

// Bu yöntem eski bir yöntemdir fakat yeri geldiğinde kullanılabilmektedir.

