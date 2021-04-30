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




  //Hover Info-Button
  var infoHoverName = document.createElement("div");
  infoHoverName.className = "infoHoverName";
  infoHoverName.innerHTML = "Info";
  infoBtn.appendChild(infoHoverName);

  infoBtn.onmouseover = function () {
    infoHoverName.style.display = "block";
  }

  infoBtn.onmouseout = function () {
    infoHoverName.style.display = "none";
  }

  //Hover Quiz-Button
  var quizBtn = document.getElementById("quizBtn");

  var quizHoverName = document.createElement("div");
  quizHoverName.className = "infoHoverName";
  quizHoverName.innerHTML = "Quiz";
  quizBtn.appendChild(quizHoverName);

  quizBtn.onmouseover = function () {
    quizHoverName.style.display = "block";
  }

  quizBtn.onmouseout = function () {
    quizHoverName.style.display = "none";
  }

  //Hover Book-Button
  var bookBtn = document.getElementById("bookBtn");

  var bookHoverName = document.createElement("div");
  bookHoverName.className = "infoHoverName";
  bookHoverName.innerHTML = "Gäste";
  bookHoverName.style.left = "-10";
  bookBtn.appendChild(bookHoverName);

  bookBtn.onmouseover = function () {
    bookHoverName.style.display = "block";
  }

  bookBtn.onmouseout = function () {
    bookHoverName.style.display = "none";
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


  //nach Pentaden sortiert 
  var erstePentade = [];
  var zweitePentade = [];
  var drittePentade = [];

  for (var h = 0; h < figuresListSorted.length; h++){
    //console.log(ovMetListSorted[h]);
    if (ovMetListSorted[h] < 5){
      erstePentade.push(figuresListSorted[h]);
    } else if (ovMetListSorted[h] > 5 && ovMetListSorted[h] < 10){
      zweitePentade.push(figuresListSorted[h]);
    } else {
      drittePentade.push(figuresListSorted[h]);
    };
  }








  //--------------------------------------------//
  //             Metamorphosen-Icons            //
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
    iconDiv.style.top = data.koordinaten.unorganisiert.top + "%"; //rand(-100,200) + "%";
    iconDiv.style.left = data.koordinaten.unorganisiert.left + "%"; //rand(-100,200) + "%";
    kategorienUndPopoverDiv.appendChild(iconDiv);

    var iconImg = document.createElement("img"); 
    iconImg.className = "iconImg";
    iconImg.title = data.verwandlung;
    iconImg.src = data.icon;
    iconImg.id = data.id + "Btn"; //Ansprechpartner für onclick function Navigations-Kategorien s.u.
    iconImg.style.width = data.width + "px";
    iconImg.alt = data.alt;
    iconDiv.appendChild(iconImg);


    //Popover
    var popoverContentDiv = document.createElement("div"); 
    popoverContentDiv.id = data.id + "Popover"; //sonst werden alle Popover gleichzeitig aufgerufen
    popoverContentDiv.className = "popover__content"; 
    //popoverContentDiv.style.top = "0%";
    //popoverContentDiv.style.left = "0%";
    //popoverContentDiv.style.top = (data.koordinaten.unorganisiert.top - (-10)) + "%";
    //popoverContentDiv.style.left = (data.koordinaten.unorganisiert.left - 8)+ "%";
    //popoverContentDiv.style.visibility = "hidden";
    iconDiv.appendChild(popoverContentDiv);

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

  /*
  function iconPositioning(data) { //right positioning
    var iconDiv = document.getElementById(data.id + "Wrapper");
    iconDiv.style.top = data.koordinaten.unorganisiert.top + "%";
    iconDiv.style.left = data.koordinaten.unorganisiert.left + "%";
  }
*/


  
  //--------------------------------------------//
  //           Metamorphosen-Popover            //
  //--------------------------------------------//

  // generiert automatisiert Popover mithilfe der angelegten json-Datei
  // Parameter z.B. leude.actaeon

  

  // function createPopover(data) {
  //   var popoverContentDiv = document.createElement("div"); 
  //   popoverContentDiv.id = data.id + "Popover"; //sonst werden alle Popover gleichzeitig aufgerufen
  //   popoverContentDiv.className = "popover__content"; 
  //   popoverContentDiv.style.top = (data.koordinaten.unorganisiert.top - (-10)) + "%";
  //   popoverContentDiv.style.left = (data.koordinaten.unorganisiert.left - 8)+ "%";
  //   popoverContentDiv.style.visibility = "hidden";
  //   kategorienUndPopoverDiv.appendChild(popoverContentDiv);

  //   var ueberschrift = document.createElement("h3");
  //   ueberschrift.innerHTML = data.name;
  //   popoverContentDiv.appendChild(ueberschrift);

  //   var ovMet = document.createElement("p");
  //   ovMet.innerHTML = data.ovMet;
  //   popoverContentDiv.appendChild(ovMet);

  //   var popoverImg = document.createElement("img");
  //   popoverImg.src = data.img;
  //   popoverImg.alt = data.alt;
  //   popoverImg.style.width = "200px";
  //   popoverContentDiv.appendChild(popoverImg);
  // }







  //--------------------------------------------//
  //              Popover-Aufruf                //
  //--------------------------------------------//



  // function popoverAufruf(data) {;
  //   var idName = (data.id + "Btn");
  //   var iconBtn = document.getElementById(idName);
    
  //   iconBtn.onmouseover = function () {
  //     var elementWithNameID = document.getElementById(data.id + "Popover");
  //     elementWithNameID.style.visibility = "visible";
  //     // if (){
  //     //   var data.id = iconBtn.
  //     // }
  //   }
  //   iconBtn.onmouseout = function () {
  //     var elementWithNameID = document.getElementById(data.id + "Popover");
  //     elementWithNameID.style.visibility = "hidden";
  //   }
  // }












  //--------------------------------------------//
  //            Metamorphosen-Modals            //
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
      sup.appendChild(headerLink);
    }

    var imgDiv = document.createElement("div");
    modalContentDiv.appendChild(imgDiv);

    //Nur bei kleinen Ansichten unter 1100px <-- 100px kleiner gemacht
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
      //tableCol.style.width = "400";
    } else {
      img.height = "300";
      //tableCol.style.width = "400";
    }
    tableCol.appendChild(img);

    var copyrightP = document.createElement("p");
    copyrightP.className = "copyrightP";
    copyrightP.innerHTML = "&#xa9; " + data.source;
    copyrightP.style.fontSize = "10px";
    //copyrightP.style.width = "300px";
    copyrightP.style.color = "#733030";
    tableCol.appendChild(copyrightP);


    var tableCol2 = document.createElement("td");
    tableRow.appendChild(tableCol2);


    //innerTable
    var innerTable = document.createElement("table");
    innerTable.style.marginLeft = "15px";
    
    var emojiArray = ["&#x1F4CD;", "&#x1F32A;", "&#x2754;", "&#x1F464;", "&#x1F5FA;", "&#128064;", "&#127988;" ];
    var metadataArray = ["Ov. met.:", "Verwandlung:", "Grund:", "Urheber:in:", "Ort:", "Vergleichswerke:", "Iconclass:" ];
    var dataArray = [data.ovMet, data.verwandlung, data.grund, data.verwandler, data.ort, data.vergleichswerke, data.iconclass];
    
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
        dataCol.innerHTML = dataArray[i]; //verwandlerText anlegen
        var verwandlerSup = document.createElement("sup"); //sup anlegen
        dataCol.appendChild(verwandlerSup);
        var verwandlerLink = document.createElement("a"); //link anlegen
        var verwandlerLinkInput = "https://de.wikipedia.org/wiki/" + dataArray[i];
        verwandlerLink.setAttribute("href", verwandlerLinkInput);
        verwandlerLink.setAttribute("target", "_blank");
        verwandlerLink.innerHTML = "  &#x2139;";
        verwandlerSup.appendChild(verwandlerLink);
        //alternativ mit Link auf Text:
        // var verwandlerLink = document.createElement("a"); //link anlegen
        // var verwandlerLinkInput = "https://de.wikipedia.org/wiki/" + dataArray[i];
        // verwandlerLink.setAttribute("href", verwandlerLinkInput);
        // verwandlerLink.setAttribute("target", "_blank");
        // verwandlerLink.innerHTML = dataArray[i];
        // dataCol.appendChild(verwandlerLink);
      
      //Iconclasstext + Infolink
      } else if (i === 5) {
        if (dataArray[i].warburg != "-") {
          var warburgLink = document.createElement("a");
          warburgLink.setAttribute("href", dataArray[i].warburg);
          warburgLink.setAttribute("target", "_blank");
          warburgLink.innerHTML = "&#x2B95; Warburg Institute Iconographic Database";
          dataCol.appendChild(warburgLink);
  
          dataCol.appendChild(document.createElement("br"));
        }
        if (dataArray[i].bdo != "-") {
          var bdoLink = document.createElement("a");
          bdoLink.setAttribute("href", dataArray[i].bdo);
          bdoLink.setAttribute("target", "_blank");
          bdoLink.innerHTML = "&#x2B95; BDO Biblioteca Digital Ovidiana";
          dataCol.appendChild(bdoLink);

          dataCol.appendChild(document.createElement("br"));
        }
        if (dataArray[i].wiki != "-") {
          var wikiLink = document.createElement("a");
          wikiLink.setAttribute("href", dataArray[i].wiki);
          wikiLink.setAttribute("target", "_blank");
          wikiLink.innerHTML = "&#x2B95; Wikimedia Commons";
          dataCol.appendChild(wikiLink);
        }

      
      } else if (i === 6) {
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
      };
      

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


    modalContentDiv.appendChild(document.createElement("br")); //sonst ist Details schon im Halbdunkel
    modalContentDiv.appendChild(document.createElement("br"));


    var footerDiv = document.createElement("div");
    footerDiv.className = "metamorphosenModalFooter";
    footerDiv.appendChild(document.createElement("br"));
    footerDiv.appendChild(document.createElement("br"));
    footerDiv.appendChild(document.createElement("br"));
    modalContentDiv.appendChild(footerDiv);
    

    var buttonSpan = document.createElement("span");
    buttonSpan.innerHTML = "<img src='Icons/iconmonstr-x-mark-1-240 (2).png' style='width: 15px;'>";
    buttonSpan.onclick = function() { modalDiv.style.display = "none" };
    buttonSpan.style.position = "fixed";
    buttonSpan.style.left = "76%";
    buttonSpan.style.top = "19%";
    buttonSpan.style.cursor = "pointer";
    modalContentDiv.appendChild(buttonSpan);


    // var buttonSpan = document.createElement("span");
    // buttonSpan.setAttribute("align", "center");
    // buttonSpan.className = "modalBtns";
    // buttonSpan.innerHTML = "SCHLIESSEN";
    // buttonSpan.onclick = function() { modalDiv.style.display = "none" };
    // modalContentDiv.appendChild(buttonSpan);


    // modalContentDiv.appendChild(document.createElement("br"));

    return modalDiv;
  }




  //--------------------------------------------//
  //              Modal-Aufrufe                 //
  //            > automatisieren                //
  //--------------------------------------------//
  
  
  function modalAufruf(data) {
    var currentModal = createModal(data);
    var currentBtn = document.getElementById(data.id + "Btn");

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
      createIconAndPopover(leude[key]);
      //iconPositioning(leude[key]);
      //createPopover(leude[key]);
      //popoverAufruf(leude[key]);
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
        
      
      //modalNow.style.animationFillMode = "backwards";
      //modalNow.style.animationPlayState = "running";
      modalNow.style.display = "none";

      modalWanted.style.display = "block";
      modalWanted.style.animationFillMode = "forwards";
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

  var alphaBtn = document.getElementById("alpha");
  var alphaImg = document.getElementById("alphabet");

  var textBtn = document.getElementById("text");
  var textImg = document.getElementById("fliesstext");

  var grundBtn = document.getElementById("grund");
  var grundImg = document.getElementById("verwandlungsgrund")
















  //Chronologie

  for (key in leude){

    var iconWrapper = document.getElementById(key + "Wrapper");
    var ovMetStelle = document.createElement("div");
    ovMetStelle.className = "ovMetStelle";
    ovMetStelle.style.textAlign = "center";
    ovMetStelle.innerHTML = leude[key].ovMet;
    //ovMetStelle.style.position = "absolute";
    ovMetStelle.style.fontFamily = "'Crimson Text', serif";
    ovMetStelle.style.fontSize = "10px";
    ovMetStelle.style.display = "none";
    iconWrapper.appendChild(ovMetStelle);

  }

  // var backgroundDiv = document.createElement("div");
  // backgroundDiv.className = "ovMetStelle";
  // backgroundDiv.style.textAlign = "center";
  // ovMetStelle.innerHTML = leude[key].ovMet;
  // //ovMetStelle.style.position = "absolute";
  // ovMetStelle.style.fontFamily = "'Crimson Text', serif";
  // ovMetStelle.style.fontSize = "10px";
  // ovMetStelle.style.display = "none";
  // chronoImg.appendChild(ovMetStelle);


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
    text.style.top = fromTop - 1 + "%";
    text.style.left = startLeft - 10 + "%";
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


  

  var startIconsBy = 20; //from left
  var abstaendeZwischenIcons = 5;
  var erstePentadeFromTop = 25;
  var zweitePentadeFromTop = 50;
  var drittePentadeFromTop = 75;
  var iconPosition = startIconsBy;

  //var figuresListSorted = [];
  //var ovMetListSorted = [];

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
  chronoBtn.onclick = function () {
    taxImg.style.display = "none";
    var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
    for (var x = 0; x < taxonomieNames.length; x++) {
      taxonomieNames[x].style.display = "none";
    }
    
    geoImg.style.display = "none";
    for (var figur in leude){ //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = 1;
    }

    alphaImg.style.display = "none";
    var alphabetNames = document.getElementsByClassName("alphabetNames"); 
    for (var x = 0; x < alphabetNames.length; x++) {
      alphabetNames[x].style.display = "none";
    }

    textImg.style.display = "none";


    grundImg.style.display = "none";

    setCoordinates(ersterKlickChrono);
    chronoImg.style.display = "block";

    ersterKlickChrono = false;
    var ovMetStellen = document.getElementsByClassName("ovMetStelle"); 
    for (var x = 0; x < ovMetStellen.length; x++) {
      ovMetStellen[x].style.display = "block";
    }
  }













  //Taxonomie


  for (key in leude){
    var iconWrapper = document.getElementById(key + "Wrapper");
    var pTaxonomie = document.createElement("div");
    pTaxonomie.className = "taxonomieNames";
    pTaxonomie.innerHTML = leude[key].verwandlung;
    iconWrapper.appendChild(pTaxonomie);
  }

  taxBtn.onclick = function () {
    chronoImg.style.display = "none"; 
    var ovMetStelle = document.getElementsByClassName("ovMetStelle"); 
    for (var x = 0; x < ovMetStelle.length; x++) {
      ovMetStelle[x].style.display = "none";
    }
    
    geoImg.style.display = "none";
    for (var figur in leude){ //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = 1;
    }

    alphaImg.style.display = "none";
    var alphabetNames = document.getElementsByClassName("alphabetNames"); 
    for (var x = 0; x < alphabetNames.length; x++) {
      alphabetNames[x].style.display = "none";
    }
    
    
    taxImg.style.display = "block";
    taxImg.style.animationPlayState = "running";
    var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
    for (var x = 0; x < taxonomieNames.length; x++) {
      taxonomieNames[x].style.display = "block";
    }

    textImg.style.display = "none";

    grundImg.style.display = "none";


    
    //faunaDiv-data als startpunkt
    var figurPositionFaunaTop = document.getElementById("fauna").offsetTop;
    var figurPositionFaunaLeft = document.getElementById("fauna").offsetLeft + 150; //letzte Zahl damit Titel noch gelesen werden kann

    //floraDiv-data als startpunkt 
    var figurPositionFloraTop = document.getElementById("flora").offsetTop;
    var figurPositionFloraLeft = document.getElementById("flora").offsetLeft + 150;

    var figurPositionElementeTop = document.getElementById("elemente").offsetTop;
    var figurPositionElementeLeft = document.getElementById("elemente").offsetLeft + 150;

    var figurPositionSonstigesTop = document.getElementById("sonstiges").offsetTop;
    var figurPositionSonstigesLeft = document.getElementById("sonstiges").offsetLeft + 150;

    

    //mitzählen für Prozentangaben
    var countFauna = 0;
    var countFlora = 0;
    var countElemente = 0;
    var countSonstiges = 0;

    

    for (var figur in leude){
      
      //ICONS VERSCHIEBEN
      var figurIcon = document.getElementById(figur + "Wrapper");
      //var figurPopover = document.getElementById(figur + "Popover");
      
      
      //der richtigen Taxonomie zuordnen
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
        //figurPopover.style.top = figurPositionFloraTop - (-10) + "px"; //= (data.koordinaten.unorganisiert.top - (-10)) + "%";
        //figurPopover.style.left = figurPositionFloraLeft -15 + "px"; //= (data.koordinaten.unorganisiert.left - 15)+ "%";

        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        figurPositionFloraLeft += figurIcon.offsetWidth;

        countFlora +=1;

      } else if (leude[figur].taxonomie == "elemente"){

        figurIcon.style.top = figurPositionElementeTop + "px";
        figurIcon.style.left = figurPositionElementeLeft + "px";

        figurPositionElementeLeft += figurIcon.offsetWidth;

        countElemente +=1;


      } else if (leude[figur].taxonomie == "sonstiges"){
        
        figurIcon.style.top = figurPositionSonstigesTop + "px";
        figurIcon.style.left = figurPositionSonstigesLeft + "px";

        figurPositionSonstigesLeft += figurIcon.offsetWidth;

        countSonstiges += 1;
      }
      
       
       
    }


    

    //balkenlaengen 
    document.getElementById("fauna").style.width = figurPositionFaunaLeft + "px";
    document.getElementById("flora").style.width = figurPositionFloraLeft + "px";
    document.getElementById("elemente").style.width = figurPositionElementeLeft + "px";
    document.getElementById("sonstiges").style.width = figurPositionSonstigesLeft + "px";

    //prozentangaben taxonomie
    var all = countFauna + countFlora + countElemente + countSonstiges;
    // var percentNumbers = [(countFauna/all*100), (countFlora/all*100), (countElemente/all*100), (countSonstiges/all*100)];
    // var percentNumbers = [(countFauna/all*100).toString().slice(0,4), (countFlora/all*100).toString().slice(0,4), (countElemente/all*100).toString().slice(0,4), (countSonstiges/all*100).toString().slice(0,4)];
    var percentNumbers = [Math.round(countFauna/all*100*10)/10, Math.round(countFlora/all*100*10)/10, Math.round(countElemente/all*100*10)/10, Math.round(countSonstiges/all*100*10)/10];

    var percentPArray = document.getElementsByClassName("percentTopright");

    var p = 0;
    for (var percentP = 0; percentP < percentPArray.length; percentP++) {
      percentPArray[percentP].innerHTML = percentNumbers[p] + "%";
      percentPArray[percentP].style.display = "block";
      p++;
    }

    
    
    
  }

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



  







  //Geographie
  geoBtn.onclick = function () {
    taxImg.style.display = "none";
    var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
    for (var x = 0; x < taxonomieNames.length; x++) {
      taxonomieNames[x].style.display = "none";
    }

    chronoImg.style.display = "none";
    var ovMetStelle = document.getElementsByClassName("ovMetStelle"); 
    for (var x = 0; x < ovMetStelle.length; x++) {
      ovMetStelle[x].style.display = "none";
    }

    alphaImg.style.display = "none";
    //alphabetNames ausblenden, nach Alphabet-Funktion
    var alphabetNames = document.getElementsByClassName("alphabetNames"); 
    for (var x = 0; x < alphabetNames.length; x++) {
      alphabetNames[x].style.display = "none";
    }

    geoImg.style.display = "block";
    geoImg.style.animationPlayState = "running";


    textImg.style.display = "none";

    grundImg.style.display = "none";


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



  
  //Alphabet

  for (key in leude){

    var iconWrapper = document.getElementById(key + "Wrapper");
    var figurName = document.createElement("div");
    figurName.className = "alphabetNames";
    figurName.innerHTML = leude[key].name;
    figurName.style.position = "absolute";
    figurName.style.fontFamily = "'Crimson Text', serif";
    figurName.style.fontSize = "10px";
    figurName.style.display = "none";
    figurName.style.left = leude[key].width + "px";
    iconWrapper.appendChild(figurName);

  }


  var unsortedIds = [];
  for (var figur in leude){
    unsortedIds.push(leude[figur].id);
  }
  var sortedIds = unsortedIds.sort();


  var ersterKlickAlpha = true;
  alphaBtn.onclick = function () {


    taxImg.style.display = "none";
    var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
    for (var x = 0; x < taxonomieNames.length; x++) {
      taxonomieNames[x].style.display = "none";
    }

    chronoImg.style.display = "none";
    var ovMetStelle = document.getElementsByClassName("ovMetStelle"); 
    for (var x = 0; x < ovMetStelle.length; x++) {
      ovMetStelle[x].style.display = "none";
    }

    geoImg.style.display = "none";
    for (var figur in leude){ //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = 1;
    }


    textImg.style.display = "none";

    
    grundImg.style.display = "none";

    alphaImg.style.display = "block";
    var alphaNames = document.getElementsByClassName("alphabetNames");
    for (var i = 0; i < alphaNames.length; i++){
      //alphaNames[i].style.display = "block";
      var iconWrapper = document.getElementById(alphaNames[i].parentElement.id);
      var wrapperHeight = iconWrapper.offsetHeight;
      console.log(wrapperHeight);
      var alphaNamesHeight = alphaNames[i].scrollHeight; //WARUM FUNKTIONIERT DAS NICHT?
      console.log(alphaNames[i] + alphaNamesHeight);
      //unschöne Notlösung
      alphaNames[i].style.top = wrapperHeight/2 - 5 + "px";

    }

    
    var alphaDiv = document.getElementById("alphabet");
    var startFromTop = 10;
    var startFromLeft = 10;
    var spaceBetweenIconsHorizontally = 18;
    var spaceBetweenLetterBlocksHorizontally = 15;
    var spaceBetweenIconsVertically = 10;

    var topPosition = startFromTop; //ändern sich im Laufe der Schleife
    var leftPosition = startFromLeft;


    for (var id = 0; id < sortedIds.length; id++){

      if (topPosition >= 70) { // nach unten scrollen verhindern, indem topPosition wieder auf Anfang und leftPosition größer
        topPosition = startFromTop;
        leftPosition += spaceBetweenIconsHorizontally;
      }
      
      var letter = sortedIds[id].slice(0,1).toUpperCase(); //nur Anfangsbuchstaben in groß
        



      if (id == 0 || letter != sortedIds[id - 1].slice(0, 1).toUpperCase()) { //checken, dass Anfangsbuchstabe nicht bereits angezeigt wird

        if (ersterKlickAlpha) {
          var letterDiv = document.createElement("h1");
          letterDiv.innerHTML = letter;
          letterDiv.style.position = "absolute";
          letterDiv.style.top = topPosition + "%";
          letterDiv.style.left = leftPosition + "%";
          letterDiv.style.color = "#733030";
          letterDiv.style.animation = "slowOpacity";
          letterDiv.style.animationDuration = "2s";
          alphaDiv.appendChild(letterDiv);
        }

        topPosition += spaceBetweenLetterBlocksHorizontally;

      }


   
      var figurIcon = document.getElementById(sortedIds[id] + "Wrapper"); //get IconWrapper 
      figurIcon.style.top = topPosition + "%";
      figurIcon.style.left = (leftPosition + 1.5) + "%";

      topPosition += spaceBetweenIconsVertically;


      
      

    }


   
    var alphabetNames = document.getElementsByClassName("alphabetNames"); 
    for (var x = 0; x < alphabetNames.length; x++) {
      alphabetNames[x].style.display = "block";
    }
      



    ersterKlickAlpha = false;
  }




  //Fließtext
  
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
    header.innerHTML = "<br>" + metamorphosen[key].name + " (" + metamorphosen[key].stelle + ")";
    contentDiv.appendChild(header);

    var contentP = document.createElement("p");
    contentDiv.className = "textModalContent";
    /*contentDiv.style = "padding: 25px 50px 0px";*/
    contentP.innerHTML = metamorphosen[key].text;
    contentDiv.appendChild(contentP);
    

  }
  var footer = document.createElement("div");
  footer.className = "textModalFooter";
  footer.appendChild(document.createElement("br"));
  //footer.appendChild(document.createElement("br"));
  textModalDiv.appendChild(footer);
  // for (var key in leude){
  //   var zugehoerigeGeschichte = document.getElementById(leude[key].id);
  //   var getWrapper = leude[key].id + "Wrapper";
  //   console.log(zugehoerigeGeschichte.offsetTop)
  // }

  // //close-Btn
  // var buttonSpan = document.createElement("span");
  // buttonSpan.setAttribute("align", "center");
  // buttonSpan.className = "modalBtns";
  // buttonSpan.innerHTML = "SCHLIESSEN";
  // buttonSpan.onclick = function() { textModalDiv.style.display = "none" };
  // contentDiv.appendChild(buttonSpan);

  textBtn.onclick = function () {
    textImg.style.display = "block";

    taxImg.style.display = "none";
    var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
    for (var x = 0; x < taxonomieNames.length; x++) {
      taxonomieNames[x].style.display = "none";
    }

    chronoImg.style.display = "none";
    var ovMetStelle = document.getElementsByClassName("ovMetStelle"); 
    for (var x = 0; x < ovMetStelle.length; x++) {
      ovMetStelle[x].style.display = "none";
    }

    geoImg.style.display = "none";
    for (var figur in leude){ //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = 1;
    }
    
    alphaImg.style.display = "none";
    //alphabetNames ausblenden, nach Alphabet-Funktion
    var alphabetNames = document.getElementsByClassName("alphabetNames"); 
    for (var x = 0; x < alphabetNames.length; x++) {
      alphabetNames[x].style.display = "none";
    }

    grundImg.style.display = "none";

  }


  //Unorganisiert
  var unorgBtn = document.getElementById("unorganisiert");

  unorgBtn.onclick = function () {
    //taxImg.style.opacity = "0";
    taxImg.style.display = "none";
    var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
    for (var x = 0; x < taxonomieNames.length; x++) {
      taxonomieNames[x].style.display = "none";
    }

    chronoImg.style.display = "none";
    var ovMetStelle = document.getElementsByClassName("ovMetStelle"); 
    for (var x = 0; x < ovMetStelle.length; x++) {
      ovMetStelle[x].style.display = "none";
    }

    //geoImg.style.opacity = "0";
    geoImg.style.display = "none";
    for (var figur in leude){ //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = 1;
    }

    //alphaImg.style.opacity = "0";
    alphaImg.style.display = "none";
    //alphabetNames ausblenden, nach Alphabet-Funktion
    var alphabetNames = document.getElementsByClassName("alphabetNames"); 
    for (var x = 0; x < alphabetNames.length; x++) {
      alphabetNames[x].style.display = "none";
    }

    textImg.style.display = "none";

    grundImg.style.display = "none";

    for (var figur in leude){
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.top = leude[figur].koordinaten.unorganisiert.top + "%";
      figurIcon.style.left = leude[figur].koordinaten.unorganisiert.left + "%";
    }
  }






  //Verwandlungsgrund

  grundBtn.onclick = function () {
    

    taxImg.style.display = "none";
    var taxonomieNames = document.getElementsByClassName("taxonomieNames"); 
    for (var x = 0; x < taxonomieNames.length; x++) {
      taxonomieNames[x].style.display = "none";
    }

    chronoImg.style.display = "none";
    var ovMetStelle = document.getElementsByClassName("ovMetStelle"); 
    for (var x = 0; x < ovMetStelle.length; x++) {
      ovMetStelle[x].style.display = "none";
    }

    //geoImg.style.opacity = "0";
    geoImg.style.display = "none";
    for (var figur in leude){ //damit Icons, die nicht verortet werden können, nach Geo-Funktion wieder auftauchen
      var figurIcon = document.getElementById(figur + "Wrapper");
      figurIcon.style.opacity = 1;
    }

    //alphaImg.style.opacity = "0";
    alphaImg.style.display = "none";
    //alphabetNames ausblenden, nach Alphabet-Funktion
    var alphabetNames = document.getElementsByClassName("alphabetNames"); 
    for (var x = 0; x < alphabetNames.length; x++) {
      alphabetNames[x].style.display = "none";
    }

    textImg.style.display = "none";

    grundImg.style.display = "block";





    // s. CSS positions
    var positionSchutzTop = 25; //document.getElementById("schutz").offsetTop;
    var positionSchutzLeft = 19;//document.getElementById("schutz").offsetLeft;

    var positionBestrafungTop = 25; //document.getElementById("bestrafung").offsetTop;
    var positionBestrafungLeft = 54; //document.getElementById("bestrafung").offsetLeft;

    var positionBegierdeTop = 54;//document.getElementById("begierde").offsetTop;
    var positionBegierdeLeft = 19; //document.getElementById("begierde").offsetLeft;

    var positionEhrungTop = 54;//document.getElementById("ehrung").offsetTop;
    var positionEhrungLeft = 54;//document.getElementById("ehrung").offsetLeft;

    var positionSonstigerGrundTop = 80; //document.getElementById("sonstigerGrund").offsetTop;
    var positionSonstigerGrundLeft = 25; //document.getElementById("sonstigerGrund").offsetLeft;

    

    //mitzählen für Prozentangaben
    var countSchutz = 0;
    var countBestrafung = 0;
    var countBegierde = 0;
    var countEhrung = 0;
    var countSonstigerGrund = 0;

    

    for (var figur in leude){
      
      //ICONS VERSCHIEBEN
      var figurIcon = document.getElementById(figur + "Wrapper");
      //var figurPopover = document.getElementById(figur + "Popover");
      
      
      //dem richtigen Grund zuordnen
      if (leude[figur].grund == "Schutz"){
        //console.log("figur zählt zu schutz");
        
        figurIcon.style.top = positionSchutzTop + "%";
        figurIcon.style.left = positionSchutzLeft + "%";
        
        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        positionSchutzLeft += 5; //figurIcon.offsetWidth;

        countSchutz += 1;

      } else if (leude[figur].grund == "Bestrafung"){
        //console.log("figur zählt zu bestrafung");
        
        figurIcon.style.top = positionBestrafungTop + "%";
        figurIcon.style.left = positionBestrafungLeft + "%";

        //Breite des gesetzten Icons zur Position des nächsten hinzufügen
        positionBestrafungLeft += 5; //figurIcon.offsetWidth;

        countBestrafung +=1;

      } else if (leude[figur].grund == "unerfüllte Begierde"){

        figurIcon.style.top = positionBegierdeTop + "%";
        figurIcon.style.left = positionBegierdeLeft + "%";

        positionBegierdeLeft += 5; //figurIcon.offsetWidth;

        countBegierde +=1;


      } else if (leude[figur].grund == "postume Ehrung"){
        
        figurIcon.style.top = positionEhrungTop + "%";
        figurIcon.style.left = positionEhrungLeft + "%";

        positionEhrungLeft += 5; //figurIcon.offsetWidth;

        countEhrung += 1;
      } else {
        
        figurIcon.style.top = positionSonstigerGrundTop + "%";
        figurIcon.style.left = positionSonstigerGrundLeft + "%";

        positionSonstigerGrundLeft += 5; //figurIcon.offsetWidth;

        countSonstigerGrund += 1;
      }
    }


    // //blocklaengen 
    // document.getElementById("fauna").style.width = figurPositionFaunaLeft + "px";
    // document.getElementById("flora").style.width = figurPositionFloraLeft + "px";
    // document.getElementById("elemente").style.width = figurPositionElementeLeft + "px";
    // document.getElementById("sonstiges").style.width = figurPositionSonstigesLeft + "px";

    //prozentangaben taxonomie
    var allGrund = countSchutz + countBegierde + countBestrafung + countEhrung + countSonstigerGrund;
    // var percentNumbers = [(countFauna/all*100), (countFlora/all*100), (countElemente/all*100), (countSonstiges/all*100)];
    // var percentNumbers = [(countFauna/all*100).toString().slice(0,4), (countFlora/all*100).toString().slice(0,4), (countElemente/all*100).toString().slice(0,4), (countSonstiges/all*100).toString().slice(0,4)];
    var percentNumbersGrund = [Math.round(countSchutz/allGrund*100*10)/10, Math.round(countBestrafung/allGrund*100*10)/10, Math.round(countBegierde/allGrund*100*10)/10, Math.round(countEhrung/allGrund*100*10)/10, Math.round(countSonstigerGrund/allGrund*100*10)/10];
    console.log(percentNumbersGrund);

    var percentPGrundArray = document.getElementsByClassName("percentToprightGrund");

    for (var g = 0; g < percentPGrundArray.length; g++) {
      percentPGrundArray[g].innerHTML = percentNumbersGrund[g] + "%";
      percentPGrundArray[g].style.display = "block";
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
    if (event.target == quizModal){
      quizModal.style.display = "none";
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