function initMap() {
  const map = new google.maps.Map(document.getElementById("conservMap"), {
    zoom: 10,
    center: { lat: 44.17, lng: -78.609 },
  });

  var convAreas = [
    [{ lat: 43.8519712, lng: -78.9583349 }, "Lynde Shores Conservation Area"],
    [{ lat: 43.9392489, lng: -78.9811295 }, "Heber Down Conservation Area"],
    [{ lat: 43.85359, lng: -78.898358 }, "Thicksons Woods"],
    [{ lat: 44.009224, lng: -79.070157 }, "Glen Major"],
    [{ lat: 44.002296, lng: -78.774953 }, "Enniskillen Conservation Area"],
    [{ lat: 43.9002, lng: -79.065092 }, "Greenwood Conservation Area"],
    [{ lat: 44.297645, lng: -78.270045 }, "Mark S. Burnham Provincial Park"],
    [{ lat: 44.321988, lng: -78.261056 }, "Harold Town Conservation Area"],
  ];
  // Create an info window to share between markers.
  var infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  convAreas.forEach(([position, title], i) => {
    var marker = new google.maps.Marker({
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
