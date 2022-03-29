
/*

# Ajax Nedir?
 ------------
- Asynchronous Javascript and XML (Ajax)

- Veri alma ve veri gösterim asenkron olarak.
    - Bu sayede web siteleri beklemeden işlemler arka planda yapılır.

- Sayfa yenilenmeden asenkron veri almak.

- Arka planda Asenkron işlemler.

- XHR Objesi (xmlHttpRequest)
    -Yukarıdaki işlemleri bu sayede yapabiliyoruz.
    -Tarayıcılarımızda bulunanbir objemizdir.
    - XHR objemizin kısaltılmış halidir.

- JSON & XML
    -Web sayfalarımızdan alınan verileri bu iki formatta gelmektedir.
    -Daha hızlı ve daha basit bir yapısı olduğu için JSON Objesi genelde kullanılır.


# Ajax Nasıl Çalışır.     
 --------------------

 Browser 
 - An event occours...(Bir olayın meydana gelmesi)
 - Create an XMLHttpRequest Object 
 - Send HttpRequest (Get, post, put, delete)

 ----> Internet ---> 

 Server 
 - Process HTTPRequest (get, post, put, delete e göre)
 - Create a response (JSON - XML) and send data back to the browser.

 ----> Internet ---->

 Browser 
 - Process the returned data using JavaScript (Aldığımız datayı arka planda asenkron olarak kullanabiliyoruz.)
 - Update page content.

 -- Yani sayfamız üzerinde herhangi bir butona bastığımızda sayfa üzerinde bir değişiklik gerçekleştirebiliyoruz.
 






*/