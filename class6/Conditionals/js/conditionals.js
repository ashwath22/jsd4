console.log("hello world");
var grade = prompt("What's your grade?");
if (grade == 'A') {
	console.log("Awesome job!!");
} else if (grade == 'B') {
	console.log("Good job!!");
}else if (grade == 'C') {
	console.log("Try harder!!");
}else {
	console.error("Unknown error!!");
}


switch(grade){
	case "A": 
		console.log("Awesome job!!");
		break;
	case "B": 
		console.log("Good job!!");
		break;
	case "C": 
		console.log("Try harder!!");
		break;
	default: 
		console.error("error: Unknown grade");
		break;
}

switch(grade){
	case "A": 
	case "B": 
	case "C": 
		console.log("pass!!");
		break;
	case "F": 
		console.log("fail!!");
		break;
	default: 
		console.error("error: Unknown grade");
		break;
}