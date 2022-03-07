let value;

const numbers = [43,56,33,23,44,35,5];

// const numbers2 = new Array(1,2,3,4,5,6,7);  
// bu şekilde de array ler oluşturulabilir fakat çok kullanılan bir yöntem değildir.

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];

// Uzunluk
value = numbers.length;
// Indekslenme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length -1];

// Herhangi bir indeksteki değeri değiştirme

numbers[2] = 1000;

value = numbers;

// Index Of

value = numbers.indexOf(1000);

// Arrayin Sonuna Değer Ekleme - Push

numbers.push(2000);


 // Başına Ekleme
numbers.unshift(3000);

value = numbers;


// Sonundan Değer Atma

numbers.pop()

value = numbers;

// BAşından Değer Atma

numbers.shift()

value = numbers;

// Belli bir kısmını atma

numbers.splice(0,3);

value = numbers;


// Reverse

numbers.reverse();

value = numbers;

value = numbers.sort(); // sayını ilk rakamına bakarak atama yapar.


value = numbers.sort(function(x,y){ // Küçükten Büyüğe
    return x - y;
});

value = numbers.sort(function(x,y){ // Büyükten Küçüğe
    return y-x;
});

console.log(value);
