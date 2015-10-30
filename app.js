var http = require('http'),
	url  = require('url'),
	querystring = require('querystring'),
	express = require('express'),
	ejs = require('ejs');

var app = express();

var session = { 
	user : { name: 'Pierro', age : 24, location : "Ruffiac" }, 
	page : "Home page !",
	lang1 : "fra",
	lang2 : "cmn",
	word : "(undefined)" }

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/html');
//	res.write('Hello World !!!');
	res.render('layout_home.ejs', session )
	res.end;
})
.get('/word/:lang2/:lang1/:word', function (req, res) {
	if(req.params.lang1.length <=3 && req.params.lang2.length <= 3) { /* do something */}
	res.setHeader('Content-Type', 'text/html');
	res.render('layout_word.ejs', { lang2: req.params.lang2 , lang1: req.params.lang1 , word: req.params.word } );
	res.end;
})
.get('/user/:name', function (req, res) {
	res.render('layout_userpage.ejs', session );
})
.get('/user/settings', function (req, res) {
	res.render('layout_userpage.ejs', session );
})
.get('/test/', function (req, res) {
	res.render('layout_test.ejs', session );
})
.use(express.static('public'))
.use(function(req, res, next){
	res.setHeader('Content-Type', 'text/html');
	res.render('layout_404.ejs', session );
	console.log('Request on: …/test/');
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('App\'s home listening at http://%s:%s', host, port);
	console.log('…/word/:lang2/:lang1/:word');
	console.log('…/user/:name');
	console.log('…/user/settings');
	console.log('…/test/');
});