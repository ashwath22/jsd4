/*Work with a partner to create a monkey object, \
which has the following properties:

* name
* species
* foodsEaten


And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, 
including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys 
have all properties set and methods defined.

Exercise your monkeys by retrieving their properties 
and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/



















// My code:
// //constructor
// var Monkey = function(name, species, foodsEaten){
// 	this.name = name;
// 	this.species = species;
// 	this.foodsEaten = foodsEaten;
	
// }
// //prototype

// Monkey.prototype = {
// 	eatSomething: function(newFood) {
// 		this.foodsEaten.push(newFood);

// 	},
// 	greet: function() {
// 		return "Hi my name is " + this.name + 
// 		". I am a " + this.species + " monkey." + 
// 		"I like to eat " + this.foodsEaten + ".";
// 	}

// }

// var monkey1 = new Monkey("tim", "rhesus", "banana");

// Class code
//constructor
var Monkey = function(name, species){
	this.name = name;
	this.species = species;
	this.foodsEaten = [];
}

//prototype

// If I want to make all monkeys wear a dress, just do Monkey.prototype.dress = 
Monkey.prototype = {
	eatSomething: function(newFood) {
		console.log("fn eat something ", newFood);
		this.foodsEaten.push(newFood);

	},
	greet: function() {
		console.log("fn greet");
		return "Hi my name is " + this.name + 
		". I am a " + this.species + " monkey." + 
		"I like to eat " + this.foodsEaten + ".";
	}

	dance: function() {
		console.log("fn dance");
	}

};

Monkey.prototype.dance = function(){
	console.log("fn dance");
}

var monkey1 = new Monkey("tim", "rhesus");
var monkey2 = new Monkey("tim", "rhesus");
var monkey3 = new Monkey("tim", "rhesus");

Monkey.prototype.sayName = function(){
    console.log(this.name);
};



