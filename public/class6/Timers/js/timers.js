console.log("hello world");

// setTimeout(changeGreen, 3000);
// setInterval(changeYellow, 3000);


var color = "off";
var timeId = null;
var flashId = null;
// Timer function
function changeColor(){
	if (color == "red"){
		changeGreen();
	} else if (color == "green"){
		color = changeYellow();
	} else if (color == "yellow"){
		color = changeRed();
	}
}
// blink mode
function nightMode(){
	if (color == "off"){
		color = changeYellow();
	} else if (color == "yellow"){
		color = offMode();
	}
}


function start(){
	// timeId = setInterval(changeColor, 2000);
	clearInterval(flashId);
	if(timeId == null){
		timeId = setInterval(changeColor, 2000);
	} else {
		console.error("already started")
	}

}

function stop(){
	clearInterval(timeId);
}

// function to stop traffic lights and then start blink mode
function flash(){
	changeYellow();
	stop();
	flashId = setInterval(nightMode, 1000);
}

function changeGreen(){
	console.log("Green");
	color = "green";
}

function changeYellow(){
	console.log("Yellow");
	return "yellow"
}


function offMode(){
	console.log("off");
	return "off";
}

function changeRed(){
	console.log("Red");
	return "red";
}
