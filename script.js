export async function application() {


  //---------------------Start- & Info-Modal--------------------//



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





  //-----------------Metamorphosen-Modals---------------------//
  
  // Lycaon
  var lycaonModal = document.getElementById("lycaonModal");
  var lycaonBtn = document.getElementById("lycaonBtn");
  var xLycaon = document.getElementById("xLycaon");

  lycaonBtn.onclick = function () { // Open
    lycaonModal.style.display = "block";
  }
  xLycaon.onclick = function () { // Close
    lycaonModal.style.display = "none";
  }

  // Io
  var ioModal = document.getElementById("ioModal");
  var ioBtn = document.getElementById("ioBtn");
  var xIo = document.getElementById("xIo");

  ioBtn.onclick = function () { // Open
    ioModal.style.display = "block";
  }
  xIo.onclick = function () { // Close
    ioModal.style.display = "none";
  }

  // Actaeon
  var actaeonModal = document.getElementById("actaeonModal");
  var actaeonBtn = document.getElementById("actaeonBtn");
  var xActaeon = document.getElementById("xActaeon");

  actaeonBtn.onclick = function () { // Open
    actaeonModal.style.display = "block";
  }
  xActaeon.onclick = function () { // Close
    actaeonModal.style.display = "none";
  }





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







  //--------------Kategorien-----------------------//

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



  //---------------Personen--------------------------//

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







  //---------------- Lightbox ------------------//
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
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }



} //End of application-function 