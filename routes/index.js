var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {  
  var json = JSON.parse(fs.readFileSync('./self.json', 'utf8'));
  res.render('index', { data: json });
});

module.exports = router;
