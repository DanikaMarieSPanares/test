
 
var nickname = "Jai";
var heightInInches = 67;
var weightInKg = 55;

var feet = parseInt(heightInInches) / 12;
var inches = parseInt(heightInInches) % 12;

var lbs = weightInKg * 2.20462;

alert("Name: " + nickname +  "\nHeight: " + parseInt(feet) + "'" + inches + "\" \nWeight: " + lbs + " lbs");

