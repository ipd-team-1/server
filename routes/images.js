const router = require('express').Router();

router.get('/random', (req, res) => {
  res.send('This is a random cat');
});

router.post('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
