var mongoose = require('mongoose');
mongoose.Promise = Promise;

var BeerSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number
});
module.exports = mongoose.model('Beer', BeerSchema);
