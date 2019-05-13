var express = require('express');

// Defining variables
var SERVER_PORT = 5000;

var app = express();


app.get('/api/v1.0/test', function(request, response) {
    response.send('Hello World!')
  })


// this wrapper is only for testing purpose
if(!module.parent){
    // staring the express server
    app.listen(SERVER_PORT,function(){
        console.log("Server is listening at port :  ",SERVER_PORT);
    });
}

module.exports = app;