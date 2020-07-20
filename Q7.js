var str = "The quick brown fox jumps over the lazy dog";
var count = 0;
var value = "";
for (i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    if (value.toLocaleLowerCase() == "the") {
      count += 1;
    }
    value = "";
  } else {
    value += str[i];
  }
}
document.write("The repeated : ", count, " times");
