//  Prototype - 2

function Employee(name, age){
    this.name = name;
    this.age = age;

    // this.showInfos = function(){
    //     console.log("İsim: " + this.name + "Yaş: " + this.age);
    // }
};

const emp1 = new Employee("Ali", 27);

const emp2 = new Employee("Ahmet", 25);

// console.log(emp1, emp2);

// Employee fonksiyonumuzun içinde tanımladığımız show Infos fonksiyonumuzu
// orada tanımlamak bir dezavantaj doğurabilir.
// Eğer Employee metodu ile çok sayıda obje oluşturursak hepsinde show infos olacağı için
// belleğimizde aynı metoddan elman sayısı kadar kopya bulunacaktır.
// Bu kopyalar bellekte gereksiz yer tutacaktır.
// Eğer biz bu metodumuzu Employe fonksiyonu yerine metodumuzun içine yazarsak bu dezavantajdan kurtulmuş oluruz.

// Şimdi yukarıdaki Employee fonksiyonundan showInfos metodunu koparalım ve
// bunu Employee prototype ına yazdıralım.

// Employee metodumuzn prototype ına ulaşalım ve showInfos elementimizi buraya yazalım.

Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age);
};

emp1.showInfos();
emp2.showInfos();

// Buradaki iki objemiz aynı prototype e sahiptir (Employee). 

