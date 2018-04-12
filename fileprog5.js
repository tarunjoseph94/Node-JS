 var fs = require('fs');
 fs.readFile('f1.sh', function (err, data) 
	{ 
		if (err) 
		{ 
			return console.error(err); 
		} 
		
			 fs.writeFile('newwritetest.txt',data,function(err)
			 {
				 if (err) 
					{
					return console.error(err); 
					}
				else 
				{
					console.log("Saved");
				}	 	
			 });
	}); 
 