var express = require('express');
var http = require('http');
var services = require('./services');

var app = express();
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/getBooksByName', function(req, res){
	services.getBooks(req.query.bookName,function(foundBooks){
		res.send(foundBooks);
	})
});

app.get('/getBookInfoById', function(req, res){
	services.getBookInfo(req.query.bookId,function(bookInfo){
		res.send(bookInfo);
	})
});

http.createServer(app).listen(3002);