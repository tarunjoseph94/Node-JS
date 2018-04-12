 var fs = require('fs');
 fs.readFile('f1.sh', function (err, data) 
	{ 
		if (err) 
		{ 
			return console.error(err); 
		} 
		console.log("Asynchronous read: " + data.toString()
			 
	
 fs.open('nodenewfile.txt', 'w', function (err, file) {
if (err) 
		{ 
			return console.error(err); 
		} 
		console.log("Asynchronous read: " + data.toString()
			); 
	});
	}); 
 console.log('Saved!');
 }); 