// Local Storage

// Sayfa ya da browser kapansa dahi buradaki veriler silinmez.
// silmek istersek bunu kendimiz yapmamız gerekir.


// SetItem

// localStorage.setItem("hareket", "burpee");        // girdiğimiz değerşer sayısal olsa bile string olarak kaydedilir.
// localStorage.setItem("tekrar", 50);

// Get Item

// const value = localStorage.getItem("tekrar");
// console.log(value);          // 50
// console.log(typeof value);   // string


// Clear Local Storage

// localStorage.setItem("hareket", "burpee");  
// localStorage.setItem("tekrar", 50);

// console.log(localStorage.getItem("sport"));           // böyle bir anahtar (key) olmadığı için bize "null" bir değer (obje) dönecek.

// if (localStorage.getItem("hareket") === null){            
//     console.log("Sorguladığınız veri bulunmuyor");

// }
// else {
//     console.log("Sorguladığınız veri bulunuyor");

// }

// Local Storage - Array Yazma

// const todos = ["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("todos", todos);            // bu şekilde array olarak değil string olarak yazdırır.

// console.log(typeof localStorage.getItem("todos"));        // tipi string 

// localStorage.setItem("todos", JSON.stringify(todos));  // array olarak yazmak için

// const value = JSON.parse(localStorage.getItem("todos"));  // array olarak almak için (her bir elemanı alır arrraye dönüştürür ve yazar.)
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit",addTodo);


// bir değer almak istiyoruz ve bunu array olarak yazdırmak istiypruz 
// eğer local strege ımızda o array varsa önce aldığımız değeri oraya ekleyip sonra yazdırmamız gerekir.
// Eğer öyle bir array yoksa arrayı oluşturup sonra yazmamız gerekir.


function addTodo(e){
    const value = todoInput.value;

    let todos;   // todos oluşturduk.

    if (localStorage.getItem("todos") === null) {   // burada öncelikle o todos var mı diye sorgulayacak eğer yoksa boş olarak oluşacak.
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));  // eğer varsa değeri string değil de array olarak almak için JSON ile işlemimizi yapacağız.
    }

    todos.push(value);  // mevcut olan arrayimize girilen değeri ekliyoruz.<<s


    localStorage.setItem("todos", JSON.stringify(todos));  // ekleme işlemi yapıldıktan sonra local storage ye değerimizi tekrardan array olarak yazmamız gerek.





    e.preventDefault();          // submit olduğunda yenilemeyi önlemek için.
}







