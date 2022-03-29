// Async, Await Kullanımı ve Promise İlişkisi

// Yeni bir konsept üzerine kurulmuş 2 yeni anahtar kelime değildir.
// Promisleri daha rahat bir şekilde kullanabilmemmizi sağlar.
// Yani Promisleri daha efektif bir şekilde kullanabiliyoruz.


// ASYNC

// Fonksiyonun başına async koyulursa mutlaka promise döneceğini söyler.

// async function test (data){
//     // pomise
//     return data;  // JS buradaki data'yı otomatik olarak "resolve"a koyar. Böylece promise dönmüş olur.

//     // Yukarıdaki return'un uzun hali
//     // return new Promise((resolve, reject) => {
//     //     resolve(data);
//     // });
// }

// console.log(test("Merhaba!"));

// test("Merhaba!").then(response => console.log(response));


// AWAIT 

// Bir promisin resolve (olumlu dönüş) etmesini bekleyen bir anahtar kelimedir.

// Dönüş gerçekleşene kadar alttaki satırları çalıştırmaz.

// async function test2(data){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Bu bir değerdir...");
//         }, 5000);
//     });

//     let response = await promise; // promise'in resolve etmesini bekleyecek. Promise 5sn sonra resolve edeceği için 5sn beklenecek. 
//                                 // text kısmı eşitlediğimiz response kısmına gelecek.

//     // console.log(response);
//     // console.log("Selam!");

//     // response'u return ile yakalayalım
//     return response; // burada da bir promise döner.
// }

// // test2("Merhaba!");

// // return sonrası then ile yakalamak için
// test2("Merhaba!").then(response => console.log(response));

// NOT:
// Await sadece async olan fonksiyonların içinde kullanılabilir.



// HATA OLMA DURUMUNDA

// async function testData(data){

//     let promise = new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }

//             else{
//                 reject(new Error("Lütfen string bir ifade giriniz!!!"));
//             }
//         }, 5000);
//     });

//     const response = await promise;

//     return response;
// }

// testData("Selam!").then(data => console.log(data)).catch(err => console.log(err));

// // Selam!


// testData(42).then(data => console.log(data)).catch(err => console.log(err));

// Error: Lütfen string bir ifade giriniz!!!
//     at app.js:71:24



// Fetch ile berabel kullanmak.

async function getCurrency(url){

    const response = await fetch(url); // burada bir get request yapıyoruz.
                                        // Promise döndürür
                                        // resolve ettiğinde response objesi döner.
                                        // Yani buradaki response değişkenimiz Respons Object'imize eşit olur.
                                        // Response objesinde gelen veri json ise response.json olarak tekrardan bu veriyi çevirebiliyorduk.
                                        // Bu da tekrardan bir promise döndüğü için bunu da await ile bekleyebiliriz.

    const data = await response.json(); // data bizim json objemiz oluyor.

    // console.log(data);

    // yazdırmak yerine çağırdığımız yerde promis şeklinde dönsün
    return data;
}

getCurrency("https://api.exchangerate.host/latest")
.then(response => console.log(response));