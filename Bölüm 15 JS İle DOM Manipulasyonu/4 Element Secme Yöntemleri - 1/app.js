// Element Id'e Göre Seçme

let element;

element = document.getElementById("todo-form");

element = document.getElementById("tasks-title");



// Element Class'a Göre Seçme   

// Bir class birden fazla elemente atanabileceği için birden fazla element gelecektir.

// element = document.getElementsByClassName("list-group-item");
// element = document.getElementsByClassName("list-group-item")[0]; ilk elemanı seçebiliriz.

// element = document.getElementsByClassName("card-header");



// Element Tag'e Göre Seçme  ( Etiket ismine göre )

// element = document.getElementsByTagName("li");  // class ına bakmaksızın tüm li leri aldık.

// element = document.getElementsByTagName("div");



// Query Selector - Css Selector 

// Tek Bir Element ile yukarıdaki üçünün yaptığı işlemleri tek başına yapar.

// css selector da kullanılan özellikler kullanılarak seçme işlemleri yapılır. 

// NOT: Sayfada tek bir elemt seçer. Class a göre bir element seçmek istersek
//      sayfada ilk bulduğu elementi getirecektir. 

// element = document.querySelector("#todo-form");
// element = document.querySelector("#tasks-title");


// element = document.querySelector(".list-group-item");

// element = document.querySelector("li");
// element = document.querySelector("div");


// QuerySelectorAll - Tüm Elementleri Seç

// element = document.querySelectorAll(".list-group-item"); // Node List


// yukarıdaki çıktı array e benzediği için üzerinde "forEach" ile gezinebiliriz.

// element.forEach(function(el){
    // console.log(el);

// });
console.log(element);