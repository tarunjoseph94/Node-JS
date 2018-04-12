 var http=require('http');
 var fname = require('./modulereadfile1.js');
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
			 	res.write(fname.readAFile('angularworld.html'));
			 	res.end()
			 	eventEmitter.emit('end');
			 }).listen(8080);
 
