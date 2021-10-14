async function loadJSON(path) {
  return fetch(path)
    .then((response) => {
      return response.json()
    })
}

export async function application() {

  const leude = await loadJSON('leude.json'); // für Modals & Popover
  const metamorphosen = await loadJSON('metamorphosen.json'); // für MetamorphosenText
  const annotations = await loadJSON("annotations.json");

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

  // // InfoModal
  // var infoModal = document.getElementById("infoModal");   // Get infoModal
  // var infoBtn = document.getElementById("infoBtn");   // Get button that opens the infoModal

  // //infoBtn.title = "Information zur aktuell ausgewählten Kategorie (s. links unten)";
  // infoBtn.onclick = function () { // Open
  //   location.href = "/#projekt";
  // }


  //Sidebar 
  var sidebar = document.getElementById("sidebar");
  var rotierendeUberschrift = document.getElementById("rotierendeUberschrift");



  
  var sidebarOpen = false;


  sidebar.onmouseover = function () {
    if (sidebarOpen == false){
      sidebar.style.opacity = "0.98";
      // sidebar.style.left = "97%";
      // setTimeout(function(){ sidebar.style.left = "97.5%"; }, 300);
    }
  }
  sidebar.onmouseout = function () {
    if (sidebarOpen == false){
      sidebar.style.opacity = "0.85";
    }
  }

  function closeOrOpenSidebar(event) { 
    console.log(event.target.id)
    if (event.target.id != "infoAktKat"){
      if (sidebarOpen){
        sidebar.style.left = "97.5%";
        rotierendeUberschrift.style.transform = "rotate(-90deg)";
        rotierendeUberschrift.style.left = "4.3%";
        sidebar.style.opacity = "0.85";
        sidebarOpen = false;
      } else {
        sidebar.style.left = "70%";
        rotierendeUberschrift.style.transform = "rotate(0deg)";
        rotierendeUberschrift.style.left = "61.2px";
        sidebar.style.opacity = "0.98";
        sidebarOpen = true;
      }
    }

  }
  sidebar.onclick = closeOrOpenSidebar;


  // var infoAktKat = document.getElementById("infoAktKat");
  // infoAktKat.onclick = function (){
  //   console.log(aktuelleKategorie)
  //   setTimeout(() => {
  //     closeOrOpenSidebar(sidebarOpen)
  //   }, 0.0001); 
  //   document.getElementById("zurueck").style.opacity = "1"; 
  //   rotierendeUberschrift.style.display = "none";
  //   var sidebarChildren = sidebarContent.childNodes;
  //   console.log(sidebarChildren)
  //   // for (var i; i < sidebarContent.childNodes.length; i++){
  //   //   sidebarContent.childNodes[i].style.display = "none";
  //   // }

  //   document.getElementById(aktuelleKategorie + "Modal").style.display = "block";
  // }

  


  // var openSidebar = document.getElementById("openSidebar");
  // openSidebar.onclick = function(){
  //   sidebarContent.style.left = "70%";
  //   openSidebar.style.display ="none";
  // }
  // var closeSidebar = document.getElementById("closeSidebar");
  // closeSidebar.onclick = closeSidebarNow;



  // // Quellen Modal
  // var quellenModal = document.getElementById("quellenModal");   // Get infoModall
  // var quellenBtn = document.getElementById("bookBtn");   // Get button that opens the infoModal

  // quellenBtn.onclick = function () { // Open
  //   quellenModal.style.display = "block";
  //   quellenModal.style.animationPlayState = "running";
  // }



  // // Ovid Modal
  // var ovidModal = document.getElementById("ovidModal");   // Get infoModall
  // var ovidBtn = document.getElementById("ovidBtn");   // Get button that opens the infoModal

  // ovidBtn.onclick = function () { // Open
  //   ovidModal.style.display = "block";
  //   ovidModal.style.animationPlayState = "running";
  // // }


  // //close all
  // var closeInfoBtn = document.getElementsByClassName("closeInfoBtn"); // Get the <span> element that closes the infoModal

  // for (var c = 0; c < closeInfoBtn.length; c++) {
  //   closeInfoBtn[c].onclick = function () { // Close
  //     infoModal.style.display = "none";
  //     quellenModal.style.display = "none";
  //     ovidModal.style.display = "none";
  //   }
  // }



  // var kategorienTabelle = ["erzaehlfolge", "klassifikation", "geographie", "alphabet", "verwandlungsgrund", "verwandelnde", "fliesstext"];


  // var closeKategorieModals = document.getElementsByClassName("closeKategorieModals");
  // //console.log(closeKategorieModals)

  // function createKategorieModal(kategorie) {
  //   var kategorieModal = document.getElementById(kategorie + "Modal");
  //   var kategorieBtn = document.getElementById(kategorie + "InfoBtn");
  //   var closeKategorie = document.getElementById(kategorie + "ModalX")

  //   kategorieBtn.onclick = function () {
  //     kategorieModal.style.display = "block";
  //     kategorieModal.style.animationPlayState = "running";
  //   }
  //   closeKategorie.onclick = function () {
  //     kategorieModal.style.display = "none";
  //   }

  // }

  // for (var k = 0; k < kategorienTabelle.length; k++) {
  //   createKategorieModal(kategorienTabelle[k]);
  // }





  //--------------------------------------------//
  //           2. Interface-Icons               //
  //--------------------------------------------//

  // //Hover Info-Button
  // var infoHoverName = document.createElement("div");
  // infoHoverName.className = "infoHoverName";
  // infoHoverName.innerHTML = "Info";
  // infoHoverName.style.left = "30%";
  // infoBtn.appendChild(infoHoverName);

  // infoBtn.onmouseover = function () {
  //   infoHoverName.style.display = "block";
  // }

  // infoBtn.onmouseout = function () {
  //   infoHoverName.style.display = "none";
  // }


  // //Hover Book-Button
  // var bookBtn = document.getElementById("bookBtn");

  // var bookHoverName = document.createElement("div");
  // bookHoverName.className = "infoHoverName";
  // bookHoverName.innerHTML = "Quellen";
  // bookHoverName.style.left = "10%";
  // bookBtn.appendChild(bookHoverName);

  // bookBtn.onmouseover = function () {
  //   bookHoverName.style.display = "block";
  // }

  // bookBtn.onmouseout = function () {
  //   bookHoverName.style.display = "none";
  // }

  // //Hover Ovid-Button
  // var ovidBtn = document.getElementById("ovidBtn");

  // var ovidHoverName = document.createElement("div");
  // ovidHoverName.className = "infoHoverName";
  // ovidHoverName.innerHTML = "Ovid";
  // ovidHoverName.style.left = "25%";
  // ovidBtn.appendChild(ovidHoverName);

  // ovidBtn.onmouseover = function () {
  //   ovidHoverName.style.display = "block";
  // }

  // ovidBtn.onmouseout = function () {
  //   ovidHoverName.style.display = "none";
  // }



  //--------------------------------------------//
  //          3. Navigations-Bar                //
  //--------------------------------------------//


  var navigation2punkt0 = document.getElementById("navigation2punkt0");
  var dropDownNavigation = document.getElementById("dropDownNavigation");
  var arrowDown = true;

  function navigationDropdown(arrowDownArgument) {

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


  dropDownNavigation.onclick = function () {
    navigationDropdown(arrowDown);
  }


  //--------------------------------------------//
  //          4. Buttons-Bar                    //
  //--------------------------------------------//

  // var buttons2punkt0 = document.getElementById("buttons2punkt0");
  // var dropDownButtons = document.getElementById("dropDownButtons");
  // var arrowDownButtons = true;

  // function buttonsDropdown(arrowDownButtonsArgument) {

  //   if (arrowDownButtonsArgument) {
  //     dropDownButtons.style.transform = "rotate(180deg)";
  //     //setAttribute("src", "Icons/upload.png");
  //     buttons2punkt0.style.display = "block";
  //     arrowDownButtons = false;
  //   } else {
  //     dropDownButtons.style.transform = "rotate(0deg)";
  //     //dropDownButtons.setAttribute("src", "Icons/down-arrow.png");  
  //     buttons2punkt0.style.display = "none";
  //     arrowDownButtons = true;
  //   }

  // }


  // dropDownButtons.onclick = function () {
  //   buttonsDropdown(arrowDownButtons);
  // }









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


  //array with IDs sorted by ovMet position
  for (var key in leude) {
    var currentId = key;

    var ovMetReplacedSemicolon = leude[key].ovMet.replace(",", ".");
    var indexOfHyphen = ovMetReplacedSemicolon.indexOf("-");
    var ovMetFloat = parseFloat(ovMetReplacedSemicolon.substring(0, indexOfHyphen));


    if (figuresListSorted.length < 1) {  //initial
      figuresListSorted.push(currentId);
      ovMetListSorted.push(ovMetFloat);
      //console.log("initial: \n id: " + figuresListSorted + " \n ovMet: " + ovMetListSorted);

    } else if (ovMetFloat < ovMetListSorted[0]) { //smaller number
      figuresListSorted.unshift(currentId);
      ovMetListSorted.unshift(ovMetFloat);
      //console.log("number was smaller, so inserted at the beginning: \n id: " + figuresListSorted + " \n ovMet: " + ovMetListSorted);

    } else if (ovMetFloat > ovMetListSorted[ovMetListSorted.length - 1]) { //bigger number
      figuresListSorted.push(currentId);
      ovMetListSorted.push(ovMetFloat);
      //console.log("number was bigger, so inserted at the end: \n id: " + figuresListSorted + " \n ovMet: " + ovMetListSorted);

    } else {
      for (var x = 0; x < ovMetListSorted.length; x++) {
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

  for (var h = 0; h < figuresListSorted.length; h++) {
    //console.log(ovMetListSorted[h]);
    if (ovMetListSorted[h] < 6) {
      erstePentade.push(figuresListSorted[h]);
    } else if (ovMetListSorted[h] > 6 && ovMetListSorted[h] < 11) {
      zweitePentade.push(figuresListSorted[h]);
    } else {
      drittePentade.push(figuresListSorted[h]);
    };
  }


  // helplst.push(figuresListSorted[id].charAt(0).toUpperCase() + figuresListSorted[id].slice(1))
  // helplst.sort();
  // console.log(helplst);


  var currentListSorted = figuresListSorted; //default 














  //--------------------------------------------//
  //     2. Verwandler-/Verwandeltelisten       //
  //--------------------------------------------//

  //Beispiel:
  var verw = {
    "jupiter": {
      "namenDerVerwandelten": ["Berta", "Hannah"]
    },
    "diana": {
      "namenDerVerwandelten": ["Berta", "Hannah"]
    }
  };
  //console.log(verwandler.jupiter.namenDerVerwandelten);

  var verwandlerDict = {};
  var verwandelteDict = {};

  for (key in leude) {
    var currentVerwandler = leude[key].verwandler;
    if (currentVerwandler === "-") { continue };
    //console.log(currentVerwandler)

    //Bereinigung
    var indexOfLeftParenth = currentVerwandler.indexOf("(");
    if (indexOfLeftParenth != -1) {
      //console.log(currentVerwandler);
      var indexOfRightParenth = currentVerwandler.indexOf(")");
      currentVerwandler = 
        currentVerwandler.substring(0, indexOfLeftParenth - 1)
        .concat(currentVerwandler.substr(indexOfRightParenth + 1))
        .trim();
        
      //console.log(currentVerwandler);
    }


    //falls es mehrere Verwandler gibt, wird am Komma getrennt in Tabelle gegeben
    var verwandlerList = currentVerwandler.split(",");
    verwandlerList.forEach(verwandler => {
      verwandler = verwandler.trim();
      if (!(verwandler in verwandlerDict)) {
        verwandlerDict[verwandler] = {
          "idDerVerwandelten": [leude[key].id],
          "nameDerVerwandelten": [leude[key].name]
        };
      } else {
        verwandlerDict[verwandler].idDerVerwandelten.push(leude[key].id);
        verwandlerDict[verwandler].nameDerVerwandelten.push(leude[key].name);
      }
    });


    //Verwandelte in Tabelle fügen
    verwandelteDict[leude[key].id] = leude[key].name;

  }
  //console.log(verwandlerDict);
  //console.log(verwandelteDict);











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
    2.5. Motivübersicht-Modals
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
  function rand(min, max) {
    var zufallszahl = 0;

    do { //zufallszahl soll zwischen dem Bereich -100 und 0 oder 100 und 200 liegen
      zufallszahl = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    while (zufallszahl > -10 && zufallszahl < 110);

    return zufallszahl;
  }
  //console.log("zufallszahl: " + rand(-100,200));

  var fromLeftI = 14; //in %
  var fromTopI = 15; //in %

  function createIconAndPopover(data) { //startposition anywhere (animation)

    //Icon
    var iconDiv = document.createElement("div");
    iconDiv.id = data.id + "Wrapper";
    iconDiv.className = "popover__wrapper";
    iconDiv.style.top = rand(-10, 110) + "%";
    iconDiv.style.left = rand(-10, 110) + "%";
    iconDiv.style.opacity = "0";

    function setCoordinatesIcons() {
      if (location.hash === "") {
        iconDiv.style.top = fromTopI + "%"; //rand(-100,200) + "%";
        iconDiv.style.left = fromLeftI + "%"; //rand(-100,200) + "%"
  
        //Werte für folgende Icons anpassen
        fromLeftI += 8;
        if (fromLeftI >= 90){
          fromTopI += 14;
          fromLeftI = 14;
        }

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
    popoverImg.src = "Figuren/" + data.id + "/" + data.id + ".jpg";
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
    imgKlein.src = "Figuren/" + data.id + "/" + data.id + ".jpg";
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
    var imgLink = document.createElement("a"); //ANPASSEN
    //var imgSource = data.source;
    //<a href="bild.jpg" target="_blank"><img height="200px" width="200px" src="bild.jpg"/></a>
    imgLink.setAttribute("href", "Figuren/" + data.id + "/" + data.id + ".jpg");
    imgLink.setAttribute("target", "_blank");
    //console.log(imgLink);
    tableCol.appendChild(imgLink);
    var img = document.createElement("img");
    imgLink.appendChild(img);
    img.alt = data.alt;
    img.title = data.alt;
    img.src = "Figuren/" + data.id + "/" + data.id + ".jpg";
    if (img.naturalWidth > img.naturalHeight) {
      img.width = "300";
      //tableCol.style.width = "400";
    } else {
      img.height = "300";
      //tableCol.style.width = "400";
    }


    var copyrightP = document.createElement("p");
    copyrightP.className = "copyrightP";
    tableCol.appendChild(copyrightP);
    copyrightP.style.fontSize = "10px";
    copyrightP.innerHTML = data.alt + "<br>";

    //cc-Icon
    var ccImage = document.createElement("img");
    copyrightP.appendChild(ccImage);

    //sourcename with link to source
    var copyrightPLink = document.createElement("a");
    copyrightP.appendChild(copyrightPLink);
    ccImage.setAttribute("src", "/Icons/cc.png");
    ccImage.setAttribute("width", "16px");
    copyrightPLink.setAttribute("href", data.source);
    copyrightPLink.setAttribute("target", "_blank");
    copyrightPLink.innerHTML = " " + data.sourcename;
    copyrightPLink.title = "Bildquelle";
    copyrightPLink.style.fontSize = "10px";
    copyrightPLink.style.color = "#733030";
    
    
    


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
    buttonSpan.className = "closeModal"
    buttonSpan.onclick = function () {
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
  //      3. Motivübersicht-Modal               //
  //--------------------------------------------//


  function createMotivuebersichtModal(data) {
    var modalDiv = document.createElement("div");
    modalDiv.style.display = "none";
    modalDiv.style.animationPlayState = "running"
    modalDiv.id = data.id + "MotivuebersichtModal";
    modalDiv.className = "metamorphosenModal";
    document.body.appendChild(modalDiv);

    var modalContentDiv = document.createElement("div");
    modalContentDiv.className = "metamorphosenModalContent";
    modalDiv.appendChild(modalContentDiv);

    //header
    var divHeader = document.createElement("div"); //div anlegen
    modalContentDiv.appendChild(divHeader);
    divHeader.className = "metamorphosenModalHeader";
    divHeader.appendChild(document.createElement("br"));
    divHeader.appendChild(document.createElement("br"));
    divHeader.appendChild(document.createElement("br"));
    var ueberschrift = document.createElement("h1"); //h1 in div anlegen
    ueberschrift.setAttribute("style", "display:inline");
    ueberschrift.innerHTML = "Motivübersicht " + data.name;
    divHeader.appendChild(ueberschrift);

    modalContentDiv.appendChild(document.createElement("br"));
    modalContentDiv.appendChild(document.createElement("br"));

    //Bildersammlung
    var imgDiv = document.createElement("div");
    modalContentDiv.appendChild(imgDiv);

    var fromLeft = 10;
    var fromTop = 20;

    for (key in data.imgInfo){

      var imagecontainer = document.createElement("div");
      imagecontainer.className = "imagecontainerMotivuebersicht";
      imagecontainer.style.left = fromLeft + "%";
      imagecontainer.style.top = fromTop + "%";
      imagecontainer.style.width = "30%";
      imagecontainer.style.height = "30%";
      imgDiv.appendChild(imagecontainer);

      var bild = document.createElement("img");
      imagecontainer.appendChild(bild);
      //bild.style.width = "20%";
      bild.style.height = "100%";
      
      bild.setAttribute("src", "Figuren/" + data.id + "/" + key + ".jpg");

      var bildtitel = document.createElement("div");
      bildtitel.innerHTML = data.imgInfo[key].alt;
      bildtitel.style.fontFamily = "'Crimson Text', serif";
      bildtitel.style.fontSize = "10px";
      bildtitel.style.position = "relative";
      bildtitel.style.width = "100%";
      imagecontainer.appendChild(bildtitel);

      
      if (fromLeft > 40){
        
        fromTop += 40;
        fromLeft = 10;
        
      } else {
        fromLeft += 30;
      }   
      

    }
    


    var buttonSpan = document.createElement("span");
    buttonSpan.innerHTML = "<img src='Icons/iconmonstr-x-mark-1-240 (2).png' style='width: 15px;'>";
    buttonSpan.className = "closeModal"
    buttonSpan.onclick = function () {
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
  }

  createMotivuebersichtModal(leude.lycaon);

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
      if (aktuelleKategorie === "") {
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
    for (var key in leude) {
      createIconAndPopover(leude[key]);
      modalAufruf(leude[key]); //createModal wird innerhalb dieser Funktion aufgerufen
    }
  }

  allesAufrufen();





  //--------------------------------------------//
  //          5. Slider-Functions               //
  //--------------------------------------------//


  //slider-function für Metamorphosen-Modals
  function slide(number) {

    var neueID = aktuelleModalID + number;

    if (neueID >= currentListSorted.length) { //falls größer als length, wieder bei 0 anfangen
      neueID -= currentListSorted.length;
    } else if (neueID < 0) { //falls kleiner als 0, wieder bei length anfangen
      neueID += currentListSorted.length;
    }
    return neueID;
  }



  function showPrevOrNextModal(vorOderZurueck){ //argumente -1 oder +1, zeigt wie viel vorwärts oder zurück es gehen soll
    
    var modalNow = document.getElementById(aktuellesModal + "Modal");
  
    aktuelleModalID = slide(vorOderZurueck);
    aktuellesModal = currentListSorted[aktuelleModalID];
  
    var modalWanted = document.getElementById(aktuellesModal + "Modal");
  
    modalNow.style.display = "none";
    modalWanted.style.display = "block";
    modalWanted.style.animationPlayState = "running";

    setLocationHash();
  }




  var prevArray = document.getElementsByClassName("prevMet");
  var nextArray = document.getElementsByClassName("nextMet");

  for (var s = 0; s < prevArray.length; s++) {

    prevArray[s].onclick = function () {
      showPrevOrNextModal(-1);
    }
  }

  for (var nextBtnNb = 0; nextBtnNb < nextArray.length; nextBtnNb++) {
    nextArray[nextBtnNb].onclick = function () {
      showPrevOrNextModal(+1);
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

  for (var e = 0; e < locationHashElements.length; e++) {

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


  if (typeof startModalHash !== "undefined") {
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
  function setLocationHash(aktKat) {

    //
    if (typeof aktKat === "undefined") {
      aktKat = aktuelleKategorie;
    }

    //setzt aktuelle Kategorie
    aktuelleKategorie = aktKat;

    //setzt location hash: index.html/[#aktuelleKategorie [, #aktuellesModal]]
    location.hash = "#" + aktuelleKategorie;
    if (typeof aktuellesModal !== "undefined") {
      location.hash += "#" + aktuellesModal;
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
  function placeDurchsichtigesDiv() {
    let xMouse = event.clientX;
    let yMouse = event.clientY;
    var durchsichtigesDiv = document.getElementById("durchsichtigesDiv");
    durchsichtigesDiv.style.zIndex = "10000";
    durchsichtigesDiv.style.left = xMouse + "px";
    durchsichtigesDiv.style.top = yMouse + "px";
  }

  //setzt den Wrapper auf die angegebene Prozentzahl
  function setWidthPercent(percent) {
    for (key in leude) {
      var iconWrapper = document.getElementById(key + "Btn");
      iconWrapper.style.width = leude[key].width * percent / 100 + "px";
    }
  }

  // //keine Auswahl, wenn Kategorie zum zweiten Mal angetippt wird
  // function keineAuswahl(aktuelleKategorieAngabe){
  //   if (aktKat === aktuelleKategorieAngabe){

  //   }
  // }



  //setzt alle Einstellungen der nicht aufgerufenen Kategorien zurück
  function setBackOtherKategories(aktKat) {

    //funktioniert noch nicht, dass Popup nach verwendung ausgeblendet wird
    var kategoryPopUp = document.getElementById("kategoryPopUp");

    //mark-Kategorien zurücksetzen
    insertCurrentMarkCategory("Keine Auswahl", "iconmonstr-circle-5-240.png", "19");

    // 0. Kategorie zurücksetzen: Unorganisiert
    if (aktKat != "") {

      //Protagonisten-Namen ausblenden
      for (var x = 0; x < namesOfFigure.length; x++) {
        namesOfFigure[x].style.display = "none";
      }
    }

    // 1. Kategorie zurücksetzen: Erzählfolge
    if (aktKat != "erzaehlfolge") {
      chronoImg.style.display = "none";
      var ovMetStelle = document.getElementsByClassName("ovMetStelle");

      //OvMetStellen-Namen ausblenden
      for (var x = 0; x < ovMetStelle.length; x++) {
        ovMetStelle[x].style.display = "none";
      }
    }

    // 2. Kategorie zurücksetzen: Taxonomie
    if (aktKat != "taxonomie") {
      taxImg.style.display = "none";
      var taxonomieNames = document.getElementsByClassName("taxonomieNames");

      //TaxonomieNamen ausblenden
      for (var x = 0; x < taxonomieNames.length; x++) {
        taxonomieNames[x].style.display = "none";
      }
    }

    // 3. Kategorie zurücksetzen: Geographie
    if (aktKat != "geographie") {
      geoImg.style.display = "none";
      for (var figur in leude) { //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
        var figurIcon = document.getElementById(figur + "Wrapper");
        figurIcon.style.opacity = 1;
        figurIcon.style.visibility = "visible";
      }
    }

    // 4. Kategorie zurücksetzen: Alphabet
    if (aktKat != "alphabet") {
      alphaImg.style.display = "none";
      var alphabetNames = document.getElementsByClassName("alphabetNames");
      
      //Dropdown bei Steuerungselement wieder einschalten
      document.getElementById("dropDownNavigation").style.display = "inline-block";

      for (var x = 0; x < alphabetNames.length; x++) {
        alphabetNames[x].style.display = "none";
      }
    }

    // 5. Kategorie zurücksetzen: Grund 
    if (aktKat != "grund") {
      grundImg.style.display = "none";
    }

    // 6. Kategorie zurücksetzen: Verwandelnde
    if (aktKat != "verwandelnde") {
      verwandelndeImg.style.display = "none";
      for (var figur in leude) { //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
        var figurIcon = document.getElementById(figur + "Wrapper");
        figurIcon.style.opacity = 1;
        figurIcon.style.visibility = "visible";
      }
    }

    // 7. Kategorie zurücksetzen: Fließtext
    if (aktKat != "fliesstext") {
      textImg.style.display = "none";
      
      //Dropdown bei Steuerungselement wieder einschalten
      document.getElementById("dropDownNavigation").style.display = "inline-block";  

      for (var figur in leude) { //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
        var figurIcon = document.getElementById(figur + "Wrapper");
        
        //Notfall-Lösung, damit beim Fliestext-Öffnen (über URL) keine Icons angezeigt werden s. auch setBackOtherKategories
        //figurIcon.style.display = "block"; 
        
        figurIcon.style.opacity = 1;
        figurIcon.style.visibility = "visible";
      }
    }
  }




  //insert current categoryname in Dropdown-Menu
  function insertCurrentCategory(kategoriename, bildnameInIcons, widthInPx) {
    var insertCurrentCategoryHere = document.getElementById("insertCurrentCategoryHere");
    insertCurrentCategoryHere.innerHTML = "<img src='Icons/" + bildnameInIcons + "' style='width: " + widthInPx + "px;'> " + kategoriename;
  }


  //ausgrauen des Kategoriebuttons der aktiven Kategorie
  function greyButton(button) {
    var kategorieButtons = document.getElementsByClassName("kategorieButton");
    for (var k = 0; k < kategorieButtons.length; k++) {
      kategorieButtons[k].style.backgroundColor = null;
      kategorieButtons[k].childNodes[0].style.cursor = null;
    }
    button.style.backgroundColor = "grey"; //button grey
    var buttonChild = button.childNodes[0]; //cursor auto
    buttonChild.style.cursor = "auto";
  }
















  //--------------------------------------------//
  //              1. Erzählfolge                //
  //--------------------------------------------//

  for (key in leude) {

    var iconWrapper = document.getElementById(key + "Wrapper");
    var ovMetStelle = document.createElement("div");
    ovMetStelle.className = "ovMetStelle";
    ovMetStelle.style.textAlign = "center";
    ovMetStelle.innerHTML = leude[key].ovMet;
    //ovMetStelle.style.position = "absolute";
    ovMetStelle.style.fontFamily = "'Crimson Text', serif";
    ovMetStelle.style.fontSize = "0.60em";
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

    for (var h = 0; h < erstePentade.length; h++) {
      var figurIcon = document.getElementById(erstePentade[h] + "Wrapper");
      figurIcon.style.top = erstePentadeFromTop + "%";
      figurIcon.style.left = iconPosition + "%";

      iconPosition += abstaendeZwischenIcons;
    }
    if (booleanErsterKlick) {
      setZeitstrahl(startIconsBy, erstePentadeFromTop, iconPosition - startIconsBy, iconPosition, "I. Pentade"); //arguments: startLeft, fromTop, laenge, arrowPosition
    }



    iconPosition = startIconsBy;

    for (var h = 0; h < zweitePentade.length; h++) {
      var figurIcon = document.getElementById(zweitePentade[h] + "Wrapper");
      figurIcon.style.top = zweitePentadeFromTop + "%";
      figurIcon.style.left = iconPosition + "%";

      iconPosition += abstaendeZwischenIcons;
    }
    if (booleanErsterKlick) {
      setZeitstrahl(startIconsBy, zweitePentadeFromTop, iconPosition - startIconsBy, iconPosition, "II. Pentade"); //arguments: startLeft, fromTop, laenge, arrowPosition
    }

    iconPosition = startIconsBy;

    for (var h = 0; h < drittePentade.length; h++) {
      var figurIcon = document.getElementById(drittePentade[h] + "Wrapper");
      figurIcon.style.top = drittePentadeFromTop + "%";
      figurIcon.style.left = iconPosition + "%";

      iconPosition += abstaendeZwischenIcons;
    }
    if (booleanErsterKlick) {
      setZeitstrahl(startIconsBy, drittePentadeFromTop, iconPosition - startIconsBy, iconPosition, "III. Pentade"); //arguments: startLeft, fromTop, laenge, arrowPosition
    }

  }




  var ersterKlickChrono = true;


  function erzaehlfolgeFunction() {

    setWidthPercent(60);
    setBackOtherKategories("erzaehlfolge");
    setLocationHash("erzaehlfolge");
    insertCurrentCategory("Erzählfolge", "iconmonstr-arrow-32-240.png", 20);
    greyButton(chronoBtn);


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

  chronoBtn.onclick = function () {
    placeDurchsichtigesDiv();
    erzaehlfolgeFunction();
  }























  //--------------------------------------------//
  //               2. Taxonomie                 //
  //--------------------------------------------//


  for (key in leude) {
    var iconWrapper = document.getElementById(key + "Wrapper");
    var pTaxonomie = document.createElement("div");
    pTaxonomie.className = "taxonomieNames";
    pTaxonomie.innerHTML = leude[key].verwandlung;
    iconWrapper.appendChild(pTaxonomie);
  }


  function taxonomieFunction() {

    setWidthPercent(80);
    setBackOtherKategories("taxonomie");
    setLocationHash("taxonomie");
    insertCurrentCategory("Klassifikation", "ancient.png", 21);
    greyButton(taxBtn);


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

    for (var id in figuresListSorted) {

      //ICONS VERSCHIEBEN
      var figurIcon = document.getElementById(figuresListSorted[id] + "Wrapper");


      //der richtigen Taxonomie zuordnen
      if (leude[figuresListSorted[id]].taxonomie == "fauna") {

        countFauna += 1;

        if (countFauna == 1) { //setzen des ersten Icons, ACHTUNG: Zählung beginnt bei 1
          figurIcon.style.top = figurPositionFaunaTop + "%";
          figurIcon.style.left = figurPositionFaunaLeft + "%";

        } else if (countFauna % 2 == 0) { //wenn CountFauna gerade, dann plus top 
          figurPositionFaunaTop += abstandVertical;

          figurIcon.style.top = figurPositionFaunaTop + "%";
          figurIcon.style.left = figurPositionFaunaLeft + "%";

        } else { //wenn CountFauna ungerade, dann plus left und minus top 

          figurPositionFaunaTop -= abstandVertical;
          figurPositionFaunaLeft += abstandHorizontal;

          figurIcon.style.top = figurPositionFaunaTop + "%";
          figurIcon.style.left = figurPositionFaunaLeft + "%";
        }




      } else if (leude[figuresListSorted[id]].taxonomie == "flora") {

        countFlora += 1;

        if (countFlora == 1) { //setzen des ersten Icons, ACHTUNG: Zählung beginnt bei 1
          figurIcon.style.top = figurPositionFloraTop + "%";
          figurIcon.style.left = figurPositionFloraLeft + "%";

        } else if (countFlora % 2 == 0) { //wenn CountFlora gerade, dann plus top 
          figurPositionFloraTop += abstandVertical;

          figurIcon.style.top = figurPositionFloraTop + "%";
          figurIcon.style.left = figurPositionFloraLeft + "%";

        } else { //wenn CountFlora ungerade, dann plus left und minus top 
          figurPositionFloraTop -= abstandVertical;
          figurPositionFloraLeft += abstandHorizontal;

          figurIcon.style.top = figurPositionFloraTop + "%";
          figurIcon.style.left = figurPositionFloraLeft + "%";
        }

      } else if (leude[figuresListSorted[id]].taxonomie == "elemente") {

        countElemente += 1;

        if (countElemente == 1) { //setzen des ersten Icons, ACHTUNG: Zählung beginnt bei 1
          figurIcon.style.top = figurPositionElementeTop + "%";
          figurIcon.style.left = figurPositionElementeLeft + "%";

        } else if (countElemente % 2 == 0) { //wenn CountElemente gerade, dann plus top 
          figurPositionElementeTop += abstandVertical;

          figurIcon.style.top = figurPositionElementeTop + "%";
          figurIcon.style.left = figurPositionElementeLeft + "%";

        } else { //wenn CountElemente ungerade, dann plus left und minus top 
          figurPositionElementeTop -= abstandVertical;
          figurPositionElementeLeft += abstandHorizontal;

          figurIcon.style.top = figurPositionElementeTop + "%";
          figurIcon.style.left = figurPositionElementeLeft + "%";
        }


      } else if (leude[figuresListSorted[id]].taxonomie == "anthropomorphes") {

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
    var percentNumbers = [Math.round(countFauna / all * 100 * 10) / 10, Math.round(countFlora / all * 100 * 10) / 10, Math.round(countElemente / all * 100 * 10) / 10, Math.round(countAnthropomorphes / all * 100 * 10) / 10];

    var percentPArray = document.getElementsByClassName("percentTopright");

    var p = 0;
    for (var percentP = 0; percentP < percentPArray.length; percentP++) {
      percentPArray[percentP].innerHTML = percentNumbers[p] + "%";
      p++;
    }

  }

  taxBtn.onclick = function () {
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
    greyButton(geoBtn);


    geoImg.style.display = "block";
    geoImg.style.animationPlayState = "running";


    for (var figur in leude) {

      var figurIcon = document.getElementById(figur + "Wrapper");


      if (leude[figur].ort.startsWith("?")) {
        
        figurIcon.style.top = rand(-10, 110) + "%";
        figurIcon.style.left = rand(-10, 110) + "%";
        figurIcon.style.opacity = 0;
        figurIcon.style.visibility = "hidden";

      } else {
        figurIcon.style.top = leude[figur].koordinaten.geographie.top + "%";
        figurIcon.style.left = leude[figur].koordinaten.geographie.left + "%";
      }

    }
  }

  geoBtn.onclick = function () {
    placeDurchsichtigesDiv();
    geographieFunction();
  };





























  //--------------------------------------------//
  //               4. Alphabet                  //
  //--------------------------------------------//


  var unsortedIds = [];
  for (var figur in leude) {
    unsortedIds.push(leude[figur].id);
  }
  var sortedIds = unsortedIds.sort();


  var ersterKlickAlpha = true;
  function alphabetFunction() {

    setWidthPercent(90);
    setBackOtherKategories("alphabet");
    setLocationHash("alphabet");
    insertCurrentCategory("Keine ausgewählt", "no-stopping.png", 18);
    //greyButton(alphaBtn);

    //Ausklappen der Navigationsbar links unten verhindern, da hier nicht sinnvoll
    navigationDropdown(false);
    document.getElementById("dropDownNavigation").style.display = "none";


    alphaImg.style.display = "block";
    var alphaNames = document.getElementsByClassName("alphabetNames");
    for (var i = 0; i < alphaNames.length; i++) {
      alphaNames[i].style.display = "block";
      var iconWrapper = document.getElementById(alphaNames[i].parentElement.id);
      var wrapperHeight = iconWrapper.offsetHeight;
      //console.log(wrapperHeight);
      var alphaNamesHeight = alphaNames[i].scrollHeight; //WARUM FUNKTIONIERT DAS NICHT?
      //console.log(alphaNames[i] + alphaNamesHeight);
      //unschöne Notlösung
      alphaNames[i].style.top = wrapperHeight / 2 - 5 + "px";

    }


    var alphaDiv = document.getElementById("alphabet");
    var startFromTop = 15;
    var startFromLeft = 9;
    var spaceBetweenIconsHorizontally = 5;
    //var spaceBetweenLetterBlocksVertically = 15;
    var spaceBetweenIconsVertically = 10;

    var topPosition = startFromTop; //ändern sich im Laufe der Schleife
    var leftPosition = startFromLeft;


    //get names out of leude.json in a table and sort it
    var namenstabelle = [];
    for (key in leude) {

      if (!(namenstabelle.includes(leude[key].name))) { //if wegen doppeltem acheloos
        namenstabelle.push(leude[key].name);
      }
    }

    namenstabelle.sort();
    //console.log(namenstabelle);




    //set big first letters and list of names
    for (var id = 0; id < namenstabelle.length; id++) {

      if (ersterKlickAlpha) {
        //Anfangsbuchstaben setzen
        var letter = namenstabelle[id].slice(0, 1).toUpperCase(); //nur Anfangsbuchstaben in groß

        if (id == 0 || letter != namenstabelle[id - 1].slice(0, 1).toUpperCase()) { //checken, dass Anfangsbuchstabe nicht bereits angezeigt wird

          var letterDiv = document.createElement("h1");
          letterDiv.innerHTML = letter;
          letterDiv.style.position = "absolute";
          letterDiv.style.top = topPosition + "%";
          letterDiv.style.left = startFromLeft + "%";
          letterDiv.style.color = "#733030";
          letterDiv.style.animation = "slowOpacity";
          letterDiv.style.animationDuration = "2s";
          alphaDiv.appendChild(letterDiv);

          leftPosition = startFromLeft;
          leftPosition += spaceBetweenIconsHorizontally * 1.3;
          topPosition += spaceBetweenIconsVertically;
        }

        var nameOfTheProtagonist = document.createElement("div");
        nameOfTheProtagonist.innerHTML = namenstabelle[id];
        nameOfTheProtagonist.className = "nameOfTheProtagonist"
        nameOfTheProtagonist.id = namenstabelle[id] + "Alphabet";
        nameOfTheProtagonist.style.position = "absolute";
        nameOfTheProtagonist.style.top = topPosition + "%";
        nameOfTheProtagonist.style.left = startFromLeft + "%";
        nameOfTheProtagonist.style.animation = "slowOpacity";
        nameOfTheProtagonist.style.animationDuration = "2s";
        alphaDiv.appendChild(nameOfTheProtagonist);
        topPosition += spaceBetweenIconsVertically / 3;

        if (topPosition > 80) {
          topPosition = 15;
          startFromLeft += 14;
        }

        // verwandelteDict[leude[key].id] = leude[key].name;
        
        // console.log(zugehoerigesModal);
        // var zugehoerigesModal = Object.keys(verwandelteDict).find(key => verwandelteDict[key] === namenstabelle[id]);
        
        //console.log(namenstabelle[id])
        //console.log(zugehoerigesModal);

        nameOfTheProtagonist.onclick = (event) => {
          var id = event.currentTarget.id.substr(0, event.currentTarget.id.length - 8);
          
          var zugehoerigesModal = document.getElementById(id.toLowerCase() + "Modal");

          zugehoerigesModal.style.display = "block";
          zugehoerigesModal.style.animationPlayState = "running";
        };

      }
    }




    //Wrapper verstecken
    for (key in leude) {
      var iconWrapper = document.getElementById(leude[key].id + "Wrapper");

      //an einen zufälligen Ort außerhalb Bildschirms setzen (unsichtbar)
      iconWrapper.style.top = rand(-10, 110) + "%"; //begrenzt, damit die Icons innerhalb des divs bleiben / verschwinden(max-min+1)+min
      iconWrapper.style.left = rand(-10, 110) + "%";
      
      iconWrapper.style.opacity = 0;
      iconWrapper.style.visibility = "hidden";

    }



    var alphabetNames = document.getElementsByClassName("alphabetNames");
    for (var x = 0; x < alphabetNames.length; x++) {
      alphabetNames[x].style.display = "block";
    }




    ersterKlickAlpha = false;
  }

  alphaBtn.onclick = function () {
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
    greyButton(grundBtn);


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



    for (var id in figuresListSorted) {

      //ICONS VERSCHIEBEN
      var figurIcon = document.getElementById(figuresListSorted[id] + "Wrapper");
      //var figurPopover = document.getElementById(figur + "Popover");


      //dem richtigen Grund zuordnen
      if (leude[figuresListSorted[id]].grund == "Schutz") {
        //console.log("figur zählt zu schutz");

        figurIcon.style.top = positionSchutzTop + "%";
        figurIcon.style.left = positionSchutzLeft + "%";

        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        positionSchutzLeft += abstand; //figurIcon.offsetWidth;

        countSchutz += 1;

      } else if (leude[figuresListSorted[id]].grund.includes("Bestrafung")) {
        //console.log("figur zählt zu bestrafung");

        figurIcon.style.top = positionBestrafungTop + "%";
        figurIcon.style.left = positionBestrafungLeft + "%";

        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        positionBestrafungLeft += abstand; //figurIcon.offsetWidth;

        countBestrafung += 1;

      } else if (leude[figuresListSorted[id]].grund == "Trauer") {

        figurIcon.style.top = positionBegierdeTop + "%";
        figurIcon.style.left = positionBegierdeLeft + "%";

        positionBegierdeLeft += abstand; //figurIcon.offsetWidth;

        countBegierde += 1;


      } else if (leude[figuresListSorted[id]].grund == "postume Ehrung") {

        figurIcon.style.top = positionEhrungTop + "%";
        figurIcon.style.left = positionEhrungLeft + "%";

        positionEhrungLeft += abstand; //figurIcon.offsetWidth;

        countEhrung += 1;

      } else if (leude[figuresListSorted[id]].grund.includes("Wunsch")) {

        figurIcon.style.top = positionBitteTop + "%";
        figurIcon.style.left = positionBitteLeft + "%";

        positionBitteLeft += abstand; //figurIcon.offsetWidth;

        countBitte += 1;

      } else if (leude[figuresListSorted[id]].grund.includes("Kampf")) {

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
    var percentNumbersGrund = [Math.round(countBestrafung / allGrund * 100 * 10) / 10, Math.round(countBitte / allGrund * 100 * 10) / 10, Math.round(countSchutz / allGrund * 100 * 10) / 10, Math.round(countBegierde / allGrund * 100 * 10) / 10, Math.round(countEhrung / allGrund * 100 * 10) / 10, Math.round(countKampf / allGrund * 100 * 10) / 10, Math.round(countSonstigerGrund / allGrund * 100 * 10) / 10];

    var percentPGrundArray = document.getElementsByClassName("percentToprightGrund");

    for (var g = 0; g < percentPGrundArray.length; g++) {
      percentPGrundArray[g].innerHTML = percentNumbersGrund[g] + "%";
    }
  }

  grundBtn.onclick = function () {
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
    setVerwandelnderName.style.left = styleLeft - 2 + "%";
    setVerwandelnderName.style.top = startFromTopVerw + "%";
    verwandelndeImg.appendChild(setVerwandelnderName);

    var helpvarStartFromTop = startFromTopVerw * 1.5;

    for (var id in figuresListSorted) {

      var iconWrapper = document.getElementById(figuresListSorted[id] + "Wrapper");



      if (leude[figuresListSorted[id]].verwandler.startsWith(verwandelnderName)) {

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
    greyButton(verwandelndeBtn);

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
    for (key in leude) {

      var iconWrapper = document.getElementById(leude[key].id + "Wrapper");

      if (!(leude[key].verwandler.startsWith("Jupiter")) && !(leude[key].verwandler.startsWith("Neptun")) && !(leude[key].verwandler.startsWith("Venus")) && !(leude[key].verwandler.startsWith("Diana")) && !(leude[key].verwandler.startsWith("Minerva")) && !(leude[key].verwandler.startsWith("Mercur")) && !(leude[key].verwandler.startsWith("Apollo")) && !(leude[key].verwandler.startsWith("Ceres")) && !(leude[key].verwandler.startsWith("Juno"))) {

        iconWrapper.style.top = rand(-10, 110) + "%"; //begrenzt, damit die Icons innerhalb des divs bleiben / verschwinden(max-min+1)+min
        iconWrapper.style.left = rand(-10, 110) + "%";
        iconWrapper.style.opacity = 0;
        iconWrapper.style.visibility = "hidden";

      }
    }



  }

  verwandelndeBtn.onclick = function () {
    placeDurchsichtigesDiv();
    verwandelndeFunction();
  };














  //--------------------------------------------//
  //               7. Fließtext                 //
  //--------------------------------------------//



  // 1. Marker im Text setzen

  //alle Verwandler und Verwandelten in metamorphosen.json durchsuchen
  for (var key in metamorphosen) {

    //alle Verwandler- und Verwandeltennamen zusammen in eine Suchanfrage, durch Argument "g" werden alle entsprechenden Begriffe, nicht nur der erste gesucht
    var regexVerwandler = new RegExp(Object.keys(verwandlerDict).join("|"), "g");
    var regexVerwandelte = new RegExp(Object.values(verwandelteDict).join("|"), "g");

    //alle angegebenen Begriffe ersetzen durch 
    metamorphosen[key].text = metamorphosen[key].text.replaceAll(regexVerwandler, "<dfn class='tooltip $& verwandlerTrigger triggerAusText'>$&</dfn>") //style='background-color: rgba(115, 48, 48, 0.3)
    metamorphosen[key].text = metamorphosen[key].text.replaceAll(regexVerwandelte, "<dfn style='background-color: rgba(82, 82, 82, 0.3)' class='tooltip $& verwandelteTrigger'>$&</dfn>")
  }


  //vom VGG-Annotator vergebene keys bereinigen, damit keys wieder den Einträgen unter leude entspricht
  var annotationsCleanedUp = {}
  for (var key in annotations) {
    var indexOfDot = key.indexOf(".");
    var newKey = key.substr(0, indexOfDot);
    annotationsCleanedUp[newKey] = annotations[key];
  }



  let textModalDiv = document.getElementById("textModal");

  var metamorphosenTable = document.createElement("table");
  textModalDiv.appendChild(metamorphosenTable);

  //Tabelle mit allen keys aus dem metamorphosen.json anlegen
  var keyTabelle = [];
  for (var key in metamorphosen) {
    keyTabelle.push(key);
  }


  //Tabelle für NavBar-Anzeige
  var zeilenzaehler = [];


  //Schleife durch alle keys (aus metamorphosen.json)
  for (var k = 0; k < keyTabelle.length;) {
    var key = keyTabelle[k];


    //Anlegen der TableRow
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

    //wenn es sich um eine Figurengeschichte handelt, wird diese hier eingefügt (ansonsten Platzhalter-Bild)
    if (key in leude) {

      svgDiv.id = leude[key].id + "SvgDiv";

      metaImg.setAttribute("src", "Figuren/" + key + "/" + key + ".jpg");
      // metaImg.setAttribute("title", leude[key].alt);
      // metaImg.style.width = "auto";
      // metaImg.style.maxHeight = "70vh";
      // metaImg.style.maxWidth = "70vh"
      metaImg.id = leude[key].id + "Bild";

      metaImg.onload = (event) => { 

        var id = event.currentTarget.id.substr(0, event.currentTarget.id.length - 4);
        
        var metSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        metSvg.setAttribute("viewBox", "0 0 100 100");
        metSvg.setAttribute("preserveAspectRatio", "none");

        //console.log(id);
        var div = document.getElementById(id + "SvgDiv");
        div.appendChild(metSvg);


        var height = event.currentTarget.naturalHeight;
        var width = event.currentTarget.naturalWidth;

        var regions = annotationsCleanedUp[id].regions;
        var verwandelter = undefined;
        var verwandelnder = undefined;

        regions.forEach(region => {
          var figur = region.region_attributes.figur;
          if (figur == "verwandelter") {
            verwandelter = region;
          } else {
            verwandelnder = region;
          }
        });

        if (verwandelter != undefined) {
          var xs = verwandelter.shape_attributes.all_points_x;
          var ys = verwandelter.shape_attributes.all_points_y;
          
          var coordinates = "";
  
          for (var x = 0; x < xs.length; x++) {
            coordinates += xs[x] / width * 100 + "," + ys[x] / height * 100 + " ";
          }

          
          //Verwandelter
          var metPolygons = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
          metPolygons.setAttribute("points", coordinates);
          metPolygons.setAttribute("class", leude[key].id);
          metPolygons.setAttribute("class", "verwandelterAnno");
          metSvg.appendChild(metPolygons);
          
          var polygonTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
          metPolygons.appendChild(polygonTitle);
          polygonTitle.innerHTML = leude[id].name;

        }

        if (verwandelnder != undefined) {
          var xs2 = verwandelnder.shape_attributes.all_points_x;
          var ys2 = verwandelnder.shape_attributes.all_points_y;
  
          var coordinates = "";
  
          for (var x = 0; x < xs2.length; x++) {
            coordinates += xs2[x] / width * 100 + "," + ys2[x] / height * 100 + " ";
          }

          var metPolygons2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
          metPolygons2.setAttribute("points", coordinates);
          metPolygons2.setAttribute("class", leude[key].verwandler);
          metPolygons2.setAttribute("class", "verwandlerAnno");
          metSvg.appendChild(metPolygons2);

          var polygonTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
          metPolygons2.appendChild(polygonTitle);
          polygonTitle.innerHTML = leude[id].verwandler;
        }


        





      }

      //Exemplarisch anhand Lycaon: Mehrere Bilder neben Text
      if (leude[key].id === "lycaon"){
        
        //Link-Img zur Motivübersicht
        var zurMotivuebersicht = document.createElement("img");
        zurMotivuebersicht.setAttribute("src", "Icons/four-squares-button-of-view-options.png");
        zurMotivuebersicht.style.width = "8%";
        zurMotivuebersicht.title = "Zur Motivübersicht";
        zurMotivuebersicht.className = "zurMotivuebersicht";
        svgDiv.appendChild(zurMotivuebersicht);
        zurMotivuebersicht.onclick = function () {
          var lycaonMotivuebersichtModal = document.getElementById("lycaonMotivuebersichtModal");
          lycaonMotivuebersichtModal.style.display = "block";
          lycaonMotivuebersichtModal.style.animationPlayState = "running";
        }

        //PrevImage
        var slidePrevDiv = document.createElement("div");
        slidePrevDiv.innerHTML = "&#10094;";
        slidePrevDiv.className = "prevImage";
        slidePrevDiv.id = leude[key].id + "prev";
        slidePrevDiv.title = "vorheriges Bild";
        svgDiv.appendChild(slidePrevDiv);
    
        //NextImage
        var slideNextDiv = document.createElement("div");
        slideNextDiv.innerHTML = "&#10095";
        slideNextDiv.className = "nextImage";
        slideNextDiv.title = "nächstes Bild";
        svgDiv.appendChild(slideNextDiv);


      }




      //bildTitel = leude[key].alt;
    } else {
      metaImg.setAttribute("src", "Bilder/Titelbild.jpg");
      metaImg.setAttribute("title", "Frans Brun, Titelbild einer Rotterdamer Metamorphosen-Ausgabe, 1637")
      //bildTitel = "Titelbild";
    }



    // //Bildtitel
    // var imageTitle = document.createElement("p");
    // //imageTitle.className = "imageNames";
    // imageTitle.innerHTML = bildTitel;
    // metamorphosenTableCell.appendChild(imageTitle);





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

      if (key in leude) {
        //innerHeaderHTML += "HELLO";
        var modalOpener = document.createElement("img");
        header.appendChild(modalOpener);
        modalOpener.setAttribute("src", "Icons/iconmonstr-share-11-240.png")
        modalOpener.id = key + "Opener";
        modalOpener.className = "modalOpener";
        modalOpener.style.padding = "4px"
        modalOpener.style.marginBottom = "4px";
        modalOpener.style.marginLeft = "8px";
        modalOpener.style.width = "20px";

        modalOpener.onclick = (event) => {
          var id = event.currentTarget.id.substr(0, event.currentTarget.id.length - 6);
          console.log(id)
          
          var zugehoerigesModal = document.getElementById(id + "Modal");

          zugehoerigesModal.style.display = "block";
          zugehoerigesModal.style.animationPlayState = "running";

          aktuellesModal = id;
          setLocationHash("fliesstext");
        }

      }
      // = innerHeaderHTML;
      


      metaDiv.appendChild(header);

      //var contentP = document.createElement("p");
      //metaDiv.appendChild(contentP);


      //Tabelle für einzelne Metamorphosengeschichte
      var textTable = document.createElement("table"); //table
      textTable.style.borderSpacing = "0px";
      textTable.style.borderCollapse = "collapse";
      textTable.className = "fliesstextTables";
      textTable.style.width = "100%";
      
      metaDiv.appendChild(textTable);

      

      var verszeilen = metamorphosen[key].text.split("<br>");
      var verszeilenLatein = metamorphosen[key].latein.split("<br>");

      //Tabelle für NavBar-Anzeige
      zeilenzaehler.push(verszeilen.length);


      //aktuelle Zeile herausfinden (für jede Metamorphosen-Geschichte neu setzen, damit kein Folgefehler)
      var indexOfKomma = metamorphosen[key].stelle.indexOf(",");
      var indexOfBindestrich = metamorphosen[key].stelle.indexOf("-")
      var aktuelleZeile = parseInt(metamorphosen[key].stelle.substr(indexOfKomma +1, indexOfBindestrich-indexOfKomma-1))-1;
      
      var aktuelleZeileLokal = 0;


      var erstesMal = true;

      while (aktuelleZeileLokal < verszeilen.length) {

        //Tabel-Row anlegen
        var textRow = document.createElement("tr");
        textRow.id = "Ov.met." + metamorphosen[key].stelle.substr(0, indexOfKomma) + "," + (aktuelleZeile + 1);
        textTable.appendChild(textRow);

        //drei Columns anlegen:
        //Versnummern-Column
        var textColumnVersnummer = document.createElement("td");
        textRow.appendChild(textColumnVersnummer);
        textColumnVersnummer.className = "textColumnVersnummer";

        //Latein-Column
        var textColumnLatein = document.createElement("td");
        textRow.appendChild(textColumnLatein);
        textColumnLatein.className = "lateinisch";
        textColumnLatein.style.padding = "0px"
        textColumnLatein.style.paddingRight = "10px"
        textColumnLatein.style.width = "0%";
        textColumnLatein.style.display = "none";

        //Deutsch-Column
        var textColumnDeutsch = document.createElement("td");
        textRow.appendChild(textColumnDeutsch);
        textColumnDeutsch.className = "deutsch";
        textColumnDeutsch.style.padding = "0px";
        textColumnDeutsch.style.display = "inline-block";
        textColumnDeutsch.style.width = "94%";

        //befüllen
        textColumnLatein.innerHTML += verszeilenLatein[aktuelleZeileLokal] + "<br>";
        textColumnDeutsch.innerHTML += verszeilen[aktuelleZeileLokal] + "<br>";


        //alle 5 Zeilen neue Row mit Columns anlegen und Verszahl hinzufügen
        if (erstesMal || (aktuelleZeile + 1) % 5 === 0) {

          
          //Abstand zur vorherigen Row
          textColumnVersnummer.style.paddingTop = "10px";
          textColumnLatein.style.paddingTop = "10px";
          textColumnDeutsch.style.paddingTop = "10px";

          //anklickbare Versnummern erklären
          textColumnVersnummer.title = "Klick, um Stelle in verlinkbare URL zu setzen";
          textColumnVersnummer.style.cursor = "pointer";

          //für den Fall, dass die erste Zeile keine Versnummer erhalten soll, da sie 
          if ((aktuelleZeile+1) == 1 || (aktuelleZeile+1) % 5 == 0) {
            textColumnVersnummer.innerHTML = aktuelleZeile+1;
          }
        
          erstesMal = false;

        }



        aktuelleZeile++;
        aktuelleZeileLokal++;


      }

      //Leere Tabellenzeile, damit es unten nicht so gequetscht ist
      var textRowEnde = document.createElement("tr");
      textTable.appendChild(textRowEnde);
      var textColumnEnde = document.createElement("td");
      textRowEnde.appendChild(textColumnEnde);
      textColumnEnde.appendChild(document.createElement("br"));
    }

    if (!(keyTabelle[k] in leude)) {
      while (!(keyTabelle[k] in leude) && k < keyTabelle.length) {
        createTextDiv(keyTabelle[k]);
        k++;
      }
    } else {
      createTextDiv(keyTabelle[k]);
      k++;
    }

  }

  console.log(zeilenzaehler);

  //Verwandlungsmomente unterstreichen mithilfe von Iconclass
  //Funktion roemische Ziffern in arabische umwandeln
  function roman_to_Int(str1) {
    if (str1 == null) return -1;
    var num = char_to_int(str1.charAt(0));
    var pre, curr;

    for (var i = 1; i < str1.length; i++) {
      curr = char_to_int(str1.charAt(i));
      pre = char_to_int(str1.charAt(i - 1));
      if (curr <= pre) {
        num += curr;
      } else {
        num = num - pre * 2 + curr;
      }
    }

    return num;
  }

  function char_to_int(c) {
    switch (c) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return -1;
    }
  }

  for (key in leude){
    if (leude[key].iconclass.includes("Ovid, Metamorphosen")) {
      var iconclassInhalt = leude[key].iconclass;
      var indexOfAnfang = iconclassInhalt.indexOf("Ovid, Metamorphosen") + 20;
      var indexOfEnde = iconclassInhalt.length;
      var verwandlungsstelle = iconclassInhalt.substr(indexOfAnfang, indexOfEnde);
      var buchangabe = verwandlungsstelle.substr(0, verwandlungsstelle.indexOf(" "));
      var zeilenangabe = verwandlungsstelle.substr(verwandlungsstelle.indexOf(" ") + 1, verwandlungsstelle.indexOf(")")-verwandlungsstelle.indexOf(" ")-1);
      
      
      if (buchangabe.includes(",")){
        buchangabe = buchangabe.substr(0, buchangabe.indexOf(",")-1);
      }

      var genaueStelle = roman_to_Int(buchangabe) + "," + zeilenangabe;

      //entsprechende Zeile im Fliesstext markieren
      if (document.getElementById("Ov.met." + genaueStelle) != undefined){
        var verwandlungsZeile = document.getElementById("Ov.met." + genaueStelle).children;
        for (var x = 1; x < verwandlungsZeile.length; x++) {
          verwandlungsZeile[x].style.fontWeight = "bold";
          verwandlungsZeile[x].style.color = "#733030c0";
          verwandlungsZeile[x].style.fontSize = "16px";
          //verwandlungsZeile[x].style.fontFamily = "'Work Sans', fantasy";
          verwandlungsZeile[x].title = "Verwandlungsakt (nach Iconclass)";
          verwandlungsZeile[x].style.textDecoration = "underline";
          verwandlungsZeile[x].style.textDecorationStyle = "dotted";
        }
      }

    }

  }



  var prevButtons = document.getElementsByClassName("prevImage");
  for (var button in prevButtons){
    if (prevButtons[button].id != undefined){ //wieso sind überhaupt welche undefined?
      prevButtons[button].onclick = function (){
        //var id = prevButtons[button].id.substr(0,prevButtons[button].id.length-4);
        console.log(prevButtons[button].id)
      }
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
  copyrightText.style.left = "50%";
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

  
  //Vorkehrungen, damit nicht der Fall eintritt, dass gar kein Text erscheint:
  var lockLatein = document.getElementById("lockLatein");
  var lockDeutsch = document.getElementById("lockDeutsch");

  deutschBtn.setAttribute('disabled', 'disabled');

  lateinBtn.onclick = function () {

    //Fall: lateinBtn raus machen, deutschBtn gecheckt
    if (lateinBtn.checked === false) {

      lockDeutsch.style.display = "inline-block";
      deutschBtn.setAttribute('disabled', 'disabled');

      for (var l = 0; l < lateinTexte.length; l++) {
        lateinTexte[l].style.display = "none";
        lateinTexte[l].style.width = "0%";
        deutschTexte[l].style.width = "94%";
      }

      //Fall: lateinBtn rein machen, deutschBtn gecheckt
    } else {

      lockDeutsch.style.display = "none";
      deutschBtn.removeAttribute('disabled');

      for (var l = 0; l < lateinTexte.length; l++) {
        lateinTexte[l].style.display = "inline-block";
        deutschTexte[l].style.width = "47%";
        lateinTexte[l].style.width = "47%";
      }
    }
  }


  deutschBtn.onclick = function () {

    //Fall: deutschBtn raus nehmen, lateinBtn gecheckt
    if (deutschBtn.checked === false) {

      //Latein-Btn disabeln, damit dieser nicht mehr ausgewählt werden kann
      //& mit Schloss versehen, damit das Benutzer klar ist (sonst wäre nichts da)
      lateinBtn.setAttribute('disabled', 'disabled');
      lockLatein.style.display = "inline-block";

      for (var l = 0; l < deutschTexte.length; l++) {
        deutschTexte[l].style.display = "none";
        deutschTexte[l].style.width = "0%";
        lateinTexte[l].style.width = "94%";
      }

      //Fall: deutschBtn rein nehmen, lateinBtn gecheckt
    } else {
      
      lateinBtn.removeAttribute('disabled');
      lockLatein.style.display = "none";

      for (var l = 0; l < deutschTexte.length; l++) {
        deutschTexte[l].style.display = "inline-block";
        deutschTexte[l].style.width = "47%";
        lateinTexte[l].style.width = "47%";
      }
    }
  }


  //Trigger aus dem Text 
  var verwandlerTriggers = document.getElementsByClassName("verwandlerTrigger");
  var verwandlerAnnos = document.getElementsByClassName("verwandlerAnno");

  for (var t = 0; t < verwandlerTriggers.length; t++) {

    verwandlerTriggers[t].onmouseenter = function () {
      for (var a = 0; a < verwandlerAnnos.length; a++) {
        verwandlerAnnos[a].style.opacity = "1";
      }
    }
    verwandlerTriggers[t].onmouseleave = function () {
      for (var a = 0; a < verwandlerAnnos.length; a++) {
        verwandlerAnnos[a].style.opacity = null; //Regel weggenommen 
      }
    }
  }
  //Trigger aus dem Text 
  var verwandelteTriggers = document.getElementsByClassName("verwandelteTrigger");
  var verwandlterAnnos = document.getElementsByClassName("verwandelterAnno");

  for (var t = 0; t < verwandelteTriggers.length; t++) {

    verwandelteTriggers[t].onmouseenter = function () {
      for (var a = 0; a < verwandlterAnnos.length; a++) {
        verwandlterAnnos[a].style.opacity = "1";
      }
    }
    verwandelteTriggers[t].onmouseleave = function () {
      for (var a = 0; a < verwandlterAnnos.length; a++) {
        verwandlterAnnos[a].style.opacity = null; //Regel weggenommen 
      }
    }
  }





  // 2. Popover/Tooltip setzen
  //Funktion, um für jede Gottheit im Text das Popover zu setzen
  function setTooltipForVerwandelnde(godName) {

    //jedes Element, das mit einem Göttername z.B. Jupiter betitelt ist, in eine Tabelle setzen
    var tooltipArray = document.getElementsByClassName(godName);

    //Tabelle mit Verwandelten-Namen durchgehen und tooltip setzen
    for (var j = 0; j < tooltipArray.length; j++) {

      var tooltipSpan = document.createElement("span");
      tooltipArray[j].appendChild(tooltipSpan);
      tooltipSpan.setAttribute("role", "tooltip");

      //Verwandler: Aposthroph statt Genitiv-S, wenn Gottheit mit "s" endet oder nichts falls Plural
      var genitivbildung;
      if (godName.endsWith("s")) {
        genitivbildung = "' Verwandlungen:<br>";
      } else if (godName.endsWith("en")) {
        genitivbildung = "-Verwandlungen:";
      } else {
        genitivbildung = "s Verwandlungen:<br>";
      }

      tooltipSpan.innerHTML = godName + genitivbildung + "<br>";

      
      //Verwandelte: in p-Element setzen und onclick darauf vergeben
      for (var v = 0; v < verwandlerDict[godName].nameDerVerwandelten.length; v++) {

        var spanVerwandelte = document.createElement("span");
        spanVerwandelte.className = "modalTrigger";
        tooltipSpan.appendChild(spanVerwandelte);

        spanVerwandelte.innerHTML = verwandlerDict[godName].nameDerVerwandelten[v] + " ";

        var linksymbol = document.createElement("img");
        linksymbol.setAttribute("src", "Icons/iconmonstr-share-11-240.png")
        linksymbol.setAttribute("width", "12px");
        spanVerwandelte.appendChild(linksymbol);

        tooltipSpan.appendChild(document.createElement("br"));


        // spanVerwandelte.onclick = function () {
        //   console.log(id)
        // }
        function createOnClickFunction(godName, v) {
          return function() {
            var modalName = verwandlerDict[godName].idDerVerwandelten[v] + "Modal";
            console.log(modalName)
            var zugehoerigesModal = document.getElementById(modalName);
            zugehoerigesModal.style.display = "block";
            zugehoerigesModal.style.animationPlayState = "running";

            aktuellesModal = verwandlerDict[godName].idDerVerwandelten[v];
            setLocationHash("fliesstext");

          };
        }
        spanVerwandelte.onclick = createOnClickFunction(godName, v);

      } 
      

    }
  }


  //Schleife durch alle Verwandler und 
  for (key in verwandlerDict) {
    setTooltipForVerwandelnde(key);
  }









  //Funktion, die Fliesstext auf Block setzt (+ Rest auf none)
  function fliesstextFunction() {

    setWidthPercent(100);
    setBackOtherKategories("fliesstext");
    setLocationHash("fliesstext");
    insertCurrentCategory("Keine ausgewählt", "no-stopping.png", 18);
    //greyButton(textBtn);

    textImg.style.display = "block";

    //Platz ist weg, anpassen! (WÜRDE FUNKTIONIEREN, WENN PLATZ UNTER DEM BILDSCHIRM ENDLICH WEG WÄRE (Scrollen deshalb ausgestellt)
    // var prooemiumHeader = document.getElementById("prooemiumHeader");
    // prooemiumHeader.scrollIntoView();


    //Ausklappen der Navigationsbar links unten verhindern, da hier nicht sinnvoll
    navigationDropdown(false);
    document.getElementById("dropDownNavigation").style.display = "none";

    //Icons ausblenden, damit sie nicht stören
    for (var figur in leude) {

      var figurIcon = document.getElementById(figur + "Wrapper");

      figurIcon.style.top = "-10%"//rand(-10, 110) + "%";
      figurIcon.style.left = rand(-10, 110) + "%";
     
      //Notfall-Lösung, damit beim Fliestext-Öffnen (über URL) keine Icons angezeigt werden (unter)
      //figurIcon.style.display = "none";

      figurIcon.style.opacity = 0;
      figurIcon.style.visibility = "hidden";


      //figurIcon.style.visibility = "hidden"; > mit window.setTimeout(..., 1000);
      //figurImg.style.width = "0px";
    }
  }

  textBtn.onclick = function () {
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



  //Navigationsleite für Text:
  var buecherLaenge = [5.224, 6.2711, 5.4439, 5.9595, 5.1684, 5.9023, 6.918, 6.684, 6.2089, 5.6034, 6.1531, 4.4985, 7.1462, 6.2341, 6.2341];
  var buecherLink = ["prooemium", "phaetonII", "cadmus", "minayastoechterI", "perseusUndPhineus", "arachne", "iasonUndMedea", "nisusUndScylla", "achelous1", "orpheusUndEurydice", "todDesOrpheus", "schlangeInAulis", "hoplonkrisisI", "glaucus", "numa"];
  
  var kapitelLaenge1 = [4, 84, 62, 12, 90, 60, 103, 22, 14, 115, 57, 64, 58, 33]
  var kapitelLinksBuch1 = ["prooemium", "weltentstehung", "weltzeitalter", "giganten", "lycaon", "sintflut", "deucalionUndPyrrha", "tierwelt", "python", "daphne", "io", "argus", "syrinx", "phaeton"]
  var gesamtlaenge = function (tabelle) {
    var gesamtlaengeVerse = 0.0;
    for (var b in tabelle){ 
      gesamtlaengeVerse += parseFloat(tabelle[b]);
    }
    return gesamtlaengeVerse;
  }
  var gesamtLaengeBuecher = gesamtlaenge(buecherLaenge);
  var gesamtLaengeKapitel1 = gesamtlaenge(kapitelLaenge1);
  //console.log(gesamtLaengeBuecher)

  var navbarWrapper = document.createElement("div");
  var fliesstextDiv = document.getElementById("fliesstext");
  fliesstextDiv.appendChild(navbarWrapper);
  navbarWrapper.className = "navbarWrapper";

  var navbarBuecher = document.createElement("div");
  navbarBuecher.className = "navbar1";
  navbarWrapper.appendChild(navbarBuecher);

  var navbarKapitel = document.createElement("div");
  navbarKapitel.className = "navbar2";
  navbarWrapper.appendChild(navbarKapitel);

  var headerBuch = document.createElement("div");
  headerBuch.innerHTML = "Buch";
  headerBuch.style.position = "absolute";
  headerBuch.style.left = "2%";
  headerBuch.style.top = "10%";
  navbarWrapper.appendChild(headerBuch);

  var headerKapitel = document.createElement("div");
  headerKapitel.innerHTML = "Kapitel";
  headerKapitel.style.position = "absolute";
  headerKapitel.style.left = "2%";
  headerKapitel.style.top = "50%";
  navbarWrapper.appendChild(headerKapitel);


  //navBar 1: Bücher
  for (var b in buecherLaenge){
    
    var aNavbar = document.createElement("a");
    aNavbar.setAttribute("href", "/visualisierung.html#" + buecherLink[b] + "Header");
    aNavbar.className = "buecherLinks";
    aNavbar.id = "buch" + b;
    aNavbar.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (parseInt(b)+1) + ". Buch";
    aNavbar.style.width = buecherLaenge[b] + "%";
    aNavbar.title = "Klick, um zu Buch " + (parseInt(b)+1) + " zu gelangen"
    navbarBuecher.appendChild(aNavbar);

    aNavbar.onmouseover = (event) => {
      var id = event.currentTarget.id;
      document.getElementById(id).style.width = document.getElementById(id).clientWidth+20 + "px";

      var neueGesamtlaenge = gesamtLaengeBuecher + 20.0;

      for (var b in buecherLaenge){
        
        //console.log(neueGesamtlaenge)
      }

    }
    aNavbar.onmouseout = (event) => {
      var id = event.currentTarget.id;
      document.getElementById(id).style.width = buecherLaenge[parseInt(id.substr(4))] + "%";
      //document.getElementById(id).childNodes[0].style.display = "none";
    }

    aNavbar.onmousedown = (event) => {
      for (var b in kapitelLaenge1){
        document.getElementById("buch" + b).style.backgroundColor = "#747474a6";
      }
      
      var id = event.currentTarget.id;
      document.getElementById(id).style.backgroundColor = "#733030a8";
      
    }

  }

  //erstes schon rot:
  document.getElementById("buch0").style.backgroundColor = "#733030a8";


  //navBar2: Kapitel
  for (var b in kapitelLaenge1){

    var aNavbarII = document.createElement("a");
    aNavbarII.setAttribute("href", "/visualisierung.html#" + kapitelLinksBuch1[b] + "Header");
    aNavbarII.className = "kapitelLinks";
    aNavbarII.id = "buch0kapitel" + b;
    var hilfs = kapitelLinksBuch1[b];
    //console.log(metamorphosen.kapitelLinksBuch1[b])
    //console.log(metamorphosen[hilfs].name)
    aNavbarII.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + metamorphosen[kapitelLinksBuch1[b]].name;
    aNavbarII.style.width = (kapitelLaenge1[b]/gesamtLaengeKapitel1*100) + "%";
    aNavbarII.title = "Klick, um zu Kapitel " + (parseInt(b)+1) + " zu gelangen"
    navbarKapitel.appendChild(aNavbarII);

    aNavbarII.onmouseover = (event) => {
      var id = event.currentTarget.id;
      var gesElement = document.getElementById(id);

      if (gesElement.clientWidth < 90){
        gesElement.style.width = "120px";
      } else {
        gesElement.style.width = gesElement.clientWidth+20 + "px";
      }
      

      // var neueGesamtlaenge = gesamtLaengeBuecher + 20.0;

      // for (var b in buecherLaenge){
        
      //   console.log(neueGesamtlaenge)
      // }

    }
    aNavbarII.onmouseout = (event) => {
      var id = event.currentTarget.id;
      document.getElementById(id).style.width = (kapitelLaenge1[parseInt(id.substr(12))]/gesamtLaengeKapitel1*100) + "%";
      //document.getElementById(id).childNodes[0].style.display = "none";
    }


  }

  //erstes schon rot:
    document.getElementById("buch0kapitel0").style.backgroundColor = "#733030a8";









  //--------------------------------------------//
  //             8. Unorganisiert               //
  //--------------------------------------------//


  var unorgBtn = document.getElementById("unorganisiert");

  //Protagonistennamen unter Icons anlegen
  for (key in leude) {

    var iconWrapper = document.getElementById(key + "Wrapper");
    console.log()
    var nameOfFigure = document.createElement("div");
    nameOfFigure.className = "nameOfFigure";
    nameOfFigure.style.textAlign = "center";
    nameOfFigure.innerHTML = leude[key].name;
    nameOfFigure.style.fontFamily = "'Crimson Text', serif";
    nameOfFigure.style.width = iconWrapper.offsetWidth + "px";
    nameOfFigure.style.fontSize = "0.7em";
    nameOfFigure.style.display = "none";
    iconWrapper.appendChild(nameOfFigure);

  }
  var namesOfFigure = document.getElementsByClassName("nameOfFigure");
  for (var x = 0; x < namesOfFigure.length; x++) {
    namesOfFigure[x].style.display = "block";
  }


  function keineAuswahl() {

    setWidthPercent(100);
    setBackOtherKategories();
    setLocationHash("");
    insertCurrentCategory("Drag & Drop", "iconmonstr-circle-5-240.png", 19);
    greyButton(unorgBtn);

    //für das Raster
    var fromLeft = 14; //in %
    var fromTop = 15; //in %

    //Icons im Raster anordnen
    for (var figur in leude) {
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.top =  fromTop + "%";
      figurIcon.style.left = fromLeft + "%";

      //Werte für folgende Icons anpassen
      fromLeft += 8;
      if (fromLeft >= 90){
        fromTop += 14;
        fromLeft = 14;
      }
    }

    var namesOfFigure = document.getElementsByClassName("nameOfFigure");
    for (var x = 0; x < namesOfFigure.length; x++) {
      namesOfFigure[x].style.display = "block";
    }

  }

  unorgBtn.onclick = function() {
    keineAuswahl();
  }

  

  //bei Laden der Seite auf Unorganisiert, sonst kein ausgegrauter Button
  if (aktuelleKategorie == "") {
    unorgBtn.style.backgroundColor = "grey";
  }


  //Achtung: Wenn man mit einer anderen Kategorie startet, ist aktuelle Kategorie auch ein leerer String
  var dragParent = null;


  //verschiebbare Icons auf der Startseite 
  document.onmousedown = function (event) {
    if (aktuelleKategorie == "") {
      dragParent = event.target.closest(".popover__wrapper");
      if (dragParent != null) { dragParent.style.transition = "none"; }
    }
  }

  document.onmouseup = function (event) {
    event.stopImmediatePropagation();
    if (dragParent != null) {

      dragParent.style.transition = null;
    }
    dragParent = null;
  }


  document.onmousemove = function (event) {
    if (dragParent != null) {
      event.preventDefault();
      placeDurchsichtigesDiv();

      var x = event.clientX;
      var y = event.clientY;

      if (x > window.innerWidth) {
        x = window.innerWidth;
      } else if (x < 0) {
        x = 0;
      }

      if (y > window.innerHeight) {
        y = window.innerHeight;
      } else if (y < 0) {
        y = 0;
      }

      dragParent.style.left = x + "px";
      dragParent.style.top = y + "px";
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
  function insertCurrentMarkCategory(kategorienameII, bildnameInIconsII, widthInPxII) {
    var insertCurrentMarkCategoryHere = document.getElementById("insertCurrentMarkCategoryHere");
    insertCurrentMarkCategoryHere.innerHTML = "<img src='Icons/" + bildnameInIconsII + "' style='width: " + widthInPxII + "px;'> " + kategorienameII;
  }

  //ausgrauen des Kategoriebuttons der aktiven Kategorie
  function greyMarkButton(button) {
    var markKategorieButtons = document.getElementsByClassName("markKategorieButton");
    for (var k = 0; k < markKategorieButtons.length; k++) {
      markKategorieButtons[k].style.backgroundColor = null;
    }
    button.style.backgroundColor = "grey";
  }




  //--------------------------------------------//
  //             1. keine Auswahl               //
  //--------------------------------------------//

  var markKeineAuswahl = document.getElementById("markKeineAuswahl");
  markKeineAuswahl.onclick = function () {
    insertCurrentMarkCategory("Keine Auswahl", "iconmonstr-circle-5-240.png", "19");
    //greyMarkButton(markKeineAuswahl);

    for (figur in leude) {
      document.getElementById(figur + "Wrapper").style.opacity = "100%";
    }
  }




  //--------------------------------------------//
  //              2. Erzaehlfolge               //
  //--------------------------------------------//

  function markPentade(start, end) {

    var curKategoriename = "";
    if (start === 1) {
      curKategoriename = "I. Pentade";
    } else if (start === 6) {
      curKategoriename = "II. Pentade";
    } else { curKategoriename = "III. Pentade"; }
    insertCurrentMarkCategory(curKategoriename, "iconmonstr-arrow-32-240.png", 20);

    // //PopUp ausblenden > funktioniert so nicht 
    // var markKategoryPopUp = document.getElementById("markKategoryPopUp");
    // markKategoryPopUp.style.display = "none";

    for (figur in leude) {

      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      //Zahl vor dem Komma extrahieren und in Int umwandeln
      var ovMetZahlVorKomma = parseInt(leude[figur].ovMet.substr(0, leude[figur].ovMet.indexOf(",")));

      //wenn Zahl kleiner als start oder größer als end, ausblenden
      if (ovMetZahlVorKomma < start || ovMetZahlVorKomma > end) {
        figurIcon.style.opacity = "10%";
      }

    }
  }

  var markPentadeI = document.getElementById("markPentadeI");
  var markPentadeII = document.getElementById("markPentadeII");
  var markPentadeIII = document.getElementById("markPentadeIII");

  markPentadeI.onclick = function () {
    markPentade(1, 5);
    //greyMarkButton(markPentadeI);
  }
  markPentadeII.onclick = () => markPentade(6, 10);
  markPentadeIII.onclick = () => markPentade(11, 15);






  //--------------------------------------------//
  //               3. Taxonomie                 //
  //--------------------------------------------//

  function markTaxonomie(taxArgument) {
    insertCurrentMarkCategory(taxArgument.charAt(0).toUpperCase() + taxArgument.slice(1), "ancient.png", 21);

    for (figur in leude) {

      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      if (!(leude[figur].taxonomie === taxArgument)) {
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


  function markVerwandlungsgrund(grund) {
    insertCurrentMarkCategory(grund, "question.png", 19);

    for (figur in leude) {

      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      if (!(leude[figur].grund.includes(grund))) {
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
  //var markSonstiges = document.getElementById("markSonstiges");

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




  function markVerwandelnde(gottheit) {
    insertCurrentMarkCategory(gottheit, "iconmonstr-magic-5-240.png", 18);

    for (figur in leude) {

      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      if (!(leude[figur].verwandler.includes(gottheit))) {
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


  function markGeschlecht(wmd) {
    for (figur in leude) {

      insertCurrentMarkCategory(wmd, "iconmonstr-gender-4-240.png", 17);

      //alle Icons wieder einblenden
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = "100%";

      if (leude[figur].geschlecht === wmd) {
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









  //--------------------------------------------//
  //                hover-Info                  //
  //--------------------------------------------//


  var hoverInfoBtns = document.getElementsByClassName("hoverInfoTrigger");
  console.log(hoverInfoBtns[0].id)

  for (var h = 0; h < hoverInfoBtns.length; h++){
    hoverInfoBtns[h].onmouseenter = (event) => {
      var modalDazu = document.getElementById(event.target.id + "Modal");
      var rect = event.target.getBoundingClientRect();
      var x = (rect.left + rect.right) * 0.5;
      var y = (rect.top + rect.bottom) * 0.5;
      modalDazu.style.left = x + "px";
      modalDazu.style.top = y + "px";
      modalDazu.style.display = "block";
    }
    hoverInfoBtns[h].onmouseleave = (event) => {
      var modalDazu = document.getElementById(event.target.id + "Modal");
      modalDazu.style.display = "none";
    }
  }

  // var hoverInfoFilter = document.getElementById("hoverInfoFilter");
  // var infoModalFilter = document.getElementById("infoModalFilter");
  // hoverInfoFilter.onmouseenter = function (event){
  //   infoModalFilter.style.left = event.clientX + "px";
  //   infoModalFilter.style.top = event.clientY + "px";
  //   infoModalFilter.style.display = "block";
  // }
  // hoverInfoFilter.onmouseleave = function (event){
  //   infoModalFilter.style.display = "none";
  // }









  //--------------------------------------------//
  //      close modals (windows.onclick)        //
  //--------------------------------------------//


  
  

  // When the user clicks anywhere outside of the Modals, close it
  window.onclick = function (event) {

    //Liste von Modals, die durch Klick neben das Element geschlossen werden sollen
    var closeTheseElements = [startModal, infoModal, quellenModal, ovidModal, erzaehlfolgeModal, klassifikationModal, geographieModal, alphabetModal, verwandlungsgrundModal, verwandelndeModal, fliesstextModal]

    for (var i = 0; i < closeTheseElements.length; i++) {
      if (event.target == closeTheseElements[i]) {
        event.target.style.display = "none";
      }
    }
    
    //close all metamorphosenModals
    var modalNames = [];
    for (key in leude) {
      var modalName = key + "Modal";
      modalNames.push(modalName);
    }
    for (var i = 0; i < modalNames.length; i++) {
      if (event.target.id == modalNames[i]) {
        event.target.style.display = "none";
        aktuellesModal = undefined;
        //locationhash
        location.hash = "#" + aktuelleKategorie;
      }
    }

    //close all motivuebersichtModals
    var motivuebersichtModalNames = [];
    for (key in leude) {
      var modalName = key + "MotivuebersichtModal";
      motivuebersichtModalNames.push(modalName);
    }
    for (var i = 0; i < motivuebersichtModalNames.length; i++) {
      if (event.target.id == motivuebersichtModalNames[i]) {
        event.target.style.display = "none";
      }
    }

    if (!(sidebar.contains(event.target)) && sidebarOpen){
      
      closeOrOpenSidebar(event);

    }

  }




} //End of application-function 