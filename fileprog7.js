 var http=require('http');
 var mod1 = require('./module1.js');
 var events=require('events');
 var eventEmitter=new events.EventEmitter();
 var progStart=function(){
 	console.log("Program Started");
 }
 var progEnd=function(){
 	console.log("Program Ended");
 }
 eventEmitter.on('start',progStart);
 eventEmitter.on('end',progEnd);
		
			 http.createServer(function(req,res)
			 {
			 	eventEmitter.emit('start');
			 	res.writeHead(200,{'Content-Type':'text/html'});
			 	console.log(mod1.readAFile('f1.sh').toString());
			 	res.write("<h1>"+mod1.displayDate()+"</h1>");
			 	res.write("<p>This is code loaded from another page</p>");
			 	res.write(mod1.readAFile('angularworld.html'));
			 	res.end();
			 	eventEmitter.emit('end');
			 }).listen(8080);
 
