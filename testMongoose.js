const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Part = require('./models/part.js').Part
var part = new Part({
title: "Процессор",
nick: "cpu",
})
part.save();