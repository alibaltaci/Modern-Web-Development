class UI{

    constructor(){

        this.resultPer = document.getElementById("result-per");

        this.resultMessage = document.getElementById("result-message");

    }

    addResultsFromUI(response){

        this.resultPer.innerHTML = `

        <div id="persentage-box"> <span>${response.percentage}</span> % </div>
        
        `;
        
        this.resultMessage.innerHTML = `
        
        <div id="message-box"> ${response.result} </div>

        `;
    }
}