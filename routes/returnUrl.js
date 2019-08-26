var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/en/auth/twitch', function(req, res, next) {

  res.render('twitch', { title: 'twitch' });
});

module.exports = router;
