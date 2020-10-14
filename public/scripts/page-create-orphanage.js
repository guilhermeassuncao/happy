//Create Map
const mymap = L.map("mapid").setView([-18.7171333, -39.8566417], 15)

//Create TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap)

//Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//Create Add Marker
mymap.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && mymap.removeLayer(marker)

    marker = L.marker([lat, lng], { icon }).addTo(mymap)
})

function addPhotoField() {
    const container = document.querySelector('#images')

    const fieldsContainer = document.querySelectorAll('.new-upload')

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    input.value = ""

    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    console.log(event);
}