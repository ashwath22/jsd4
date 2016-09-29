
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

//Function to accept two sides of a right angle triangle and return the value of its hypotenuse.
function calcLongestSide(a,b){
	var hypotenuse= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
	console.log(hypotenuse);
	return hypotenuse;
}

//Function to accept the radius of a circle and return its circumference.
function calcCircumference(radius){
	var circumference= 2*Math.PI*radius;
	return circumference;
}

//Function to accept temperature in farenheit, convert it to celcius and return the celcius temperature value.
function calcFahrenheitToCelcius(fahrenheit){
	var celcius= (fahrenheit - 32) * 5/9;
	return celcius;
}

//Function to accept temperature in celcius, convert it to farenheit and return the farenheit temperature value.
function calcCelciusToFarenheit(celcius){
	var farenheit= celcius * (9/5) + 32;
	return farenheit;
}