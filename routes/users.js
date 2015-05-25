var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// '/:user_id' could also be a regex if you wanted
router.get('/:user_id', function(req, res, next) {
    var output = {
        thing1: req.params.user_id,
        thing2: req.query.fruit
    };
    res.render('users', output);
});

router.post('/:user_id', function(req, res, next) {
    var userName = req.body.userName;
    res.send(userName);

});

module.exports = router;
