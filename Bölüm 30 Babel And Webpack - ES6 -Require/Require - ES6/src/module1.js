// export etmek istediğimiz fonksiyon için 

// module.exports = function test1(){

//     console.log("Test 1");
// }

// Bu yöntemle sadece bir fonksiyon export edilebilir.

// Daha fazla fonksiyon export edebilmek için fonksiyonlara bir tana anahtar kelime vermek gerekir.
// Yani bunlar bir obje olarak export edilecek.

// module.exports.test1 = function test1(){
//     console.log("Test 1");
// }

// module.exports.test2 = function test2(){
//     console.log("Test 2");
// }

// module.exports.test3 = function test3(){
//     console.log("Test 3");
// }

// Teker teker fonksiyon export etmek yerine obje export etmek

// module.exports = {
    
//     name: "Ali",

//     test1: function (){
//         console.log("Test 1");
//     },

//     person: {
//         name: "Ali",
//         mail: "alibaltaci13@gmal.com"
//     }
// }


// ES6 MODÜLLERİ İLE 

// Export etmek istediğimiz değişkenin başına export yazıyoruz.

export const name = "Ali";

export function test(){
    console.log("Test Func");
}

export class Person{

    static test(){
        console.log("Person test");
    }
}

export const Employee = {

    name: "Ali",
    maile: "alibaltaci13@gmail.com"
}


// Defoult olarak export edilen değer

// export default class Trial{
//     static trial(){
//         console.log("Default Trial");
//     }
// }


const trialVal = "Trial Value";

export default trialVal;