
var express = require('express'),
    app = express.createServer(),
    cb;
module.exports = app;

cb = function ( req, res, next ) {
  // req = request object
  // res = response object
  // next = next function
  console.log('cb: %s %s', req.method, req.url);
  next(); // pass execution to the next handler
};

app.configure(function () {
  app.use(cb); // register the cb callback 
});

// route matching callback
app.get('/', function(req, res){
  res.send('Hello World');
});
app.all(/.*/, function(req, res){
  res.send(req.method + ' ' + req.url);
});


app.listen(3000);
