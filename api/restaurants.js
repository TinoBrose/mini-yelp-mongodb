const express = require("express");
const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantTags
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


api
  .route('/:id/tags')
  .get(getRestaurantTags)

module.exports = api;