exports.readAFile=function(fileName)
{
	var fs=require('fs');
	var data = fs.readFileSync(fileName);
	return data;
}