var fs = require("fs");  
fs.readFile('thisotherfile.txt', function (err, data) {  

	 if (err) 
	{
		return console.log(err);
	}  
	console.log("Length is "+data.toString().split("\n").length);
});  
console.log("Program Ended");  

