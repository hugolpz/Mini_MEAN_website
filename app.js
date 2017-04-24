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
	word : "(undefined)"
}

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/html');
//	res.write('Hello World !!!');
	res.render('layout_home.ejs', session )
	res.end;
})
// WORDS
.get('/word/:lang2/:lang1/:word', function (req, res) {
	var validityLang1 = req.params.lang1.length <=3,
			validityLang2 = req.params.lang2.length <=3;
	res.setHeader('Content-Type', 'text/html');
	if( validityLang1 && validityLang2) {
		res.render('layout_word.ejs', { pageTitle: "Word page", lang2: req.params.lang2 , lang1: req.params.lang1 , word: req.params.word } ); }
	else {
		res.render('layout_404.ejs', session ); // Error => to upgrade into: Error wrong languages query
	}
	res.end;
})
// USER PAGES
.get('/user/', function (req, res) {// /!\ This push the page's url username into the session's Username !
	userpage = session.user.name || "Please login";
	res.render('layout_user.ejs', { pageTitle: "Userpage:"+session.user.name, "userpage":userpage, "session": session }); //
})
.get('/user/:userpage', function (req, res) {
	userpage = req.params.userpage || "Please login";
	res.render('layout_user.ejs', { pageTitle: "Userpage:"+req.params.userpage, "userpage": userpage, "session": session }); //
})
.get('/user/settings', function (req, res) {
	res.render('layout_user.ejs', { pageTitle: "Settings ("+session.user.name+")", "session": session } );
})
// TESTS
.get('/test/', function (req, res) {
	res.render('layout_test.ejs', { pageTitle: "Test page!", "session": session } );
})
.use(express.static('public'))
.use(function(req, res, next){
	res.setHeader('Content-Type', 'text/html');
	res.render('layout_404.ejs', { pageTitle: "Error 404", "session": session } );
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
