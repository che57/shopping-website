var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: String,
    password: String,
    state: Number
    // 0: deactivated, 1: activated
})

module.exports = mongoose.model('User', UserSchema);