var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<p>This is data inside a p tag</p>
		<br><p>This is the second');
    res.end('<hr>');
	console.log("Server running at 3000");
}).listen(3000);