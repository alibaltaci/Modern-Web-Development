// // Storage



//  ES6 İLE

class Storage{

    // addFilmToStorage

    static addFilmToStorage(newFilm){

        let films = this.getFilmsFromStorage();   // local storage daki filmler geldi

        films.push(newFilm);  // yeni filmimizi ekledik.

        // NOT: Daha önceki derslerde local storage a string eklemiştik şimdi objeekliyoruz.
        // Örnek
        /*
            {title:"dfıjfdj", director:"fjtfj", url:"jfjj"},
            {title:"dfıjfdj", director:"fjtfj", url:"jfjj"},
            {title:"dfıjfdj", director:"fjtfj", url:"jfjj"},
        */

        // films in güncel halini tekrardan local storage a yazdıralım.
        localStorage.setItem("films", JSON.stringify(films));

        // let films;
        
        // if(localStorage.getItem("films") === null){
        //     films = [];
        // }

        // else{
        //     films = JSON.parse(localStorage.getItem("films"));  // sadece string değerler olacağı için parse ile alıp arraye dönüştürüyoruz.
        // }
    }

    // Bu işlemleri birden fazla kullanaağımız için bir fonklsiyon haline getirelim.


    // getFilmsFromStorage

    static getFilmsFromStorage(){

        let films;

        if(localStorage.getItem("films") === null){
            films = [];
        }

        else{
            films = JSON.parse(localStorage.getItem("films"));
        }

        return films;
    }


    // deleteFilmFromStorage

    static deleteFilmFromStorage(filmTitle){

        let films = this.getFilmsFromStorage();   // storage daki filmlerimizi array olarak getirdik.

        films.forEach(function(film, index){    // array üzerinde teker teker gezerek film ve index değerlerini aldık.
            if(film.title === filmTitle){             // silimek istenen filmi bulduk
                films.splice(index, 1);         // silinmek istenen filmi arrayden kaldırdık.
            }
        });

        localStorage.setItem("films", JSON.stringify(films));   // güncel film listesini local storage a kaydettik.
    }


    // clearAllFilmsFromStorage

    static clearAllFilmsFromStorage(){

        localStorage.removeItem("films");
    }
}