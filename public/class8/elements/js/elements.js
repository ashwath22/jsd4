console.log("hello world");
var brands = document.querySelector(".brands");

// Create new li element 
var li = document.createElement("li");

// set text of new li element
li.innerHTML = "Reebok";

// add the new li to the dom
brands.appendChild(li);