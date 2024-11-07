const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pc');
var Part = require('./models/part.js').Part
var part = new Part({
    title: "CPU",
    nick: "CPU"
})
part.save();