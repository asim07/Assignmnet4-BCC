const d = new Date();
console.log("current date : ", d.toUTCString());
var bhour = new Date(Date());
bhour = bhour.setHours(d.getHours() - 1);
console.log("1 hour ago it was : ", new Date(bhour).toUTCString());
