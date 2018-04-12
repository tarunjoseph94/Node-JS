var fs = require("fs"); 
	
fs.readFile('f1.sh', function (err, data) 
	{ 
		if (err) 
		{ 
			return console.error(err); 
		} 
		console.log("Asynchronous read: " + data.toString()
			); 
	}); 
	
	 var data = fs.readFileSync('f1.sh'); 
	console.log("Synchronous read: " + data.toString()); 
	console.log("Program Ended");