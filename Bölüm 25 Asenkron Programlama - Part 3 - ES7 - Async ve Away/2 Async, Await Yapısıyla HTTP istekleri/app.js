// Async ve Await ile HTTP İstekleri

class Request{

    async get(url){

        const response = await fetch(url); // Response Object

        const responsedata = await response.json();  // JSON Object
        
        return responsedata;
        
    }
    
    async post(url, data){

        const response = await fetch(url, {
            method:"POST",
            body:JSON.stringify(data),
            headers:{"content-type": "application/json; charset=UTF-8"}
        }); // Response Object 

        // response objemizden datamızı(json objesini) alalım

        const responsedata = await response.json(); 

        return data;
    }

    async put(url, data){

        const response = await fetch(url, {
            method:"PUT",
            body:JSON.stringify(data),
            headers:{"content-type":"application/json; charset=UTF-8"}
        });
        
        const responsedata = await response.json();

        return responsedata;
    }
    
    async delete(url){

        const response = await fetch(url, {
            method:"DELETE"
        });

        return "Veri Silme İşlemi Başarılı...";
    }  
}


const request = new Request();

// GET
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// // POST // ıd si gelmedi sonra bak
// request.post("https://jsonplaceholder.typicode.com/albums", {userId:1, title:"Thriller"})
// .then(response => console.log(response))
// .catch(err => console.log(err));

// PUT
// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:1, title:"Thriller"})
// .then(response => console.log(response))
// .catch(err => console.log(err));

// // DELETE
// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(response => console.log(response))
// .catch(err => console.log(err));
