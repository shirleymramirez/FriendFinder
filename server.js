// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 3000;
// var port = 3000;
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});