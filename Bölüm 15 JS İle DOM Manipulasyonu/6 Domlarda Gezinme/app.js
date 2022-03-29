let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");  // todo 2 
const cardrow = document.querySelector(".card.row");

value= todoList;
value = todo;
value = cardrow;

// Child Nodes - Text Dahil

// atladığımız satırları da child olarak sayar ve getirir.
value = todoList.childNodes;
value = todoList.childNodes[0];

// Children - Element  (sadece elementleri alır.)

value = todoList.children;
value = todoList.children[todoList.children.length - 1];  // lastChildElement
value = todoList.children[2].textContent = "Değişti";


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da değişti";


value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;   // childElementCount ile aynı işlem.
value = todoList.childElementCount;

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;


// Element Kardeşleri

value = todo;

value = todo.previousElementSibling;  // önceki kardeş
value = todo.nextElementSibling;    // sonraki kardeş
value = todo.nextElementSibling.nextElementSibling; // sonraki kardeşin sonrakisi

value = todo.previousElementSibling.previousElementSibling; // null - iki ileride kardeş yok.
console.log(value);