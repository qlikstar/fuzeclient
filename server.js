var http = require('http');
var fs   = require('fs');
console.log('Starting...');

var host = 'localhost';
var port = 3000;

var server = http.createServer(function (request, response){
		console.log("Received request : " + request.url);
		fs.readFile("./public/" + request.url , function(error , data) { 
		if (error)	{response.end("Page not found"); }
		else            { //response.writeHead(200 , {"Content-type" : "text/plain"});
				response.end(data);  }	
		});
		//response.end("Hello world");
		});

server.listen(port, host, function() {
		console.log ("Listening :" + host + " : " + port );
		});




