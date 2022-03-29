// With ES6 (Promise Constructor)

class Currency{

    constructor(firstCurrency, secondCurrency){  //app.js den gelecek değerler.
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base=";
        this.amount = null;
    }

    // exchange method with fetch API
    exchange(){

        return new Promise( (resolve, reject) => {

            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency];
                const amount2 = Number(this.amount); // string to number
    
                let total = parity * amount2;
                
                resolve(total);
            })
            .catch(err => reject(err));
        })

    }

    changeAmount(amount){
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}