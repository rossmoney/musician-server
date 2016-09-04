var express = require('express'),
bodyParser = require("body-parser"),
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://musician:musician@ds147905.mlab.com:47905/musicians';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();
app.use(bodyParser.json());

require('./app/models/musician');
require('./app/routes')(app);

app.listen(process.env.PORT || 3001);
console.log('Listening on port 3001...');