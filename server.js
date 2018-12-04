
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var verifyToken = require("./scripts/verify");
var verifyAdmin = require("./scripts/verifyAdmin");
var cors = require("cors");

/*app.all("/api/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    return next();
});
*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/items');

var port = process.env.PORT || 8080;

var unauth = require("./scripts/unauth");
app.use('/api', unauth);

var auth = require("./scripts/auth");
app.use('/api/auth', verifyToken, auth);

var admin = require("./scripts/admin");
app.use('/api/admin', verifyToken, verifyAdmin, admin);

var authController = require("./scripts/authController");
app.use('/api/authControll', authController);

app.listen(port);