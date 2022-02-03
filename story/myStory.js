const convAreas = [
  { lat: 43.8519712, lng: -78.9583349 },
  { lat: 43.9392489, lng: -78.9811295 },
  { lat: 43.85359, lng: -78.898358 },
  { lat: 44.009224, lng: -79.070157 },
  { lat: 44.002296, lng: -78.774953 },
  { lat: 43.9002, lng: -79.065092 },
  { lat: 44.297645, lng: -78.270045 },
  { lat: 44.321988, lng: -78.261056 },
];
let timedConvMarkers = [];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 44.17, lng: -78.609 },
  });

  for (let i = 0; i < convAreas.length; i++) {
      timeMarkerFall(convAreas[i], i * 100);
  }
  // Create the markers.
  function timeMarkerFall(position, timeout){
    window.setTimeout(() => {
      timedConvMarkers.push(
        new google.maps.Marker({
          position: position,
          map,
          animation: google.maps.Animation.DROP,
        })
      );
    }, timeout);
  }
}
