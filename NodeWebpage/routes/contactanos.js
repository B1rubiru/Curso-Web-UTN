var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contactanos', function(req, res, next) {
    res.render('contactanos');
});

module.exports = router;