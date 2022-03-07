const todoInput = document.getElementById("todo");
let element;


element = todoInput;
element = todoInput.classList;

// todoInput.classList.add("newClass");   // todoInput.className = "form-control newClass";
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");


element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Naber");  // inputu değiştirmek için
todoInput.setAttribute("title","Input");   // bu şekilde olmayan bir attribute de eklenebilir.
todoInput.removeAttribute("name");

element = todoInput;
// element = todoInput.hasAttribute("name");  // attirbute sorgulamak için kullanılır.

console.log(element);
