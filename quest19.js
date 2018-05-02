var fs=require("fs");
var data='This is sample txt';
ws=fs.createWriteStream('output.txt');
ws.write(data,'UTF-8');
ws.end();
ws.on('finish',function()
	{
		console.log('Program finshed writing');
	});
