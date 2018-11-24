var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    userName: String,
    password: String
})

module.exports = mongoose.model('Admin', AdminSchema);