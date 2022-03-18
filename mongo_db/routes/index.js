var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('signup');
});

router.post('/', (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err)
      console.log(err);
    else
      console.log('database connected');
    client.db('users').collection('accounts').insertOne(req.body)
  })
  res.send('Account created Successfully..')
  console.log(req.body);
})
module.exports = router;
