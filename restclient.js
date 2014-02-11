var Client = require('node-rest-client').Client;

// direct way
client = new Client();

args ={
        path:{"id":2},
        headers:{"test-header":"client-api"}
      };

client.get("http://localhost:5000/fuzebox/analytics/groups/${id}", args, 
        function(data, response){
            // parsed response body as js object
            console.log(data);

            // raw response
            //console.log(response);
});


