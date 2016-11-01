// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");




// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(e) {
	// suppress events, forms and buttons if necessary.
	e.preventDefault();
	console.log(zip.value);

	var search = zip.value;

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;
	jQuery.getJSON(url,updateRestaurants);
	zip.value = "";

}

// Update page
// ------------------------------------
function updateRestaurants(json) {
	console.log("updateRestaurants", json);
	json.restaurants.forEach(createRestaurant) 
}

function createRestaurant(restaurant){
	console.log(restaurant.name);
}