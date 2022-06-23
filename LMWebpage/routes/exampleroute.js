var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/exampleroute', function(req, res, next) {
    res.render('exampleroute');
});

module.exports = router;