let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let birthYear = prompt("Enter your birth year:")

var currentYear = new Date().getFullYear();
var age = currentYear - parseInt(birthYear);

document.getElementById("greet").innerHTML = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;