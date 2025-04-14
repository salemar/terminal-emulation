var geojsonMarkerOptions = ({
    radius: 6,
    fillColor: "#b22222",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
});


var icon = L.geoJSON(points, {
    pointToLayer: function (feature, latlng) {
        console.log(feature)
        return L.circleMarker(latlng, geojsonMarkerOptions).bindPopup(feature.properties.Note + " " + feature.properties.Date);
    }
}).addTo(map);