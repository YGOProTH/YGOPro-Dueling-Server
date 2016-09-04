var svConfig = require('./config/server');
var pjson = require('./package.json');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var helper = require('./function/helper');

app.listen(svConfig.serverPort, function () {
  console.log(
    "__  ___________  ___         \n" +
    "\\ \\/ / ___/ __ \\/ _ \\_______ \n" +
    " \\  / (_ / /_/ / ___/ __/ _ \\ \n" +
    " /_/\\___/\\____/_/  /_/  \\___/");
  console.log("        Dueling Server v" + pjson.version + "\n");

  helper.log('YGOPro Dueling Server listening on port ' + svConfig.serverPort + '.');
});

app.get('/', function (req, res) {
  res.json({ message: 'YGOPro Dueling Server v' + pjson.version });
});
