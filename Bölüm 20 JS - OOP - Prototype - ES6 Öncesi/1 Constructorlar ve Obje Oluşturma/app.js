//  Object Oriented Programming (OOP) - Nesne Yönelimli Programlama

// console.log(this); // this burada window objesi ile aynı şeyi gösterir.

// Çünkü Global Scope da en genel obje window objesi olduğu için.


//  İki adet obje oluşturalım

// const emp1 = {  // object literal (Basit objeler)
//     name:"Ali",
//     age:27,
//     showInfos:function(){console.log("Bilgiler Gösteriliyor...");}
// };

// const emp2 = {
//     name:"Ahmet",
//     age:25
// };

// emp1 e bir özellik salary özelliği ekleyelim

// emp1.salary = 5000;

// show infos
// emp1.showInfos();


// Peki bu objelerden daha çok oluşturmak istersek tek tek tanımlamak yerine ne yapabiliriz.

// Yapıcı Metot: Bu sorunu çözmek için kullanılabilir. Bunlar bizim contuctor larımızdır.

// Constructor (kurucu)
// Sınıf tabanlı nesne yönelimli programlamada, yapıcı, 
// nesne oluşturmak için çağrılan özel bir alt program türüdür. 
// Yeni nesneyi kullanıma hazırlar ve 
// genellikle yapıcı tarafından gerekli üye değişkenleri ayarlamak için 
// kullandığı argümanları kabul eder.

// Şimdi bir consructor oluşturalım.

function Employee (name, age, salary){  // Büyük harfle başlaması önemli
    this.name = name;  // this objemiz burada name i gösterir.
    this.age = age;
    this.salary = salary;

    // console.log(this);  // this burada constructor umuzu verecektir. Yeni objelerimizi otomatik consola yazdırır.

    // Yukarıdaki işlemin yerne daha güzel bir şey yapalım.
    this.showInfos = function(){  // buradaki bilgileri göstermek için bir fonksiyon. Bunu çağırdığımızda bilgiler otomatik olarak gelecek.
        console.log(this.name, this.age, this.salary);
    }

};


// Şİmdi bu fonksiyondan objelerimizi üretelim.

const emp1 = new Employee("Ali", 27, 5000);

const emp2 = new Employee("Ahmet", 25, 5000);

// console.log(emp1, emp2);

emp1.showInfos();

emp2.showInfos();




