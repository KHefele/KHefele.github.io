async function loadJSON(path) {
    return fetch(path)
      .then((response) => {
        return response.json()
    })
}
  
export async function application() {
    const leude = await loadJSON('leude.json'); // für Modals & Popover

    //var fromLeft = 10; //in %
    //var fromTop = 10; //in %
    var imgWidth = 80; //in px

    var count = 0;

    for (var key in leude){
        if (count == 2){
            var image = document.createElement("img");
            document.body.appendChild(image);
            image.setAttribute("src", "Figuren/" + leude.hyacinthus.id + "/icon.png");
            image.setAttribute("height", imgWidth + "px");
        
        } else if (count == 9){
            var image = document.createElement("img");
            document.body.appendChild(image);
            image.setAttribute("src", "Figuren/" + leude.actaeon.id + "/icon.png");
            image.setAttribute("height", imgWidth + "px");
        }else {
            var image = document.createElement("img");
            document.body.appendChild(image);
            image.setAttribute("src", "Figuren/" + leude[key].id + "/icon.png");
            image.setAttribute("height", imgWidth + "px");
        }
        count++;

    };
}