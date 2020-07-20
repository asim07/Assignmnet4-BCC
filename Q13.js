var date = Date();
console.log("Current Date : ", date);
var emsj = new Date();
emsj = emsj.getTime();
console.log("Elapsed miliseconds since 1 january 1970 : ", emsj);
emsj = parseInt((emsj / 1000) * 60);
console.log("Elapsed minutes since 1 january 1970 : ", emsj);
