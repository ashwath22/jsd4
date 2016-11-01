// Setup
// ----------------------------------------------
var light  = document.querySelector('#traffic-light');
var stop = document.querySelector(".control.stop-button");
var slow = document.querySelector(".control.slow-button");
var go = document.querySelector(".control.go-button");
var caution = document.querySelector(".control.caution-button");
var crazy = document.querySelector(".control.crazy-button");

var timeId = null;

// Structure
// ----------------------------------------------

function stopLight(){
	clear();
	console.log("Stop light is on now");
	light.classList.add('stop');
}	

function slowLight(){
	clear();
	console.log("Slow light is on now");
	light.classList.add('slow');
}	

function goLight(){
	clear();
	console.log("Go light is on now");
	light.classList.add('go');
}	

function clear(){
	clearTimeout(timeId);
	timeId = null;
	light.classList.remove('stop');
	light.classList.remove('slow');
	light.classList.remove('go');	

}

function slowBlink(){
	console.log("Slow light is blinking now");
	light.classList.toggle('slow');
	console.log(timeId);
}

function stopBlink(){
	console.log("Slow light is blinking now");
	light.classList.toggle('stop');
	console.log(timeId);
}

function goBlink(){
	console.log("Slow light is blinking now");
	light.classList.toggle('go');
	console.log(timeId);
}	

function cautionLight() {
	clear();
	console.log("caution!!")
	if(timeId == null){
		timeId = setInterval(slowBlink, 1000);
	}
}

function allOfLight() {
	clear();
	console.log("caution!!")
	if(timeId == null){
		timeId = setInterval(stopBlink, 1000);
		timeId = setInterval(slowBlink, 2000);
		timeId = setInterval(goBlink, 3000);
	}
}
// Events
// ----------------------------------------------


// Event handlers
// ----------------------------------------------
stop.addEventListener("click", stopLight);
slow.addEventListener("click", slowLight);
go.addEventListener("click", goLight);
caution.addEventListener("click", cautionLight);
crazy.addEventListener("click", allOfLight);