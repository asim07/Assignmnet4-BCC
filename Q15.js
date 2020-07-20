var age = parseInt(prompt("Enter ur age : "));
var date = new Date();
var years = date.getUTCFullYear() - age;
document.write("Your Age is = ", age);
document.write("<br>Your birth year is = ", years);
