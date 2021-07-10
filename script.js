async function loadJSON(path)
{    
  return fetch(path)
  .then((response) => {
    return response.json()
  })
}

export async function application() {

  const leude = await loadJSON('leude.json'); // für Modals & Popover
  const metamorphosen = await loadJSON('metamorphosen.json'); // für MetamorphosenText


  if (location.hash === "") {
    location.hash = "#";
  }



  /*--------------------------------------------//
    
    .----------------. 
    | .--------------. |
    | |     ____     | |
    | |   .'    '.   | |
    | |  |  .--.  |  | |
    | |  | |    | |  | |
    | |  |  `--'  |  | |
    | |   '.____.'   | |
    | |              | |
    | '--------------' |
    '----------------' 
  

    Interface

    1. Start-/Info-Modals
    2. Interface-Icons
    3. Navigations-Bar
    4. Buttons-Bar

  //--------------------------------------------*/


  //--------------------------------------------//
  //         1. Start-/Info-Modals              //
  //--------------------------------------------//


  // StartModal
  var startModal = document.getElementById("startModal"); // Get startModal
  var spanStart = document.getElementById("closeStartModal");   // Get <span> element that closes the startModal

  if (location.hash === "") {
    startModal.style.display = "block";
    startModal.style.animationPlayState = "running";
  }


  spanStart.onclick = function () { // Close
    startModal.style.display = "none";
  }

  // InfoModal
  var infoModal = document.getElementById("infoModal");   // Get infoModall
  var infoBtn = document.getElementById("infoBtn");   // Get button that opens the infoModal
  var mehrInfoBtn = document.getElementById("mehrInfoBtn"); // Get other butten that opens the infoModal
  var closeInfoBtn = document.getElementById("closeInfoBtn"); // Get the <span> element that closes the infoModal

  infoBtn.onclick = function () { // Open
    infoModal.style.display = "block";
    infoModal.style.animationPlayState = "running";
  }
  mehrInfoBtn.onclick = function () { // Other Open
    infoModal.style.display = "block";
    infoModal.style.animationPlayState = "running";
    startModal.style.display = "none";
  }
  closeInfoBtn.onclick = function () { // Close
    infoModal.style.display = "none";
  }


  // Quellen Modal
  var quellenModal = document.getElementById("quellenModal");   // Get infoModall
  var quellenBtn = document.getElementById("bookBtn");   // Get button that opens the infoModal
  //var closeInfoBtn = document.getElementById("closeInfoBtn"); // Get the <span> element that closes the infoModal

  quellenBtn.onclick = function () { // Open
    quellenModal.style.display = "block";
    quellenModal.style.animationPlayState = "running";
  }
  // closeInfoBtn.onclick = function () { // Close
  //   infoModal.style.display = "none";
  // }



  // Ovid Modal
  var ovidModal = document.getElementById("ovidModal");   // Get infoModall
  var ovidBtn = document.getElementById("ovidBtn");   // Get button that opens the infoModal
  //var closeInfoBtn = document.getElementById("closeInfoBtn"); // Get the <span> element that closes the infoModal

  ovidBtn.onclick = function () { // Open
    ovidModal.style.display = "block";
    ovidModal.style.animationPlayState = "running";
  }
  // closeInfoBtn.onclick = function () { // Close
  //   infoModal.style.display = "none";
  // }



  // Erzaehlfolge-Modal
  var erzaehlfolgeModal = document.getElementById("erzaehlfolgeModal");   // Get infoModall
  var erzaehlfolgeInfoBtn = document.getElementById("erzaehlfolgeInfoBtn");   // Get button that opens the infoModal
  //var closeInfoBtn = document.getElementById("closeInfoBtn"); // Get the <span> element that closes the infoModal

  erzaehlfolgeInfoBtn.onclick = function () { // Open
    erzaehlfolgeModal.style.display = "block";
    erzaehlfolgeModal.style.animationPlayState = "running";
  }

  // Klassifikation-Modal
  var klassifikationModal = document.getElementById("klassifikationModal");   // Get infoModall
  var klassifikationInfoBtn = document.getElementById("klassifikationInfoBtn");   // Get button that opens the infoModal
  //var closeInfoBtn = document.getElementById("closeInfoBtn"); // Get the <span> element that closes the infoModal

  klassifikationInfoBtn.onclick = function () { // Open
    klassifikationModal.style.display = "block";
    klassifikationModal.style.animationPlayState = "running";
  }


  //--------------------------------------------//
  //           2. Interface-Icons               //
  //--------------------------------------------//

  //Hover Info-Button
  var infoHoverName = document.createElement("div");
  infoHoverName.className = "infoHoverName";
  infoHoverName.innerHTML = "Info";
  infoHoverName.style.left = "30%";
  infoBtn.appendChild(infoHoverName);

  infoBtn.onmouseover = function () {
    infoHoverName.style.display = "block";
  }

  infoBtn.onmouseout = function () {
    infoHoverName.style.display = "none";
  }


  //Hover Book-Button
  var bookBtn = document.getElementById("bookBtn");

  var bookHoverName = document.createElement("div");
  bookHoverName.className = "infoHoverName";
  bookHoverName.innerHTML = "Quellen";
  bookHoverName.style.left = "10%";
  bookBtn.appendChild(bookHoverName);

  bookBtn.onmouseover = function () {
    bookHoverName.style.display = "block";
  }

  bookBtn.onmouseout = function () {
    bookHoverName.style.display = "none";
  }

  //Hover Ovid-Button
  var ovidBtn = document.getElementById("ovidBtn");

  var ovidHoverName = document.createElement("div");
  ovidHoverName.className = "infoHoverName";
  ovidHoverName.innerHTML = "Ovid";
  ovidHoverName.style.left = "25%";
  ovidBtn.appendChild(ovidHoverName);

  ovidBtn.onmouseover = function () {
    ovidHoverName.style.display = "block";
  }

  ovidBtn.onmouseout = function () {
    ovidHoverName.style.display = "none";
  }


  
  //--------------------------------------------//
  //          3. Navigations-Bar                //
  //--------------------------------------------//


  var navigation2punkt0 = document.getElementById("navigation2punkt0");
  var dropDownNavigation = document.getElementById("dropDownNavigation");
  var arrowDown = true;

  function navigationDropdown(arrowDownArgument){

    if (arrowDownArgument) {
      dropDownNavigation.style.transform = "rotate(180deg)";
      //dropDownNavigation.setAttribute("src", "Icons/upload.png");
      placeDurchsichtigesDiv();
      navigation2punkt0.style.display = "block";
      arrowDown = false;
    } else {
      dropDownNavigation.style.transform = "rotate(0deg)";
      //dropDownNavigation.setAttribute("src", "Icons/down-arrow.png");
      navigation2punkt0.style.display = "none";
      arrowDown = true;
    }
    
  }


  dropDownNavigation.onclick = function(){
    navigationDropdown(arrowDown);
  }


  //--------------------------------------------//
  //          4. Buttons-Bar                    //
  //--------------------------------------------//

  var buttons2punkt0 = document.getElementById("buttons2punkt0");
  var dropDownButtons = document.getElementById("dropDownButtons");
  var arrowDownButtons = true;

  function buttonsDropdown(arrowDownButtonsArgument){

    if (arrowDownButtonsArgument) {
      dropDownButtons.style.transform = "rotate(180deg)";
      //setAttribute("src", "Icons/upload.png");
      buttons2punkt0.style.display = "block";
      arrowDownButtons = false;
    } else {
      dropDownButtons.style.transform = "rotate(0deg)";
      //dropDownButtons.setAttribute("src", "Icons/down-arrow.png");  
      buttons2punkt0.style.display = "none";
      arrowDownButtons = true;
    }
    
  }


  dropDownButtons.onclick = function(){
    buttonsDropdown(arrowDownButtons);
  }








  
  /*--------------------------------------------//
    
    .----------------. 
    | .--------------. |
    | |     ____     | |
    | |   .'    '.   | |
    | |  |  .--.  |  | |
    | |  | |    | |  | |
    | |  |  `--'  |  | |
    | |   '.____.'   | |
    | |              | |
    | '--------------' |
    '----------------' 
  

    Sortierte Tabellen

    1. Ov.met.
    2. Verwandlerlisten

  //--------------------------------------------*/


  //--------------------------------------------//
  //             1. Ov.met.                     //
  //--------------------------------------------//

  var figuresListSorted = [];
  var ovMetListSorted = [];

  console.log(figuresListSorted)

  //array with IDs sorted by ovMet position
  for (var key in leude) {
    var currentId = key;

    var ovMetReplacedSemicolon = leude[key].ovMet.replace(",",".");
    var indexOfHyphen = ovMetReplacedSemicolon.indexOf("-");
    var ovMetFloat = parseFloat(ovMetReplacedSemicolon.substring(0, indexOfHyphen));
  
   
    if (figuresListSorted.length < 1){  //initial
      figuresListSorted.push(currentId);
      ovMetListSorted.push(ovMetFloat);
      //console.log("initial: \n id: " + figuresListSorted + " \n ovMet: " + ovMetListSorted);

    } else if (ovMetFloat < ovMetListSorted[0]) { //smaller number
      figuresListSorted.unshift(currentId);
      ovMetListSorted.unshift(ovMetFloat);
      //console.log("number was smaller, so inserted at the beginning: \n id: " + figuresListSorted + " \n ovMet: " + ovMetListSorted);

    } else if (ovMetFloat > ovMetListSorted[ovMetListSorted.length-1]) { //bigger number
      figuresListSorted.push(currentId);
      ovMetListSorted.push(ovMetFloat);
      //console.log("number was bigger, so inserted at the end: \n id: " + figuresListSorted + " \n ovMet: " + ovMetListSorted);

    } else {
      for (var x = 0; x < ovMetListSorted.length; x++){
        //console.log(ovMetFloat + "vs." + ovMetListSorted[x]);

        if (ovMetFloat > ovMetListSorted[x]) { //when number is bigger than array entry: continue
          continue;

        } else { //when number is smaller than array entry: insert 
          figuresListSorted.splice(x, 0, currentId);
          ovMetListSorted.splice(x, 0, ovMetFloat);
          //console.log("number was in the middle: \n id: " + figuresListSorted + " \n ovMet: " + ovMetListSorted);
          break;
        }
      }
    }
    
    //console.log(figuresListSorted);
    //console.log(ovMetListSorted);
  }


  //nach Pentaden sortiert 
  var erstePentade = [];
  var zweitePentade = [];
  var drittePentade = [];

  for (var h = 0; h < figuresListSorted.length; h++){
    //console.log(ovMetListSorted[h]);
    if (ovMetListSorted[h] < 6){
      erstePentade.push(figuresListSorted[h]);
    } else if (ovMetListSorted[h] > 6 && ovMetListSorted[h] < 11){
      zweitePentade.push(figuresListSorted[h]);
    } else {
      drittePentade.push(figuresListSorted[h]);
    };
  }



  var currentListSorted = figuresListSorted; //default 














  //--------------------------------------------//
  //          2. Verwandlerlisten               //
  //--------------------------------------------//

  //Beispiel:
  var verw = {
    "jupiter":{
      "namenDerVerwandelten": ["Berta", "Hannah"]
    }, 
    "diana": {
      "namenDerVerwandelten":["Berta", "Hannah"]
    }
  };
  //console.log(verwandler.jupiter.namenDerVerwandelten);

  var verwandlerArray = [];
  var verwandlerDict = {}; 
  for (key in leude){
    var currentVerwandler = leude[key].verwandler;
    if (currentVerwandler === "-"){continue};
    //console.log(currentVerwandler)

    //Bereinigung
    for (var buchstabe = 0; buchstabe < currentVerwandler.length; buchstabe ++){
  
      //unnötige Info in Klammern rausschmeißen
      if (currentVerwandler[buchstabe] === "(") { 
        var indexOfLeftBracket = buchstabe;
        var indexOfRightBracket = currentVerwandler.indexOf(")");
        currentVerwandler = currentVerwandler.substring(0, indexOfLeftBracket-1).concat(currentVerwandler.substr(indexOfRightBracket+1));
        currentVerwandler.trim();
      }
    
    }

    //falls mehrere Protagonisten genannt
    if (currentVerwandler.includes(",")){

      //Schleife durch Buchstaben des Verwandler-Strings, um Komma-Index herauszufinden
      for (var b = 0; b < currentVerwandler.length; b ++){
        
        //Hilfs-Array soll Protagonisten speichern
        var moreThanOneVerwandler = [];
        
        //durch Komma-Index Protagonisten separieren und zu Hilfs-Array hinzufügen
        if (currentVerwandler[b] === ",") { 
          var indexOfKomma = b;
          
          moreThanOneVerwandler.push(currentVerwandler.substring(0, indexOfKomma));
          moreThanOneVerwandler.push(currentVerwandler.substring(indexOfKomma + 2));
        }

        //Schleife über Hilfs-Array
        for (var t = 0; t < moreThanOneVerwandler.length; t++){

          //Protagonisten-Array durchlaufen und einfügen, wenn keys noch nicht im dict existieren
          if (!(moreThanOneVerwandler[t] in verwandlerDict)) { 
          
            verwandlerDict[moreThanOneVerwandler[t]] = {
              "nameDerVerwandelten": [leude[key].name]
            };
          
          //falls schon existiert, nur noch den/die Verwandelte:n hinzufügen 
          } else {
            verwandlerDict[moreThanOneVerwandler[i]].nameDerVerwandelten.push(leude[key].name);
          }
        }
      }


    //falls nur ein Protagonist genannt:
    } else {

      //NOCH UMBAUEN > in TABELLE UND ABRUFEN 
      var verwandeltenLink = "<a href='http://127.0.0.1:5500/#fliesstext#" + leude[key].id + "'>" + leude[key].name + "</a>";

      //insert, if key isn't already in dict
      if (!(currentVerwandler in verwandlerDict)) { 
        
        verwandlerDict[currentVerwandler] = {
          "nameDerVerwandelten": [verwandeltenLink]
        };
      
      //falls schon existiert, nur noch den/die Verwandelte:n hinzufügen 
      } else {
        verwandlerDict[currentVerwandler].nameDerVerwandelten.push(verwandeltenLink);
      }
    }
    

  }
  //console.log(verwandlerDict);



 







  /*--------------------------------------------//
    
    .----------------. 
    | .--------------. |
    | |     __       | |
    | |    /  |      | |
    | |    `| |      | |
    | |     | |      | |
    | |    _| |_     | |
    | |   |_____|    | |
    | |              | |
    | '--------------' |
    '----------------'             
  
  
    Grundfunktionalität

    0. Globale Variablen
    1. Metamorphosen-Icons/-Popover
    2. Metamorphosen-Modals
    3. Modal-Aufrufe
    4. Alles aufrufen
    5. Slider-Functions

  //--------------------------------------------*/


  
  //Globale Variablen
  var aktuellesModal;
  var aktuelleModalID;
  var aktuelleKategorie = ""; 





  //--------------------------------------------//
  //    1. Metamorphosen-Icons/-Popover         //
  //--------------------------------------------//
  
  var kategorienUndPopoverDiv = document.getElementById("kategorienUndPopoverDiv");

  //zufallszahlgenerierung
  function rand (min, max) {
    var zufallszahl = 0; 
    
    do { //zufallszahl soll zwischen dem Bereich -100 und 0 oder 100 und 200 liegen
      zufallszahl = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    while (zufallszahl > -10 && zufallszahl < 110);
    
    return zufallszahl;
  }
  //console.log("zufallszahl: " + rand(-100,200));


  function createIconAndPopover(data) { //startposition anywhere (animation)
    
    //Icon
    var iconDiv = document.createElement("div");
    iconDiv.id = data.id + "Wrapper";
    iconDiv.className="popover__wrapper";
    iconDiv.style.top = rand(-10,110) + "%";
    iconDiv.style.left = rand(-10,110) + "%";
    iconDiv.style.opacity = "0";

    function setCoordinatesIcons(){
      if (location.hash === ""){
        iconDiv.style.top = data.koordinaten.unorganisiert.top + "%"; //rand(-100,200) + "%";
        iconDiv.style.left = data.koordinaten.unorganisiert.left + "%"; //rand(-100,200) + "%";
      }
      iconDiv.style.opacity = "1";
    }
    window.setTimeout(setCoordinatesIcons, 1000);
    kategorienUndPopoverDiv.appendChild(iconDiv);

    var iconImg = document.createElement("img"); 
    iconImg.className = "iconImg";
    iconImg.title = data.verwandlung;
    iconImg.src = "Figuren/" + data.id + "/icon.png";
    iconImg.id = data.id + "Btn"; //Ansprechpartner für onclick function Navigations-Kategorien s.u.
    iconImg.style.width = data.width + "px";
    iconImg.alt = data.alt;
    iconDiv.appendChild(iconImg);


    //Popover - nach unten 
    
    var popoverContentDiv = document.createElement("div"); 
    popoverContentDiv.id = data.id + "Popover"; //sonst werden alle Popover gleichzeitig aufgerufen
    popoverContentDiv.className = "popover__content"; 
    popoverContentDiv.style.cursor = "pointer";
    iconDiv.appendChild(popoverContentDiv);

    //console.log(iconDiv.style.top);
    //popoverContentDiv.style.top = iconDiv.style.top + 

    var ueberschrift = document.createElement("h4");
    ueberschrift.style.margin = "0%";
    ueberschrift.innerHTML = data.name;
    popoverContentDiv.appendChild(ueberschrift);

    var ovMet = document.createElement("p");
    ovMet.style.fontSize = "12px";
    ovMet.innerHTML = data.ovMet;
    popoverContentDiv.appendChild(ovMet);

    var popoverImg = document.createElement("img");
    popoverImg.src = "Figuren/" + data.id + "/image.jpg";
    popoverImg.alt = data.alt;
    if (popoverImg.naturalWidth > popoverImg.naturalHeight) {
      popoverImg.width = "150";
    } else {
      popoverImg.height = "150";
    } 
    //popoverImg.style.width = "200px";
    popoverContentDiv.appendChild(popoverImg);

    //Popover - nach oben
    //console.log(popoverContentDiv.style.height);
    if ((popoverContentDiv.style.top + popoverContentDiv.height) > 100) {
      
      
      console.log("zu groß");
    }
  }

  
  








  //--------------------------------------------//
  //         2. Metamorphosen-Modals            //
  //--------------------------------------------//

  // generiert automatisiert Modals mithilfe der angelegten json-Datei
  // Parameter z.B. leude.actaeon
  function createModal(data) {
    var modalDiv = document.createElement("div");
    modalDiv.id = data.id + "Modal";
    modalDiv.className = "metamorphosenModal";
    document.body.appendChild(modalDiv);

    // var modalHeaderDiv = document.createElement("div");
    // modalHeaderDiv.className = "modalHeader";
    // modalDiv.appendChild(modalHeaderDiv);

    var modalContentDiv = document.createElement("div");
    modalContentDiv.className = "metamorphosenModalContent";
    modalDiv.appendChild(modalContentDiv);

    //slide
    //if (!(modalDiv.id == figuresListSorted[0] + "Modal")) { 
      var slidePrevDiv = document.createElement("div");
      slidePrevDiv.innerHTML = "&#10094;";
      slidePrevDiv.className = "prevMet";
      slidePrevDiv.title = "vorherige Verwandlung";
      modalDiv.appendChild(slidePrevDiv);
    //}

    //if (!(modalDiv.id == figuresListSorted[figuresListSorted.length-1] + "Modal")) {
      var slideNextDiv = document.createElement("div");
      slideNextDiv.innerHTML = "&#10095";
      slideNextDiv.className = "nextMet";
      slideNextDiv.title = "nächste Verwandlung";
      modalDiv.appendChild(slideNextDiv);
    //}

    //header
    var divHeader = document.createElement("div"); //div anlegen
    modalContentDiv.appendChild(divHeader);
    divHeader.className = "metamorphosenModalHeader";
    divHeader.appendChild(document.createElement("br"));
    divHeader.appendChild(document.createElement("br"));
    divHeader.appendChild(document.createElement("br"));
    var ueberschrift = document.createElement("h1"); //h1 in div anlegen
    ueberschrift.setAttribute("style", "display:inline");
    ueberschrift.innerHTML = data.name;
    divHeader.appendChild(ueberschrift);
    if (data.wikidata != "-") { //Link anlegen wenn Wikidata Inhalte vorhanden 
      var sup = document.createElement("sup"); //sup in div anlegen
      divHeader.appendChild(sup);
      var headerLink = document.createElement("a"); //link in sup anlegen
      var headerLinkInput = "https://www.wikidata.org/wiki/" + data.wikidata + "?uselang=de";
      headerLink.setAttribute("href", headerLinkInput);
      headerLink.setAttribute("target", "_blank");
      headerLink.innerHTML = " <img src='Icons/iconmonstr-help-2-240.png' style='width: 13px; margin-bottom: 7px'>";
      headerLink.title = "Wikidata";
      sup.appendChild(headerLink);
    }

    var imgDiv = document.createElement("div");
    modalContentDiv.appendChild(imgDiv);

    //Nur bei kleinen Ansichten unter 1100px <-- 100px kleiner gemacht
    var imgKlein = document.createElement("img"); 
    imgKlein.className = "display-under-1200px";
    imgKlein.alt = data.alt;
    imgKlein.title = data.alt;
    imgKlein.src = "Figuren/" + data.id + "/image.jpg";
    if (imgKlein.naturalWidth > imgKlein.naturalHeight) {
      imgKlein.width = "300";
    } else {
      imgKlein.height = "300";
    } 
    imgDiv.appendChild(imgKlein);

    imgDiv.appendChild(document.createElement("br"));

    var table = document.createElement("table");
    modalContentDiv.appendChild(table);

    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    var tableCol = document.createElement("td");
    tableCol.className = "hide-under-1200px";
    tableRow.appendChild(tableCol);

    //Nur bei großer Ansicht über 1200px
    var img = document.createElement("img");
    img.alt = data.alt;
    img.title = data.alt;
    img.src = "Figuren/" + data.id + "/image.jpg";
    if (img.naturalWidth > img.naturalHeight) {
      img.width = "300";
      //tableCol.style.width = "400";
    } else {
      img.height = "300";
      //tableCol.style.width = "400";
    }
    tableCol.appendChild(img);

    var copyrightP = document.createElement("p");
    copyrightP.className = "copyrightP";
    copyrightP.innerHTML = "&#xa9; " + data.source;
    copyrightP.title = "Bildquelle";
    copyrightP.style.fontSize = "10px";
    //copyrightP.style.width = "300px";
    copyrightP.style.color = "#733030";
    tableCol.appendChild(copyrightP);


    var tableCol2 = document.createElement("td");
    tableRow.appendChild(tableCol2);


    //innerTable
    var innerTable = document.createElement("table");
    innerTable.style.marginLeft = "15px";
    
    var emojiArray = ["&#x1F4CD;", "&#x1F32A;", "&#x2754;", "&#x1F464;", "&#x1F5FA;", "&#127988;", "&#128064;"];
    var metadataArray = ["Ov. met.:", "Verwandlung:", "Grund:", "Verwandelnde:r:", "Ort:", "Iconclass:", "Vergleichswerke:"];
    var dataArray = [data.ovMet, data.verwandlung, data.grund, data.verwandler, data.ort, data.iconclass, data.vergleichswerke];
    
    for (var i = 0; i < 7; i++) {
      var innerTableRow = document.createElement("tr");
      innerTable.appendChild(innerTableRow);

      //emoji-column
      var emojiCol = document.createElement("td");
      innerTableRow.appendChild(emojiCol);
      emojiCol.innerHTML = emojiArray[i];

      //metadata-column
      var metadataCol = document.createElement("td");
      metadataCol.className = "hide-under-700px";
      innerTableRow.appendChild(metadataCol);
      metadataCol.innerHTML = metadataArray[i];

      //data-column
      var dataCol = document.createElement("td");
      innerTableRow.appendChild(dataCol);
      
      //Verwandlertext + Infolink
      if (i === 3) { //Verwandler-Helptext 
        var regex = new RegExp(Object.keys(verwandlerDict).join("|"), "g");
        dataCol.innerHTML = dataArray[i].replaceAll(regex, "<dfn class='tooltip $&'>$&</dfn>"); //verwandlerText anlegen
        //if (dataArray[i] === "-"){continue};
        //dataArray[i] = dataArray[i].replaceAll(/(Jupiter|Diana)/g, "<dfn class='tooltip $&'>$&</dfn>")
        
        // var verwandlerSup = document.createElement("sup"); //sup anlegen
        // dataCol.appendChild(verwandlerSup);
        // var verwandlerLink = document.createElement("div"); //link anlegen
        // verwandlerLink.className = "verwandlerLink"; //hier Farbe, hover, inline-block eingestellt
        // verwandlerLink.innerHTML = "&nbsp; &#x2139;";
        // // var verwandlerLinkInput = "https://de.wikipedia.org/wiki/" + dataArray[i];
        // // verwandlerLink.setAttribute("href", verwandlerLinkInput);
        // // verwandlerLink.setAttribute("target", "_blank");
        // verwandlerSup.appendChild(verwandlerLink);
        //alternativ mit Link auf Text:
        // var verwandlerLink = document.createElement("a"); //link anlegen
        // var verwandlerLinkInput = "https://de.wikipedia.org/wiki/" + dataArray[i];
        // verwandlerLink.setAttribute("href", verwandlerLinkInput);
        // verwandlerLink.setAttribute("target", "_blank");
        // verwandlerLink.innerHTML = dataArray[i];
        // dataCol.appendChild(verwandlerLink);
      

        //Iconclasstext + Infolink
      } else if (i === 5) {
        //dataCol.innerHTML = dataArray[i]; //iconclassText anlegen
        var iconclassLink = document.createElement("a"); //link auf Zahlenkombination anlegen
        var indexOfSpace = dataArray[i].indexOf(" ");
        var iconclassLinkInput = "http://www.iconclass.org/rkd/" + dataArray[i].substring(0, indexOfSpace);
        iconclassLink.setAttribute("href", iconclassLinkInput);
        iconclassLink.setAttribute("target", "_blank");
        iconclassLink.innerHTML = dataArray[i].substring(0, indexOfSpace);
        iconclassLink.title = "Iconclass-Verknüpfung";
        dataCol.appendChild(iconclassLink);

        var restVomFestIconclass = dataArray[i].substring(indexOfSpace); //text hinzufügen
        var iconclassText = document.createElement("span");
        iconclassText.innerHTML = restVomFestIconclass;
        dataCol.appendChild(iconclassText);

      //Weiterführende Bilderverlinkungen
      } else if (i === 6) {
        if (dataArray[i].warburg != "-") {
          var warburgLink = document.createElement("a");
          warburgLink.setAttribute("href", dataArray[i].warburg);
          warburgLink.setAttribute("target", "_blank");
          warburgLink.innerHTML = "&#x2B95; Warburg Institute Iconographic Database";
          warburgLink.title = "Vergleichswerke Warburg";
          dataCol.appendChild(warburgLink);
  
          dataCol.appendChild(document.createElement("br"));
        }
        if (dataArray[i].bdo != "-") {
          var bdoLink = document.createElement("a");
          bdoLink.setAttribute("href", dataArray[i].bdo);
          bdoLink.setAttribute("target", "_blank");
          bdoLink.innerHTML = "&#x2B95; BDO Biblioteca Digital Ovidiana";
          bdoLink.title = "Vergleichswerke BDO";
          dataCol.appendChild(bdoLink);

          dataCol.appendChild(document.createElement("br"));
        }
        if (dataArray[i].wiki != "-") {
          var wikiLink = document.createElement("a");
          wikiLink.setAttribute("href", dataArray[i].wiki);
          wikiLink.setAttribute("target", "_blank");
          wikiLink.innerHTML = "&#x2B95; Wikimedia Commons";
          wikiLink.title = "Vergleichswerke Wikimedia";
          dataCol.appendChild(wikiLink);
        }
        
      
      //alle anderen ohne Infolink
      } else {
        dataCol.innerHTML = dataArray[i];
      };
      

    }
    tableCol2.appendChild(innerTable);

    // modalContentDiv.appendChild(document.createElement("hr"));


    // // Details - Übersetzung
    // var detailsDiv = document.createElement("div");
    // detailsDiv.className = "modalContentLeft";
    // modalContentDiv.appendChild(detailsDiv);

    // var uebersetzungsDetails = document.createElement("details");
    // detailsDiv.appendChild(uebersetzungsDetails);

    // var uebersetzungsSummary = document.createElement("summary");
    // uebersetzungsSummary.innerHTML = "Übersetzung (M. von Albrecht)"
    // uebersetzungsDetails.appendChild(uebersetzungsSummary);

    // var uebersetzungsP = document.createElement("p");
    // uebersetzungsP.innerHTML = data.uebersetzung;
    // uebersetzungsDetails.appendChild(uebersetzungsP);

    // // Details - Originaltext
    // var originaltextDetails = document.createElement("details");
    // detailsDiv.appendChild(originaltextDetails);

    // var originaltextSummary = document.createElement("summary");
    // originaltextSummary.innerHTML = "Originaltext";
    // originaltextDetails.appendChild(originaltextSummary);

    // var originaltextP = document.createElement("p");
    // originaltextP.innerHTML = data.originaltext;
    // originaltextDetails.appendChild(originaltextP);


    modalContentDiv.appendChild(document.createElement("br")); //sonst ist Details schon im Halbdunkel


    var footerDiv = document.createElement("div");
    footerDiv.className = "metamorphosenModalFooter";
    //footerDiv.appendChild(document.createElement("br"));

    //Verlinkung zur jeweiligen Metamorphosen-Geschichte im Fließtext
    var zurGeschichteLink = document.createElement("a");
    zurGeschichteLink.className = "metamorphosenModalBtns";
    zurGeschichteLink.style.position = "absolute";
    zurGeschichteLink.innerHTML = "&#10149; zur Geschichte";
    zurGeschichteLink.setAttribute("href", "#");
    zurGeschichteLink.style.right = "-1%";
    footerDiv.appendChild(zurGeschichteLink);

    zurGeschichteLink.onclick = function () {
      
      //Hilfsvariable, in der die ID des zuzeigende Fliestext-Headers gespeichert wird
      var scrollToFliesstextHeader = aktuellesModal + "Header";

      //aktuelles Modal ausblenden
      document.getElementById(aktuellesModal + "Modal").style.display = "none";
      aktuellesModal = undefined;

      //Fließtextfunction ausführen
      fliesstextFunction();

      //passenden Header ins Sichtfeld scrollen 
      var scrollToFliesstextHeader = document.getElementById(scrollToFliesstextHeader);
      scrollToFliesstextHeader.scrollIntoView();

      // //location hash setzen
      // aktuelleKategorie = "loca"
      // location.hash = "#" + aktuelleKategorie;
    };
    

    footerDiv.appendChild(document.createElement("br"));
    footerDiv.appendChild(document.createElement("br"));
    footerDiv.appendChild(document.createElement("br"));
    footerDiv.appendChild(document.createElement("br"));
    modalContentDiv.appendChild(footerDiv);
    

    var buttonSpan = document.createElement("span");
    buttonSpan.innerHTML = "<img src='Icons/iconmonstr-x-mark-1-240 (2).png' style='width: 15px;'>";
    buttonSpan.onclick = function() { 
      modalDiv.style.display = "none";
      aktuellesModal = undefined;
      //location hash
      location.hash = "#" + aktuelleKategorie;
    };
    buttonSpan.style.position = "fixed";
    buttonSpan.style.left = "76%";
    buttonSpan.style.top = "19%";
    buttonSpan.style.cursor = "pointer";
    modalContentDiv.appendChild(buttonSpan);

    return modalDiv;
  }




  //--------------------------------------------//
  //           3. Modal-Aufrufe                 //
  //--------------------------------------------//
  



  var modalAufruf = function (data) {
    var currentModal = createModal(data);
    var currentBtn = document.getElementById(data.id + "Btn");
    

    
    function modalAufBlock() {
      currentModal.style.display = "block";
      currentModal.style.animationPlayState = "running";
  
      aktuellesModal = data.id;
      aktuelleModalID = currentListSorted.indexOf(data.id);
  
      //location hash
      if (aktuelleKategorie === ""){
        location.hash = "#" + aktuellesModal;
      } else {
        location.hash = "#" + aktuelleKategorie + "#" + aktuellesModal;
      }
    }

    //Onclick auf Icon
    currentBtn.onclick = modalAufBlock;

    //Onclick auf Popover
    var currentPopover = document.getElementById(data.id + "Popover");

    currentPopover.onclick = modalAufBlock;

  }







  //--------------------------------------------//
  //             4. Alles aufrufen              //
  //--------------------------------------------//


  function allesAufrufen() {
    for (var key in leude){
      createIconAndPopover(leude[key]);
      modalAufruf(leude[key]); //createModal wird innerhalb dieser Funktion aufgerufen
    }
  }

  allesAufrufen();
  




  //--------------------------------------------//
  //          5. Slider-Functions               //
  //--------------------------------------------//
 

  //slider-function 
  function slide(number) {
    console.log(aktuellesModal)
    //for (var idNumber = 0; idNumber < figuresListSorted.length; idNumber++){
      var neueID = aktuelleModalID + number;
      //if (currentListSorted[idNumber] == aktuellesModal) {
        if (neueID >= currentListSorted.length) { //falls größer als length, wieder bei 0 anfangen
          neueID -= currentListSorted.length;
        } else if (neueID < 0) { //falls kleiner als 0, wieder bei length anfangen
          neueID += currentListSorted.length;
        }
        return neueID;
      //}
    //}
  }


  //onclick-function 
  var prevArray = document.getElementsByClassName("prevMet");
  var nextArray = document.getElementsByClassName("nextMet");


  for (var s = 0; s < prevArray.length; s++) {
      
    prevArray[s].onclick = function () {
      //console.log("prevBtn geklickt");

      var modalNow = document.getElementById(aktuellesModal + "Modal");
      console.log(aktuellesModal)

      aktuelleModalID = slide(-1);
      aktuellesModal = currentListSorted[aktuelleModalID];

      
      var modalWanted = document.getElementById(aktuellesModal + "Modal");
      
      modalNow.style.display = "none";
      modalWanted.style.display = "block";
      modalWanted.style.animationPlayState = "running";

      //location hash
      setLocationHash();
      
      
    }
  }

  for (var nextBtnNb = 0; nextBtnNb < nextArray.length; nextBtnNb++){
    nextArray[nextBtnNb].onclick = function () {
      
      var modalNow = document.getElementById(aktuellesModal + "Modal");

      aktuelleModalID = slide(+1);
      aktuellesModal = currentListSorted[aktuelleModalID];

      var modalWanted = document.getElementById(aktuellesModal + "Modal");
      //console.log("nextBtn geklickt");
      //console.log(modalNow);
      
      //modalNow.style.animationFillMode = "backwards";
      //modalNow.style.animationPlayState = "running";
      modalNow.style.display = "none";

      modalWanted.style.display = "block";
      modalWanted.style.animationFillMode = "forwards";
      modalWanted.style.animationPlayState = "running";


      //location hash
      setLocationHash();

      
    }
  }



















  
  
  
  
  /*--------------------------------------------//
    
    .----------------. 
    | .--------------. |
    | |    _____     | |
    | |   / ___ `.   | |
    | |  |_/___) |   | |
    | |   .'____.'   | |
    | |  / /____     | |
    | |  |_______|   | |
    | |              | |
    | '--------------' |
    '----------------' 
  
  
    Location Hash

    0. URL separieren
    1. Location Hash ausführen
    2. Location Hash setzen

  //--------------------------------------------*/
 
  var locationHashElements = location.hash.split("#");
  //console.log(locationHashElements);

  for (var e = 0; e < locationHashElements.length; e++){

    //leere Einträge entfernen
    if (locationHashElements[e] === "") {
      locationHashElements.shift();
    }
    //console.log(locationHashElements);

    //kategorie herausfinden und aus Tabelle entfernen
    if (locationHashElements[e] === "erzaehlfolge" || locationHashElements[e] === "taxonomie" || locationHashElements[e] === "geographie" || locationHashElements[e] === "alphabet" || locationHashElements[e] === "grund" || locationHashElements[e] === "verwandelnde" || locationHashElements[e] === "fliesstext") {
      var startKategorieHash = locationHashElements[e];
      locationHashElements.shift();
    }

    //uebrig bleibt ModalID, falls vorhanden
    if (locationHashElements.length > 0) {
      var startModalHash = locationHashElements[e];
    }
  }
  //console.log("startKategorieHash: " + startKategorieHash);
  //console.log("startModalHash: " + startModalHash);
  

  if (typeof startModalHash !== "undefined"){
    aktuellesModal = startModalHash;
    aktuelleModalID = currentListSorted.indexOf(aktuellesModal);
    console.log(aktuelleModalID)

    var getModal = document.getElementById(startModalHash + "Modal");
    getModal.style.display = "block";
    getModal.style.animationPlayState = "running";
  }



  
  //Location Hash ausführen
  function doLocationHash() {

    if (location.hash.startsWith("#erzaehlfolge")) {
      window.setTimeout(erzaehlfolgeFunction, 300);
  
    } else if (location.hash.startsWith("#taxonomie")) {
      window.setTimeout(taxonomieFunction, 300);
  
    } else if (location.hash.startsWith("#geographie")) {  
      window.setTimeout(geographieFunction, 300);
  
    } else if (location.hash.startsWith("#alphabet")) {
      window.setTimeout(alphabetFunction, 300);
  
    } else if (location.hash.startsWith("#grund")) {
      window.setTimeout(grundFunction, 300);
  
    } else if (location.hash.startsWith("#fliesstext")) {
      window.setTimeout(fliesstextFunction, 300);

    } else if (location.hash.startsWith("#verwandelnde")) {
      window.setTimeout(verwandelndeFunction, 300);
  
      // var fliesstextID = locHash.substring(12);
  
      // //document.onreadystatechange = function () {
      //   //if (document.readyState === 'complete') {
      //     var myElement = document.getElementById(fliesstextID);
      //     var topPos = myElement.offsetTop; //getBoundingClientRect();
      //     console.log(topPos);
      //   //}
      // // }
      
  
  
  
      //document.getElementById("textModal").scrollTop = topPos;
  
  
      // console.log(document.getElementById(fliesstextID));
      // document.getElementById(fliesstextID).style.color = "#733030";
      // window.scrollTo(0, 1000);
      // document.getElementById(fliesstextID).scrollIntoView();
      
      // for (key in metamorphosen) {
      //   if (fliesstextID === metamorphosen[key].id){
      //     var currentText = document.getElementById(key);
      //     currentText.style.top = "-1";
          
      //     var currentHeader = document.getElementById(key + "Header");
      //     currentHeader.style.color = "#733030";
          
      //   }
      // }
  
    } else if (location.hash != "") {
      //locHash = "";
      //alert('Die URL mit der Endung "' + location.hash + '" existiert nicht. Du wurdest auf die Startseite weitergeleitet.');
    }

  }
  doLocationHash();
  //window.onhashchange = doLocationHash;


  //wird in jeder Kategorie-Funktion mit Argument, in der Slider-Funktion ohne aufgerufen
  function setLocationHash(aktKat){

    //
    if (typeof aktKat === "undefined") {
      aktKat = aktuelleKategorie;
    }

    //setzt aktuelle Kategorie
    aktuelleKategorie = aktKat;

    //setzt location hash: index.html/[#aktuelleKategorie [, #aktuellesModal]]
    location.hash = "#" + aktuelleKategorie;
    if (typeof aktuellesModal !== "undefined"){
      location.hash +="#" + aktuellesModal;
    }
  }








  








  /*--------------------------------------------//
    
    .----------------. 
    | .--------------. |
    | |    ______    | |
    | |   / ____ `.  | |
    | |   `'  __) |  | |
    | |   _  |__ '.  | |
    | |  | \____) |  | |
    | |   \______.'  | |
    | |              | |
    | '--------------' |
    '----------------' 
  

    Kategorien

    0. allgemeine Funktionen
    1. Erzählfolge
    2. Taxonomie
    3. Geographie
    4. Alphabet
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

  //setzt ein durchsichtiges Div, damit DropDown zu geht 
  function placeDurchsichtigesDiv () {
    let xMouse = event.clientX;
    let yMouse = event.clientY;
    var durchsichtigesDiv = document.getElementById("durchsichtigesDiv");
    durchsichtigesDiv.style.left = xMouse + "px";
    durchsichtigesDiv.style.top = yMouse + "px";
  }

  //setzt den Wrapper auf die angegebene Prozentzahl
  function setWidthPercent(percent){
    for (key in leude){
      var iconWrapper = document.getElementById(key + "Btn");
      iconWrapper.style.width = leude[key].width * percent / 100 + "px";
    }
  }

  
  //setzt alle Einstellungen der nicht aufgerufenen Kategorien zurück
  function setBackOtherKategories(aktKat){
    
    //funktioniert noch nicht, dass Popup nach verwendung ausgeblendet wird
    var kategoryPopUp = document.getElementById("kategoryPopUp");
    //console.log(kategoryPopUp)
    //kategoryPopUp.style.display = "none";
    
    // 1. Kategorie zurücksetzen: Erzählfolge
    if (aktKat != "erzaehlfolge"){
      chronoImg.style.display = "none";
      var ovMetStelle = document.getElementsByClassName("ovMetStelle"); 

      //OvMetStellen-Namen ausblenden
      for (var x = 0; x < ovMetStelle.length; x++) {
        ovMetStelle[x].style.display = "none";
      }
    }

    // 2. Kategorie zurücksetzen: Taxonomie
    if (aktKat != "taxonomie"){
      taxImg.style.display = "none";
      var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 

      //TaxonomieNamen ausblenden
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
        figurIcon.style.visibility = "visible";
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
      for (var figur in leude){ //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
        var figurIcon = document.getElementById(figur + "Wrapper");
        figurIcon.style.opacity = 1;
        figurIcon.style.visibility = "visible";
      }
    }
    
    // 7. Kategorie zurücksetzen: Fließtext
    if (aktKat != "fliesstext"){
      textImg.style.display = "none";
      for (var figur in leude){ //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
        var figurIcon = document.getElementById(figur + "Wrapper");
        figurIcon.style.opacity = 1;
        figurIcon.style.visibility = "visible";
      }
    }
  }



  
    //insert current categoryname in Dropdown-Menu
    function insertCurrentCategory(kategoriename, bildnameInIcons, widthInPx){
      var insertCurrentCategoryHere = document.getElementById("insertCurrentCategoryHere");
      insertCurrentCategoryHere.innerHTML = "<img src='Icons/"+ bildnameInIcons + "' style='width: " + widthInPx + "px;'> "+ kategoriename;
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
    insertCurrentCategory("Erzählfolge", "iconmonstr-arrow-32-240.png", 20);


    chronoBtn.style.backgroundColor = "grey";
    //chronoBtn.style.cursor = "default";
    //chronoBtn.style.color = "#733030";

    var kategoryPopUp = document.getElementById("kategoryPopUp");
    //console.log(kategoryPopUp)
    //kategoryPopUp.style.display = "none";
    //kategoryPopUp.style.display = "inline-block";


    setCoordinates(ersterKlickChrono);
    chronoImg.style.display = "block";

    ersterKlickChrono = false;
    var ovMetStellen = document.getElementsByClassName("ovMetStelle"); 
    for (var x = 0; x < ovMetStellen.length; x++) {
      ovMetStellen[x].style.display = "block";
    }

  }

  chronoBtn.onclick = function() {
    placeDurchsichtigesDiv();
    erzaehlfolgeFunction();
  }























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
    insertCurrentCategory("Klassifikation", "ancient.png", 21)

    
    taxImg.style.display = "block";
    taxImg.style.animationPlayState = "running";
    var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
    for (var x = 0; x < taxonomieNames.length; x++) {
      taxonomieNames[x].style.display = "block";
    }


    
    //startpunkt von Top sind gleichzusetzen mit CSS id attributes, left + 10
    var figurPositionFaunaTop = 20; //document.getElementById("fauna").offsetTop;
    var figurPositionFaunaLeft = 12; //document.getElementById("fauna").offsetLeft + 150; //letzte Zahl damit Titel noch gelesen werden kann

    var figurPositionFloraTop = 51; //document.getElementById("flora").offsetTop;
    var figurPositionFloraLeft = 12; //document.getElementById("flora").offsetLeft + 150;

    var figurPositionElementeTop = 51; //document.getElementById("elemente").offsetTop;
    var figurPositionElementeLeft = 45; //document.getElementById("elemente").offsetLeft + 150;

    var figurPositionAnthropomorphesTop = 83.5; // document.getElementById("sonstiges").offsetTop;
    var figurPositionAnthropomorphesLeft = 12; //document.getElementById("sonstiges").offsetLeft + 150;


    //Abstand zwischen Icons und Länge des Balkens nach Icons
    var abstandHorizontal = 5.5;
    var abstandVertical = 12;
    

    //mitzählen für Prozentangaben
    var countFauna = 0;
    var countFlora = 0;
    var countElemente = 0;
    var countAnthropomorphes = 0;


    for (var id in figuresListSorted){
      
      //ICONS VERSCHIEBEN
      var figurIcon = document.getElementById(figuresListSorted[id] + "Wrapper");
      
      
      //der richtigen Taxonomie zuordnen
      if (leude[figuresListSorted[id]].taxonomie == "fauna"){
        //console.log("figur zählt zu fauna");

        countFauna += 1;
        
        if (countFauna == 1) { //setzen des ersten Icons, ACHTUNG: Zählung beginnt bei 1
          figurIcon.style.top = figurPositionFaunaTop + "%";
          figurIcon.style.left = figurPositionFaunaLeft + "%";

        } else if (countFauna%2 == 0){ //wenn CountFauna gerade, dann plus top 
          figurPositionFaunaTop += abstandVertical;

          figurIcon.style.top = figurPositionFaunaTop + "%";
          figurIcon.style.left = figurPositionFaunaLeft + "%";

        } else { //wenn CountFauna ungerade, dann plus left und minus top 
          figurPositionFaunaTop -= abstandVertical;
          figurPositionFaunaLeft += abstandHorizontal;

          figurIcon.style.top = figurPositionFaunaTop + "%";
          figurIcon.style.left = figurPositionFaunaLeft + "%";
        }


        

      } else if (leude[figuresListSorted[id]].taxonomie == "flora"){
        
        countFlora += 1;
        
        if (countFlora == 1) { //setzen des ersten Icons, ACHTUNG: Zählung beginnt bei 1
          figurIcon.style.top = figurPositionFloraTop + "%";
          figurIcon.style.left = figurPositionFloraLeft + "%";

        } else if (countFlora%2 == 0){ //wenn CountFlora gerade, dann plus top 
          figurPositionFloraTop += abstandVertical;

          figurIcon.style.top = figurPositionFloraTop + "%";
          figurIcon.style.left = figurPositionFloraLeft + "%";

        } else { //wenn CountFlora ungerade, dann plus left und minus top 
          figurPositionFloraTop -= abstandVertical;
          figurPositionFloraLeft += abstandHorizontal;

          figurIcon.style.top = figurPositionFloraTop + "%";
          figurIcon.style.left = figurPositionFloraLeft + "%";
        }

      } else if (leude[figuresListSorted[id]].taxonomie == "elemente"){

        countElemente += 1;
        
        if (countElemente == 1) { //setzen des ersten Icons, ACHTUNG: Zählung beginnt bei 1
          figurIcon.style.top = figurPositionElementeTop + "%";
          figurIcon.style.left = figurPositionElementeLeft + "%";

        } else if (countElemente%2 == 0){ //wenn CountElemente gerade, dann plus top 
          figurPositionElementeTop += abstandVertical;

          figurIcon.style.top = figurPositionElementeTop + "%";
          figurIcon.style.left = figurPositionElementeLeft + "%";

        } else { //wenn CountElemente ungerade, dann plus left und minus top 
          figurPositionElementeTop -= abstandVertical;
          figurPositionElementeLeft += abstandHorizontal;

          figurIcon.style.top = figurPositionElementeTop + "%";
          figurIcon.style.left = figurPositionElementeLeft + "%";
        }


      } else if (leude[figuresListSorted[id]].taxonomie == "anthropomorphes"){
        figurIcon.style.top = figurPositionAnthropomorphesTop + "%";
        figurIcon.style.left = figurPositionAnthropomorphesLeft + "%";

        figurPositionAnthropomorphesLeft += abstandHorizontal;

        countAnthropomorphes += 1;
      }
      
       
       
    }

    //prozentangaben taxonomie
    var all = countFauna + countFlora + countElemente + countAnthropomorphes;
    // var percentNumbers = [(countFauna/all*100), (countFlora/all*100), (countElemente/all*100), (countAnthropomorphes/all*100)];
    // var percentNumbers = [(countFauna/all*100).toString().slice(0,4), (countFlora/all*100).toString().slice(0,4), (countElemente/all*100).toString().slice(0,4), (countAnthropomorphes/all*100).toString().slice(0,4)];
    var percentNumbers = [Math.round(countFauna/all*100*10)/10, Math.round(countFlora/all*100*10)/10, Math.round(countElemente/all*100*10)/10, Math.round(countAnthropomorphes/all*100*10)/10];

    var percentPArray = document.getElementsByClassName("percentTopright");

    var p = 0;
    for (var percentP = 0; percentP < percentPArray.length; percentP++) {
      percentPArray[percentP].innerHTML = percentNumbers[p] + "%";
      p++;
    }

  }

  taxBtn.onclick = function() {
    placeDurchsichtigesDiv();
    taxonomieFunction();
  }



  


















  //--------------------------------------------//
  //               3. Geographie                //
  //--------------------------------------------//

  function geographieFunction() {

    setWidthPercent(100);
    setBackOtherKategories("geographie");
    setLocationHash("geographie");
    insertCurrentCategory("Geographie", "iconmonstr-globe-8-240.png", 18);
  

    geoImg.style.display = "block";
    geoImg.style.animationPlayState = "running";


    for (var figur in leude){

      var figurIcon = document.getElementById(figur + "Wrapper");
      
      
      if (leude[figur].ort.startsWith("?")) {
  
        figurIcon.style.top = (Math.floor(Math.random() * (90 - 10 + 1)) + 10) + "%";
        figurIcon.style.left = (Math.floor(Math.random() * (90 - 10 + 1)) + 10) + "%";
        figurIcon.style.opacity = 0;
        figurIcon.style.visibility = "hidden";
        
      } else {
        figurIcon.style.top = leude[figur].koordinaten.geographie.top + "%";
        figurIcon.style.left = leude[figur].koordinaten.geographie.left + "%";
      }

    }
  }

  geoBtn.onclick = function() {
    placeDurchsichtigesDiv();
    geographieFunction();
  };



  

























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

    setWidthPercent(90);
    setBackOtherKategories("alphabet");
    setLocationHash("alphabet");
    insertCurrentCategory("Alphabet", "iconmonstr-sort-14-240.png", 20);


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
    var startFromLeft = 9;
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
        leftPosition += spaceBetweenIconsHorizontally*1.3;
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

  alphaBtn.onclick = function() {
    placeDurchsichtigesDiv();
    alphabetFunction();
  };



















  //--------------------------------------------//
  //                  5. Grund                  //
  //--------------------------------------------//

  
  //Verwandlungsgrund

  function grundFunction() {
    
    setWidthPercent(80);
    setBackOtherKategories("grund");
    setLocationHash("grund");
    insertCurrentCategory("Verwandlungsgrund", "question.png", 19);
  

    grundImg.style.display = "block";





    // s. CSS positions
    var positionBestrafungTop = 19.5; //document.getElementById("bestrafung").offsetTop;
    var positionBestrafungLeft = 17; //document.getElementById("bestrafung").offsetLeft;

    var positionBitteTop = 29.5;//document.getElementById("begierde").offsetTop;
    var positionBitteLeft = 17; //document.getElementById("begierde").offsetLeft;

    var positionSchutzTop = 39.5; //document.getElementById("schutz").offsetTop;
    var positionSchutzLeft = 17;//document.getElementById("schutz").offsetLeft;

    var positionBegierdeTop = 49.5;//document.getElementById("begierde").offsetTop;
    var positionBegierdeLeft = 17; //document.getElementById("begierde").offsetLeft;

    var positionEhrungTop = 59.5;//document.getElementById("ehrung").offsetTop;
    var positionEhrungLeft = 17;//document.getElementById("ehrung").offsetLeft;

    var positionKampfTop = 69.5;//document.getElementById("begierde").offsetTop;
    var positionKampfLeft = 17; //document.getElementById("begierde").offsetLeft;

    
    var positionSonstigerGrundTop = 79.5; //document.getElementById("sonstigerGrund").offsetTop;
    var positionSonstigerGrundLeft = 17; //document.getElementById("sonstigerGrund").offsetLeft;

    

    //mitzählen für Prozentangaben
    var countSchutz = 0;
    var countBestrafung = 0;
    var countBegierde = 0;
    var countEhrung = 0;
    var countBitte = 0;
    var countKampf = 0;
    var countSonstigerGrund = 0;


    //Abstand
    var abstand = 4;

    

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
        positionSchutzLeft += abstand; //figurIcon.offsetWidth;

        countSchutz += 1;

      } else if (leude[figuresListSorted[id]].grund.includes("Bestrafung")){
        //console.log("figur zählt zu bestrafung");
        
        figurIcon.style.top = positionBestrafungTop + "%";
        figurIcon.style.left = positionBestrafungLeft + "%";

        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        positionBestrafungLeft += abstand; //figurIcon.offsetWidth;

        countBestrafung +=1;

      } else if (leude[figuresListSorted[id]].grund == "Trauer"){

        figurIcon.style.top = positionBegierdeTop + "%";
        figurIcon.style.left = positionBegierdeLeft + "%";

        positionBegierdeLeft += abstand; //figurIcon.offsetWidth;

        countBegierde +=1;


      } else if (leude[figuresListSorted[id]].grund == "postume Ehrung"){
        
        figurIcon.style.top = positionEhrungTop + "%";
        figurIcon.style.left = positionEhrungLeft + "%";

        positionEhrungLeft += abstand; //figurIcon.offsetWidth;

        countEhrung += 1;
      
      } else if (leude[figuresListSorted[id]].grund.includes("Wunsch")){
        
        figurIcon.style.top = positionBitteTop + "%";
        figurIcon.style.left = positionBitteLeft + "%";

        positionBitteLeft += abstand; //figurIcon.offsetWidth;

        countBitte += 1;

      } else if (leude[figuresListSorted[id]].grund.includes("Kampf")){
        
        figurIcon.style.top = positionKampfTop + "%";
        figurIcon.style.left = positionKampfLeft + "%";

        positionKampfLeft += abstand; //figurIcon.offsetWidth;

        countKampf += 1;
      
      } else {
        
        figurIcon.style.top = positionSonstigerGrundTop + "%";
        figurIcon.style.left = positionSonstigerGrundLeft + "%";

        positionSonstigerGrundLeft += abstand; //figurIcon.offsetWidth;

        countSonstigerGrund += 1;
      }
    }

    //prozentangaben Verwandlungsgrund, Achtung: Richtige Reihenfolge beachten:
    //Bestrafung, Wunsch, Schutz, Begierde/Trauer, Ehrung, Kampf, SonstigerGrund
    var allGrund = countBestrafung + countBitte + countSchutz + countBegierde + countEhrung + countKampf + countSonstigerGrund;
    var percentNumbersGrund = [Math.round(countBestrafung/allGrund*100*10)/10, Math.round(countBitte/allGrund*100*10)/10, Math.round(countSchutz/allGrund*100*10)/10, Math.round(countBegierde/allGrund*100*10)/10, Math.round(countEhrung/allGrund*100*10)/10, Math.round(countKampf/allGrund*100*10)/10, Math.round(countSonstigerGrund/allGrund*100*10)/10];

    var percentPGrundArray = document.getElementsByClassName("percentToprightGrund");

    for (var g = 0; g < percentPGrundArray.length; g++) {
      percentPGrundArray[g].innerHTML = percentNumbersGrund[g] + "%";
    }
  }

  grundBtn.onclick = function() {
    placeDurchsichtigesDiv();
    grundFunction();
  };


















  //--------------------------------------------//
  //               6. Verwandelnde              //
  //--------------------------------------------//
  
  //x = sin (winkel) * r + c(left)
  //y = ""


  //Argumente
  var startFromTopVerw = 20;
  var abstaendeIconsVerw = 10;

  function setVerwandelnder(verwandelnderName, styleLeft) {
    var setVerwandelnderName = document.createElement("div");
    setVerwandelnderName.className = "verwandelndeNames";
    setVerwandelnderName.innerHTML = verwandelnderName;
    setVerwandelnderName.style.position = "absolute";
    setVerwandelnderName.style.left = styleLeft -2 + "%";
    setVerwandelnderName.style.top = startFromTopVerw + "%";
    verwandelndeImg.appendChild(setVerwandelnderName);

    var helpvarStartFromTop = startFromTopVerw*1.5;

    for (var id in figuresListSorted){

      var iconWrapper = document.getElementById(figuresListSorted[id] + "Wrapper");
      

  
      if (leude[figuresListSorted[id]].verwandler.startsWith(verwandelnderName)){
        
        iconWrapper.style.top = helpvarStartFromTop + "%";
        iconWrapper.style.left = styleLeft + "%";
  
        helpvarStartFromTop += abstaendeIconsVerw;
  
      }
    }
  }




  
  function verwandelndeFunction() {

    setWidthPercent(100);
    setBackOtherKategories("verwandelnde");
    setLocationHash("verwandelnde");
    insertCurrentCategory("Verwandelnde", "iconmonstr-magic-5-240.png", 18);

    verwandelndeImg.style.display = "block";


    




    //Olympier  
    setVerwandelnder("Jupiter", 10);
    setVerwandelnder("Neptun", 20);
    setVerwandelnder("Venus", 30);
    setVerwandelnder("Diana", 40);
    setVerwandelnder("Minerva", 50);
    setVerwandelnder("Mercur", 60);
    setVerwandelnder("Apollo", 70);
    setVerwandelnder("Ceres", 80);
    setVerwandelnder("Juno", 90);

    //alle anderen
    for (key in leude){

      var iconWrapper = document.getElementById(leude[key].id + "Wrapper");

      if (!(leude[key].verwandler.startsWith("Jupiter")) && !(leude[key].verwandler.startsWith("Neptun")) && !(leude[key].verwandler.startsWith("Venus")) && !(leude[key].verwandler.startsWith("Diana")) && !(leude[key].verwandler.startsWith("Minerva")) && !(leude[key].verwandler.startsWith("Mercur")) && !(leude[key].verwandler.startsWith("Apollo")) && !(leude[key].verwandler.startsWith("Ceres")) && !(leude[key].verwandler.startsWith("Juno"))){
        
        iconWrapper.style.top = (Math.floor(Math.random() * (80 - 30 + 1)) + 30) + "%"; //begrenzt, damit die Icons innerhalb des divs bleiben / verschwinden(max-min+1)+min
        iconWrapper.style.left = (Math.floor(Math.random() * (90 - 10 + 1)) + 10) + "%";
        iconWrapper.style.opacity = 0;
        iconWrapper.style.visibility = "hidden";
  
      }
    }

  

  }

  verwandelndeBtn.onclick = function() {
    placeDurchsichtigesDiv();
    verwandelndeFunction();
  };














  //--------------------------------------------//
  //               7. Fließtext                 //
  //--------------------------------------------//
  



  // 1. Marker im Text setzen > später sollen diese bereits in metamorphosen.json gesetzt sein

  for (var key in metamorphosen){
    // console.log("count"); 
    var regex = new RegExp(Object.keys(verwandlerDict).join("|"), "g");
    metamorphosen[key].text = metamorphosen[key].text.replaceAll(regex, "<dfn class='tooltip $&'>$&</dfn>")
  }










  // //Bilder anlegen
  // for (var i = 0; i < figuresListSorted.length; i++){
    
  //   //var metImgDiv = document.createElement()

  //   var metImg = document.createElement("img");
  //   metImg.src = "Figuren/" + figuresListSorted[i] + "/image.jpg";
  //   metImg.id = figuresListSorted[i] + "BigPicture";
  //   metImg.className = "textImages";
  //   metImg.title = leude[figuresListSorted[i]].alt;
  //   textImg.appendChild(metImg);
    
  //   //positioning
  //   metImg.style.position = "absolute";
  //   metImg.style.top = "14%";
  //   metImg.style.left = "5%";



  //   if (metImg.naturalWidth/metImg.naturalHeight < 63/77) { //wenn das Bildverhältnis
  //     console.log(figuresListSorted[i])
  //     //metImg.style.display = "none";
  //     metImg.style.height = "77%";
  //   } else {
  //     metImg.style.width = "40%"; //& max höhe = 77% (s. #textModal)
  //   }






    

    

    
  // }





  let textModalDiv = document.getElementById("textModal");




  var metamorphosenTable = document.createElement("table");
  textModalDiv.appendChild(metamorphosenTable);


  var keyTabelle = [];
  for (var key in metamorphosen){
    keyTabelle.push(key);
  }
  console.log(keyTabelle)

  for (var k = 0; k < keyTabelle.length; ) {
    var key = keyTabelle[k];


    
    var metamorphosenTableRow = document.createElement("tr");
    metamorphosenTable.appendChild(metamorphosenTableRow);


    //Bilder-Zelle
    var metamorphosenTableCell = document.createElement("td");
    metamorphosenTableCell.style.width = "40%";
    metamorphosenTableRow.appendChild(metamorphosenTableCell);
    
    var svgDiv = document.createElement("div");
    metamorphosenTableCell.appendChild(svgDiv);
    svgDiv.className = "image_container";
    
    var metaImg = document.createElement("img");
    svgDiv.appendChild(metaImg);

    var bildTitel = "";

    if (key in leude){
      metaImg.setAttribute("src", "Figuren/" + key + "/image.jpg");

      var metSvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
      svgDiv.appendChild(metSvg);
  
      var metPolygons = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      //metPolygons.className = "metPolygons";
      metPolygons.setAttribute("points", "2.3333333333333335,505.8333333333333 43.666666666666664,497.1666666666667 48.333333333333336,450.5 59.166666666666664,387.3333333333333 63.833333333333336,356.1666666666667 79.5,336.6666666666667 105.16666666666667,328 157.5,321.8333333333333 196.33333333333334,316.3333333333333 216.66666666666666,316.3333333333333 247,294.5 238.5,272 223.66666666666666,240.83333333333334 202.66666666666666,215.83333333333334 159,166.83333333333334 120.83333333333333,148 107.5,150.33333333333334 104.5,140.33333333333334 79.5,135.66666666666666 73.33333333333333,121.5 63.833333333333336,119.16666666666667 62.333333333333336,99.66666666666667 47.5,106.83333333333333 44.5,114.5 24.166666666666668,118.5 13.166666666666666,131.66666666666666 13.166666666666666,137.16666666666666 0,145 1.5,155.83333333333334 10.833333333333334,162.83333333333334 9.333333333333334,183.83333333333334 12.5,185.5 8.5,217.5 1.5,228.33333333333334 0.8333333333333334,263.3333333333333 19.5,290.6666666666667 19.5,311 18,330.5 0.8333333333333334,331.1666666666667 ");
      metSvg.appendChild(metPolygons);

      var polygonTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
      metPolygons.appendChild(polygonTitle);
      polygonTitle.innerHTML = "Lycaon";



      bildTitel = leude[key].alt;
    } else {
      metaImg.setAttribute("src", "Bilder/Titelbild.jpg");
      bildTitel = "Titelbild";
    }


    //Bildtitel
    var imageTitle = document.createElement("p");
    //imageTitle.className = "imageNames";
    imageTitle.innerHTML = bildTitel;
    metamorphosenTableCell.appendChild(imageTitle);





    //Text-Zelle
    var metamorphosenTableCell2 = document.createElement("td");
    metamorphosenTableCell2.style.width = "50%";
    metamorphosenTableCell2.style.backgroundColor = "rgba(227, 222, 216, 1)";
    metamorphosenTableCell2.className = "textModalContent";
    metamorphosenTableRow.appendChild(metamorphosenTableCell2);

  


    function createTextDiv(key) {
      var metaDiv = document.createElement("div");
      metamorphosenTableCell2.appendChild(metaDiv);

      var header = document.createElement("h1");
      header.className = "textModalHeader";
      header.id = key + "Header";
      header.innerHTML = "<br>" + metamorphosen[key].name + " (" + metamorphosen[key].stelle + ")";
      metaDiv.appendChild(header);
  
      var contentP = document.createElement("p");
      metaDiv.appendChild(contentP);
      
  
      var textTable = document.createElement("table"); //table
      textTable.className = "fliesstextTables";
      contentP.appendChild(textTable);
      var textRow = document.createElement("tr"); //tr
      //textRow.style.position = "relative";
      textTable.appendChild(textRow);
  
  
      //lateinischer MetamorphosenText
      var textColumnLatein = document.createElement("td");
      textColumnLatein.className = "lateinisch";
      textRow.appendChild(textColumnLatein);
      textColumnLatein.style.width = "0%";
      textColumnLatein.style.display = "none";
      //textColumnLatein.style.position = "absolute";
      textColumnLatein.style.padding = "5px";
      textColumnLatein.innerHTML = "<br>" + metamorphosen[key].latein + "<br><br>";
  
      //deutscher MetamorphosenText
      var textColumnDeutsch = document.createElement("td");
      textColumnDeutsch.className = "deutsch";
      textRow.appendChild(textColumnDeutsch);
      textColumnDeutsch.style.display = "inline-block";
      textColumnDeutsch.style.width = "100%";
      //textColumnDeutsch.style.position = "absolute";
      textColumnDeutsch.style.padding = "5px";
      textColumnDeutsch.innerHTML = "<br>" + metamorphosen[key].text + "<br><br>";
    }


    if (!(keyTabelle[k] in leude)){
      while (!(keyTabelle[k] in leude) && k < keyTabelle.length){
        createTextDiv(keyTabelle[k]);
        k++;
      }
    } else {
      createTextDiv(keyTabelle[k]);
      k++;
    }

  }

  //Footer Div
  var footer = document.createElement("div");
  footer.className = "textModalFooter";
  textModalDiv.appendChild(footer);

  //Quellenangabe Div und Link
  var copyrightText = document.createElement("div");
  footer.appendChild(copyrightText);
  copyrightText.style.fontSize = "8px";
  copyrightText.style.position = "relative";
  copyrightText.style.left ="50%";
  copyrightText.style.width = "45%";
  copyrightText.style.backgroundColor = "rgba(227, 222, 216, 1)";
  copyrightText.style.boxShadow = "0px -17px 7px 5px rgba(227, 222, 216, 1)";
  copyrightText.style.padding = "0% 2% 2% 2%"; //s. .textModalContent-Einstellungen
  copyrightText.innerHTML = "&#xa9; Quelle: ";
  var copyrightLink = document.createElement("a");
  copyrightLink.setAttribute("href", "http://www.zeno.org/Lesesaal/N/9781482656428?page=0");
  copyrightLink.innerHTML = "Ovidius Naso, Publius: Metamorphosen. Hrsg. von Michael Holzinger. Übers. von Reinhart Suchier. Berlin 2013."
  copyrightText.appendChild(copyrightLink);

  


  //Checkboxen latein-deutsch
  var lateinBtn = document.getElementById("lateinischerOriginaltext");
  var lateinTexte = document.getElementsByClassName("lateinisch");

  var deutschBtn = document.getElementById("deutscheUebersetzung");
  var deutschTexte = document.getElementsByClassName("deutsch");


  var getTextTables = document.getElementsByClassName("fliesstextTables");
  //console.log(getTextTables[0].clientWidth);

  lateinBtn.onclick = function () {

    //Fall: lateinBtn raus machen, deutschBtn gecheckt
    if (lateinBtn.checked === false){

      deutschBtn.setAttribute('disabled','disabled');

      for (var l = 0; l < lateinTexte.length; l++){
        lateinTexte[l].style.display = "none";
        lateinTexte[l].style.width = "0%";
        deutschTexte[l].style.width = "100%";
      }

    //Fall: lateinBtn rein machen, deutschBtn gecheckt
    } else {
      deutschBtn.removeAttribute('disabled');
      
      for (var l = 0; l < lateinTexte.length; l++){
        lateinTexte[l].style.display = "inline-block";
        deutschTexte[l].style.width = "50%";
        lateinTexte[l].style.width = "50%";
      }
    }
  }

  
  deutschBtn.onclick = function (){

    //Fall: deutschBtn raus nehmen, lateinBtn gecheckt
    if (deutschBtn.checked === false){
      
      //Latein-Btn disablen, damit Fall nicht eintritt, dass gar kein Text
      lateinBtn.setAttribute('disabled','disabled');

      for (var l = 0; l < deutschTexte.length; l++){
        deutschTexte[l].style.display = "none";
        deutschTexte[l].style.width = "0%";
        lateinTexte[l].style.width = "100%";
      }

    //Fall: deutschBtn rein nehmen, lateinBtn gecheckt
    } else {
      
      lateinBtn.removeAttribute('disabled');
      
      for (var l = 0; l < deutschTexte.length; l++){
        deutschTexte[l].style.display = "inline-block";
        deutschTexte[l].style.width = "50%";
        lateinTexte[l].style.width = "50%";
      }
    }
  }


  

  // 2. Popover/Tooltip setzen

  //var markerArray = document.getElementsByClassName

  function setTooltipForVerwandelnde (godName) {
    var tooltipArray = document.getElementsByClassName(godName);

    for (var j = 0; j < tooltipArray.length; j++){
  
      var tooltipSpan = document.createElement("span");
      tooltipSpan.setAttribute("role", "tooltip");
      
      var verwandelteString = "";
      for (var v = 0; v < verwandlerDict[godName].nameDerVerwandelten.length; v++){
        verwandelteString += verwandlerDict[godName].nameDerVerwandelten[v] + "&nbsp; <img src='Icons/iconmonstr-share-11-240.png' style='width: 13.5px;'><br>";
      }

      //Aposthroph statt Genitiv-S, wenn Gottheit mit "s" endet
      if (godName.endsWith("s")){
        tooltipSpan.innerHTML = godName + "'<br>Verwandlungen:<br><br> " + verwandelteString;
      } else {
        tooltipSpan.innerHTML = godName + "s<br>Verwandlungen:<br><br> " + verwandelteString;
      }
      
      tooltipArray[j].appendChild(tooltipSpan);
  
    }
  }

  for (key in verwandlerDict){
    setTooltipForVerwandelnde(key);
  }









  //Funktion, die Fliesstext auf Block setzt (+ Rest auf none)
  function fliesstextFunction() {

    setWidthPercent(100);
    setBackOtherKategories("fliesstext");
    setLocationHash("fliesstext");
    insertCurrentCategory("Fließtext", "iconmonstr-script-2-240.png", 20);
    
    textImg.style.display = "block";


    //Icons aktuell ausgeblendet, damit sie nicht stören
    for (var figur in leude){

      var figurIcon = document.getElementById(figur + "Wrapper");
      //var figurImg = document.getElementById(figur + "Btn");
  
      figurIcon.style.top = (Math.floor(Math.random() * (90 - 10 + 1)) + 10) + "%";
      figurIcon.style.left = (Math.floor(Math.random() * (90 - 10 + 1)) + 10) + "%";
      figurIcon.style.opacity = 0;
      figurIcon.style.visibility = "hidden";
      
      //figurIcon.style.visibility = "hidden"; > mit window.setTimeout(..., 1000);
      //figurImg.style.width = "0px";
    }
  }

  textBtn.onclick = function() {
    placeDurchsichtigesDiv();
    fliesstextFunction();
  };


  //New CSS-Class
  const el = document.querySelector(".textModalHeader")
  const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );

  observer.observe(el);












  //--------------------------------------------//
  //             8. Unorganisiert               //
  //--------------------------------------------//

  
  var unorgBtn = document.getElementById("unorganisiert");

  unorgBtn.onclick = function () {

    setWidthPercent(100);
    setBackOtherKategories();
    setLocationHash("");
    insertCurrentCategory("Keine Auswahl", "iconmonstr-circle-5-240.png", 19);
    

    for (var figur in leude){
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.top = leude[figur].koordinaten.unorganisiert.top + "%";
      figurIcon.style.left = leude[figur].koordinaten.unorganisiert.left + "%";
    }
  }














    /*--------------------------------------------//
    
    .----------------. 
    | .--------------. |
    | |   _    _     | |
    | |  | |  | |    | |
    | |  | |__| |_   | |
    | |  |____   _|  | |
    | |      _| |_   | |
    | |     |_____|  | |
    | |              | |
    | '--------------' |
    '----------------' 
  

    Mark-Kategorien

    0. allgemeine Funktionen
    1. keine Auswahl
    2. Erzaehlfolge
    3. Taxonomie
    4. Verw.-Grund
    5. Verwandelnde
    6. Geschlecht

  //--------------------------------------------*/

  

  //insert current categoryname in Dropdown-Menu
  function insertCurrentMarkCategory(kategorienameII, bildnameInIconsII, widthInPxII){
    var insertCurrentMarkCategoryHere = document.getElementById("insertCurrentMarkCategoryHere");
    insertCurrentMarkCategoryHere.innerHTML = "<img src='Icons/"+ bildnameInIconsII + "' style='width: " + widthInPxII + "px;'> "+ kategorienameII;
  }




  //--------------------------------------------//
  //             1. keine Auswahl               //
  //--------------------------------------------//

  var markKeineAuswahl = document.getElementById("markKeineAuswahl");
  markKeineAuswahl.onclick = function () {
    insertCurrentMarkCategory("Keine Auswahl", "iconmonstr-circle-5-240.png", "19");
    
    for (figur in leude){
      document.getElementById(figur + "Wrapper").style.opacity = "100%";
    }
  }

  


  //--------------------------------------------//
  //              2. Erzaehlfolge               //
  //--------------------------------------------//

  function markPentade(start, end){
    
    var curKategoriename = "";
    if (start === 1) { curKategoriename = "I. Pentade";
    } else if (start === 6) { curKategoriename = "II. Pentade";
    } else { curKategoriename = "III. Pentade"; }
    insertCurrentMarkCategory(curKategoriename, "iconmonstr-arrow-32-240.png", 20);

    // //PopUp ausblenden > funktioniert so nicht 
    // var markKategoryPopUp = document.getElementById("markKategoryPopUp");
    // markKategoryPopUp.style.display = "none";

    for (figur in leude){
      
      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      //Zahl vor dem Komma extrahieren und in Int umwandeln
      var ovMetZahlVorKomma = parseInt(leude[figur].ovMet.substr(0, leude[figur].ovMet.indexOf(",")));

      //wenn Zahl kleiner als start oder größer als end, ausblenden
      if (ovMetZahlVorKomma < start || ovMetZahlVorKomma > end){
        figurIcon.style.opacity = "10%";
      }

    }
  }

  var markPentadeI = document.getElementById("markPentadeI");
  var markPentadeII = document.getElementById("markPentadeII");
  var markPentadeIII = document.getElementById("markPentadeIII");

  markPentadeI.onclick = () => markPentade(1,5);
  markPentadeII.onclick = () => markPentade(6,10);
  markPentadeIII.onclick = () => markPentade(11,15);






  //--------------------------------------------//
  //               3. Taxonomie                 //
  //--------------------------------------------//

  function markTaxonomie(taxArgument){
    insertCurrentMarkCategory(taxArgument.charAt(0).toUpperCase() + taxArgument.slice(1), "ancient.png", 21);

    for (figur in leude){

      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      if (!(leude[figur].taxonomie === taxArgument)){
        figurIcon.style.opacity = "10%";
      }

    }

  }

  var markFauna = document.getElementById("markFauna");
  var markFlora = document.getElementById("markFlora");
  var markElemente = document.getElementById("markElemente");
  var markAnthropomorphes = document.getElementById("markAnthropomorphes");


  markFauna.onclick = () => markTaxonomie("fauna"); 
  markFlora.onclick = () => markTaxonomie("flora");
  markElemente.onclick = () => markTaxonomie("elemente");
  markAnthropomorphes.onclick = () => markTaxonomie("anthropomorphes");








  //--------------------------------------------//
  //              4. Verw.-Grund                //
  //--------------------------------------------//


  function markVerwandlungsgrund(grund){
    insertCurrentMarkCategory(grund, "question.png", 19);
    
    for (figur in leude){

      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      if (!(leude[figur].grund.includes(grund))){
        figurIcon.style.opacity = "10%";
      }

    }

  }

  var markBestrafung = document.getElementById("markBestrafung");
  var markWunsch = document.getElementById("markWunsch");
  var markSchutz = document.getElementById("markSchutz");
  var markTrauer = document.getElementById("markTrauer");
  var markPostumeEhrung = document.getElementById("markPostumeEhrung");
  var markKampfvorteil = document.getElementById("markKampfvorteil");
  var markSonstiges = document.getElementById("markSonstiges");

  markBestrafung.onclick = () => markVerwandlungsgrund("Bestrafung");
  markWunsch.onclick = () => markVerwandlungsgrund("Wunsch");
  markSchutz.onclick = () => markVerwandlungsgrund("Schutz");
  markTrauer.onclick = () => markVerwandlungsgrund("Trauer");
  markPostumeEhrung.onclick = () => markVerwandlungsgrund("Ehrung");
  markKampfvorteil.onclick = () => markVerwandlungsgrund("Kampf");
  //markSonstiges.onclick = markVerwandlungsgrund("?"); ???????????




  //--------------------------------------------//
  //             5. Verwandelnde                //
  //--------------------------------------------//



  
  function markVerwandelnde(gottheit){
    insertCurrentMarkCategory(gottheit, "iconmonstr-magic-5-240.png", 18);

    for (figur in leude){

      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      if (!(leude[figur].verwandler.includes(gottheit))){
        figurIcon.style.opacity = "10%";
      }
    }
  }

  
  var markJupiter = document.getElementById("markJupiter"); 
  var markNeptun = document.getElementById("markNeptun");
  var markVenus = document.getElementById("markVenus"); 
  var markDiana = document.getElementById("markDiana"); 
  var markMinerva = document.getElementById("markMinerva"); 
  var markMercur = document.getElementById("markMercur"); 
  var markApollo = document.getElementById("markApollo"); 
  var markCeres = document.getElementById("markCeres"); 
  var markJuno = document.getElementById("markJuno"); 

  
  markJupiter.onclick = () => markVerwandelnde("Jupiter");
  markNeptun.onclick = () => markVerwandelnde("Neptun");
  markVenus.onclick = () => markVerwandelnde("Venus");
  markDiana.onclick = () => markVerwandelnde("Diana");
  markMinerva.onclick = () => markVerwandelnde("Minerva");
  markMercur.onclick = () => markVerwandelnde("Mercur");
  markApollo.onclick = () => markVerwandelnde("Apollo");
  markCeres.onclick = () => markVerwandelnde("Ceres");
  markJuno.onclick = () => markVerwandelnde("Juno");










  //--------------------------------------------//
  //               6. Geschlecht                //
  //--------------------------------------------//
  
 
  function markGeschlecht(wmd){
    for (figur in leude){

      insertCurrentMarkCategory(wmd, "iconmonstr-gender-4-240.png", 17);

      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      if (leude[figur].geschlecht === wmd){
        //var zuFaebendesIcon = document.getElementById(figur + "Btn");
        //zuFaebendesIcon.style.animationPlayState = "running";
      } else {
        figurIcon.style.opacity = "10%";
      }
    }
  }

  
  var markGeschlechtW = document.getElementById("markGeschlechtW"); 
  var markGeschlechtM = document.getElementById("markGeschlechtM");
  var markGeschlechtD = document.getElementById("markGeschlechtD"); 

  
  markGeschlechtW.onclick = () => markGeschlecht("Weiblich");
  markGeschlechtM.onclick = () => markGeschlecht("Männlich");
  markGeschlechtD.onclick = () => markGeschlecht("Divers");

























  /*
  //--------------------------------------------//
  //                   Quiz                     //
  //--------------------------------------------//


  //QuizModal
  var quizModal = document.getElementById("quizModal");
  //var quizBtn = document.getElementById("quizBtn"); // bereits oben deklariert!

  quizBtn.onclick = function(){
    quizModal.style.display = "block";
  }

  var zumQuizBtn = document.getElementById("zumQuizBtn");
  var quizStartContent = document.getElementById("quizStartContent");

  zumQuizBtn.onclick = function(){
    quizStartContent.style.display = "none";
  }

  
  var punktestand = 0;
  var bisherigeLeistungen = new Array(10);

  function createQuiz(number) {
  
    var bigQuizDiv = document.createElement("div"); //allumfassendes Div
    bigQuizDiv.className = "modalContent";
    bigQuizDiv.id = "Frage" + number;
    quizModal.appendChild(bigQuizDiv);

    var anzahlDiv = document.createElement("div"); //Frage 1/10
    anzahlDiv.style.textAlign = "right";
    anzahlDiv.innerHTML = "Frage " + number + "/10";
    bigQuizDiv.appendChild(anzahlDiv);

    var antwortDiv = document.createElement("div"); //Multiple Choice
    bigQuizDiv.appendChild(antwortDiv);

    var 
    className = "multipleChoise";
    




    //var fragenuebersichtDiv = document.createElement("div"); //Übersicht Leistung


    var 

    
    
    
    if ( == ) {
      innerHTML = "Richtig!";
      punktestand += 1;
      return true;
    } else {
      innerHTML = "Falsch!";
      return false;
    }
      
  }



  for (var c = 1; c < 11; c++){
    createQuiz(c);
    bisherigeLeistungen.push()
  }

  //ErgebnisDiv
  if (punktestand == ) {
    
  }

  //by close, reset arrays!

  */






  //--------------------------------------------//
  //      close modals (windows.onclick)        //
  //--------------------------------------------//


  // When the user clicks anywhere outside of the Modals, close it
  window.onclick = function (event) {
    if (event.target == startModal) {
      startModal.style.display = "none";
    }
    if (event.target == infoModal) {
      infoModal.style.display = "none";
    }
    if (event.target == quellenModal){
      quellenModal.style.display = "none";
    }
    if (event.target == ovidModal){
      ovidModal.style.display = "none";
    }
    if (event.target == erzaehlfolgeModal){
      erzaehlfolgeModal.style.display = "none";
    }
    if (event.target == klassifikationModal){
      klassifikationModal.style.display = "none";
    }

    //close all metamorphosenModals
    var modalNames = [];
    for (key in leude) {
      var modalName = key + "Modal";
      modalNames.push(modalName);
    }
    for (var i = 0; i < modalNames.length; i++){
      if (event.target.id == modalNames[i]) {
        event.target.style.display = "none";
        aktuellesModal = undefined;
        //locationhash
        location.hash = "#" + aktuelleKategorie;
      }
    }
    
  }








  

/*
  //--------------------------------------------//
  //           Personen/Checkboxen              //
  //--------------------------------------------//

  function blendGodInOrOut(button, classArray) {
    button.onclick = function () {

      if (classArray[0].style.display === "none") {
        for (var i = 0; i < classArray.length; i++) {
          classArray[i].style.display = "block";
        }
      } else {
        for (var i = 0; i < classArray.length; i++) {
          classArray[i].style.display = "none";
        }
      }
      console.log("Die Götterfunktion funktioniert");
    }
  }

  //Zeus
  var zeusButton = document.getElementById("zeusButton");
  var allZeus = document.getElementsByClassName("zeus");
  var checkboxZeus = document.getElementById("checkboxZeus");

  checkboxZeus.checked = !checkboxZeus.checked;
  blendGodInOrOut(zeusButton, allZeus);
  /*if zeusButton.onclick = function() => {checkboxZeus.checked = false;}; 
  --> mit in obrige Datei */

  /*
  //Hera
  var heraButton = document.getElementById("heraButton");
  var allHera = document.getElementsByClassName("hera");

  blendGodInOrOut(heraButton, allHera);
  */


  //Artemis 




  /*

  //--------------------------------------------//
  //                  Lightbox                  //
  //--------------------------------------------//

  var openLightbox = document.getElementsByClassName("openLightbox");

  openLightbox.onclick = function () {
    document.getElementById("lightboxModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("lightboxModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
  */


} //End of application-function 