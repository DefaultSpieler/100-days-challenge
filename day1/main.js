
function ageInput() {
	var userInput = prompt("Enter the year you were born In?")
	var ageInYears = 2020 - userInput;
	var ageInDays = ageInYears * 365;
	var ageInHours = ageInDays * 24;
	var ageInMins = ageInHours * 60;
	document.write("Your Age In Days  " + ageInDays);
	document.write("<br>");
	document.write("Your Age In Years  " + ageInYears);
	document.write("<br>");
	document.write("Your Age In Hours  " + ageInHours);
	document.write("<br>");
	document.write("Your Age In Minutes  " + ageInMins);
	document.write("<br>");
};