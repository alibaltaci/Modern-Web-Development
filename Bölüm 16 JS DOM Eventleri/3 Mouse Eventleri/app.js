const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Event
// title.addEventListener("click",run);
// Double Click
// title.addEventListener("dblclick",run);

// Mouse Down // click eventine benzer
// title.addEventListener("mousedown",run);

// Mouse Up  // elimizi çektiğimiz anda 
// title.addEventListener("mouseup",run);

// Mouse Over  // tıklamaya gerek kalmadan elementin üzerine geldiğimizde event oluşur.
// title.addEventListener("mouseover",run);

// // Mouse Out  // elementin üzein gelinip çıktıktan sonra oluşur.
// title.addEventListener("mouseout",run);

// cardBody.addEventListener("mouseover",run);  // cardbody elementi ve içindeki herhangi bir elementin üzerine gidildiğinde tekrar tekrar event oluşur.
// cardBody.addEventListener("mouseout",run);

// Mouse Enter ve Mouse Leave  (mouseout ve mouseover biraz benzer)

// cardBody.addEventListener("mouseenter",run); // sadece bir kere event oluşur cardbody nin altındaki etiketlere girdiğinde tekrardan event oluşmaz.
// cardBody.addEventListener("mouseleave",run);



function run(e) {
    console.log(e.type);
}
