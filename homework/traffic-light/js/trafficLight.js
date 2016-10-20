// Setup
// ----------------------------------------------
var light  = document.querySelector('#traffic-light');
var stop = document.querySelector(".control.stop-button");
var slow = document.querySelector(".control.slow-button");
var go = document.querySelector(".control.go-button");
var caution = document.querySelector(".control.caution-button");
// var crazy = document.querySelector(".control.crazy-button");

var timeId = null;
var flashId = null;

// Structure
// ----------------------------------------------

function stopLight(){
	clear();
	clearTimeout(timeId);
	console.log("Stop light is on now");
	light.classList.add('stop');
}	

function slowLight(){
	clear();
	clearTimeout(timeId);
	console.log("Slow light is on now");
	light.classList.add('slow');
}	

function goLight(){
	clear();
	clearTimeout(timeId);
	console.log("Go light is on now");
	light.classList.add('go');
}	

function clear(){
	light.classList.remove('stop');
	light.classList.remove('slow');
	light.classList.remove('go');	

}

function slowBlink(){
	console.log("Slow light is blinking now");
	light.classList.toggle('slow');
}	

function cautionLight() {
	clear();
	console.log("caution!!")
	timeId = setInterval(slowBlink,1000);
}

// Events
// ----------------------------------------------


// Event handlers
// ----------------------------------------------
stop.addEventListener("click", stopLight);
slow.addEventListener("click", slowLight);
go.addEventListener("click", goLight);
caution.addEventListener("click", cautionLight);
// crazy.addEventListener("click", crazyLight);