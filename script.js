async function loadJSON(path)
{    
    return fetch(path)
        .then((response) => {
            return response.json()
        })
}

export async function application() {


  //--------------------------------------------//
  //                 Modals                     //
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
  //            Metamorphosen-Modals            //
  //--------------------------------------------//

  const leude = await loadJSON('leude.json');

  

  // z.B. leude.acti
  function makeModal(data) {
    var modalDiv = document.createElement("div");
    modalDiv.className = "metamorphosenModal";
    document.body.appendChild(modalDiv);

    var modalHeaderDiv = document.createElement("div");
    modalHeaderDiv.className = "modalHeader";
    modalDiv.appendChild(modalHeaderDiv);

    var modalContentDiv = document.createElement("div");
    modalContentDiv.className = "modalContent";
    modalDiv.appendChild(modalContentDiv);

    var ueberschrift = document.createElement("h1");
    ueberschrift.innerHTML = data.name;
    modalContentDiv.appendChild(ueberschrift);

    var imgDiv = document.createElement("div");
    modalContentDiv.appendChild(imgDiv);

    //Nur bei kleinen Ansichten unter 1200px
    var imgKlein = document.createElement("img"); 
    imgKlein.className = "display-under-1200px";
    imgKlein.alt = data.alt;
    imgKlein.width = "300";
    imgKlein.src = data.img;
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
    img.width = "300";
    img.src = data.img;
    tableCol.appendChild(img);


    var tableCol2 = document.createElement("td");
    tableRow.appendChild(tableCol2);


    //innerTable
    var innerTable = document.createElement("table");
    
    var emojiArray = ["&#x1F4CD;", "&#x1F32A;", "&#x2754;", "&#x1F464;", "&#x1F5FA;", "&#127988;"];
    var metadataArray = ["Ov. met.:", "Verwandlung:", "Grund:", "Verwandler:", "Ort:", "Iconclass"];
    var dataArray = [data.ovMet, data.verwandlung, data.grund, data.verwandler, data.ort, data.iconclass];
    
    for (var i = 0; i < 6; i++) {
      var innerTableRow = document.createElement("tr");
      innerTable.appendChild(innerTableRow);

      var emojiCol = document.createElement("td");
      innerTableRow.appendChild(emojiCol);
      emojiCol.innerHTML = emojiArray[i];

      var metadataCol = document.createElement("td");
      metadataCol.className = "hide-under-700px";
      innerTableRow.appendChild(metadataCol);
      metadataCol.innerHTML = metadataArray[i];

      var dataCol = document.createElement("td");
      innerTableRow.appendChild(dataCol);
      dataCol.innerHTML = dataArray[i];

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
    buttonSpan.className = "modalBtns";
    buttonSpan.innerHTML = "SCHLIESSEN";
    buttonSpan.onclick = function() { modalDiv.style.display = "none" };
    modalContentDiv.appendChild(buttonSpan);


    modalContentDiv.appendChild(document.createElement("br"));

    return modalDiv;
  }


  // Lycaon
  var lycaonModal = makeModal(leude.lyci);
  var lycaonBtn = document.getElementById("lycaonBtn");

  lycaonBtn.onclick = function () { // Open
    lycaonModal.style.display = "block";
  }


  // Io
  var ioModal = makeModal(leude.ioi);
  var ioBtn = document.getElementById("ioBtn");

  ioBtn.onclick = function () { // Open
    ioModal.style.display = "block";
  }


  // Actaeon
  var actaeonModal = makeModal(leude.acti);
  var actaeonBtn = document.getElementById("actaeonBtn");

  actaeonBtn.onclick = function () { // Open
    actaeonModal.style.display = "block";
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
    if (event.target == lycaonModal) {
      lycaonModal.style.display = "none";
    }
    if (event.target == ioModal) {
      ioModal.style.display = "none";
    }
    if (event.target == actaeonModal) {
      actaeonModal.style.display = "none";
    }
  }








  //--------------------------------------------//
  //                 Kategorien                 //
  //--------------------------------------------//

  //Chronologie
  var chrono = document.getElementById("chrono");

  chrono.onclick = function () {
    chrono.style.display = "none";
    console.log("Die Chronofunktion funktioniert");
  }



  //Taxonomie
  var taxBtn = document.getElementById("tax");
  var taxImg = document.getElementById("taxonomie");

  taxBtn.onclick = function () {
    taxImg.style.animationPlayState = "running";
    console.log("Die Taxfunktion funktioniert");
  }

  //Geographie
  var geo = document.getElementById("geo");

  geo.onclick = function () {
    geo.style.display = "none";
    console.log("Die Geofunktion funktioniert");
  }


  //Unorganisiert
  var unorgBtn = document.getElementById("unorganisiert");

  unorgBtn.onclick = function () {
    taxImg.style.display = "none";
  }




  /* Test JavaScript Animation
  
  
    var animate, left = 0, imgObj = null;
  
    function init() {
  
      imgObj = document.getElementById('myImage');
      imgObj.style.position = 'absolute';
      imgObj.style.top = '240px';
      imgObj.style.left = '-300px';
      imgObj.style.visibility = 'hidden';
  
      moveRight();
    }
  
    function moveRight() {
      left = parseInt(imgObj.style.left, 10);
  
      if (10 >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.visibility = 'visible';
  
        animate = setTimeout(function () { moveRight(); }, 20); // call moveRight in 20msec
  
        //stopanimate = setTimeout(moveRight,20);
      } else {
        stop();
      }
      //f();
    }
  
    function stop() {
      clearTimeout(animate);
    }
  
    window.onload = function () { init(); };
  */






  //--------------------------------------------//
  //                  Personen                  //
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