const option = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Pegar Dados
const spanLat = document.querySelector('span[data-lat]').dataset.lat
const spanLng = document.querySelector('span[data-lng]').dataset.lng


//Create Map
const mymap = L.map("mapid", option).setView([spanLat, spanLng], 15)

//Create TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap)

//Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Create Add Marker
L.marker([spanLat, spanLng], {
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