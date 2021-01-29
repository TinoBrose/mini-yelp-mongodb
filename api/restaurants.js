const express = require("express");
const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantOrders
} = require('../controllers/restaurants');

const api = express.Router();

api
  .route("/")
  .get(getRestaurants)

api
  .route('/:id')
  .get(getRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant)

// locahost:5000/restaurants/:id/orders
api
  .route('/:id/orders')
  .get(getRestaurantOrders)

module.exports = api;