// Kalıtım - Inheritance

// Daha önceki derslerde yapmış olduğumuz kalıtım işlemlerinin aynısını burada yapmaya çalışalım.

class Person {  // SuperClass , BaseClass - literatür

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    }
}

// Şimdi yukarıda miras alarak Employee classımızı türetelim.

// class Employee extends Person{  // DerivedClass, SubClass, ChildClass

//     constructor(name, age, salary){
//         // this.name = name;
//         // this.age = age;

//         // yukarıakile yerie    
//         super(name, age); // bu anahtar kelime Person Costructor umuzu kullanmak istediğimizi söyler.
//         // super.showInfos(); // showInfos u kullanmak istersek. 
//         this.salary =salary;
//     }
// }

// const emp = new Employee("Ali", 27, 5000);

// console.log(emp);

// emp.showInfos(); // bunu miras aldık

// Override ile miras aldığımız showInfos u iptal edip kendimiz tekrardan yazalım.
// Employee class ını tkrardan taımşlayalım

class Employee extends Person{  

    constructor(name, age, salary){
  
        super(name, age); 
        this.salary =salary;
    }

    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }

    // ekstra bir metod yazalım
    raiseSalary(amount) {
        this.salary += amount;
    }
}

const emp = new Employee("Ali", 27, 5000);

// console.log(emp);

// emp.showInfos();  // Kendi showInfos umuz.

// Ekstra Metodumuzu kullanalım

emp.raiseSalary(500);

emp.showInfos();







