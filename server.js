var express = require("express");

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('*', function(req,res){
	res.render("index"); /////rendering index.jade
})

//////this is what defines the NOde SERVER
var port = 3030;
app.listen(port);	
console.log("server running on " + port + '...'); 