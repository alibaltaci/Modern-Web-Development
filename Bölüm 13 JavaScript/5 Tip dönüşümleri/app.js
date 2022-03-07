let value;

// Veritiplerini String'e Çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);


value = (10).toString();
value = (3.14).toString();

  

// Veritiplerini Sayılara Çevirme
// Verileri sayıya çevirmek için veride bir sayısal değer olması lazım.

value = Number("123");  // 123
value = Number(null);   // 0
value = Number(undefined);  // hata - çünkü içinde sayısal bir değer yok. (NaN - Not a number)
value = Number("Hello World");
value = Number(function(){console.log()});
value = Number([1,2,3,4]);

value = Number("3.14");
value = parseFloat("3.14");

value = parseInt("3");  // 3 - tam sayıları çevirmek için...



// const a = "hello" + 34 // hello34 - bir string ve bir sayısal ifade varsa, sayısal değeri de stringe çevirir.

const a = Number("34") + 53; // 87

console.log(a);
console.log(typeof a);



console.log(value);
console.log(typeof value);






