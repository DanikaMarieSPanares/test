var consent = confirm("Do you agree to share your personal information with this site?");

if (consent)
{
	var currentYear = new Date().getFullYear();
	var age = currentYear - parseInt(birthYear);
	console.log(`Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`);
} 
else 
{
 	console.log("User does not wish to share his/her information.");
}
