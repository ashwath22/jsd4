// Setup
// ----------------------------------------------
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
	var target = e.target.closest("LI");
	var id = target.id;
	
	var url = "https://www.omdbapi.com/?i=" + id;
	jQuery.getJSON(url, updateMovieDetails);	
}

function updateMovieDetails(json) {
	details.innerHTML='';
	console.log(json);
	var div1 = document.createElement("div");
	var div2 = document.createElement("div");
	
	var img = document.createElement("img");
	var h2 = document.createElement("h2");
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");

	img.src = json.Poster;
	div1.appendChild(img);

	h2.textContent = json.Title;
	div2.appendChild(h2);


	details.appendChild(div1);
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
	// console.log('Movies:', movies)

	movies.forEach(function(movie){
		// Print details of each photo
		// console.log("Movie name: ", movie.Title);
		
		var li = document.createElement("li");
		var img = document.createElement("img");
		var p = document.createElement("p");
		
		img.src = movie.Poster;
		p.textContent = movie.Title;
		var id = movie.imdbID;
		// console.log(id);

		// Step 3 - append to parents 
		results.appendChild(li);
		// li.classList.add(id);
		li.id = id;
		li.appendChild(img);
		li.appendChild(p);
	});

}
