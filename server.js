var express = require('express')
var app = express()

app.set('view engine', 'pug');

app.get('/', (req,res) => {
  res.render('index')
});

var port = Number( process.env.PORT || 5000 );

app.listen(port, function() {
  console.log('http://localhost:' + port)
})