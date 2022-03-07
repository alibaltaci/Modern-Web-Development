// Tüm Elementleri Seçme

// todo formumuzu seçmek için
const form = document.querySelector("#todo-form");

//  input alanımızı seçelim (Buradakileri ilgili alana ekleyeceğiz)
const todoInput = document.querySelector("#todo");

// ul etiketini seçeceğiz (Yakaladığımız girdileri bunun içine ekleyeceğiz. Parent etiketi olarak seçmeliyiz.)
const todoList = document.querySelector(".list-group");

// Cardlarımızı seçelim (Buralara alert ekleyeceğiz "başarıyla eklendi - silindi")
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

// filter input alanını seçelim
const filter = document.querySelector("#filter");

// clear button alnımızı seçelim
const clearButton = document.querySelector("#clear-todos");


// Event listener larımızı bir func altında toplayalım

eventListeners();

function eventListeners(){      // Tüm event Listenerlar
    form.addEventListener("submit", addTodo);   // Submit olayı olduğunda addTodo fonksiyonunu çalıştırmak için.
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);  // sayfa yenilendiğinde mevcut todoları sayfaya yeniden eklemek için.
    secondCardBody.addEventListener("click", deleteTodo);  // todoları silmek için 
    filter.addEventListener("keyup", filterTodos); // filtreleme işlemleri için 
    clearButton.addEventListener("click",clearAllTodos);
}

// addTodo
// function addTodo(e){
//     const newTodo = todoInput.value.trim(); // Yeni girilen değeri olmaya çalışalım (todoInput)  - trim() başta ve sonda olan boşlıkları siler.
    
//     if (newTodo === ""){

// //         <div class="alert alert-danger" role="alert">
// //          This is a danger alert—check it out!
// //          </div>
// // https://getbootstrap.com/docs/4.0/components/alerts/

// // Yukarıda düzene göre alert işlemlerimizi yapacağız.

//         showAlert("danger", "Lütfen Bir Todo Giriniz...");     // ekle kısmı boşsa bir şey yazılmamışsa alert verecek.
                                    
//     } 
//     else{
//         addTodoToUI(newTodo); // aldığımız yeni değeri dinamik olarak arayüze eklemek için yazacağımız fonksiyon.
//         addTodoToStorage(newTodo); // aldığımız girdileri storage kısmına eklemek için.
//         showAlert("success", "Başarıyla Eklendi...");
//     }
    

//     e.preventDefault();  // formumuz tekrardan sayafaya yönlenmesin diye

// }






function addTodo(e){
    const newTodo = todoInput.value.trim(); 

    if (newTodo === ""){

        showAlert("danger", "Lütfen Bir Todo Giriniz...");     
                                    
    } 

    else{
        addTodoToUI(newTodo); 
        addTodoToStorage(newTodo);
        showAlert("success", "Başarıyla Eklendi...");
    }
    

    e.preventDefault(); 
}

// showAlert Function
function showAlert(type, message){
    const alert = document.createElement("div"); // div elementimizi dinamik olarak oluşturmak için.
    alert.className = `alert alert-${type}`;  // type göre uyarı almak için
    alert.textContent = message;        // uyarı tipine bağlı mesajımızı görüntülemek için.

    firstCardBody.appendChild(alert);  // oluşturduğumuz alert i card body mize bir çocuk olarak ekledik.

    // setTimeOut 
    // window.setTimeOut()
    setTimeout(function(){
        alert.remove();
    }, 1000);   // milisaniye sonra çalışacak demek.
        
    }


// addTodoToUI Fonksiyonu
function addTodoToUI(newTodo){  // string değerini list item olarak UI ya ekleyecek
//     <!-- <li class="list-group-item d-flex justify-content-between">
//     Todo 1
//     <a href = "#" class ="delete-item">
//         <i class = "fa fa-remove"></i>
//     </a>

// </li>-->

    // List Item Oluşturma
    const listItem = document.createElement("li");  // Dökümanımızda yeni bir li elementi oluşturduk. 
    // Link oluşturma 
    const link = document.createElement("a");     // li mizin içinde yer alan a eventimizi de oluşturduk.
    link.href = "#";
    link.class = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'><i>";

    listItem.className="list-group-item d-flex justify-content-between";

    // Text node ekleme
    listItem.appendChild(document.createTextNode(newTodo));

    // oluşturduğumuz linki ekleyelim
    listItem.appendChild(link);

    // Todo List'e listItem ı ekleme 
    todoList.appendChild(listItem);

    todoInput.value=""; // todo eklendikten sonra input alanımızın boşalması için.

}


