const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    description: String,
    like: Number
});


module.exports = mongoose.model('PostModel', PostSchema);