function helloworld() 
{
     return "... I am almost there";
}


function getdata( groupid )
{

	var http = require('http');
	var options = {
		host : 'localhost:5000' , 
		path : '/fuzebox/analytics/groups/' , + groupid ,
		method : 'GET'
	};
	
	var request = http.request(options, function(response)
	{
		var body = '';
		response.on("data", function(chunk) { body +=chunk.toString('utf8');}
	};
		
	response.on ("end" , function()
		{ 
		console.log("request has finished ");
		var data = [];
		var json = JSON.parse(body);
	});
	callback(body);
	});
	


}




module.exports.helloworld = helloworld;
module.exports.getdata = getdata;
