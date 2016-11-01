// Setup
// ----------------------------------------------

var search = document.querySelector("form .search");
var form = document.querySelector("form");
var results = document.querySelector(".results");
var details = document.querySelector(".details");


// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------
form.addEventListener('submit', getMovies);
results.addEventListener('click', getMovieDetails);


// Event handlers
// ----------------------------------------------

function getMovieDetails(e) {
	e.preventDefault();
	var target = e.target.closest("LI");
	var id = target.id;
	var url = "https://www.omdbapi.com/?i=" + id;
	jQuery.getJSON(url, updateMovieDetails);	
}

function updateMovieDetails(json) {
	var movies = json.Search;
	details.innerHTML = '';
	var templateFn = Handlebars.compile(movieDetails.innerHTML);
	details.innerHTML = templateFn(json);
}

function getMovies(e) {
	e.preventDefault();
	var movieName = search.value;
	var url = "https://www.omdbapi.com/?s=" + movieName;
	jQuery.getJSON(url, updateMoviesOnPage);
}

// Update page
// ----------------------------------------------

function updateMoviesOnPage(json) {
	var movies = json.Search;
	results.innerHTML = '';
	details.innerHTML = '';
	var templateFn = Handlebars.compile(movieResults.innerHTML);
	results.innerHTML = templateFn(json);
}
