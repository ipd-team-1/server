const mongoose = require('mongoose');

module.exports.Image = mongoose.model('Image', mongoose.Schema({
  name: String,
  url: String,
}));
