var http=require('http');
var events=require('events');
var eventEmitter=new events.EventEmitter();
var progStart=function(){
 	console.log("Program Started");
 }
 eventEmitter.on('end',progEnd=function(){
 	console.log("Program Ended");
 });
 eventEmitter.on('start',progStart);
 http.createServer(function(req,res)
			 {
			 	eventEmitter.emit('start');
			 	res.writeHead(200,{'Content-Type':'text/html'});
			 	res.write("<p>This is uses events in the console</p>");
			 	res.end();
			 	eventEmitter.emit('end');
			 }).listen(8080); 