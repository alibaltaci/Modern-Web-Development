//  Arrow Functions ES6+ ile birlikte gelen ve fonksiyonları yazmamızı biraz daha kısaltabilen sözdizimi özelliğidir.

// const merhaba = function(){
//     console.log("Merhaba");
// }

// merhaba();

// Şimdi bu fonksiyonu arrow fonksiyonu ile yazmaya çalışalım.


// Arrow Function

// const merhaba = () => {    // function ifadesinden kurtulmuş olduk.
//     console.log("Merhaba");
// }

// merhaba();

// Parametre göndererek deneyelim.

// const merhaba = firstName =>   // fonksiyonumuz tek parametre alıyorsa () koymaya gerek yok.
//     console.log("Merhaba",firstName);  // eğer fonksiyonumuz tek işlem yapacaksa {} kullanmaya da gerek yoktur.

//  Daha güzel bir görüntü için 

// const merhaba = firstName => console.log("Merhaba", firstName);

// merhaba("ali");

//  iki parametreli bir fonksiyon tanımlayalım

// const merhaba = (firstName, lastName) => console.log("Merhaba", firstName, lastName);

// merhaba("Ali", "Baltacı");


// Cube Function

// const cube = function(x){
//     return x*x*x;
// }

// console.log(cube(5));

// Arrow ile 

// const cube = x => {
//     return x*x*x;
// }

// console.log(cube(7));

// Daha sade 

const cube = x => x*x*x;  // sadece return işlemi olduğu için return yazmaya ve {} kullanmaya gerek yok.

console.log(cube(7));
 