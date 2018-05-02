var fs=require('fs');
var rs=fs.createReadStream('output.txt');
var ws=fs.createWriteStream('newoutput.txt');
rs.pipe(ws);
console.log("Program ended");
