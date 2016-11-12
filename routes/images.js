const router = require('express').Router();

router.get('/random', (req, res) => {
  res.send('This is a random image');
});

module.exports = router;
