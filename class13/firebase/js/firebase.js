// Setup: establish connection with Firebase (ie create a new firebase db object)

var ref = new Firebase("https://jsd4-intro-f6fa8.firebaseio.com")
var json = {
  "active" : "red",
  "colors" : [
  	"red",
  	"rebeccapurple",
  	"olive",
  	"skyblue"
  ]
};

// elements
var button = document.querySelector("button");

// events
button.addEventListener('click', saveChanges);

//event handler 
function saveChanges() {
	ref.set(json);
}

ref.on('value', updateApp);

function updateApp(snapshot) {
	console.log("snapshot: ", snapshot);
	json = snapshot.val();

	document.body.style.background = json.active;
	console.log("json:", json)
}