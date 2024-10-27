var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/cpu', function(req, res, next) {
  res.render('cpu', {
    title: "Процессор",
    picture: "images/cpu.jpg",
    desc: "Процессор служит мозгом компьютера"
    });
});
router.get('/vc', function(req, res, next) {
  res.render('vc', {
    title: "Видеокарта",
    picture: "images/vc.jpg",
    desc: "Видеокарта обрабатывает изображение"
    });
});
router.get('/mb', function(req, res, next) {
  res.render('mb', {
    title: "Материнская плата",
    picture: "images/mb.jpg",
    desc: "Материнская плата является связующим звеном между всеми компонентами компьютера"
    });
});
module.exports = router;
