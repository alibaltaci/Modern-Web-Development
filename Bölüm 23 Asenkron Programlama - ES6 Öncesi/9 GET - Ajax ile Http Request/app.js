// Ajax, callback, http request 

// class Request{

//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }

//     // GET Request 

//     get(url){

//         this.xhr.open("GET", url); // bağlantı açık

//         const temp = this; // buradaki this Requestimizi gösterir. Aşağıda temp'i kullanarak requeste ulaşır ve hata almaktan kurtuluruz. 

//         this.xhr.onload = function(){

//             if(temp.xhr.status === 200){   // burada temp yerine this'i kullansaydık xhr'ın içinde xhr aramış olacaktık ve hata olacaktık.
//                                             // bu this hatasından kurtulmak için en ilkel yöntemdir.
//                 console.log(temp.xhr.responseText);  
//             }
//         }

//         this.xhr.send();
//     }

// }

// const request  = new Request();

// request.get("https://jsonplaceholder.typicode.com/posts");


// YÖNTEM -2 

// Yukarıdaki eski bir yöntem olduğu için tavsiye edilmez daha iyi bir yöntemle aynı sorunu çözmeya çalışalım

// class Request{

//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }

//     // GET Request 

//     get(url){

//         this.xhr.open("GET", url); // bağlantı açık

//         this.xhr.onload = function(){

//             // burada xhr ifadesini kaldırarak bu sorunu çözezebiliriz.
//             // Bu sayede xhr içinde xhr aramak yerine direkt olarak xhr içinde status ve responseText'i arıyoruz.
//             if(this.status === 200){   
//                 console.log(this.responseText);  
//             }
//         }

//         this.xhr.send();
//     }

// }

// const request  = new Request();

// request.get("https://jsonplaceholder.typicode.com/posts");


// YÖNTEM - 3


// class Request{

//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }

//     // GET Request 

//     get(url){

//         this.xhr.open("GET", url); // bağlantı açık

//         this.xhr.onload = function(){

//             if(this.xhr.status === 200){  
//                 console.log(this.xhr.responseText);  
//             }
//         }.bind(this); // burada this'in bu fonksiyonu değil de requestimizi göstermesini söylüyoruz.
//                     // yani thisi burda requeste bağlıyoruz.

//         this.xhr.send();
//     }

// }

// const request  = new Request();

// request.get("https://jsonplaceholder.typicode.com/posts");



// YÖNTEM - 4 - Arrow Function

// class Request{

//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }

//     // GET Request 

//     get(url){

//         this.xhr.open("GET", url); // bağlantı açık

//         this.xhr.onload = () => {  // arrow burada yukarıda bind işlemini kendisi yapar.

//             if(this.xhr.status === 200){  
//                 console.log(this.xhr.responseText);  
//             }
//         }

//         this.xhr.send();
//     }

// }


// const request  = new Request();

// const album = request.get("https://jsonplaceholder.typicode.com/posts");




// şimdi normal işlemlerimize devam ediyoruz.

class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // GET Request 

    get(url, callback){

        this.xhr.open("GET", url); // bağlantı açık

        this.xhr.onload = () => {  // arrow burada yukarıda bind işlemini kendisi yapar.

            if(this.xhr.status === 200){  
                callback(null, this.xhr.responseText);  // hata oluşmadıysa null + text
            }
            // hata durumunda 
            else{
                callback("Bir hata oluştu", null)  // hata oluştuysa hata mesajı + null
            }
        }

        this.xhr.send();
    }

}

const request  = new Request();

// const album = request.get("https://jsonplaceholder.typicode.com/posts");

// console.log(album);  // undefined - asenkron bir işlem olduğu için album'den verilerimizi alamadık.

// Bu yüzden yukarıdaki fonksiyonumuza bir callback ekleyeceğiz.

// request.get("https://jsonplaceholder.typicode.com/posts", function(err, response){  // iki değer girildiği için.
//     // console.log(response);   // direkt olrak yakaladığımız değeri yazdırdık.

//     if(err === null){
//         // başarılı
//         console.log(response);  // text
//     }
//     else{
//         // hata
//         console.log(err);  // hata mesajı
//     }

// });


// ıd'si 51 olan albumu getirelim

request.get("https://jsonplaceholder.typicode.com/posts/51", function(err, response){  // iki değer girildiği için.
    // console.log(response);   // direkt olrak yakaladığımız değeri yazdırdık.

    if(err === null){
        // başarılı
        console.log(response);  // text
    }
    else{
        // hata
        console.log(err);  // hata mesajı
    }

});