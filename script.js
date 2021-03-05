export async function application() {


  //---------------------Modals--------------------//



  // Get the startModal
  var startModal = document.getElementById("startModal");
  // Get the <span> element that closes the startModal
  var spanStart = document.getElementById("closeStartModal");
  // When the user clicks on <span> (x), close the startModal
  spanStart.onclick = function() {
    startModal.style.display = "none";
  }

  // Get the infoModal
  var infoModal = document.getElementById("infoModal");
  // Get the button that opens the infoModal
  var infoBtns = document.getElementsByClassName("infoBtn");
  console.log(infoBtns);
  // Get the <span> element that closes the infoModal
  var spanInfo = document.getElementsByClassName("closeInfoModal");
  // When the user clicks the button, open the infoModal
  for (var i = 0; i < infoBtns.length; i++) {
    infoBtns[i].onclick = function() {
      infoModal.style.display = "block";
      startModal.style.display = "none";
    }
  } 
  // When the user clicks on <span>, close the infoModal
  spanInfo.onclick = function() {
    infoModal.style.display = "none";
  }
  // When the user clicks anywhere outside of the startModal or infoModal, close it
  window.onclick = function(event) {
    if (event.target == startModal) {
      startModal.style.display = "none";
    }
    if (event.target == infoModal) {
      infoModal.style.display = "none";
    }
  }




  //--------------Kategorien-----------------------//

  //Chronologie

   var chrono = document.getElementById("chrono");

   chrono.onclick = function() {
    chrono.style.display = "none";
    console.log("Die Chronofunktion funktioniert");
   }

  //Taxonomie
  var tax = document.getElementById("tax");

  tax.onclick = function() {
    tax.style.display = "none";
    console.log("Die Taxfunktion funktioniert");
  }

  //Geographie
  var geo = document.getElementById("geo");

  geo.onclick = function() {
   geo.style.display = "none";
   console.log("Die Geofunktion funktioniert");
  }


  //---------------Personen--------------------------//

  //Zeus
  var zeusButton = document.getElementById("onlyZeus");

  var allZeus = document.getElementsByClassName("Zeus");

  zeusButton.onclick = function () {

    if (allZeus[0].style.display === "none") {
      for (var i = 0; i < allZeus.length; i++) {
        allZeus[i].style.display = "block";
      }
    } else {
      for (var i = 0; i < allZeus.length; i++) {
        allZeus[i].style.display = "none";
      }
    }
    console.log("Die OnlyZeusFunktion funktioniert");
  }


  //Hera

  //Artemis 

} //End of application-function 