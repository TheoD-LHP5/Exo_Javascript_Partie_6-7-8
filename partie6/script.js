// EXERCICE 1

// function checkBissextile(year){
//     if(((year % 4 == 0) && (year % 100)) != 0 || (year % 400 == 0)){
//       return true;  
//     } else {
//         return false
//     }
// }

// const yearList = document.getElementById("yearList");
// let startYear = 2020;
// let endYear = 2030;

// for(let year = startYear; year <= endYear; year++){
//     if(checkBissextile(year)){
//         yearList.innerHTML += `<li class="text-danger">${year}</li>`;
//     } else {
//         yearList.innerHTML += `<li>${year}</li>`;
//     }
    
// }

// FIN EXERCICE 1

// EXERCICE 2

// const numberList = document.getElementById("numberList");
// let startNumber = 0;
// let endNumber = 100;

// for(let number = startNumber; number <= endNumber; number++){
//     if((number % 15 ) == 0){
//         numberList.innerHTML += "<li>...</li>";
//     } else {
//         numberList.innerHTML += `<li>${number}</li>`;
//     }
    
// }

// FIN EXERCICE 2

// EXERCICE 3

// let languages = ["html", "css", "javascript", "php", "mysql", "c++", "ruby", "python"];

// const theoTbody = document.getElementById("theoTbody");

// languages.forEach(element => {

//     let theoTr = document.createElement("tr");
//     theoTr.innerHTML = `<td>${element}</td>`;
//     theoTbody.appendChild(theoTr)
// });

// Boucle pour avoir 6 fois un élément, ici 6 fois la console.log
// for(let i = 1; i <= 6 ; i++){
//     console.log("keynote");
// }

// FIN EXERCICE 3

// EXERCICE 4

// let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

// const theo = document.getElementById("theo");

// days.forEach(element => {
//     let theoButton = document.createElement("button");
//     theoButton.classList.add("btn", "btn-primary", "m-1");
//     if(element == "Samedi" || element == "Dimanche"){
//         theoButton.classList.add("btn-warning");
//     }
//     theoButton.textContent = element;
//     theo.appendChild(theoButton);
// });

// FIN EXERCICE 4

// EXERCICE 5

// let firstNumber = 2;
// let secondNumber = 2;
// let result = 0;
// let resultElement = document.getElementById("resultElement");

// function multipl(){
//     result = firstNumber * secondNumber;
//     secondNumber = result;
//     return result;
// }

// while (multipl() < 250){
//     resultElement.innerHTML += `<li>${result}</li>`;
// }

// FIN EXERCICE 5

// EXERCICE 6

let firstNumber = 2;
let secondNumber = 6;
let result = 0;
let resultElement = document.getElementById("resultElement");

function multipl(){
    result = secondNumber / firstNumber;
    secondNumber = result;
    return result;
}

while (multipl() > 1){
    resultElement.innerHTML += `<li>${result}</li>`;
}

// FIN EXERCICE 6