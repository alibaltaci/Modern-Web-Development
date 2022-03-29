// PROMISE

// function getData(data){  // Promise objesi döndüren fonksiyon
//     return new Promise(function(resolve, reject){  // Olumlu dönüş: resolve - Hatalar: reject.
//                                                     // Bu JS de hazır olan bir fonksiyonumuzdur.

//         setTimeout(function(){

//             // resolve("Olumlu Sonuç...");  // resolve için 

//             // reject("Olumsuz Sonuç..."); // reject için 

//             // resolve & reject birlikte

//             if(typeof data === "string"){
//                 resolve(data);
//             }

//             else{
//                 reject(new Error("Lütfen String Bir Değer Giriniz!!!")); // daha açıklayıcı hata mesajları için.
//             }

//         }, 5000);
//     });
// }


// Pending (Bekleme) Durumunu görelim.
// console.log(getData("Merhaba!"));  // Biz.

// 10 sn beklemeden bakmak gerek.

// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined

// 10 sn bekledikten sonra bakarsak 

// Resolved durumu
// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled" (resolved olarak da görünebilir.)
//     [[PromiseResult]]: "Olumlu Sonuç..."

// reject durumu

// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "rejected"
//     [[PromiseResult]]: "Olumsuz Sonuç..."


// Olumlu ve Olumsuz Sonuçları Alabilmek (Then & catch)

// Olumsu - then (resolve - fulfilled)

// getData("Merhaba!").then(function(response){  // statusümüz resolve ya da fulfilled olduğunda çalışır.
//     console.log(response);
// });
// Olumlu Sonuç...

// Olumsuz - catch (reject)

// getData("Merhaba!").catch(function(err){
//     console.log(err);
// });
// Olumsuz Sonuç...

// Resolve & Reject Birlikte 

// getData(42).then(function(response){
//     console.log("Gelen Değer: " + response);
// }).catch(function(err){
//     // console.log(err);
//     console.error(err);  // hata mesajını kırmızı yazdırmak için.
// });

// data = Merhaba! 
// Gelen Değer: Merhaba!

// data = 42
// Lütfen String Bir Değer Giriniz!!!

// new Error - Daha güzel hata mesajları almak için
// Error: Lütfen String Bir Değer Giriniz!!!
//     at app.js:20:24
// (anonymous) @ app.js:76
// Promise.catch (async)
// (anonymous) @ app.js:74

// Yukarıdaki işlemimizi daha güzel yazmaya çalışalım (Arrow Function ile)

// getData(42)
// .then(response => console.log("Gelen değer: " + response))
// .catch(err => console.error(err));



// Promise Chain (then içinde then)

// Bu yapılarda 1 den fazla then kullanılabilir.
// fakat sadece bir kere catch kullanılabilir.

function addTwo(number){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(typeof number === "number"){
                resolve(number+2);
            }

            else{
                reject(new error("Lütfen bir sayı giriniz..."));
            }
        }, 3000);
    });
}

addTwo(42)
.then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err));
 

