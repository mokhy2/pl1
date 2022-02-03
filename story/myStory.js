const convAreas = [
  { lat: 43.854852, lng: -78.966963 },
  { lat: 43.9392489, lng: -78.9811295 },
  { lat: 43.85359, lng: -78.898358 },
  { lat: 44.009224, lng: -79.070157 },
  { lat: 44.002296, lng: -78.774953 },
  { lat: 43.9002, lng: -79.065092 },
  { lat: 44.297645, lng: -78.270045 },
  { lat: 44.321988, lng: -78.261056 },
];

const storyLinePoints = [
  { lat: 43.854852, lng: -78.966963 },
  { lat: 43.9392489, lng: -78.9811295 },
  { lat: 43.85359, lng: -78.898358 },
  { lat: 44.009224, lng: -79.070157 },
  { lat: 44.002296, lng: -78.774953 },
  { lat: 43.9002, lng: -79.065092 },
  { lat: 44.297645, lng: -78.270045 },
  { lat: 44.321988, lng: -78.261056 },
];

let timedConvMarkers = [];
let storyLinePath;

const markerLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let markerLabelIndex = 0;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 44.17, lng: -78.609 },
  });

  storyLinePath = new google.maps.Polyline({
    path: storyLinePoints,
    strokeColor: "#1fe058",
    strokeOpacity: 0.8,
    strokeWeight: 1.5,
  });

  document.getElementById("addStoryLine").addEventListener("click", addStoryPath);
  document.getElementById("removeStoryLine").addEventListener("click", removeStoryPath);
  addStoryPath();

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
          label: markerLabels[markerLabelIndex++ % markerLabels.length],
        })
      );
    }, timeout);
  }

}

function addStoryPath() {
  storyLinePath.setMap(map);
}

function removeStoryPath() {
  storyLinePath.setMap(null);
}
