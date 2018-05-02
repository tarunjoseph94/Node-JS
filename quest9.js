 var http=require('http');
 var fs = require('fs');
 fs.readFile('angularworld.html', function (err, data) 
	{ 
		if (err) 
		{ 
			return console.error(err); 
		} 
		
			 http.createServer(function(req,res)
			 {
			 	res.writeHead(200,{'Content-Type':'text/html'});
			 	res.write(data);
			 	res.end()
			 }).listen(8080);
	}); 
 