// getTodosFromStorage
function getTodosFromStorage(){  // storageden tabloları almak için genel fonksiyon.
    let todos;

    if (localStorage.getItem("todos") === null){    // oluşturduğumuz todos un local staorage de olup olmama durunumu sorgular.
        todos = [];                                  // eğer boş ise boş bir array oluşturur.
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));  // varsa array olarak gelmesi için.
    }
    return todos;    // en son array tablomuzu bize dönecek.
} 


// addTodoToStorage Fonksiyonu
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));  // yeni todo muzu ekledikten sonra tekrardan local storage a kaydetme.
}


//  bu durumda todolarımız local storage de tutulmaya devam eder fakat sayfa yenilendiğinde ekranda görünmezler.
// bunun için farklı bir fonksiyon yazacağız ve bunu baştaki eventListeners ın da altına ekleyeceğiz.

function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){  // todos arrayinin her bir elemanının üzerinde gezinmek için
        addTodoToUI(todo);    // mevcut todolarımızı arayüzümüze yazdıracak.
    }); 
}


// Todo silme işlemleri

// Bu bölümde event capturing işlemlerini kullanacağız.

// Arayüzden silme
function deleteTodo(e){
    // console.log(e.target); // bu bize nereye tıklandığı bilgisini gösterir.

    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();  // silme ikonumuzun parenti olan a ve onunda parentı olan li elemntimize giderek todo satırımızı komple silmiş olduk.
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);  // local storageden de kalıcı olarak silmek için.""

        showAlert("success", "Todo başarıyla silindi...");
    }
}

// Local Storage dan silme
function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();      // tüm todolarımızı array olarak elde ettik.

    todos.forEach(function(todo, index){  // değer ve değerin indexi 
        if (todo === deleteTodo){
            todos.splice(index, 1);  // index değerinden sonra bir eleman yani sadece kendisini siler.
        }
    })

    localStorage.setItem("todos", JSON.stringify(todos));
}



// Todoları Filtreleme

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();  // girdi değerimizi küçük harfe dönüştürdük.  Büyük küçük harf duyarlılığı olması diye.
    const listItems = document.querySelectorAll(".list-group-item"); // tüm li lerimizi seçmiş olduk.

    // şimdi tüm li lerimizin içinde gezineceğiz.
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();  // li den gelen değerleri küçük harfe dönüştürmek için.
        if (text.indexOf(filterValue) === -1){  // -1 bulunmadı anlamına gelmektedir.
            listItem.setAttribute("style", "display : none !important");  // css özelliği // aradığımız değeri taşımayan ifadeleri göstermememsi için
        }
        else{
            listItem.setAttribute("style", "display : block"); // aradığımız değeri taşıyan ifadeleri mevcut sayfada göstermesi için.   
        }

    })
}

// yukarıdaki gibi yaptık fakat değeri taşımayanlar da ekranımızda görünmeye devam etti.
// bunun sebebi li lerimizi oluştururken eklediğimiz bootstrap dan  d-flex (elemanları sağa-sola yaslamak için) özelliğimizden kaynaklanmaktadır.
// bu özellik sonradan eklenen display : none - block özelliğini ezmektedir.
// d-flex özelliğinin içinde important olarak display:block özelliği bulunmaktadır. Sorunun sebebi de budur.
// Bu sorından !important ile kurtulabiliriz. (css detay)



// Tüm Todoları silme

// clearAllTodos Fonksiyonu
function clearAllTodos(e){  // e yi kullnamayacağız ama ne olu ne olmaz diye koyduk.
    // Kullanıcıya uyarı ekranı gösterelim 
    if (confirm("Tüm Todoları Silmek İstedğinize Emin Misiniz?")){
        //Arayüzden tüm todoları silme
        // todoList.innerHTML = "";  // Yavaş bir yöntemdir. Proje çok büyük değilse kullanılabilir.
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");

    }
}





// ---------------------


// function sameTodos(newTodo){
//     let todos = getTodosFromStorage();    

//     todos.forEach(function(todo){  
//         if (todo === newTodo){
//             showAlert("danger", "Benzer")
//         }
//     })
// }



// function addTodo(e){
//     const newTodo = todoInput.value.trim(); 

//     if (newTodo === ""){

//         showAlert("danger", "Lütfen Bir Todo Giriniz...");     
                                    
//     } 

//     else if (sameTodos(newTodo)){

//     }

//     else{
//         addTodoToUI(newTodo); 
//         addTodoToStorage(newTodo);
//         showAlert("success", "Başarıyla Eklendi...");
//     }
    

//     e.preventDefault(); 
// }
