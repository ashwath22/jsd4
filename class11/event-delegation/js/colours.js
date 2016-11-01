//Elements
var body = document.querySelector("body");
var ul = document.querySelector("ul");

// var red  = document.querySelector('.red');
// var olive  = document.querySelector('.olive');
// var rebeccapurple  = document.querySelector('.rebeccapurple');
// var skyblue  = document.querySelector('.skyblue');

// Event handlers
function changeColor(event){
	
	if (event.target.tagName != "LI"){
		console.log("No li clicked!!");
		return;
	}

	console.log(event);
	console.log(event.target.className);

	body.className = event.target.className;

}
// Events
ul.addEventListener("click", changeColor);

// function changeRed(){
// 	body.classList = "red";
// }

// function changeOlive(){
// 	body.classList = "olive";
// }

// function changeRebeccapurple(){
// 	body.className = "rebeccapurple";
// }

// function changeSkyblue(){
// 	body.className = "skyblue";
// }



// red.addEventListener("click", changeRed);
// olive.addEventListener("click", changeOlive);
// rebeccapurple.addEventListener("click", changeRebeccapurple);
// skyblue.addEventListener("click", changeSkyblue);
