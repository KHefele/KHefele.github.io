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

    for (var key in leude){
        console.log(leude[key]);

        var image = document.createElement("img");
        document.body.appendChild(image);
        image.setAttribute("src", "Figuren/" + leude[key].id + "/icon.png");
        image.setAttribute("height", imgWidth + "px");
        //image.style.left = fromLeft + "%";
        //image.style.top = fromTop + "%";
    };
}