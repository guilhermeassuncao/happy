const option = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Create Map
const mymap = L.map("mapid", option).setView([-18.7171333, -39.8566417], 15)

//Create TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap)

//Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Create Add Marker
L.marker([-18.7171333, -39.8566417], {
        icon
    })
    .addTo(mymap)


//Selecionar Imagem
function selectImage(event) {
    const button = event.currentTarget;

    const buttons = document.querySelectorAll(".images button");

    buttons.forEach(removeActive)

    function removeActive(button) {
        button.classList.remove("active");
    }

    button.classList.add("active");

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src
}