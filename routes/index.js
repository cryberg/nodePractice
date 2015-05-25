var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var _otherTitle = Math.random();
    var address = req.connection.remoteAddress;
    res.render('index', {
        title: 'Whatever I bla',
        otherTitle: _otherTitle,
        reqAddress: address
    });
});

module.exports = router;
