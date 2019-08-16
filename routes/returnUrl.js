var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/auth/twitch', function(req, res, next) {

  res.render('twitch', { title: 'twitch' });
});

module.exports = router;
