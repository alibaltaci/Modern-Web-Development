// Prototype - 1 

// Şuana kadar ki en zor video imiş !!!!

// JS class tabanlı bir programlama dili değildir.
// Prototype tabanlı bir programlama dilidir.
// ES de class yazımı olsa bile bunlar arka planda prototype lara dönüştürülü ve o şekilde işlemler devam eder.

//  En basit şekliyle bir object oluşturalım

// const object = new Object(); // Object Literal

// const object2 = new Object();

// object.name = "Ali";

// console.log(object);  // console da buraya gidip açtığımızda "[[Prototype]]: Object" bu şekilde bir şey görürüz.

// Bu prototype her objede bulunduğu için hepsi gider ortak olan bu metotları gösterir.
// Eğer her objenin içine metotları ayrı ayrı yazsaydık her metottan obje sayısı kadar kopya olmuş olacaktı.


// Şimdi bir Function yazalım ve objelerimizi bunun üzerinden oluşturalım.

function Employee(name, age){
    this.name = name;
    this.age = age;

    this.showInfos = function(){
        console.log(this.name, this.age);
    }
}

const emp1 = new Employee("Ali", 27);

// emp1.showInfos();

// Prototype görmek için emp1 i yazdıralım

// console.log(emp1);

// Buradaki Prototype ımızın içine baktığımızda kendi yazdığımız 
// Employee constructor unu  ve bir prototype daha görüyoruz.
// Bu prototype yukarı da görmüş olduğumuz en genel obje prototype dır.

// Employee Objesi --> Employe Prototype ına sahiptir.
// Employee Prototype ı --> Object Prototype ına sahiptir (EN genel objemiz.)
// Burada bir prototype zinciri söz konusudur.

// Bu sayede kendi yazmadığımız metotları da object prototype ının içinden kullanabiliriz.

// Bu duruma miras alma (Kalıtım) - (inheritance) denir. 

// Örnek
console.log(emp1.toString());  // [object Object]