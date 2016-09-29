// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)
var street = ["110 Cherry Lane", "112 Mission Street", "113 Valencia Street"];
var city = ["San Francisco", "New York City", "Chicago", "Nashville", "Los Angeles"];
var state = ["California", "Illinois", "Tennessee", "California"];

// Event Listeners
// ------------------------------------------
function generateAddress(e) {
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address
var address = street[randomize(street.length)] + ', ' + city[randomize(city.length)] + ', ' + state[randomize(state.length)];
// console.log(address);
addAddress(address);
}

// Pass in array length and get back an index value
function randomize(i){
	return Math.floor(Math.random()*(i));
}

// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}




