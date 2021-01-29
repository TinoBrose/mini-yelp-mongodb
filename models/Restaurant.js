const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name field is required'],
    maxLength: [50, 'The name field should contain a maximum of 50 characters']
  },
  city: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'City' 
  }],
  description: {
    type: String,
    required: [true, 'The description field is required'],
  },
  img: {
    type: String,
  },
  tag: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Tag' 
  }]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);