// DELETE Request

// GET Requeste benzer. Bir veri göndermiyoruz.

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
                callback("GET Request: Bir Hata Oluştu...", null);
            }
        }

        this.xhr.send();
    }

    post(url, data, callback){

        this.xhr.open("POST", url);

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

            if(this.xhr.status === 200){
                callback(null, this.xhr.responseText);
            }

            else{
                callback("PUT Request: Bir Hata Oluştu...", null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback){

        this.xhr.open("DELETE", url);

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,"Silme işlemi başarılı..."); // Eğer işlem başarılı olmuş ise boş bir obje dönecek.
                                                    // O yüzden buraya başka bir mesaj yazdırabiliriz.  
            }

            else{
                callback("DELETE Request: Bir Hata Oluştu...", null)
            }
        }

        this.xhr.send();
    }

}


const request = new Request();

// id'si 1 olan veriyi silelim.

request.delete("https://jsonplaceholder.typicode.com/posts/", function(err, response){
    if(err === null){
        console.log(response);
    }

    else{
        console.log(err);
    }
})

// İşelem sonrası console'da karşımıza çıkan obje

// {}

// Mesaj ekledikten sonra 

// Silme işlemi başarılı...