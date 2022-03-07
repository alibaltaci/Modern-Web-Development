// Klavye Eventleri

// keypress
// document.addEventListener("keypress",run);  // klavyede bir tuşa basoldığında çalışması için.

// function run(e){
//     // console.log(e.which);  // hangi tuşa basıldığını öğrenmek için. Değri ascıı tablosuna göre verir.
//     console.log(e.key);  // basılan tuşun kendisini görmek için. 
// }

// sadece harfler ve rakamlar bu eventleri oluşturur. tab - yukarı - aşağı tuşları gibi tuşlar event oluşturmazlar.


// keydown

// Tüm tuşların event oluşturabilmesi için kullanılır.

// document.addEventListener("keydown",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }



// keyup

// diğerlerinden farklı olarak tuş basıldığı anda değil basılma işlemi bittikten sonra event oluşturur.

// document.addEventListener("keyup",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }



// inputa her değer girip elimizi çektiğimizde dinamik olarak header bölümünün değişmesi için 

// const header = document.querySelector(".card-header");  // değiştirmek istediğimiz başlığımızı seçtik.
// const todoInput = document.querySelector("#todo");       // değer gireceğimiz inputumuzu seçtik.

// todoInput.addEventListener("keyup",changeText);

// function changeText(e){
//     header.textContent = e.target.value;  // inputu oluştuğu yerden alarak header ımıza atar.
//     // console.log(e.target.value);
// }