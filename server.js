var express = require('express'),
bodyParser = require("body-parser"),
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://localhost/musicians';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();
app.use(bodyParser.json());

require('./app/models/musician');
require('./app/routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');