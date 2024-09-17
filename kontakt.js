
// HVL posisjon: lat: 60.36904535545673, lng: 5.350072840196482 
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: { lat: 60.3690453554567, lng: 5.350072840196482 },
    zoom: 15,
    mapId: "e1b5c8f5a7e3b6e",
  });

  marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: { lat: 60.3690453554567, lng: 5.350072840196482 },
    });
}

initMap();