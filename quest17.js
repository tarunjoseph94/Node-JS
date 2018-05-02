	var events = require('events');

	var eventEmitter = new events.EventEmitter();
	var connectHandler = function connected() {
  	 console.log('connection succesful.');
	eventEmitter.emit('data_received');
	}
	eventEmitter.addListener('connection', connectHandler);
	eventEmitter.addListener('connection', function(){
  	 console.log('transfering');
	});
	eventEmitter.addListener('data_received', function(){
  	 console.log('data received succesfully.');
	});
	eventEmitter.emit('connection');
	console.log(eventEmitter.listenerCount('connection'));
	console.log("Program Ended.");