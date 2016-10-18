// Elements
// ------------------------------------------

var ul = document.querySelector(".song-lyrics");
function generateLyrics(numberOfBottles) {
	var line = "";
	for(i = numberOfBottles; i >= 0 ; i--) {
		if (i == 0 ){
			line = "No more bottles of beer on the wall, no more bottles of beer." +
			"<br>Go to the store and buy some more, 99 bottles of beer on the wall.<br><br>";
		}
		else if ( i == 1){
			line = i + " bottle of beer on the wall, " + i + " bottle of beer. " + 
			"<br> Take one down and pass it around, no more bottles of beer on the wall.<br><br>";
		}
		else if ( i == 2){
			line = i + " bottles of beer on the wall, " + i + " bottles of beer. " + 
			"<br> Take one down and pass it around, " + (i-1) + " more bottle of beer on the wall.<br><br>";
		}
		else {
			line = i + " bottles of beer on the wall, " + i + " bottles of beer. " + 
			"<br> Take one down and pass it around, " + (i-1) + " more bottles of beer on the wall.<br><br>";
		}

		li = document.createElement("li");
		li.innerHTML = line;
		ul.appendChild(li);
		console.log("appended children");
	}
}


// Update page
// ------------------------------------------

generateLyrics(99);
console.log("99 bottles of beer on the wall!");