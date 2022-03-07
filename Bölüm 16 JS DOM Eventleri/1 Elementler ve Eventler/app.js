const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){

    console.log("Submit Eventi");   // yazı kısa bir süre görünecek ama sayfa default olarak tekrar yenileneceği için tekrar silinecek.


    e.preventDefault();   // eventimizin default olan özelliklerini önlemek için kullanırız. Bu sayede kalıcı değişiklikler yapabiliriz.

}
// filterInput.addEventListener("focus",function(e){

//     console.log(e);     // çeşitli bilgiler edinememizi sağlar. Eventin yeri vs gibi.
//     console.log(e.type);
//     console.log(e.target);  // eventin oluştuğu yerin bilgisi.
//     console.log(e.target.placeholder);
//     console.log(e.target.className);


//     // console.log("Naber");


// });
// filterInput.onfocus = function(){   // çok kullanılan bir yöntem değil.
//     console.log("Naber");

// }
