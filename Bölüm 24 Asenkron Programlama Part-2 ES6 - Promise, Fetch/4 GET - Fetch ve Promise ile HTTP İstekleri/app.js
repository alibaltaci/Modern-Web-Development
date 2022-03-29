// Fetch ve Promise ile GET - POST - PUT -DELETE

// Burada bir constructor tanımlamıyoruz çünkü herhangi bir objeye ihtiyacımız yok, 
// direkt olarak window objesi üzerinden fetch'i kullanacağız.
class Request{

    get(url){

        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    post(url, data){

        return new Promise((resolve,reject) => {
            // bunları yazarken API'ın github'ından yararlandık.
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers:{
                    "content-type": "application/json; cahrset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => console.log(err));
        })
    }

    put(url, data){

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                    // Burada direk data göndereceğimiz için bunları yoruma aldık.
                    // {
                    // id: 1,
                    // title: 'foo',
                    // body: 'bar',
                    // userId: 1,
                    // }
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'}
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        })
    }

    delete(url){

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE"
            })
            // boş bir obje döneceği için
            .then(response => resolve("Albüm Başarıyla Silindi..."))
            .catch(err => reject(err));
           
        });
        
        
    }

}


const request = new Request();

// GET
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => console.log(albums))
// .catch(err => console.log(err));

// POST
// request.post("https://jsonplaceholder.typicode.com/albums", {userId:1, title:"Thriller"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// PUT
// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:1, title:"Thriller"})
// .then(changeAlbum => console.log(changeAlbum))
// .catch(err => console.log(err));

// DELETE

// Burada anlamsız bir url girmeme rağmaen silme işlemi başarılı diyor.
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err));