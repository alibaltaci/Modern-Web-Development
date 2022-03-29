//  Ajax ve text dosyası işlemleri

// Burada example.txt dosyamızın içindeki yazıyı almaya çalışacağız.
// Bu işlemleri Ajax kullanarak yapacağız.

// index.html üzerinde oluşturduğumuz buton ile bu yazıyı almaya çalışacağız
// ve bunu sayfa yenilenmeden yapacağız.

// Aldığımız veriyi div' imizin içine yazdırmaya çalışacağız.


// Butonumuzu seçelim ve bir click eventi atayalım
document.getElementById("btn").addEventListener("click", function(){

    // Ajax işlemleri için XMLHttpRequest ile bir obje oluşturacağız.

    const xhr = new XMLHttpRequest();

    // xhr ın içine bakarsak çeşitli özellikleri görürüz
    // Örnek:
    // readyState: 0 - olması herhangi bir server' a bağlanmadığımızı gösterir.
    //      0: request not initialized
    //      1: server connection established  - başarılı bağlantı
    //      2: request received - request alındı 
    //      3: processing request - işleniyor
    //      4: request finished and response is ready - response'mız hazır.
    // responseText: "" - bize bir string veri geldiğinde bu özellik aracılığı ile verimizi alabiliriz.
    // Aldığımız bu veri string olduğu için bunu JSON.parse ile JSON' a çevirebiliriz.
    // reponseXML: null - başka bir veri türü
    // status: 0 - HTTP Status kodlarını ifade eder.
    //      200 : OK - Herhangi bir istek yaptığımızda istek sorunsuz olarak çalışırsa gelen kod.
    //      403 : Forbidden - yasak 
    //      404 : Not Found - bulunamayan
    //      505 : Internal Server Error - 
    // onreadystatechange: null - bu özelliğimize bir fonksiyon tanımladığımız zaman readyState değiştiğinde bu fonksiyon çalışır.
    // 

    // Bir bağlantı açalım - sonra hangi request'i yapacağımızı söylememiz gerek.
    // burada veri getirme işlemi yapacağımız için GET'i kullanacağız. Sonra da işlem yapılacak dosyanın adı
    // Son olarak da yapılacak işlemin senkron mu asenkron mu olacağını belirteceğiz.
    // true - asenkron
    // false - senkron

    // xhr.onreadystatechange = function(){
    //     // console.log(this.readyState);
    //     // console.log(this.status);

    //     // getirdiğimiz text i almak için bir kontrol yapmamız lazım
    //     if(this.status == 200 && this.readyState == 4){ // benim böyle bir url'm var mı ve responsum hazır mı?
        
    //         // reponse hazır
    //         console.log(this.responseText);  // arayüzde buttona basıldğında consoleda "Bu bir text dosyasıdır" görünecektir.
    //     }
    // }

    // onredystatechance e fonksiyon atamak eski bir yöntemdir.
    // Bunun yerine response umuz hazır olduğunda çalışacak olan özelliğimizi kullanalım.

    xhr.onload = function(){  // sadece responsumuz hazır olduğunda çalışır.
        // console.log(this.readyState);  // 4 

        if(this.status === 200){  // readyState zaten 4 - ve sadece 200 yani başarılı başlantı durumlarında çalışsn demek.
            // console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;  // arayüze text i yazdırmak için.
        }
    }

    // xhr.onprogress = function(){  // readyState 3 olduğu durumlarda (işlediği)
    //     console.log("Process işleniyor...", this.readyState);  // Process işleniyor... 3
    // }

    xhr.open("GET", "example.txt", true);

    // SEND ile requestimizi göndereceğiz.
    // burada GET request yaptığımız için bir string değer vermemize gerek yok.
    // POST yapsaydık yani server tarafına bir veri göndermek isteseydik bir string yazmak zorunda kalacaktık.
    xhr.send();


});