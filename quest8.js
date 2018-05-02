 var http=require('http');
 var mod1 = require('./module1.js');

			 http.createServer(function(req,res)
			 {
			 	eventEmitter.emit('start');
			 	res.writeHead(200,{'Content-Type':'text/html'});
			 	res.write("<h1>"+mod1.displayDate()+"</h1>");
			 	res.write("<p>This is code loaded from another page</p>");
			 	
			 	res.end();
			 	eventEmitter.emit('end');
			 }).listen(8080);
 
