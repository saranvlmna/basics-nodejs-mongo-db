var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  const person = ["saran", "jithu", "shyam"];
  const value = { name: "saran", age: 18, comments: { comment: "full stack developer", date: "09-06-2002" },admin:true };
  res.render('index', { person });
  res.render('index', { value });
});

module.exports = router;
