// FETC API

// Fetch API, Ajax API'ının yerine kullanılabilecek alternatif 
// bir asenkron veri alma ve veri gönderme API'ıdır.

// Kullanımı Ajax'a göre kolaydır !

// Fetch API bir şey belirtmediğimiz sürece "GET" Request atar. 


// txt dosyamızdaki veriyi asenkron bir şekilde almaya çalışalım.

function getTextFile(){

    fetch("example.txt")  // window objesi olduğu için fetch'i direkt kullanabiliriz.
    // buradan bize bir response geldi. response'nin içindeki text verisini alacağız.
    // text dosyası içindeki veriyi alabilmek için text() özelliği kullanılır.
    .then(response => response.text()) //return yazmaya gerek yok tek işlem yaptığı için // console.log(response))
    // then'in içinde return yaptığımız için bu da bize promise olarak gelecektir.
    // bu yüzden tekrardan then kullanarak bu veriyi alabiliriz.
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

// getTextFile();


//  JSON verisi almak için

function getJsonFile(){

    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

// getJsonFile();

// çıktı

// (3) [{…}, {…}, {…}]
// 0: {name: 'Mustafa', age: 25, salary: 4000}
// 1: {name: 'Oğuz', age: 25, salary: 5000}
// 2: {name: 'Serhat', age: 26, salary: 3500}
// length: 3
// [[Prototype]]: Array(0)


// "https://api.exchangerate.host/latest"

// Dışarıdaki bir Rest API'ından bilgi almak için

function getExternalAPI(){
    
    fetch("https://api.exchangerate.host/latest")
    .then(response => response.json())
    // .then(data => console.log(data))
    // TRY'i almak istersek
    .then(data => console.log(data.rates.TRY))  // bize gelen response'un içinde rates var onun içinde de TRY (Para birimleri) var.
    .catch(err => console.log(err));
}

getExternalAPI();   