console.log("hello world");

function initMap() {
    console.log('init map');
}


var button = document.querySelector('button');
var loc = document.querySelector('.loc');

button.addEventListener('click', getPosition);

function getPosition(e) {
    navigator.geolocation.getCurrentPosition(updateLocation);
}

//  setup callback when position is determined
// use the geolocation API

// callback function
function updateLocation(position) {
console.log("fn updatelocation");
console.log(position);
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

loc.textContent = longitude + ',' + latitude;
}




// google maps api part 1
function createGoogleMap() {
    var el = document.querySelector("#google-map");    
    var options = {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    };
    var map = new google.maps.Map(el, options);

    var marker = new.google.maps.Marker({
        map: map,
        position: {lat: lattitude, lng: longitude}
    });

}
