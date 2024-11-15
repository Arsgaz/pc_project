var express = require('express');
var router = express.Router();
var Part = require('../models/part').Part;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с parts');
});

module.exports = router;

/* Страница parts */
router.get("/:nick", checkAuth, async function(req, res, next) {
    var parts = await Part.find({nick: req.params.nick});
    console.log(parts)
    if(!parts.length) return next(new Error("Такой части компьютера нет"))
    var part = parts[0];
    res.render('part', {
        title: part.title,
        picture: part.avatar,
        desc: part.desc
    })
});
