//  Referans Veri Tiplerini Hatırlayalım


// Prim veri tipleri

// let a = "Ali";

// let b = "Ali";

// if(a === b){
//     console.log("Eşit...");
// };


//  Referan veri tipleri

// let arr1 = [1,2,3,4,5];

// let arr2 = [1,2,3,4,5];

// if(arr1 === arr2){
//     console.log("Eşit...");
// };

// eşit olmadığı için console da değer gelmedi.

// Referans veri tiplerinde eşitlik sorgusu yapılırken referansların değerlerine bakılmaz.
// Referansların bellekte aynı yere bakıp bakmadığı kontrol edilir.
// Yukarıda oluşturduğumuz arraylerin değerleri aynı olsa da veriler farklı bir 
// bir yerde işgal etmektedir.

// const person1 = {
//     name:"Ali",
//     age:"27"
// };

// const person2 = {
//     name:"Ali",
//     age:"27"
// };

// if(person1 === person2){
//     console.log("Eşit...");
// };

// aynı durum geçerli 

// JS de referans veri tiplerinin içeriklerini karşılaştırmak için 
// bir fonksiyon bulunmamaktadır.
// Genelde buna ihtiyaç da olmaz.
// İhtiyaç olduğunda kendi fonksiyonumuzu tanımlamamız gerekir.


// Farklı bir örnek

const cities = new Map();

// cities.set("Ankara", 5);

// cities.set("İstanbul", 15);

// cities.set([1,2,3], "Array");

// console.log(cities.get("Ankara"));  // 5 değerimiz geldi çünkü "Ankara" p vt mizdir.

// console.log(cities.get([1,2,3])); // undefined

// Bu durumu önlemek için referans veri tipini bir key aracılığı ile gösterebiliriz.

let key = [1,2,3];

cities.set(key, "Array");

console.log(cities.get(key));  // Array - bu şekilde değerimizi getirmiş olduk.

// Burada istediğimiz değeri alabilmemizi sağlayan durum 
// iki referans veri tipinin verileri aynı bellekte yer turmak olduğundan kaynaklanmaktadır.





