let express = require('express');
let router = express.Router();
let fs = require('fs');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var json = JSON.parse(fs.readFileSync('./self.json', 'utf8'));  
  res.render('projects', { data: json });
});

module.exports = router;
