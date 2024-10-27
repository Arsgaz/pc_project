var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cpu', function(req, res, next) {
  res.send("<h1>Процессор</h1>")
});
router.get('/vc', function(req, res, next) {
  res.send("<h1>Видеокарта</h1>")
});
router.get('/mb', function(req, res, next) {
  res.send("<h1>Материнская плата</h1>")
});
module.exports = router;
