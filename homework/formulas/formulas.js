
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

function calcLongestSide(a,b){
	var hypotenuse= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
	console.log(hypotenuse);
	return c;
}

function calcCircumference(radius){
	var circumference= 2*Math.PI*radius;
	return circumference;
}

function calcFahrenheitToCelcius(fahrenheit){
	var celcius= (fahrenheit - 32) * 5/9;
	return celcius;
}

function calcCelciusToFarenheit(celcius){
	var farenheit= celcius * (9/5) + 32;
	return farenheit;
}