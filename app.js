var express = require('express');
var app = express.createServer();
var ejs = require('ejs');

app.register('.html', ejs);
app.use(express.bodyParser());

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('index.html', { layout: false });
});

var data = [
    { text: "I like Coldplay. AIAD?", username: "Greg" },
    { text: "I wear Ed Hardy. AIAD?", username: "Bob" }
];

app.post('/sendtext', function(req, res) {
    console.log(req.body);
    if (req.body) {
	console.log('received \'' + req.body.text + '\''); 
        data.push({ text: req.body.text, username: req.body.username });
        res.send("", 200);
    }
    else {
	res.send("No text!", 404);
    }
});

app.get('/getdata', function(req, res) {
    console.log('getdata');
    console.log('foo');
        
    res.send({ error: false, data: data});
});

app.listen(3000);