// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');
var dateTemplate = document.querySelector('#dateTemplate');
var gameTemplate = document.querySelector('#gameTemplate');

// var mockdata = window.mockdata;

// step 2: compile template from HTML source. compile returns a function *mind blown!!!!*
	
// Update page
// ------------------------------------
function updateDate(json) {

	// Handlebars step 2: compile template from HTML source. compile returns a function *mind blown!!!!*
	var templateFn = Handlebars.compile(dateTemplate.innerHTML);

	// Handlebars step3: Evaluate JSON to html. This is the real magic as it fills up the template with  
	var html = templateFn(json);
	date.innerHTML = html;

}

updateDate(mockdata);
