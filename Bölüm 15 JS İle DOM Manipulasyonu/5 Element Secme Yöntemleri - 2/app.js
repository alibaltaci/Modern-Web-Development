const element = document.querySelector("#clear-todos");

// console.log(element);

// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);  // sadece yazıları almamızı sağlar. HTML etiketlerini almayacak.
// console.log(element.innerHTML);    // HTML etiketlerini de getirir.
// console.log(element.href);
// console.log(element.style);
// console.log(element.style["Margin"]);  // :)

// Style ve Element Özelliklerini Değiştirme

// element.className = "btn btn-primary";  // "btn btn-dark" özelliğini değiştirdik.
// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";
// element.textContent = "Silin";  // elementimizin text ini değiştiriyoruz.

// 
// element.textContent = "<span>Silin</span>"  // textContent ile bu şekilde yazmaya çalışırsak butonumuzda span etiketleri de görünecektir.
// element.innerHTML = "<span style = 'color:green'>Silin</span>"

// let element2 = document.querySelector("li:last-child");
// element2 = document.querySelector("li:nth-child(2)");
// element2 = document.querySelector("li:nth-child(3)");
// element2 = document.querySelector("li:nth-child(4)");
// element2 = document.querySelectorAll("li:nth-child(odd)");
// element2 = document.querySelectorAll("li:nth-child(even)");

// element2.forEach(function(el){
//     el.style.background ="#ccc";
//     el.style.color = "red";
// })
// const elements = document.querySelectorAll(".list-group-item"); // Node List
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee";
// });

// console.log(element2);
// console.log(element);
