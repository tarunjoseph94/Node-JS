 var fs = require('fs');

 //Add content in the file
 fs.writeFile('myfile.txt','Hello World!',function(err)
 {
 	if(err)
 	{
 		console.log(err);
 	}
 });
 console.log("new file called myfile.txt is created");
var data='This is my file';
 //Replace content in the file
 fs.writeFile('myfile.txt',data,function(err)
 {
 	if(err)
 	{
 		console.log(err);
 	}
 });console.log("File content is changed");
//Rename a file
 fs.rename('myfile.txt', 'thisfile.txt', function (err) {
  if (err) 
  	{
  		console.log(err);
  	}
  
});console.log('File Renamed.');
 //Delete a file
 fs.unlink('thisfile.txt', function (err) {
  if (err) 
  	{
  		console.log(err);
  	}
  
});console.log('File Deleted.');
 