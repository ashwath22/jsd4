// Create the Elements.
var search = document.querySelector("search");
var container = document.querySelector("container");
var article = document.querySelector("article");
var popUp = document.querySelector("popUp");

var articleTemplate = document.querySelector("#article-template");

// Add Event Listeners. 
window.addEventListener('load', showArticles)
//search.addEventListener('click', showArticles);

// Add Event Handler functions.

function showArticles (event) {
    event.preventDefault();
    //var search = search.value;
    //console.log(search);

    var url = "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json";
    jQuery.getJSON(url,appendArticles);
    //$.getJSON(url,updateArticles);

}

// update the articles on the page.

function appendArticles(json) {
    var info = json.data.feed[0];

    console.log(json);

    // clears out the old results
    article.innerHTML = '';

    // Handlebars step 2: compile the template from the HTML source
    var templateFn = Handlebars.compile(articleTemplate.innerHTML);

    //Handlebars step 3:
    var html = templateFn(info);
    article.innerHTML = html; // puts that final HTML in the DOM somewhere.

    //results.HTML = template(json); // if you want to do it as one line
}
