//  DESTRUCTING

//  Arraylerin veya Objelerin içindeb değerleri almak için kullandığımız 
//  kısa bir yol.


//  ARRAYLER ÜZERİNDE DESTRUCTING

// let number1, number2;

// arr = [100,200,300,400,500];

// Eski yöntem ile değer atayalım.
// number1 = arr[0];
// number2 = arr[1];

// Destructing ile 

// [number1,number2] = arr;  // 0 ıncı indexten başlayarak sırasıyle eşitlenir.

// Farklı bir yöntem ile (burada yukraıdaki let satırını yoruma aldık.)

// const[number1,number2] = arr;

// console.log(number1, number2);  // 100, 200


// OBJELER ÜZERİNDE DESTRUCTING

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const {number1,number2,number3} = numbers;

// console.log(number1,number2,number3);  // undefined undefined undefined - anahtara baktığı için değerlere bu şekilde erişemeyiz.

// const {a,b,c} = numbers;  // anahtarlar eşleşerek bu şekilde değerler getirilebilir.

// console.log(a,b,c);

// Anahtarlara farklı isimle adlandırmak

// const {a:number1, b:number2, c:number3} = numbers;

// console.log(number1, number2, number3);  // bu şekilde de getirmiş olduk.


// FUNCTION DESTRUCTING  (Örnek 1)

// const getLangs = () => ["Python","Java","C++"];

// const [lang1,lang2,lang3] = getLangs();

// console.log(lang1,lang2,lang3);


// OBJE (Örnek 2)

const person = {
    name:"Ali",
    year:1995,
    salary:100000,
    showInfos: () => console.log("Bilgiler Gösterileiyor...") 
};

const {name:isim, year:yıl, salary:maaş, showInfos:bilgileriGöster} = person;

console.log(isim,yıl,maaş);
bilgileriGöster();






