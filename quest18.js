var fl = require("fs");
fs=fl.createReadStream('thisotherfile.txt') 
var data='';
fs.on('data',function(chunk)

	{
		data+=chunk;
	});
	fs.on('end',function()
	{
		console.log(data);
	});