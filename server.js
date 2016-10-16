var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/static'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

// This responds a POST request for the /submit page.
// TO DO
app.post('/submit', function (req, res) {
   console.log("Got a POST request for /submit");

   //process POST data convert it into JSON for Firebase

   //access Firebase database

   //update user data

   //forward to index.html
   res.sendFile(path.join(__dirname+'/index.html'));
})


// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});