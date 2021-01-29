const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  
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