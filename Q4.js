var email = prompt("Enter Email");
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  alert("Correct email");
} else {
  alert("Incorrect Email");
}
