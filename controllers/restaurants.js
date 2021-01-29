const Restaurant = require('../models/Restaurant');
const Order = require('../models/Tag');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.json({ success: true, msg: 'show all restaurants', data: restaurants })
  } catch(err) {
    next(err)
  }
}

const getRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);
    res.json({ success: true, msg: 'show selected restaurant', data: restaurant })
  } catch(err) {
    next(err)
  }
};

const createRestaurant = async (req, res, next) => {

};

const deleteRestaurant = async (req, res, next) => {
  
};

const updateRestaurant = async (req, res, next) => {

};

const getRestaurantOrders = async (req, res, next) => {

};


module.exports = {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantOrders,

}