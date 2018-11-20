var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    itemId: String,
    userId: String,
    content: String,
    rating: Number,
    state: Number
    // 0: hide, 1: show
})

module.exports = mongoose.model('Comment', CommentSchema);