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

//Create Add Marker
// L.marker([-18.7171333, -39.8566417], {
//         icon
//     })
//     .addTo(mymap)