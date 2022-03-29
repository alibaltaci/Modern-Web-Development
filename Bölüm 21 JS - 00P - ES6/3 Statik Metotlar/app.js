// Statik Metodlar (Durağan)

// class ımızın içine bir statik metod yazarsak, obje oluşturmasak 
// dahi bunları kullanabiliyoruz.

// class Matematik{

//     cube(x) {
//         console.log(x*x*x);
//     }
// }

// const math = new Matematik();

// console.log(math);

// math.cube(5);  // 125


// Bunu işlemleri statik metod ile obje oluşturmadan yapalım

// class Matematik{

//     static cube(x) {
//         console.log(x*x*x);
//     }
// }

// Matematik.cube(9);  // 729

//  static metodları objeler ile kullanamayız.
// Çünkü bu metodlar class ın ve objenin prototype ına yazılmaz.

// Daha önceki derslerde kullandığımız static metod örnekleri

// Object.create();
// Math.sqrt(); 







