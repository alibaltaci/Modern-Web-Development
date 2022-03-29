// POST Request 

// Post request ile bir API'ye bilgilerimizi gönderebiliriz.
// (form - JSON bilgileri vb.)

class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }
 

    get(url, callback){

        this.xhr.open("GET", url);

        this.xhr.onload = () => {  

            if(this.xhr.status === 200){  
                callback(null, this.xhr.responseText);  
            }
  
            else{
                callback("Get Request: Bir hata oluştu", null);
            }
        }

        this.xhr.send();
    }

    // POST 

    post(url, data, callback){

        this.xhr.open("POST", url); // bağlantı açık

        // JSON veya form verisi gönderirken bunu belirtmemiz gerekir. (header olarak)
        this.xhr.setRequestHeader("Content-type", "application/json");  // JSON verisi göndereceğimiz söylemiş olduk.

        // 201 Created
        // The request succeeded, and a new resource was created as a result. 
        // This is typically the response sent after POST requests, or some PUT requests.

        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                // başarılı
                callback(null, this.xhr.responseText);
            }
            // hata
            else{
                callback("Post Request: Bir Hata Oluştu...", null);
            }

        }    
            // veri olarak göndereceğimiz JSON objesini STRING'e çevirmemiz gerek. 
        this.xhr.send(JSON.stringify(data));

    }
}

const request  = new Request();

request.post("https://jsonplaceholder.typicode.com/posts", {userId:2, title:"Thriller"}, function(err, album){  // id vermiyoruz id otomatik artan olrak geliyor.

    if(err === null){
        console.log(album);
    }

    else{
        // hata
        console.log(err);
    }

});