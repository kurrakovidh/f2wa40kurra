var express = require('express');
var router = express.Router();
var x = Math.random();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title: 'computation by kovidh',
function1:'Math.fround applied to '+x+' is '+Math.fround(x),
function2:'Math.random applied to '+x+' is '+Math.random(x),
function3:'Math.round applied to '+x+' is '+Math.round(x), });
});

module.exports = router;
