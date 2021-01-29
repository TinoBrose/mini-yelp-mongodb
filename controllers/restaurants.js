const Restaurant = require('../models/Restaurant');
const Tag = require('../models/Tag');
const City = require('../models/City');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find().populate('tag').populate('city');
    res.json({ success: true, msg: 'show all restaurants', data: restaurants })
  } catch(err) {
    next(err)
  }
}

const getRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id).populate('tag').populate('city');
    res.json({ success: true, msg: 'show selected restaurant', data: restaurant })
  } catch(err) {
    next(err)
  }
};


const getRestaurantTags = async (req, res, next) => {

};

const createRestaurant = async (req, res, next) => {

};

const deleteRestaurant = async (req, res, next) => {
  
};

const updateRestaurant = async (req, res, next) => {

};



module.exports = {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantTags,

}