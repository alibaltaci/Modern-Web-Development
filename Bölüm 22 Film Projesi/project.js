// Project

// formu seçelim
const form = document.getElementById("film-form");         

// form içindeki elementleri teker teker seçelim.

// film ismi
const titleElement = document.querySelector("#title");

// yönetmen
const directorElement = document.querySelector("#director");

// film afiş linki
const urlElement = document.querySelector("#url");

// diğer elementler

// card body
const cardBody = document.querySelectorAll(".card-body");

// clear
const clear = document.getElementById("clear-films");

// UI objesini başlatma

const ui = new UI();

// Storage objesi oluşturma

const storage = new Storage();




// Tüm eventleri yükleme 

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);     
    });

    document.addEventListener("click", deleteFilm);

    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e){
    // input alanlaımızdan değerleri alalım
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    // 3 inputtan biri dahi boş olursa hata mesajı çıksın
    if(title === "" || director === "" || url === ""){

        ui.displayMessages("Tüm alaları doldurunuz...", "danger");
    }
    // tüm inputlar doluysa yeni film oluştursun
    else{
        const newFilm = new Film(title, director, url);

        // yeni oluşturduğumuz film objesini ui yardımı ile arayüze ekleyelim
        ui.addFilmToUI(newFilm); // bu fonksiyonumuzu gidip ui.js de tanımlayalım.
        
        // Filmleri stoage a ekleme
        storage.addFilmToStorage(newFilm);

        ui.displayMessages("Film Başarıyla Eklendi...", "success");

    }

    ui.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}


// deleteFilm

function deleteFilm(e){

    if(e.target.id === "delete-film"){   // a elementini yakalıyoruz.
        ui.deleteFilmFromUI(e.target);   // a yı fonksiyona gönderdik. (ui.js)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);  // film ismini burada alıp local stoage da arayacağız.
        // a --> td(url) -- td(director) -- td(title)

        // bilgiledirme mesajı

        ui.displayMessages("Silme İşlemi Başarılı...", "success");
    }
}


// clearAllFilms

function clearAllFilms(){

    // Mesaj Ekleyelim
    if(confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }

    // ui.clearAllFilmsFromUI();
    // storage.clearAllFilmsFromStorage();
}