const router = require('express').Router();
const Image = require('../models/image').Image;

router.get('/', (req, res) => {
  Image
    .find()
    .limit(10)
    .exec((err, images) => {
      res.json(images);
    });
});

router.get('/random/', (req, res) => {
  Image.count().exec((err, count) => {
    const random = Math.floor(Math.random() * (count - 1));
    Image.findOne().skip(random).exec((error, image) => {
      res.json(image);
    });
  });
});

router.get('/random/:imageId', (req, res) => {
  Image.count().exec((err, count) => {
    const random = Math.floor(Math.random() * (count - 1));
    Image.findOne({
      _id: { $ne: req.params.imageId },
    }).skip(random).exec((error, image) => {
      res.json(image);
    });
  });
});

router.post('/', (req, res) => {
  const image = new Image({
    name: req.body.name,
    url: req.body.url,
  });
  image.save((err) => {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
});

router.delete('/:imageId', (req, res) => {
  Image.remove({
    _id: req.params.imageId,
  }, (err) => {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
});

module.exports = router;
