// Object.create

// Bir obje tanımlayalım

// const obj = {
//     test1:function(){
//         console.log("Test1");
//     },

//     test2:function(){
//         console.log("Test2");
//     }
// }


// console.log(obj);

// şimdi yeni bir obje oluşturacağız ve bunun proto sunu obj objesinin protosuna bağlayacağız.

// Bu yöntem kalıtım işlemlerinde kullanılmaktadır.

// const emp = Object.create(obj);

// console.log(emp);

// emp proto --> obj proto --> object proto

// Yeni objemize eleman ekleyelim

// emp.name = "Ali";

// emp.age = 27;

// console.log(emp);


// Daha zor bir örnek

function Person(){  // Constructor

}

// Person() için proto

Person.prototype.test1 = function(){
    console.log("test1");
}

Person.prototype.test2 = function(){
    console.log("test2");
}

// Yeni bir obje oluşturalım 

// const person = new Person();

// console.log(person);


// Farklı bir örnek

function Employee(name, age){   // constructor
    this.name = name;
    this.age = age;
}

// Employee Person daki test1 ve test2 yi miras alsın istersek...
// Miras alabilmesi prototipin gösterdiği yerin obje olmaması lazım !!!
// Prototipin gösterdiği yerin Person prototipi olması lazım

// Şimdi Empleyee prototipini Person prototipinden oluşturarak yukarıda bahsedilen
// durumu sağlamış olacağız.

Employee.prototype = Object.create(Person.prototype);

// Employee prototipi için bir fonksiyon oluşturalım

// Employee.prototype.myTest = () => console.log("myTest");

Employee.prototype.myTest = function(){
    console.log("myTest");
}
// Şimdi yeni bir obje oluşturalım ve bunun üzerinden test1 e ulaşmaya çalışalım.

const emp = new Employee("Ali", 27);

console.log(emp);

// emp.test1();