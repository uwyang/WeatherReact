var express = require('express');
//var http = require('http');
// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] ===  'https') {
    var url = 'http://' + req.hostname + req.url;
    //console.log("using https or ", req.headers['x-forwarded-proto'] , ", redirecting to http");
    //console.log("URL: " , url);
    res.redirect(url);
  } else {
    next();
  }
});

app.use(express.static('public'));

//var server = http.createServer(app);
//server.listen(PORT, function () {
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
