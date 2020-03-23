var createError = require("http-errors");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var http = require("http");

// var usersRouter = require("./routes/users");
var app = express();
module.exports = app;

app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var server = http.createServer();
  app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
  });

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message)
});
