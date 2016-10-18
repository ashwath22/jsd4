//SETUP  

var counter = 0;

// Elements
var main = document.querySelector("main");

// Create Element
var p = document.createElement("p");
p.innerHTML = counter;
main.appendChild(p);

// Create Event
var me = document.createEvent("MouseEvent");
me.initEvent("click");

// Listen for an Event
main.addEventListener("click", clickCircle);

// Event Handler callback function
// ------------------------------------
function clickCircle(event) {
	// console.log(x);
	console.log("type: ", event.type);
	console.log("target: ", event.target);
	console.log("content of that element: ", event.target.innerHTML);
	counter++;
	console.log("count", counter);
	p.innerHTML = counter;
}