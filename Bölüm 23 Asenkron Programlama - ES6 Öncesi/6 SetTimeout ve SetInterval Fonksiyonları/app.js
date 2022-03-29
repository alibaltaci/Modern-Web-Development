// Set Timeout

// setTimeout(function(){
//     console.log("Selam");
// }, 5000);
// // İşlem 5 sn sonra başlayacak demek.


//  Set Interval

// Belirli bir fonksiyonu belirli aralıkla tekrar tekrar çalıştırır.

let i = 0;

let value = setInterval(function(){
    i++;
    console.log("Sayı: ", i);
}, 1000);


// Clear Interval

document.getElementById("btn").addEventListener("click", function(){
    clearInterval(value);
});