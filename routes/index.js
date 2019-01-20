var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Cloud | Home'
    });
});
/*Renders interface page*/
router.get('/interfacePage', function(req, res, next) {
  res.render('interfacePage', { title: 'Express' });
});
/*Renders aboutUs page*/
router.get('/aboutUs', function(req, res, next) {
  res.render('aboutUs', { title: 'Express' });
});
module.exports = router;
