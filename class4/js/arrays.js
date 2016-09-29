// creates a new array
// var a = [1,2,3,5,8,13,21];

// // add one new item to array
// a.push(34);

// // remove the last item in array
// a.pop();


// Loops Technnique #1 - forEach

// //setup
// var total = 0;
// var days = ["Mon", "Tue", "Wed"];


//loop to reassign a value to a variable 

//with a named function
// a.forEach(add);
// function add(number, index){
// 	// total += number;
// 	total = total + number;
// 	console.log(index, number);
// }

// console.log("total = ", total);

// //with an anonymus function

// days.forEach(function(day) {
// console.log(day);
// });

// //generic variable name: item

// days.forEach(function(item) {
// console.log(item);
// });

// //Loops Technique #2 - for loop
// var colors = ["red","orange","blue"];
// for (var i=0; i < colors.length; i++){
// console.log(i, colors[i])
// }


// /** Question 1
// * Create an array of image source filenames.
// * Use "image1.png", "image2.png", and "image3.png" as the array values.
// */
// var imageSourceNames= ["image1.png", "image2.png", "image3.png"]
// console.log(imageSourceNames)


// /** Question 2
// * Using the array from Question 1, store the first element of the array
// * in variable q2.
// */
// var q2= imageSourceNames[0];
// console.log(q2);

// /** Question 3
// * Get the length of the first array (number of elements in the array)
// * and store it in variable q3
// */
//  var q3= imageSourceNames.length;
// console.log(q3);

// /** Question 4
// * Using the array from Question 1, store the last element of the array
// * in variable q4. Hint: How can we get the number of elements in the array?
// */
// var q4 = imageSourceNames[q3-1];
// console.log(q4);


// _______________________________________________________________

/**
* Arrays + Iteration
*/

/**
* Question 5
* Create an array of numbers using 1, 2, 3, and 4 as values.
* Use a for loop, a forEach loop function to increase
* each value by 1. You can either store each new value back in the original
* array, or in a new array -- your choice. The end result should be
* an array of numbers with values 2, 3, 4, and 5.
*/

var numbers =[1,2,3,4];
// for (var i=0; i<numbers.length; i++){
// 	numbers[i] = numbers[i] + 1;
// }

// console.log(numbers)



numbers.forEach(increase);

function increase(number, index) {
	// total += number;
	numbers[index] = number + 1;
}

console.log("New Array: ", numbers);


/**
* Question 6
* Using the array from Question 5, find the average of the numbers in the array
* (average = sum of all numbers/number of numbers). Store the average in q6.
*/
var total = 0;
var average = 0;
for (var i=0; i<numbers.length; i++){
	total = total + numbers[i];

}

average= total/numbers.length;
console.log(average);

