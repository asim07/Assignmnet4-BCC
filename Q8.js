var words = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "Five",
  "Six",
  "seven",
  "eight",
  "nine",
];
var num = prompt("Enter number");
if (num > 20 && num < 30) {
  document.write("TWENTY ", words[num[1]].toLocaleUpperCase(), " ");
} else if (num > 120 && num < 130) {
  document.write(
    "ONE HUNDRED AND TWENTY ",
    words[num[2]].toLocaleUpperCase(),
    " "
  );
}
