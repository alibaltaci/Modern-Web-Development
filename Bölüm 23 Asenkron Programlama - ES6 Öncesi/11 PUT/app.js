// PUT Request

// Bir veriyi güncellememizi sağlar. 



class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // GET
    get(url, callback){

        this.xhr.open("GET", url);

        this.xhr.onload = () => {

            if(this.xhr.status === 200){
                callback(null, this.xhr.responseText);
            }

            else{
                callback("GET Request: Bir Hata Oluştu...", null);
            }
        }

        this.xhr.send();
    }

    // POST
    post(url, data, callback){

        this.xhr.open("POST", data, url);

        this.xhr.setRequestHeader("content-type", "application/json");

        this.xhr.onload = () => {

            if(this.xhr.status === 201){
                callback(null, this.xhr.responseText);
            }

            else{
                callback("POST Request: Bir Hata Oluştu...", null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback){

        this.xhr.open("PUT", url);

        this.xhr.setRequestHeader("content-type", "application/json");

        this.xhr.onload = () => {

            if(this.xhr.status === 200){  // bir sıkıntı yoksa 
                callback(null, this.xhr.responseText);
            }

            else{
                callback("PUT Request: Bir Hata Oluştu...", null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }
   
}


const request = new Request();

// ıd'si 1 olan verinin bilgilerini değiştirelim
request.put("https://jsonplaceholder.typicode.com/posts/1", {userId:42, title:"Thriller"}, function(err, response){
    if(err === null){
        console.log(response);
    }

    else{
        console.log(err);
    }
});

// Güncelleme sonrası verimiz

// {
//     "userId": 42,
//     "title": "Thriller",
//     "id": 1
// }