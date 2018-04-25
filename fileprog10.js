var fs = require("fs");  
fs.readFile('thisotherfile.txt', function (err, data) {  

 if (err) return console.error(err);  

var arr=data.toString().split("\n");
console.log("Length is "+arr.length);
});  
  console.log("Program Ended");  

