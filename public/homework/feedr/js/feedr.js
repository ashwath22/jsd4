// Create the Elements.
var search = document.querySelector(".search");
var displayDiggArticles = document.querySelector(".displayDiggArticles");
var displayGuardianArticles = document.querySelector(".displayGuardianArticles");
var displayBbcArticles = document.querySelector(".displayBbcArticles");
var article = document.querySelector(".article");
var popUp = document.querySelector(".popUp");

// for popup
var main = document.querySelector("#main");
var popUp = document.querySelector("#popUp");
var closePopUp = document.querySelector(".closePopUp");

// setup URLs for API calls.
var diggUrl = "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json";
var guardianUrl = "http://content.guardianapis.com/search?q=technology&api-key=4aec2a05-eda5-4352-a802-522cfa655803";
var bbcUrl = "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=158fb7af227c4843879cbe7f7f2bb5b3";
var nytUrl = "https://api.nytimes.com/svc/topstories/v1/home.json?api-key=cc05a6f7dfbf495b8025bb79f2f1b0c4";

var articleTemplate = document.querySelector("#article-template");

// Add Event Listeners. 
window.addEventListener('load', showArticles);
displayDiggArticles.addEventListener('click', showDiggPopup);
closePopUp.addEventListener('click', closeDiggPopup);

var diggId = null;
console.log(diggId);

// Popup
function showDiggPopup(event) {
    event.preventDefault();
    target = event.target.closest("ARTICLE");
    diggId = target.id;
    console.log(diggId);
    popUp.classList.remove("loader", "hidden");
    jQuery.getJSON(diggUrl, getDiggData);
    
    // var templateFn = Handlebars.compile(diggPopUpTemplate.innerHTML);
    // diggPopUp.innerHTML = templateFn(diggJson.data); 
} 

function closeDiggPopup() {
    popUp.classList.add("loader", "hidden")
    console.log('pop up closed');
}

function getDiggData(json) {
    diggJson = json;
    var articles = json.data.feed;
    console.log(articles);
    articles.forEach( function(article){
        // console.log(article.content.content_id);
        if (article.content.content_id === diggId) {
            console.log(article.content.content_id);
            var templateFn = Handlebars.compile(diggPopUpTemplate.innerHTML);
            popUp.innerHTML = templateFn(article);     
        }
    });
    
}

// Add Event Handler functions.
function showArticles (event) {
    event.preventDefault();
    // JSONify!!
    jQuery.getJSON(diggUrl, appendDiggArticles);
    jQuery.getJSON(guardianUrl, appendGuardianArticles);
    jQuery.getJSON(bbcUrl, appendBbcArticles);
    jQuery.getJSON(nytUrl, appendNytArticles);
}

// update the articles on the page.
function appendDiggArticles(json) {
    var articles = json.data;
    // console.log("DIGG: ", json.data);
    articles.newsSource = "DIGG";
    var templateFn = Handlebars.compile(DiggArticleList.innerHTML);
    displayDiggArticles.innerHTML = templateFn(articles);
}

function appendGuardianArticles(json) {
    json.newsSource = "The Guardian";
    // console.log("Guardian: ", json);
    var templateFn = Handlebars.compile(GuardianArticleList.innerHTML);
    displayGuardianArticles.innerHTML = templateFn(json);
}

function appendBbcArticles(json) {
    json.newsSource = "BBC sport";
     // console.log("BBC sport: ", json);
    var templateFn = Handlebars.compile(BbcArticleList.innerHTML);
    displayBbcArticles.innerHTML = templateFn(json);   
}

function appendNytArticles(json) {
    json.newsSource = "The NYT";
    //console.log("Guardian: ", json);
    var templateFn = Handlebars.compile(NytArticleList.innerHTML);
    displayNytArticles.innerHTML = templateFn(json);
}