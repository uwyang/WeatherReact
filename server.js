var express = require('express');

// Create our app
var app = express();
const port = process.env.PORT || 3000;

//express: middle ware, controls how server behaves. 
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

//public is what the server sees i.e., where "/" is.
app.use(express.static('public'));

app.listen(port, function () {
  console.log('Express server is up on port ', port);
});
