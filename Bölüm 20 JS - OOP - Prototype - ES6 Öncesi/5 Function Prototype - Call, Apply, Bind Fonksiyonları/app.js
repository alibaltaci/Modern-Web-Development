// Function Prototype - Call, Apply, Bind Fonksiyonları

// Fonksiyonlarla ilgili makale: 
// https://medium.com/yaz%C4%B1l%C4%B1m-bilimi/javascript-call-apply-ve-bind-fonksiyonlar%C4%B1-3b0242fbc7dd

// Objeleri fonksiyonlara bağlamak için kullanılırlar.


// Objelerimizi oluşturalı ve call, apply, blind ile üzerlerinde işlem yapalım

const obj1 = {
    number1:10,
    number2:20
};

const obj2 = {
    number1: 30,
    number2: 40
};

function addNumber(number3, number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}

// addNumber(100, 200);  // NaN

// NaN geldi çünkü buradaki number1 number2 değerleri objelerin local scobunda
// this ile bunları çağırdığımızda ana obje olan window objesine gittti 
// ve bu değerleri bulamadığı için işlemimiz Nan olarak geldi.


// Call ve Apply (Başka bir constracter kullanmak için)


// call

// addNumber.call(obj1, 100, 200);  // 330

// call fonksiyonunu kullandığımız zaman mutlaka bir obje göndermeliyiz.
// Böylece this fonksiyonumuz fonksiyonun içinde this ile işaret edilen 
// elementlere global scope da değil girdiğimiz objenin içinde arayacaktır.
// Call ın içine objemizi girdikten sonra fonksiyonumuzun istediği 
// elementleri de girmeliyiz.


// Apply

// addNumber.apply(obj2, [100, 200]);  // 370

// Kullanımı call ile aynıdır sadece fonksiyon için istenilen elementler
// [] içine yazılmalıdır.


// Bind

function getNumbersTotal(number3, number4){
    return this.number1 + this.number2 + number3 + number4;
};

// Bind fonksiyondan bir kopya fonksiyon üretir.
// Bind fonksiyonunun kullanıldığı yeler genelde eventlerdir.
// this anaktar kelimesinin karıştığı çalışmalarda bind ı kullanmak iyi olabilir.

const copyFunc1 = getNumbersTotal.bind(obj1);

// console.log(copyFunc1);

// console.dir(copyFunc1); // daha detaylı inceleme yapmak için.

// copyFun1 in getNumbersTotal fonksiyonunun kopyası olduğunu bound ifadesinden anlayabiliriz.

// [[BoundThis]]: Object  --> fonksiyonumuza bağladığımız objeyi gösterir.

// [[TargetFunction]]  --> Bağlı olan fonksiyonu gösterir.

// console.log(copyFunc1(100, 200));  // 330 - return olduğu için console kullandık.
                                   // Sadece baplı fonksiyonun istediği değerlerin girlmesi yeterlidr.
                                   // Diğerleri otomatik olarak boğlı objeden gelecetir.











