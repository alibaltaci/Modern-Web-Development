// ES6 SETLER  (Kümeler)

// Setler içerisinde bir değer sadeca bir kez yer alır.

// Set Oluşturma

const mySet = new Set();

// sete eleman ekleme 
mySet.add(100);
mySet.add(100);  // Aynı değer olduğu için bu değeri almayacak fakat hata da vermeyecek. 
mySet.add(3.14);
mySet.add("Ali");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1, b:2});

// console.log(mySet);


// Set oluşturma yöntem 2 (Array ile...)

const mySet2 = new Set([100, 100, 3.14, "Ali", true, [1,2,3], {a:1, b:2}]);

// console.log(mySet2);


// Size

// console.log(mySet.size);  // 6


// Delete

// olmayan değer silinmeye çalışılırsa bir hata vermez.

// mySet.delete("Ali");

// console.log(mySet);  // "Ali" uçtu.


// Has

// console.log(mySet.has("Ali"));  // true

// console.log(mySet.has([1,2,3]));  // false - referans veri tipi olduğu için.


// For Each

// mySet.forEach(function(value){
//     console.log(value);
// });

// mySet.forEach( (value) => console.log(Value));  // olmadı incele


// For Of 

// for(let value of mySet){
//     console.log(value);
// };


// Setten Array Oluşturma 

const arr = Array.from(mySet);

console.log(arr);

