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
  function chrono() {
    console.log("Die Chronofunktion funktioniert");
  }

  //Taxonomie
  function tax() {
    console.log("Die Taxfunktion funktioniert");
  }

  //Geographie
  function geo() {
    console.log("Die Geofunktion funktioniert");
  }


}