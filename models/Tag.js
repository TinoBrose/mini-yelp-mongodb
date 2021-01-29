const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  restaurantId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Restaurant',
    required: [true, 'Please add a restaurantId']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  }
});

module.exports = mongoose.model('Tag', TagSchema);