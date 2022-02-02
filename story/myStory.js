function initMap() {
  var markers;
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 44.170, lng: 78.609 },
      });

    marker = google.maps.Marker({
      map,
      animation: google.maps.Animation.DROP,
      position: convMarkers,
    });
  markers.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

const convMarkers = [
  { lat: 43.854, lng: -78.991 },
  { lat: 43.939, lng: -79.013 },
  { lat: 44.005, lng: -79.135 },
  { lat: 43.863, lng: -78.904 },
  { lat: 43.867, lng: -78.862 },
  { lat: 44.002, lng: -78.779 },
  { lat: 44.309, lng: -78.267 },
  { lat: 44.324, lng: -78.267 },
];