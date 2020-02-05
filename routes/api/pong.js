var router = require('express').Router();

// return a pong to our ping
router.get('/', function(_, res, next) {
  return res.send('pong')
});

module.exports = router;
