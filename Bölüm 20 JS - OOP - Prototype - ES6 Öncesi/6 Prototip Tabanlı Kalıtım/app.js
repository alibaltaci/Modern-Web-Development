//  Prototip Tabanlı Kalıtım

// NOT: ES6 dan sonra bu işlemler yapılmamaya başlamıştır.
// İşin mantığı öğrenmek için bu konuya bakacağız.

// Kalıtım - Inheritance
// Bir objenin başka bir objenin özelliklerini ya da metotlarını miras almasıdır.


function Person(name, age){
    this.name = name;
    this.age = age;
};

// Fonksiyonumuzun Prototype ına showInfos özelliği ekleyelim

Person.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age);
};

// const person = new Person("Ali", 27);
// console.log(person);


// function Employee(name, age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary;
// };


// Employee fonksiyonumuz Person fonksiyonumuzdan miras alsın istiyoruz.

// Employee nın prototype ının gösterdiği yerin Person Prototype olması gerekir.

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.toString = function(){
    console.log("Employee");
};

// const emp = new Employee("Ali", 27, 5000);

// console.log(emp);

// emp.showInfos();  // mirasımızı almış olduk.

// Ama bu şekilde salary i bilgimizi yazdıramadık.
// Bu yüzden Person un değilde Employee içinde bir showInfos tanımlayıp
// Onu kullanmak istersek.

// Buna iptal etme işlemi denir !!!

// Overriding  - İptal etme işlemi:

Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary); 
};

// const emp = new Employee("Ali", 27, 5000);

// emp.showInfos();

// emp.toString();

// console.log(emp);


// Employee fonksiyonunu call ile yazalım

function Employee(name, age, salary){
    // this.name = name;
    // this.age = age;
    Person.call(this, name, age);
    this.salary;
};

const emp = new Employee("Ali", 27, 5000);

emp.showInfos();
