//Create Map
const mymap = L.map("mapid").setView([-18.7171333,-39.8566417], 15)

//Create TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap)

//Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor:[170,2]
})

function addMarker({id, name, lat, lng}){
    //Create Popup
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg" /> </a>`)

    //Create Add Marker
    L.marker([lat,lng], {icon})
    .addTo(mymap)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('#orphanages span');

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }
    addMarker(orphanage)
})


console.log(orphanagesSpan);

