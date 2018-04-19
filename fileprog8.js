 var fs = require('fs');

 fs.open('fileopen.txt','w',function(err,data)
 {
 	if(err)
 	{
 		console.log(err);
 	}

});console.log("New empty file is created");
 
 fs.writeFile('filewrite.txt','Hello World!',function(err)
 {
 	if(err)
 	{
 		console.log(err);
 	}
 });
 console.log("new file called filewrite.txt is created");
 