const person = {
    
    age:25,

    // tellAge: function(){

    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)  // bu şekilde yaparsak içerideki thisler windowu östermeye başlar - undefined sonucu gelir

    
    // arrow function

    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }

    // arrow function da yukarıdaki işlemle aynıdır.
    // bind ile bağlamaya gerek kalmadan window objesini gösterir.
}

person.tellAge();