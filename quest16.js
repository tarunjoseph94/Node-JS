	var events = require('events');
	var uc=require('upper-case');
	var eventEmitter = new events.EventEmitter();
	var connectHandler = function connected() {
  	 console.log(uc('connection succesful.'));
	eventEmitter.emit('data_received');
	}
	eventEmitter.addListener('connection', connectHandler);
	eventEmitter.addListener('data_received', function(){
  	 console.log(uc('data received succesfully.'));
	});
	eventEmitter.emit('connection');
	console.log(eventEmitter.listenerCount('connection'));
	console.log(uc("Program Ended."));