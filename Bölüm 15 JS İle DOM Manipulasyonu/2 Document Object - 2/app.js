// Window Object
let value;

value = document;
value = document.all;  // HTMLAllCollection --> JS deki bir objedir. Biz bu obje üzerinde de tıpkı arrayler gibi gezinebiliriz.
value = document.all.length;    // HTML Sayfamızda kaç tane element olduğunu görebiliriz.
// value = document.all[0];
// value = document.all[6];
// value = document.all[document.all.length-1];

// const elements = document.all; //Html Collection
// for(let i = 0; i < elements.length;i++) {
//     console.log(elements[i]);
// }
// elements.forEach(function(element){   // HTML Collection larda forEach kullanamayız hata alırız.
//     console.log(element);
// });

// const collections = Array.from(document.all);   // Arraye çevirdikten sonra forEach kullanılabilir.

// collections.forEach(function(collection){    
//     console.log(collection);
// });


// Document üzerinde "body" etiketine ulaşmaya çalışalım.

// value = document.all[8];  // index değeri biliniyorsa.
// value = document.body;    // bilinmiyorsa bu şekilde de ulaşılabilir.    
// value = document.head;
// value = document.location;
// value = document.location.hostname;
// value = document.location.port;

// value = document.URL;

// value = document.characterSet;

console.log(value);