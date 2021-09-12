

  /*--------------------------------------------//
    Kategorien

    0. allgemeine Funktionen
    1. Erzählfolge
    2. Taxonomie
    3. Geographie
    4. Alpabet
    5. Verwandlungsgrund
    6. Verwandelnde
    7. Fließtext
    8. Unorganisiert

  //--------------------------------------------*/





  //get needed elements from index.html
  var chronoBtn = document.getElementById("chrono");
  var chronoImg = document.getElementById("chronologie");

  var taxBtn = document.getElementById("tax");
  var taxImg = document.getElementById("taxonomie");

  var geoBtn = document.getElementById("geo");
  var geoImg = document.getElementById("geographie");

  var alphaBtn = document.getElementById("alpha");
  var alphaImg = document.getElementById("alphabet");

  var textBtn = document.getElementById("text");
  var textImg = document.getElementById("fliesstext");

  var grundBtn = document.getElementById("grund");
  var grundImg = document.getElementById("verwandlungsgrund");

  var verwandelndeBtn = document.getElementById("verwandelnder");
  var verwandelndeImg = document.getElementById("verwandelnde");





  // folgende Funktionen werden bei allen Kategorien aufgerufen

  //setzt den Wrapper auf die angegebene Prozentzahl
  function setWidthPercent(percent){
    for (key in leude){
      var iconWrapper = document.getElementById(key + "Btn");
      iconWrapper.style.width = leude[key].width * percent / 100 + "px";
    }
  }

  
  //setzt alle Einstellungen der nicht aufgerufenen Kategorien zurück
  function setBackOtherKategories(aktKat){
    
    // 1. Kategorie zurücksetzen: Erzählfolge
    if (aktKat != "erzaehlfolge"){
      chronoImg.style.display = "none";
      var ovMetStelle = document.getElementsByClassName("ovMetStelle"); 
      for (var x = 0; x < ovMetStelle.length; x++) {
        ovMetStelle[x].style.display = "none";
      }
    }

    // 2. Kategorie zurücksetzen: Taxonomie
    if (aktKat != "taxonomie"){
      taxImg.style.display = "none";
      var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
      for (var x = 0; x < taxonomieNames.length; x++) {
        taxonomieNames[x].style.display = "none";
      }
    }

    // 3. Kategorie zurücksetzen: Geographie
    if (aktKat != "geographie"){
      geoImg.style.display = "none";
      for (var figur in leude){ //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
        var figurIcon = document.getElementById(figur + "Wrapper");
        figurIcon.style.opacity = 1;
      }
    }

    // 4. Kategorie zurücksetzen: Alphabet
    if (aktKat != "alphabet"){
      alphaImg.style.display = "none";
      var alphabetNames = document.getElementsByClassName("alphabetNames"); 
      for (var x = 0; x < alphabetNames.length; x++) {
        alphabetNames[x].style.display = "none";
      }
    }

    // 5. Kategorie zurücksetzen: Grund 
    if (aktKat != "grund"){
      grundImg.style.display = "none";
    }

    // 6. Kategorie zurücksetzen: Verwandelnde
    if (aktKat != "verwandelnde"){
      verwandelndeImg.style.display = "none";
    }
    
    // 7. Kategorie zurücksetzen: Fließtext
    if (aktKat != "fliesstext"){
      textImg.style.display = "none";
    }
  }



















  //--------------------------------------------//
  //              1. Erzählfolge                //
  //--------------------------------------------//

  for (key in leude){

    var iconWrapper = document.getElementById(key + "Wrapper");
    var ovMetStelle = document.createElement("div");
    ovMetStelle.className = "ovMetStelle";
    ovMetStelle.style.textAlign = "center";
    ovMetStelle.innerHTML = leude[key].ovMet;
    //ovMetStelle.style.position = "absolute";
    ovMetStelle.style.fontFamily = "'Crimson Text', serif";
    ovMetStelle.style.fontSize = "8px";
    ovMetStelle.style.display = "none";
    iconWrapper.appendChild(ovMetStelle);

  }


  function setZeitstrahl(startLeft, fromTop, laenge, arrowPosition, beschrText) {

    var line = document.createElement("div");
    line.id = "line";
    document.getElementById("chronologie").appendChild(line);
    var arrow = document.createElement("div");
    arrow.id = "arrow";
    document.getElementById("chronologie").appendChild(arrow);

    var text = document.createElement("div");
    text.innerHTML = beschrText;
    text.style.fontFamily = "'Crimson Text', serif";
    text.style.position = "absolute";
    text.style.top = fromTop - 10 + "%";
    text.style.left = startLeft + "%";
    document.getElementById("chronologie").appendChild(text);

    //line
    line.style.top = fromTop + "%";
    line.style.position = "absolute";
    line.style.animation = "slowOpacity";
    line.style.animationDuration = "3s";
    line.style.width = laenge + "%"; /*Problem*/
    line.style.height = "5px";
    line.style.background = "rgba(115, 48, 48, 0.6)";
    line.style.left = startLeft + "%";
    
    //arrow
    arrow.style.top = fromTop + "%";
    arrow.style.position = "absolute";
    arrow.style.animation = "slowOpacity";
    arrow.style.animationDuration = "3s";
    arrow.style.border = "10px solid rgba(115, 48, 48, 0.6)";
    arrow.style.fontSize = "0;line-height:0;height:0;padding:0;margin:0";
    arrow.style.borderTopColor = "transparent";
    arrow.style.borderRightColor = "transparent";
    arrow.style.borderBottomColor = "transparent";
    arrow.style.left = arrowPosition + "%";
    arrow.style.transform = "translate(0%, -40%)";
  }


  

  var startIconsBy = 12; //from left
  var abstaendeZwischenIcons = 3.5;
  var erstePentadeFromTop = 30;
  var zweitePentadeFromTop = 52.5;
  var drittePentadeFromTop = 75;
  var iconPosition = startIconsBy;

  function setCoordinates(booleanErsterKlick) {
    
    iconPosition = startIconsBy;
    
    for (var h = 0; h < erstePentade.length; h++){
      var figurIcon = document.getElementById(erstePentade[h] + "Wrapper");
      figurIcon.style.top = erstePentadeFromTop + "%";
      figurIcon.style.left = iconPosition + "%";
      
      iconPosition += abstaendeZwischenIcons;
    }
    if (booleanErsterKlick) {
      setZeitstrahl(startIconsBy, erstePentadeFromTop, iconPosition-startIconsBy, iconPosition, "I. Pentade"); //arguments: startLeft, fromTop, laenge, arrowPosition
    }
    
  

    iconPosition = startIconsBy;
    
    for (var h = 0; h < zweitePentade.length; h++){
      var figurIcon = document.getElementById(zweitePentade[h] + "Wrapper");
      figurIcon.style.top = zweitePentadeFromTop + "%";
      figurIcon.style.left = iconPosition + "%";
      
      iconPosition += abstaendeZwischenIcons;
    }
    if (booleanErsterKlick) {
    setZeitstrahl(startIconsBy, zweitePentadeFromTop, iconPosition-startIconsBy, iconPosition, "II. Pentade"); //arguments: startLeft, fromTop, laenge, arrowPosition
    }

    iconPosition = startIconsBy;
    
    for (var h = 0; h < drittePentade.length; h++){
      var figurIcon = document.getElementById(drittePentade[h] + "Wrapper");
      figurIcon.style.top = drittePentadeFromTop + "%";
      figurIcon.style.left = iconPosition + "%";
      
      iconPosition += abstaendeZwischenIcons;
    }
    if (booleanErsterKlick) {
    setZeitstrahl(startIconsBy, drittePentadeFromTop, iconPosition-startIconsBy, iconPosition, "III. Pentade"); //arguments: startLeft, fromTop, laenge, arrowPosition
    }
  }

  


  var ersterKlickChrono = true;
  

  function erzaehlfolgeFunction() {
    
    setWidthPercent(60);
    setBackOtherKategories("erzaehlfolge");
    setLocationHash("erzaehlfolge");


    setCoordinates(ersterKlickChrono);
    chronoImg.style.display = "block";

    ersterKlickChrono = false;
    var ovMetStellen = document.getElementsByClassName("ovMetStelle"); 
    for (var x = 0; x < ovMetStellen.length; x++) {
      ovMetStellen[x].style.display = "block";
    }
  }

  chronoBtn.onclick = erzaehlfolgeFunction;























  //--------------------------------------------//
  //               2. Taxonomie                 //
  //--------------------------------------------//


  for (key in leude){
    var iconWrapper = document.getElementById(key + "Wrapper");
    var pTaxonomie = document.createElement("div");
    pTaxonomie.className = "taxonomieNames";
    pTaxonomie.innerHTML = leude[key].verwandlung;
    iconWrapper.appendChild(pTaxonomie);
  }


  function taxonomieFunction () {

    setWidthPercent(80);
    setBackOtherKategories("taxonomie");
    setLocationHash("taxonomie");

    
    taxImg.style.display = "block";
    taxImg.style.animationPlayState = "running";
    var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
    for (var x = 0; x < taxonomieNames.length; x++) {
      taxonomieNames[x].style.display = "block";
    }


    
    //startpunkt von Top sind gleichzusetzen mit CSS id attributes, left + 10
    var figurPositionFaunaTop = 25; //document.getElementById("fauna").offsetTop;
    var figurPositionFaunaLeft = 16.5; //document.getElementById("fauna").offsetLeft + 150; //letzte Zahl damit Titel noch gelesen werden kann

    var figurPositionFloraTop = 40; //document.getElementById("flora").offsetTop;
    var figurPositionFloraLeft = 16.5; //document.getElementById("flora").offsetLeft + 150;

    var figurPositionElementeTop = 55; //document.getElementById("elemente").offsetTop;
    var figurPositionElementeLeft = 16.5; //document.getElementById("elemente").offsetLeft + 150;

    var figurPositionSonstigesTop = 70; // document.getElementById("sonstiges").offsetTop;
    var figurPositionSonstigesLeft = 16.5; //document.getElementById("sonstiges").offsetLeft + 150;


    //Abstand zwischen Icons und Länge des Balkens nach Icons
    var abstand = 4;
    var balkenende = 12; //nicht weniger als 11! Da Anfang noch abgezogen werden muss Anfang entspricht ca. 11
    

    //mitzählen für Prozentangaben
    var countFauna = 0;
    var countFlora = 0;
    var countElemente = 0;
    var countSonstiges = 0;

    
    // for (var id in figuresListSorted){
    //   console.log(figuresListSorted[id]);
    // }
    for (var id in figuresListSorted){
      
      //ICONS VERSCHIEBEN
      var figurIcon = document.getElementById(figuresListSorted[id] + "Wrapper");
      
      
      //der richtigen Taxonomie zuordnen
      if (leude[figuresListSorted[id]].taxonomie == "fauna"){
        //console.log("figur zählt zu fauna");
        
        figurIcon.style.top = figurPositionFaunaTop + "%";
        figurIcon.style.left = figurPositionFaunaLeft + "%";
        
        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        figurPositionFaunaLeft += abstand; //figurIcon.offsetWidth;

        countFauna += 1;

      } else if (leude[figuresListSorted[id]].taxonomie == "flora"){
        //console.log("figur zählt zu flora");
        
        figurIcon.style.top = figurPositionFloraTop + "%";
        figurIcon.style.left = figurPositionFloraLeft + "%";
      
        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        figurPositionFloraLeft += abstand;

        countFlora +=1;

      } else if (leude[figuresListSorted[id]].taxonomie == "elemente"){

        figurIcon.style.top = figurPositionElementeTop + "%";
        figurIcon.style.left = figurPositionElementeLeft + "%";

        figurPositionElementeLeft += abstand;

        countElemente +=1;


      } else if (leude[figuresListSorted[id]].taxonomie == "sonstiges"){
        
        figurIcon.style.top = figurPositionSonstigesTop + "%";
        figurIcon.style.left = figurPositionSonstigesLeft + "%";

        figurPositionSonstigesLeft += abstand;

        countSonstiges += 1;
      }
      
       
       
    }


    //balkenlaengen 
    document.getElementById("fauna").style.width = countFauna*abstand + balkenende + "%"; 
    document.getElementById("flora").style.width = countFlora*abstand + balkenende + "%";
    document.getElementById("elemente").style.width = countElemente*abstand + balkenende + "%";
    document.getElementById("sonstiges").style.width = countSonstiges*abstand + balkenende + "%";

    //prozentangaben taxonomie
    var all = countFauna + countFlora + countElemente + countSonstiges;
    // var percentNumbers = [(countFauna/all*100), (countFlora/all*100), (countElemente/all*100), (countSonstiges/all*100)];
    // var percentNumbers = [(countFauna/all*100).toString().slice(0,4), (countFlora/all*100).toString().slice(0,4), (countElemente/all*100).toString().slice(0,4), (countSonstiges/all*100).toString().slice(0,4)];
    var percentNumbers = [Math.round(countFauna/all*100*10)/10, Math.round(countFlora/all*100*10)/10, Math.round(countElemente/all*100*10)/10, Math.round(countSonstiges/all*100*10)/10];

    var percentPArray = document.getElementsByClassName("percentTopright");

    var p = 0;
    for (var percentP = 0; percentP < percentPArray.length; percentP++) {
      percentPArray[percentP].innerHTML = percentNumbers[p] + "%";
      p++;
    }

  }
  taxBtn.onclick = taxonomieFunction;

  //TaxonomieNames anzeigen bei hover über Balken
  // var arrayTaxonomieNames = [];  


  // for (key in leude){
  //   var iconWrapper = document.getElementById(key + "Wrapper");
  //   var pTaxonomie = document.createElement("div");
  //   pTaxonomie.className = "taxonomieNames";
  //   pTaxonomie.innerHTML = leude[key].verwandlung;
  //   iconWrapper.appendChild(pTaxonomie);
  //   arrayTaxonomieNames.push(pTaxonomie);
  // }

  
  // var taxKategoryArr = ["fauna", "flora", "elemente", "sonstiges"];

  // for (var t = 0; t< taxKategoryArr.length; t++){
    
  //   document.getElementById(taxKategoryArr[t]).onmouseover = function () {
  //     for (var n = 0; n<arrayTaxonomieNames.length; n++){
  //       arrayTaxonomieNames[n].style.display = "block";
  //     }
  //   }
    
  //   document.getElementById(taxKategoryArr[t]).onmouseout = function () {
  //     for (var n = 0; n<arrayTaxonomieNames.length; n++){
  //       arrayTaxonomieNames[n].style.display = "none";
  //     }
  //   }

  // }



  


















  //--------------------------------------------//
  //               3. Geographie                //
  //--------------------------------------------//

  function geographieFunction() {

    setWidthPercent(100);
    setBackOtherKategories("geographie");
    setLocationHash("geographie");
  

    geoImg.style.display = "block";
    geoImg.style.animationPlayState = "running";


    for (var figur in leude){

      var figurIcon = document.getElementById(figur + "Wrapper");
      
      
      if (leude[figur].ort.startsWith("?")) {
  
        figurIcon.style.top = (Math.floor(Math.random() * (90 - 10 + 1)) + 10) + "%";
        figurIcon.style.left = (Math.floor(Math.random() * (90 - 10 + 1)) + 10) + "%";
        figurIcon.style.opacity = 0;
        
      } else {
        figurIcon.style.top = leude[figur].koordinaten.geographie.top + "%";
        figurIcon.style.left = leude[figur].koordinaten.geographie.left + "%";
      }

    }
  }

  geoBtn.onclick = geographieFunction;



  

























  //--------------------------------------------//
  //               4. Alphabet                  //
  //--------------------------------------------//

  //Alphabet-Names unter Icons anzeigen
  // for (key in leude){

  //   var iconWrapper = document.getElementById(key + "Wrapper");
  //   var figurName = document.createElement("div");
  //   figurName.className = "alphabetNames";
  //   figurName.innerHTML = leude[key].name;
  //   figurName.style.position = "relative";
  //   figurName.style.fontFamily = "'Crimson Text', serif";
  //   figurName.style.fontSize = "10px";
  //   figurName.style.display = "none";
  //   figurName.style.top = "10%";
  //   iconWrapper.appendChild(figurName);

  // }


  var unsortedIds = [];
  for (var figur in leude){
    unsortedIds.push(leude[figur].id);
  }
  var sortedIds = unsortedIds.sort();


  var ersterKlickAlpha = true;
  function alphabetFunction() {

    setWidthPercent(100);
    setBackOtherKategories("alphabet");
    setLocationHash("alphabet");


    alphaImg.style.display = "block";
    var alphaNames = document.getElementsByClassName("alphabetNames");
    for (var i = 0; i < alphaNames.length; i++){
      //alphaNames[i].style.display = "block";
      var iconWrapper = document.getElementById(alphaNames[i].parentElement.id);
      var wrapperHeight = iconWrapper.offsetHeight;
      //console.log(wrapperHeight);
      var alphaNamesHeight = alphaNames[i].scrollHeight; //WARUM FUNKTIONIERT DAS NICHT?
      //console.log(alphaNames[i] + alphaNamesHeight);
      //unschöne Notlösung
      alphaNames[i].style.top = wrapperHeight/2 - 5 + "px";

    }

    
    var alphaDiv = document.getElementById("alphabet");
    var startFromTop = 15;
    var startFromLeft = 10;
    var spaceBetweenIconsHorizontally = 5;
    //var spaceBetweenLetterBlocksVertically = 15;
    var spaceBetweenIconsVertically = 10;

    var topPosition = startFromTop; //ändern sich im Laufe der Schleife
    var leftPosition = startFromLeft;


    for (var id = 0; id < sortedIds.length; id++){


      //Anfangsbuchstaben setzen
      var letter = sortedIds[id].slice(0,1).toUpperCase(); //nur Anfangsbuchstaben in groß

      if (id == 0 || letter != sortedIds[id - 1].slice(0, 1).toUpperCase()) { //checken, dass Anfangsbuchstabe nicht bereits angezeigt wird

        if (ersterKlickAlpha) {
          var letterDiv = document.createElement("h1");
          letterDiv.innerHTML = letter;
          letterDiv.style.position = "absolute";
          letterDiv.style.top = topPosition + "%";
          letterDiv.style.left = startFromLeft + "%";
          letterDiv.style.color = "#733030";
          letterDiv.style.animation = "slowOpacity";
          letterDiv.style.animationDuration = "2s";
          alphaDiv.appendChild(letterDiv);
        }

        leftPosition = startFromLeft;
        leftPosition += spaceBetweenIconsHorizontally*2;
        topPosition += spaceBetweenIconsVertically;

      }


      //Wrapper setzen
      var figurIcon = document.getElementById(sortedIds[id] + "Wrapper"); //get IconWrapper 
      figurIcon.style.top = (topPosition - 4) + "%";
      figurIcon.style.left = (leftPosition) + "%";

      leftPosition += spaceBetweenIconsHorizontally;


      
      

    }


   
    var alphabetNames = document.getElementsByClassName("alphabetNames"); 
    for (var x = 0; x < alphabetNames.length; x++) {
      alphabetNames[x].style.display = "block";
    }
      



    ersterKlickAlpha = false;
  }

  alphaBtn.onclick = alphabetFunction;



















  //--------------------------------------------//
  //                  5. Grund                  //
  //--------------------------------------------//

  
  //Verwandlungsgrund

  function grundFunction() {
    
    setWidthPercent(80);
    setBackOtherKategories("grund");
    setLocationHash("grund");
  

    grundImg.style.display = "block";





    // s. CSS positions
    var positionSchutzTop = 25; //document.getElementById("schutz").offsetTop;
    var positionSchutzLeft = 19;//document.getElementById("schutz").offsetLeft;

    var positionBestrafungTop = 25; //document.getElementById("bestrafung").offsetTop;
    var positionBestrafungLeft = 54; //document.getElementById("bestrafung").offsetLeft;

    var positionBegierdeTop = 54;//document.getElementById("begierde").offsetTop;
    var positionBegierdeLeft = 19; //document.getElementById("begierde").offsetLeft;

    var positionBitteTop = 90;//document.getElementById("begierde").offsetTop;
    var positionBitteLeft = 25; //document.getElementById("begierde").offsetLeft;

    var positionKampfTop = 100;//document.getElementById("begierde").offsetTop;
    var positionKampfLeft = 25; //document.getElementById("begierde").offsetLeft;

    var positionEhrungTop = 54;//document.getElementById("ehrung").offsetTop;
    var positionEhrungLeft = 54;//document.getElementById("ehrung").offsetLeft;

    var positionSonstigerGrundTop = 80; //document.getElementById("sonstigerGrund").offsetTop;
    var positionSonstigerGrundLeft = 25; //document.getElementById("sonstigerGrund").offsetLeft;

    

    //mitzählen für Prozentangaben
    var countSchutz = 0;
    var countBestrafung = 0;
    var countBegierde = 0;
    var countEhrung = 0;
    var countBitte = 0;
    var countKampf = 0;
    var countSonstigerGrund = 0;

    

    for (var id in figuresListSorted){
      
      //ICONS VERSCHIEBEN
      var figurIcon = document.getElementById(figuresListSorted[id] + "Wrapper");
      //var figurPopover = document.getElementById(figur + "Popover");
      
      
      //dem richtigen Grund zuordnen
      if (leude[figuresListSorted[id]].grund == "Schutz"){
        //console.log("figur zählt zu schutz");
        
        figurIcon.style.top = positionSchutzTop + "%";
        figurIcon.style.left = positionSchutzLeft + "%";
        
        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        positionSchutzLeft += 5; //figurIcon.offsetWidth;

        countSchutz += 1;

      } else if (leude[figuresListSorted[id]].grund.includes("Bestrafung")){
        //console.log("figur zählt zu bestrafung");
        
        figurIcon.style.top = positionBestrafungTop + "%";
        figurIcon.style.left = positionBestrafungLeft + "%";

        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        positionBestrafungLeft += 5; //figurIcon.offsetWidth;

        countBestrafung +=1;

      } else if (leude[figuresListSorted[id]].grund == "Trauer"){

        figurIcon.style.top = positionBegierdeTop + "%";
        figurIcon.style.left = positionBegierdeLeft + "%";

        positionBegierdeLeft += 5; //figurIcon.offsetWidth;

        countBegierde +=1;


      } else if (leude[figuresListSorted[id]].grund == "postume Ehrung"){
        
        figurIcon.style.top = positionEhrungTop + "%";
        figurIcon.style.left = positionEhrungLeft + "%";

        positionEhrungLeft += 5; //figurIcon.offsetWidth;

        countEhrung += 1;
      
      } else if (leude[figuresListSorted[id]].grund.includes("Wunsch")){
        
        figurIcon.style.top = positionBitteTop + "%";
        figurIcon.style.left = positionBitteLeft + "%";

        positionBitteLeft += 5; //figurIcon.offsetWidth;

        countBitte += 1;

      } else if (leude[figuresListSorted[id]].grund.includes("Kampf")){
        
        figurIcon.style.top = positionKampfTop + "%";
        figurIcon.style.left = positionKampfLeft + "%";

        positionKampfLeft += 5; //figurIcon.offsetWidth;

        countKampf += 1;
      
      } else {
        
        figurIcon.style.top = positionSonstigerGrundTop + "%";
        figurIcon.style.left = positionSonstigerGrundLeft + "%";

        positionSonstigerGrundLeft += 5; //figurIcon.offsetWidth;

        countSonstigerGrund += 1;
      }
    }

    //prozentangaben Verwandlungsgrund
    var allGrund = countSchutz + countBegierde + countBestrafung + countEhrung + countSonstigerGrund;
    var percentNumbersGrund = [Math.round(countSchutz/allGrund*100*10)/10, Math.round(countBestrafung/allGrund*100*10)/10, Math.round(countBegierde/allGrund*100*10)/10, Math.round(countEhrung/allGrund*100*10)/10, Math.round(countSonstigerGrund/allGrund*100*10)/10];
    //console.log(percentNumbersGrund);

    var percentPGrundArray = document.getElementsByClassName("percentToprightGrund");

    for (var g = 0; g < percentPGrundArray.length; g++) {
      percentPGrundArray[g].innerHTML = percentNumbersGrund[g] + "%";
    }
  }

  grundBtn.onclick = grundFunction;


















  //--------------------------------------------//
  //               6. Verwandelnde              //
  //--------------------------------------------//
  

  function verwandelndeFunction() {

    setWidthPercent(100);
    setBackOtherKategories("verwandelnde");
    setLocationHash("verwandelnde");


    verwandelndeImg.style.display = "block";

    for (key in leude){

      //count-Variablen
      var countJupiter = 0;
      var countVenus = 0;
      var countDiana = 0;
      var countRest = 0;


      //Platz 1: Jupiter 
      if (leude[key].verwandler === "Jupiter"){
        iconWrapper.style.top = "10%";
        iconWrapper.style.left = "20%";


      //Platz 2: Venus
      } else if (leude[key].verwandler === "Venus"){
        iconWrapper.style.top = "30%";
        iconWrapper.style.left = "20%";

      //Platz 3: Diana
      } else if (leude[key].verwandler === "Diana"){
        iconWrapper.style.top = "50%";
        iconWrapper.style.left = "20%";

      //alle anderen
      } else {
        iconWrapper.style.top = "80%";
        iconWrapper.style.left = "20%";

      }

    }

  }

  verwandelndeBtn.onclick = verwandelndeFunction;














  //--------------------------------------------//
  //               7. Fließtext                 //
  //--------------------------------------------//
  
  //create text-div
  var textModalDiv = document.createElement("div");
  textModalDiv.id = "textModal";
  //textModalDiv.className = "kategory";
  textModalDiv.style.textAlign = "left";
  textImg.appendChild(textModalDiv);



  //iterate through metamorphosen.json
  for (var key in metamorphosen) {

    var contentDiv = document.createElement("div");
    contentDiv.id = key;
    //contentDiv.className = "textModalContent";
    textModalDiv.appendChild(contentDiv);

    var header = document.createElement("h1");
    header.className = "textModalHeader";
    header.id = key + "Header";
    header.innerHTML = "<br>" + metamorphosen[key].name + " (" + metamorphosen[key].stelle + ")";
    contentDiv.appendChild(header);

    var contentP = document.createElement("p");
    contentDiv.className = "textModalContent";
    /*contentDiv.style = "padding: 25px 50px 0px";*/
    contentP.innerHTML = metamorphosen[key].text + "<br><br>";
    contentDiv.appendChild(contentP);

  }
  var footer = document.createElement("div");
  footer.className = "textModalFooter";
  textModalDiv.appendChild(footer);

  var copyrightText = document.createElement("div");
  footer.appendChild(copyrightText);
  copyrightText.style.fontSize = "8px";
  copyrightText.style.position = "relative";
  copyrightText.style.padding = "2% 9% 4% 10%"; //s. .textModalContent-Einstellungen
  copyrightText.innerHTML = "&#xa9; Quelle: ";
  var copyrightLink = document.createElement("a");
  copyrightLink.setAttribute("href", "http://www.zeno.org/Lesesaal/N/9781482656428?page=0");
  copyrightLink.innerHTML = "Ovidius Naso, Publius: Metamorphosen. Hrsg. von Michael Holzinger. Übers. von Reinhart Suchier. Berlin 2013."
  copyrightText.appendChild(copyrightLink);

  function fliesstextFunction() {

    setWidthPercent(100);
    setBackOtherKategories("fliesstext");
    setLocationHash("fliesstext");
    
    textImg.style.display = "block";
  }

  textBtn.onclick = fliesstextFunction;













  //--------------------------------------------//
  //             8. Unorganisiert               //
  //--------------------------------------------//

  
  var unorgBtn = document.getElementById("unorganisiert");

  unorgBtn.onclick = function () {

    setWidthPercent(100);
    setBackOtherKategories();
    setLocationHash("");
    

    for (var figur in leude){
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.top = leude[figur].koordinaten.unorganisiert.top + "%";
      figurIcon.style.left = leude[figur].koordinaten.unorganisiert.left + "%";
    }
  }





