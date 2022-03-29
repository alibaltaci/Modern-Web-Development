// Yeni Element Oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";


// newLink.textContent = "Farklı Sayfaya Git"; // bu şekilde bir yöntem bazı durumlarda tehlikeli olabilir.
                                            // Kullanılmasa daha iyi...


// Sona yeni bir child eklemek için text node kullanılabilir.
newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));  // linki ve içindeki yazıyı son çocuk olarak ekler.

cardbody.appendChild(newLink);


console.log(newLink);