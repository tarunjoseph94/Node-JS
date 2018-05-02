 var fs = require('fs');

 fs.open('fileopen.txt','w',function(err,data)
 {
 	if(err)
 	{
 		console.log(err);
 	}

});console.log("New empty file is created");
 

 