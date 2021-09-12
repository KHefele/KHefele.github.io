

let stunden = null;
let gehalt = null;


function myFunction() {
    
    stunden = prompt("Wöchentliche Arbeitsstunden", "40");
    gehalt = prompt("Monatliches Gehalt in €", "1000");
    
    let text;
    if (stunden == null || stunden == "") {
      text = "Um eine , muss die Seite neu geladen werden";
    } 
}

myFunction();


var verdienstInSekunden = gehalt/4/stunden/60/60;





var zaehler = document.getElementById("zaehler");
zaehler.innerHTML = verdienstInSekunden;