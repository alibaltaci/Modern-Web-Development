// UI constructor

// Filmleri arayüze ekleme işlemleri için UI ye ihtiyacımız var.

function UI(){

}

// UI ın herhangi bir özelliği olmayacak.
// Sadece prototipine fonksiyonlarımızı yazmaya çalışacağız.
// Bu constructor ı project.js de başlatalım.


// addFilmToUI prototype a ekleyelim
UI.prototype.addFilmToUI = function(newFilm){

    // filmleri tablonun body kımına ekleyeceğimiz için oraya ulaşalım.
    const filmList = document.getElementById("films");
    

    // innerHTML += şekllinde yaparak önceki film bilgilerini silmeden listenin üzerine ekleme yapıyoruz. 
    filmList.innerHTML += `   

  
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    `;


}

// Film ekleme işleminden sonra input alalarının temizlenmesi için
UI.prototype.clearInputs = function (element1, element2, element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

// şimdi bu foksiyonumuzu project.js ye ekliyoruz.


// Mesajlar

// Hata mesajı
UI.prototype.displayMessages = function(message, type){

    const cardBody = document.querySelector(".card-body"); // ilk card-body i seçeceğimiz için bu şekilde yapabilriz.

    // Alert divi oluşturma
    const div = document.createElement("div");

    // div class
    div.className = `alert alert-${type}`;

    // div text
    div.textContent = message;

    // divi sayfaya ekleme
    cardBody.appendChild(div);


    // Uyarı bir saniye görünsünsonra gitsin
    setTimeout(function(){
        div.remove();
    }, 1000);
}


// loadAllFilms

UI.prototype.loadAllFilms = function(films){
    
    const filmList = document.getElementById("films"); // body kısmına filmleri eklemek için

    films.forEach(function(film){
        filmList.innerHTML += `
            <tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
        `;
});
}


// deleteFilmFromUI

UI.prototype.deleteFilmFromUI = function(element){   // burada a elementi geliyor.

    element.parentElement.parentElement.remove();    // a --> td --> tr

}


// claerAllFilmsFromUI

UI.prototype.clearAllFilmsFromUI = function(){

    const filmList = document.getElementById("films"); // Filmlerin kayıtlı olduğu liste 

    // filmList.innerHTML = ""; // bu da bir silme yöntemidir fakat yavaş çalışır.

    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }
}