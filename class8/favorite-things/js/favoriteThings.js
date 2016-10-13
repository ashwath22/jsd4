// Elements
// ------------------------------------------
var form = document.querySelector("body form");



// get parent list from the document
var things = document.querySelector(".things")
	
// Events
// ------------------------------------------
form.addEventListener('submit', createThing);


// Update page
// ------------------------------------------
function createThing(e) {
	e.preventDefault();
	console.log('createThing');

	// TODO: take value typed into input box and 
	// add to list
	var thing = document.querySelector(".new-thing");
	console.log(thing);
	console.log(thing.value);
	
	// step 1: create the element 
	var li = document.createElement("li");

	// step 2: add content & attributes
	li.innerHTML = thing.value;

	// step 3: add the new element to the DOM
	things.appendChild(li);

	// step 4: cleanup
	thing.value = ""; 

}

