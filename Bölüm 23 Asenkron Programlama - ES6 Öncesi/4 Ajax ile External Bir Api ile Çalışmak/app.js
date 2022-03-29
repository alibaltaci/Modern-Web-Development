document.getElementById("change").addEventListener("click", change);

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.exchangerate.host/latest"); // default - true - asenkron

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText);

            const rate = response.rates.TRY;  // güncel 1 EURO - ? TL

            const amount = Number(document.getElementById("amount").value);  // girilen tutar.

            document.getElementById("tl").value = amount * rate;  // değerin ekrana yazdırılması.
        }
    }


    xhr.send();

}