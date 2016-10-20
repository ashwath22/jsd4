var score = 0;
var points = document.querySelector("#points")

var plusFive = document.querySelector("#increase-5");
var minusFive = document.querySelector("#decrease-5");
var setCustom = document.querySelector("#submit-custom-score");

plusFive.onclick = function() {
	console.log("Clicked plus 5!!");
	score += 5;
	updateScore();

}

minusFive.onclick = function() {
	console.log("Clicked minus 5!!");
	score -= 5;
	if (score >= 0){
		updateScore();
	} else if (score <0){
		alert("!!!NO NEGATIVE NUMBERS FOOL!!!!")
		score = 0
	}
	
}

setCustom.onclick = function() {
	console.log("clicked set score");
	var customScore = Number(document.querySelector("#custom-score").value);
	
	if (customScore >= 0){
		score = customScore;//accept custom score ONLY if it is a positive value
		updateScore();
	} else if (score < 0) {
		alert("!!!NO NEGATIVE NUMBERS FOOL!!!!")
	}
	document.querySelector("#custom-score").value = '';
}

function updateScore(){
		points.innerHTML = score + ' Points';
}