var express = require('express');
var app = express.createServer();
var ejs = require('ejs');

app.register('.html', ejs);
app.use(express.bodyParser());

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('index.html', { layout: false });
});

app.post('/sendtext', function(req, res) {
    console.log(req.body);
    if (req.body) {
	console.log('received \'' + req.body.thetext + '\''); 
	res.send(req.body.thetext, 200);
    }
});

app.listen(3000);