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




  //--------------------------------------------//
  //          Start-/Info-Modals                //
  //--------------------------------------------//


  // StartModal
  var startModal = document.getElementById("startModal"); // Get startModal
  var spanStart = document.getElementById("closeStartModal");   // Get <span> element that closes the startModal

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
  }
  mehrInfoBtn.onclick = function () { // Other Open
    infoModal.style.display = "block";
    startModal.style.display = "none";
  }
  closeInfoBtn.onclick = function () { // Close
    infoModal.style.display = "none";
  }








  //--------------------------------------------//
  //             Sortierte Tabellen             //
  //--------------------------------------------//


  var figuresListSorted = [];
  var ovMetListSorted = [];

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





  //--------------------------------------------//
  //             Metamorphosen-Icons            //
  //--------------------------------------------//
  
  var kategorienUndPopoverDiv = document.getElementById("kategorienUndPopoverDiv");

  function createIcon(data) {
    var iconDiv = document.createElement("div");
    iconDiv.id = data.name.toLowerCase() + "Wrapper";
    iconDiv.className="popover__wrapper";
    iconDiv.style.top = data.koordinaten.unorganisiert.top + "%";
    iconDiv.style.left = data.koordinaten.unorganisiert.left + "%";
    kategorienUndPopoverDiv.appendChild(iconDiv);

    var iconImg = document.createElement("img"); 
    iconImg.className = "iconImg";
    iconImg.title = data.verwandlung;
    iconImg.src = data.icon;
    iconImg.id = data.name.toLowerCase() + "Btn"; //Ansprechpartner für onclick function Navigations-Kategorien s.u.
    iconImg.style.width = data.width + "px";
    iconImg.alt = data.alt;
    iconDiv.appendChild(iconImg);
  }





  
  //--------------------------------------------//
  //           Metamorphosen-Popover            //
  //--------------------------------------------//

  // generiert automatisiert Popover mithilfe der angelegten json-Datei
  // Parameter z.B. leude.actaeon

  

  function createPopover(data) {
    var popoverContentDiv = document.createElement("div"); 
    popoverContentDiv.id = data.name.toLowerCase() + "Popover"; //sonst werden alle Popover gleichzeitig aufgerufen
    popoverContentDiv.className = "popover__content";
    popoverContentDiv.style.top = (data.koordinaten.unorganisiert.top - (-18)) + "%";
    popoverContentDiv.style.left = (data.koordinaten.unorganisiert.left - 10)+ "%";
    popoverContentDiv.style.visibility = "hidden";
    kategorienUndPopoverDiv.appendChild(popoverContentDiv);

    var ueberschrift = document.createElement("h3");
    ueberschrift.innerHTML = data.name;
    popoverContentDiv.appendChild(ueberschrift);

    var ovMet = document.createElement("p");
    ovMet.innerHTML = data.ovMet;
    popoverContentDiv.appendChild(ovMet);

    var popoverImg = document.createElement("img");
    popoverImg.src = data.img;
    popoverImg.alt = data.alt;
    popoverImg.style.width = "200px";
    popoverContentDiv.appendChild(popoverImg);
  }







  //--------------------------------------------//
  //              Popover-Aufruf                //
  //--------------------------------------------//



  function popoverAufruf(data) {;
    var idName = (data.name.toLowerCase()+ "Btn");
    var iconBtn = document.getElementById(idName);
    
    iconBtn.onmouseover = function () {
      var elementWithNameID = document.getElementById(data.name.toLowerCase() + "Popover");
      elementWithNameID.style.visibility = "visible";
    }
    iconBtn.onmouseout = function () {
      var elementWithNameID = document.getElementById(data.name.toLowerCase() + "Popover");
      elementWithNameID.style.visibility = "hidden";
    }
  }












  //--------------------------------------------//
  //            Metamorphosen-Modals            //
  //--------------------------------------------//

  // generiert automatisiert Modals mithilfe der angelegten json-Datei
  // Parameter z.B. leude.actaeon
  function createModal(data) {
    var modalDiv = document.createElement("div");
    modalDiv.id = data.name.toLowerCase() + "Modal";
    modalDiv.className = "metamorphosenModal";
    document.body.appendChild(modalDiv);

    var modalHeaderDiv = document.createElement("div");
    modalHeaderDiv.className = "modalHeader";
    modalDiv.appendChild(modalHeaderDiv);

    var modalContentDiv = document.createElement("div");
    modalContentDiv.className = "modalContent";
    modalDiv.appendChild(modalContentDiv);

    if (!(modalDiv.id == figuresListSorted[0] + "Modal")) {
      var slidePrevDiv = document.createElement("div");
      slidePrevDiv.innerHTML = "&#10094;";
      slidePrevDiv.className = "prevMet";
      slidePrevDiv.title = "vorherige Verwandlung";
      modalDiv.appendChild(slidePrevDiv);
    }

    if (!(modalDiv.id == figuresListSorted[figuresListSorted.length-1] + "Modal")) {
      var slideNextDiv = document.createElement("div");
      slideNextDiv.innerHTML = "&#10095";
      slideNextDiv.className = "nextMet";
      slideNextDiv.title = "nächste Verwandlung";
      modalDiv.appendChild(slideNextDiv);
    }

    //header
    var divHeader = document.createElement("div"); //div anlegen
    modalContentDiv.appendChild(divHeader);
    var ueberschrift = document.createElement("h1"); //h1 in div anlegen
    ueberschrift.setAttribute("style", "display:inline");
    ueberschrift.innerHTML = data.name;
    divHeader.appendChild(ueberschrift);
    var sup = document.createElement("sup"); //sup in div anlegen
    divHeader.appendChild(sup);
    var headerLink = document.createElement("a"); //link in sup anlegen
    var headerLinkInput = "https://de.wikipedia.org/wiki/" + data.name;
    headerLink.setAttribute("href", headerLinkInput);
    headerLink.setAttribute("target", "_blank");
    headerLink.innerHTML = "  &#x2139;";
    sup.appendChild(headerLink);

    var imgDiv = document.createElement("div");
    modalContentDiv.appendChild(imgDiv);

    //Nur bei kleinen Ansichten unter 1200px
    var imgKlein = document.createElement("img"); 
    imgKlein.className = "display-under-1200px";
    imgKlein.alt = data.alt;
    imgKlein.title = data.alt;
    imgKlein.src = data.img;
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
    img.src = data.img;
    if (img.naturalWidth > img.naturalHeight) {
      img.width = "300";
    } else {
      img.height = "300";
    }
    tableCol.appendChild(img);

    var copyrightP = document.createElement("p");
    copyrightP.innerHTML = "&#xa9; " + data.source;
    copyrightP.style.fontSize = "10px";
    copyrightP.style.color = "#292929";
    tableCol.appendChild(copyrightP);


    var tableCol2 = document.createElement("td");
    tableRow.appendChild(tableCol2);


    //innerTable
    var innerTable = document.createElement("table");
    
    var emojiArray = ["&#x1F4CD;", "&#x1F32A;", "&#x2754;", "&#x1F464;", "&#x1F5FA;", "&#127988;"];
    var metadataArray = ["Ov. met.:", "Verwandlung:", "Grund:", "Verwandler:", "Ort:", "Iconclass:"];
    var dataArray = [data.ovMet, data.verwandlung, data.grund, data.verwandler, data.ort, data.iconclass];
    
    for (var i = 0; i < 6; i++) {
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
        dataCol.innerHTML = dataArray[i]; //verwandlerText anlegen
        var verwandlerSup = document.createElement("sup"); //sup anlegen
        dataCol.appendChild(verwandlerSup);
        var verwandlerLink = document.createElement("a"); //link anlegen
        var verwandlerLinkInput = "https://de.wikipedia.org/wiki/" + dataArray[i];
        verwandlerLink.setAttribute("href", verwandlerLinkInput);
        verwandlerLink.setAttribute("target", "_blank");
        verwandlerLink.innerHTML = "  &#x2139;";
        verwandlerSup.appendChild(verwandlerLink);
      
      //Iconclasstext + Infolink
      } else if (i === 5) {
        dataCol.innerHTML = dataArray[i]; //iconclassText anlegen
        var iconclassSup = document.createElement("sup"); //sup anlegen
        dataCol.appendChild(iconclassSup);
        var iconclassLink = document.createElement("a"); //link anlegen
        var indexOfSpace = dataArray[i].indexOf(" ");
        var iconclassLinkInput = "http://www.iconclass.org/rkd/" + dataArray[i].substring(0, indexOfSpace);
        iconclassLink.setAttribute("href", iconclassLinkInput);
        iconclassLink.setAttribute("target", "_blank");
        iconclassLink.innerHTML = "  &#x2139;";
        iconclassSup.appendChild(iconclassLink);

      //alle anderen ohne Infolink
      } else {
        dataCol.innerHTML = dataArray[i];
      }
      

    }
    tableCol2.appendChild(innerTable);


    modalContentDiv.appendChild(document.createElement("hr"));


    // Details - Übersetzung
    var detailsDiv = document.createElement("div");
    detailsDiv.className = "modalContentLeft";
    modalContentDiv.appendChild(detailsDiv);

    var uebersetzungsDetails = document.createElement("details");
    detailsDiv.appendChild(uebersetzungsDetails);

    var uebersetzungsSummary = document.createElement("summary");
    uebersetzungsSummary.innerHTML = "Übersetzung (M. von Albrecht)"
    uebersetzungsDetails.appendChild(uebersetzungsSummary);

    var uebersetzungsP = document.createElement("p");
    uebersetzungsP.innerHTML = data.uebersetzung;
    uebersetzungsDetails.appendChild(uebersetzungsP);

    // Details - Originaltext
    var originaltextDetails = document.createElement("details");
    detailsDiv.appendChild(originaltextDetails);

    var originaltextSummary = document.createElement("summary");
    originaltextSummary.innerHTML = "Originaltext";
    originaltextDetails.appendChild(originaltextSummary);

    var originaltextP = document.createElement("p");
    originaltextP.innerHTML = data.originaltext;
    originaltextDetails.appendChild(originaltextP);


    modalContentDiv.appendChild(document.createElement("br"));

    var buttonSpan = document.createElement("span");
    buttonSpan.setAttribute("align", "center");
    buttonSpan.className = "modalBtns";
    buttonSpan.innerHTML = "SCHLIESSEN";
    buttonSpan.onclick = function() { modalDiv.style.display = "none" };
    modalContentDiv.appendChild(buttonSpan);


    modalContentDiv.appendChild(document.createElement("br"));

    return modalDiv;
  }




  //--------------------------------------------//
  //              Modal-Aufrufe                 //
  //            > automatisieren                //
  //--------------------------------------------//
  
  
  function modalAufruf(data) {
    var currentModal = createModal(data);
    var currentBtn = document.getElementById(data.name.toLowerCase() + "Btn");

    currentBtn.onclick = function () {
      currentModal.style.display = "block";
      currentModal.style.animationPlayState = "running";
    }  
  }







  //--------------------------------------------//
  //              Alles aufrufen                //
  //--------------------------------------------//


  function allesAufrufen() {
    for (var key in leude){
      createIcon(leude[key]);
      createPopover(leude[key]);
      popoverAufruf(leude[key]);
      modalAufruf(leude[key]); //createModal wird innerhalb dieser Funktion aufgerufen
    }
  }

  allesAufrufen();
  



  










  //--------------------------------------------//
  //            Slider-Functions                //
  //--------------------------------------------//
  


  //get ID of currentlyDisplayedModal  
  function getCurrentlyDisplayedModalId() {
    for (var id = 0; id < figuresListSorted.length; id++){
      var modal = document.getElementById(figuresListSorted[id] + "Modal");
      
      if (modal.style.display == "block"){
        //console.log("modal wird gezeigt: " + figuresListSorted[id]);
        return figuresListSorted[id] + "Modal";
      }
      
    }
    
  }
 

  //slider-function 
  function slide(number) {
    for (var idNumber = 0; idNumber < figuresListSorted.length; idNumber++){

      if (figuresListSorted[idNumber] + "Modal" == getCurrentlyDisplayedModalId()) {
        return figuresListSorted[idNumber + number] + "Modal";
      }
    }
  }


  //onclick-function 
  var prevArray = document.getElementsByClassName("prevMet");
  var nextArray = document.getElementsByClassName("nextMet");


  for (var prevBtnNb = 0; prevBtnNb < prevArray.length; prevBtnNb++) {
      
      prevArray[prevBtnNb].onclick = function () {
        //console.log("prevBtn geklickt");
        var modalNow = document.getElementById(getCurrentlyDisplayedModalId());
        var modalWanted = document.getElementById(slide(-1));
        
        modalNow.style.display = "none";
        modalWanted.style.display = "block";
        modalWanted.style.animationPlayState = "running";
      }
  }

  for (var nextBtnNb = 0; nextBtnNb < nextArray.length; nextBtnNb++){
    nextArray[nextBtnNb].onclick = function () {
      //console.log("nextBtn geklickt");
      var modalNow = document.getElementById(getCurrentlyDisplayedModalId());
      var modalWanted = document.getElementById(slide(+1));
        
      modalNow.style.display = "none";
      modalNow.style.animationPlayState = "running";

      modalWanted.style.display = "block";
      modalWanted.style.animationPlayState = "running";
    }
  }

  



















  //--------------------------------------------//
  //                 Kategorien                 //
  //--------------------------------------------//

  
  var chronoBtn = document.getElementById("chrono");
  var chronoImg = document.getElementById("chronologie");

  var taxBtn = document.getElementById("tax");
  var taxImg = document.getElementById("taxonomie");

  var geoBtn = document.getElementById("geo");
  var geoImg = document.getElementById("geographie");















  //Chronologie

  function setZeitstrahl(startLeft, fromTop, laenge, arrowPosition) {

    var line = document.getElementById("line");
    var arrow = document.getElementById("arrow");

    //line
    line.style.top = fromTop + "%";
    line.style.position = "absolute";
    line.style.animation = "slowOpacity";
    line.style.animationDuration = "3s";
    line.style.width = laenge + "%"; /*Problem*/
    line.style.height = "5px";
    line.style.background = "rgba(0, 0, 0, 0.5)";
    line.style.left = startLeft + "%";
    
    //arrow
    arrow.style.top = fromTop + "%";
    arrow.style.position = "absolute";
    arrow.style.animation = "slowOpacity";
    arrow.style.animationDuration = "3s";
    arrow.style.border = "10px solid rgba(0, 0, 0, 0.5)";
    arrow.style.fontSize = "0;line-height:0;height:0;padding:0;margin:0";
    arrow.style.borderTopColor = "transparent";
    arrow.style.borderRightColor = "transparent";
    arrow.style.borderBottomColor = "transparent";
    arrow.style.left = arrowPosition + "%";
    arrow.style.transform = "translate(0%, -40%)";
  }


  

  var startIconsBy = 10;
  var abstaendeZwischenIcons = 10;
  var fromTop = 50;
  var iconPosition = startIconsBy;


  function setCoordinatesChrono() {
    iconPosition = startIconsBy;
    for (var h = 0; h < figuresListSorted.length; h++){

      var figurIcon = document.getElementById(figuresListSorted[h] + "Wrapper");
      figurIcon.style.top = fromTop + "%";
      figurIcon.style.left = iconPosition + "%";
      
      iconPosition += abstaendeZwischenIcons;
    }
    setZeitstrahl(startIconsBy, fromTop, iconPosition-startIconsBy, iconPosition); //arguments: startLeft, fromTop, laenge, arrowPosition
  }

  



  chronoBtn.onclick = function () {
    taxImg.style.display = "none";
    
    geoImg.style.display = "none";

    chronoImg.style.display = "block";
    setCoordinatesChrono();
    
  }













  //Taxonomie
  taxBtn.onclick = function () {
    chronoImg.style.display = "none";
    
    
    geoImg.style.display = "none";
    
    
    taxImg.style.display = "block";
    taxImg.style.animationPlayState = "running";
    
    
    console.log("Die Taxfunktion funktioniert");
    
    //faunaDiv-data als startpunkt
    var figurPositionFaunaTop = document.getElementById("fauna").offsetTop;
    var figurPositionFaunaLeft = document.getElementById("fauna").offsetLeft;

    //floraDiv-data als startpunkt 
    var figurPositionFloraTop = document.getElementById("flora").offsetTop;
    var figurPositionFloraLeft = document.getElementById("flora").offsetLeft;

    //mitzählen für Prozentangaben
    var countFauna = 0;
    var countFlora = 0;
    var countElemente = 0;
    var countSonstiges = 0;

    for (var figur in leude){
      var figurIcon = document.getElementById(figur + "Wrapper");
    
      

      if (leude[figur].taxonomie == "fauna"){
        //console.log("figur zählt zu fauna");
        
        figurIcon.style.top = figurPositionFaunaTop + "px";
        figurIcon.style.left = figurPositionFaunaLeft + "px";
        
        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        figurPositionFaunaLeft += figurIcon.offsetWidth;

        countFauna += 1;

      } else if (leude[figur].taxonomie == "flora"){
        //console.log("figur zählt zu flora");
        
        figurIcon.style.top = figurPositionFloraTop + "px";
        figurIcon.style.left = figurPositionFloraLeft + "px";

        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        figurPositionFloraLeft += figurIcon.offsetWidth;

        countFlora +=1;

      } else if (leude[figur].taxonomie == "elemente"){
        countElemente += 1;
      } else if (leude[figur].taxonomie == "sonstiges"){
        countSonstiges += 1;
      }

    }
    
    var all = countFauna + countFlora + countElemente + countSonstiges;
    var faunaPercent = countFauna/all*100;
    var floraPercent = countFlora/all*100;
    var elementePercent = countElemente/all*100;
    var sonstigesPercent = countSonstiges/all*100;

    console.log(faunaPercent + floraPercent);
    
  }








  //Geographie
  geoBtn.onclick = function () {
    taxImg.style.display = "none";

    chronoImg.style.display = "none";

    geoImg.style.display = "block";
    geoImg.style.animationPlayState = "running";


    for (var figur in leude){
      var figurIcon = document.getElementById(figur + "Wrapper");
      console.log(figurIcon);
      figurIcon.style.top = leude[figur].koordinaten.geographie.top + "%";
      figurIcon.style.left = leude[figur].koordinaten.geographie.left + "%";
    }
  }




  //Fließtext
  
  //create text-div
  var textModalDiv = document.createElement("div");
  textModalDiv.id = "textModal";
  textModalDiv.className = "infoModal";
  //textModalDiv.className = "kategory";
  textModalDiv.style.textAlign = "left";
  document.body.appendChild(textModalDiv);


  //iterate through metamorphosen.json
  for (var key in metamorphosen) {

    var contentDiv = document.createElement("div");
    contentDiv.id = key;
    contentDiv.className = "modalContent";
    textModalDiv.appendChild(contentDiv);

    var header = document.createElement("h1");
    header.innerHTML = metamorphosen[key].name + " " + metamorphosen[key].stelle;
    contentDiv.appendChild(header);

    var contentP = document.createElement("p");
    contentDiv.className = "modalContent";
    contentDiv.style = "padding: 25px 50px 0px";
    contentP.innerHTML = metamorphosen[key].text;
    contentDiv.appendChild(contentP);
    

  }
  

  //close-Btn
  var buttonSpan = document.createElement("span");
  buttonSpan.setAttribute("align", "center");
  buttonSpan.className = "modalBtns";
  buttonSpan.innerHTML = "SCHLIESSEN";
  buttonSpan.onclick = function() { textModalDiv.style.display = "none" };
  contentDiv.appendChild(buttonSpan);


  var textBtn = document.getElementById("text");
  textBtn.onclick = function () {
    textModal.style.display = "block";
    //textModal.style.animationPlayState = "running";

    taxImg.style.display = "none";

    chronoImg.style.display = "none";

    geoImg.style.display = "none";
  }


  //Unorganisiert
  var unorgBtn = document.getElementById("unorganisiert");

  unorgBtn.onclick = function () {
    taxImg.style.opacity = "0";
    taxImg.style.display = "none";

    chronoImg.style.display = "none";

    geoImg.style.opacity = "0";
    geoImg.style.display = "none";

    for (var figur in leude){
      var figurIcon = document.getElementById(figur + "Wrapper");
      console.log(figurIcon);
      figurIcon.style.top = leude[figur].koordinaten.unorganisiert.top + "%";
      figurIcon.style.left = leude[figur].koordinaten.unorganisiert.left + "%";
    }
  }





  //parent-div
  var parentDiv = document.getElementById("kategorienUndPopoverDiv");
  
  if (!parentDiv.style.height) {
    parentDiv.style.height = window.innerHeight + "px";
  }

  document.getElementsByTagName("BODY")[0].onresize = function() {resizeToWindowSize()};

  function resizeToWindowSize() {
    //console.log("div has been resized");
    parentDiv.style.height = window.innerHeight + "px";
  }

  
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
    if (event.target == textModal) {
      textModal.style.display = "none";
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