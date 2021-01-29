const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const SpotSchema = new Schema({
  name: {
      type: String,
      required: [true, 'The name field is required'],
      maxLength: [50, 'The name field should contain a maximum of 50 characters']
  },
  city: {
    type: String,
    required: [true, 'The city field is required'],
    maxLength: [30, 'The city field should contain a maximum of 50 characters']
  },
  description: {
    type: String,
    required: [true, 'The description field is required'],
  },
  img: {
    type: String,
  },
  tags: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Tag' 
  }]
});

/* // hash password
RestaurantSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

RestaurantSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET)
}

// math Restaurant entered password ot hashed password in db
RestaurantSchema.methods.matchPassword = async function(enteredPass) {
  return await bcrypt.compare(enteredPass, this.password)
} */

module.exports = mongoose.model('Restaurants', RestaurantSchema);