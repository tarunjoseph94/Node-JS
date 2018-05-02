var fs = require("fs");  
fs.readFile('f1.sh', function (err, data) {  

 if (err) return console.error(err);  

 console.log(data.toString());  
});  
  console.log("Program Ended");  

