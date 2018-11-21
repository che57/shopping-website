
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.all("/api/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/items');

var port = process.env.PORT || 8080;

var unauth = require("./unauth");
app.use('/api', unauth);

// var auth = require("./auth");
// app.use('/api/auth', auth);

// var admin = require("./admin");
// app.use('/api/admin', admin);

app.listen(port);