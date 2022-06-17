// Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div Container");

// });

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
// });

// Event Capturing veya Delegation

// Bu sayede nereye tıklandığını tespit eder ve ona göre işlem ataması yapabiliriz.

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){
    if (e.target.className === "fa fa-remove"){  // eğer x ikonuna tıklandıysa sil
        console.log("Silme İşlemi");
    }
    if (e.target.id === "filter") {
        console.log("Filtreleme İşlemi");
    }
    if(e.target.id === "clear-todos") {
        console.log("Tüm taskları silme işlemi");
        
    }
    // console.log(e.target);

}