function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 44.17, lng: -78.609 },
  });

  var convAreas = [
    { lat: 43.8519712, lng: -78.9583349 },
    { lat: 43.9392489, lng: -78.9811295 },
    { lat: 43.85359, lng: -78.898358 },
    { lat: 44.009224, lng: -79.070157 },
    { lat: 44.002296, lng: -78.774953 },
    { lat: 43.9002, lng: -79.065092 },
    { lat: 44.297645, lng: -78.270045 },
    { lat: 44.321988, lng: -78.261056 },
  ];
  // Create an info window to share between markers.
  var infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  convMarkers.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
