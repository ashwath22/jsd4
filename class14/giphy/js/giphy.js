console.log("hello world");

const mockData = {
    pagination: {
        total_count: 37
    },
    data: [{
        id: "feqkVgjJpYtjy",
        url: "http://giphy.com/gifs/eyes-shocked-bird-feqkVgjJpYtjy",
        rating: "g",
        images: {
            original: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy.gif"
            }
        }
    },{
        id: "FiGiRei2ICzzG",
        url: "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
        rating: "g",
        images: {
            original: {
                url: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif"
            }
        }
    }]
};
// step1 get source from html
const gifTemplate = document.querySelector("#gif-template");
const gifs = document.querySelector(".gifs");

// step 2: compile the handlebars template
const gifTemplateFn = Handlebars.compile(gifTemplate.innerHTML);

// step3: pass JSON into html
var html = gifTemplateFn(mockData);

// html has all the html we need as a string
gifs.innerHTML = html;