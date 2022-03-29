//  Spread Operator

// ex1:

// const langs = ["Python","Java","C++","Php"];

// console.log(langs[0],langs[1],langs[2],langs[3]);

// yukarıdaki işlemi spread operatörü ile yazmaya çalışalım.

// console.log(...langs);

// ex2:

// const langs2 = ["Javascript", "c#", langs[0],langs[1],langs[2],langs[3]];
// console.log(langs2);

// spread operatörü ile 
// const langs2 = ["Javascript", "c#", ...langs];
// console.log(langs2);


// ex3:

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b, ...numbers2] = numbers;

// console.log(a,b,numbers2);


// ex4:

const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers = [100,200,300];

// eski yöntem ile arrayımızın içindeki değerleri fonksiyona gönderelim.

// addNumbers(numbers[0],numbers[1],numbers[2]);

// spread ile 
addNumbers(...numbers);




