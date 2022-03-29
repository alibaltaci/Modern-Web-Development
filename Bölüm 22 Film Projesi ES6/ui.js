// UI constructor

// Filmleri arayüze ekleme işlemleri için UI ye ihtiyacımız var.


// ES6 ile

class UI{
    static addFilmToUI(newFilm){

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
    static clearInputs(element1, element2, element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }

    // şimdi bu foksiyonumuzu project.js ye ekliyoruz.


    // Mesajlar

    // Hata mesajı
    static displayMessages(message, type){

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

    static loadAllFilms(films){
        
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

    static deleteFilmFromUI(element){   // burada a elementi geliyor.

        element.parentElement.parentElement.remove();    // a --> td --> tr

    }


    // claerAllFilmsFromUI

    static clearAllFilmsFromUI(){

        const filmList = document.getElementById("films"); // Filmlerin kayıtlı olduğu liste 

        // filmList.innerHTML = ""; // bu da bir silme yöntemidir fakat yavaş çalışır.

        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }
}