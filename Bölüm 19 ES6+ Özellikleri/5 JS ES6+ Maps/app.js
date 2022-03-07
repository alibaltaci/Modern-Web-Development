//  Javascript ES6+ Maps

//  key - value (çeşitli veri tipi değerlerini alablirler)

// const myMap = new Map();

// console.log(myMap);

// keyler oluşturalım

// const key1 = "Ali";
// const key2 = {a:10, b:20};
// const key3 = () => 2;


// Set
// Keyleri myMap e ekleyelim.

// myMap.set(key1, "String Değer.");
// myMap.set(key2, "Object Literal Değer.");
// myMap.set(key3, "Function Değer.");


// Get
// değer alma

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));


// Map boyut
// eleman sayısı

// console.log(myMap.size);


// Yeni map 

// const cities = new Map();

// cities.set("Ankara", 5);
// cities.set("İstanbul", 15);
// cities.set("İzmir", 4);

// For Each

// cities.forEach(function(value, key){
//     console.log(key,value);
// });

// cities.forEach((value, key) => console.log(key, value)); // :)


// For of 

// for(let [key, value] of cities){  // distructing yapısını kullandık
//     console.log(key, value);
// };


// Map Keys

//  sadece key leri almak istediğimizi varsayalım

// for(let key of cities.keys()){
//     console.log(key);
// };


// Map Values

//  sadece value ları almak için

// for(let value of cities.values()){
//     console.log(value);
// };


//  ARRAYDEN MAP OLUŞTURMA 

// const arr = [["key1", "value1"],["key2", "value2"]];

// const lastMap = new Map(arr);

// console.log(lastMap);


// Mapden Array Oluşturma 

const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

const arr = Array.from(cities);

// [['Ankara', 5], ['İstanbul', 15], ['İzmir', 4]]  --> bu şekilde bir şey oluşturuyoruz aslında

console.log(arr);



