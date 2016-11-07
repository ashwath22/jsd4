// Firebase application setup
// ------------------------------------------------
  // Initialize Firebase
var config = {
    apiKey: "AIzaSyC4Tc6dP_57s7Ono1QP6qCwO-kfUoOczmw",
    authDomain: "imwiththeband-83cfe.firebaseapp.com",
    databaseURL: "https://imwiththeband-83cfe.firebaseio.com",
    storageBucket: "imwiththeband-83cfe.appspot.com",
    messagingSenderId: "908951059698"
};
firebase.initializeApp(config);

// Create Firebase application reference
// ------------------------------------------------

var db = firebase.database();



// Elements
// ------------------------------------------------
var form = document.querySelector("form");
var messageEl = document.querySelector("#message");
var messageBoard = document.querySelector(".message-board");

// Events
// ------------------------------------------------
form.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', loadState);

function submitForm(event) {
    event.preventDefault();
    var messageText = messageEl.value;

    message.value = '';
    console.log(messageText);

    var ref = db.ref('messages');

    //2 lines, can be 1
    var messageObj = {
        content: messageText,
        votes: 0
    };
    ref.push(messageObj);

    //create a function that takes a message 
    //object and creats a new li on the page
}

function loadState() {
	db.ref('messages').on("value",createMessages)
}

function createMessages(results) {
	console.log('createMessages', results.val());
	var newMessages = results.val();

	for (var i in newMessages) {
		// console.log(newMessages[i]);
		createMessage(id, newMessages[i]);
	}
}

function createMessage(id, message) { // text can be anything! 
    // console.log(message);
    var li = document.createElement("li");
    li.innerHTML = message.content;
    li.id = id;
    messageBoard.appendChild(li);
    li.addEventListener('click', destroyMessage);
}

function destroyMessage(event) {
	var id = event.target.id;
	var ref = db.ref('messages/' + id);
	ref.remove();
}

// Create Firebase application reference
// ------------------------------------------------