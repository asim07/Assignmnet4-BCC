var num = prompt("Enter a number");
var denom = num.length;
var value = 0;
num = parseInt(num);
for (i = 0; i < denom; i++) {
  value += parseInt(num % 10);
  num = parseInt(num / 10);
}
value = value / denom;
document.write("<br>Mean of all Digits : ", value);
