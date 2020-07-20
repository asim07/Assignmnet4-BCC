var pass = prompt("Enter password");
if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(pass)) {
  alert("Correct Password");
} else {
  alert("InCorrect password");
}
