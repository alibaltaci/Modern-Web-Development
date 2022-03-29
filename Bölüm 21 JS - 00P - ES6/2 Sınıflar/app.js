// Sınıflar

// Syntactic Sugar

// function Employee(name,age,salary){
//     this.name = name;
//     this.age= age;
//     this.salary = salary;
// }

//     Employee.prototype.showInfos = function(){
//         console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary); 
//     }

//     const emp = new Employee("Ali", 27, 5000);

//     console.log(emp);


// Yukarıaki yapı ES öncesine aitti.

// Şimdi bu yapının aynısını yeni yöntem ile yapmaya çalışalım

class Employee {

    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary); 
}

}

const emp = new Employee("Ali", 27, 5000);

console.log(emp);

emp.showInfos();

