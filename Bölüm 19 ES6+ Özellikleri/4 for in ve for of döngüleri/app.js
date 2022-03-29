// For in ve For of Döngüleri

const person = {
    name:"Ali",
    age:"27",
    salary:3000
};

const langs = ["Python", "Java", "C++", "Php"];

const name = "Ali";


// For in  

// Obje üzeirnde gezinme

// for(let prop in person){
//     console.log(prop, person[prop]);
// };

// Array üzerinde gezinme 

// for(let index in langs){
//     console.log(index, langs[index]);
// };

// String üzerinde gezinme 

// for(let index in name){
//     console.log(index, name[index]);
// };


// For of 

// Objelerin üzerinde gezinemeyiz.
// Sadece arraye benzeyen verilerin üzerinde gezinebiliriz.

// obje
// for(let value of person){  //TypeError: person is not iterable
//     console.log(value);
// };

// Array
// for(let value of langs){
//     console.log(value);
// };

// String
for(let character of name){
    console.log(character);
};
