var express = require('express');
var router = express.Router();

/* how query string .... */
router.get('/show/request/', function(req, res, next) {
  var query = req.query;
  var path = req.path;
  //req.originalUrl
  //req.params

  console.log("query=");
  console.log(query);

  console.log("path=");
  console.log(path);


  res.render('sandbox', { title: 'sandbox' });
});

module.exports = router;


// 總結一下，是不是應該就三種：
// 1.	req.params.xxxxx 從path中的變數
// 2.	req.query.xxxxx 從get中的?xxxx=中
// 3.	req.body.xxxxx 從post中的變數
