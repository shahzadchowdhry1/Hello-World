module.exports = {
	sayHello: function(cb){
		var http = require('http');

		//Create the server
		http.createServer(function (req, res) {
		  res.writeHead(200, {'Content-Type': 'text/plain'});
		  res.end('Hello World\n');
		}).listen(3000);

		//Send back the server
		cb(http);

		console.log('Server running at http://localhost:30000');
	}
}
