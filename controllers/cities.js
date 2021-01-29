const City = require('../models/City');
const mongoose = require('mongoose');

const getCities = async (req, res, next) => {
  try {
    const cities = await City.find();
    res.json({ success: true, msg: 'show all cities', data: cities })
  } catch(err) {
    next(err)
  }
}

const getCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const city = await City.findById(id);
    res.json({ success: true, msg: 'show selected City', data: city })
  } catch(err) {
    next(err)
  }
};

const createCity = (req, res, next) => {

};

const deleteCity = (req, res, next) => {

};

const updateCity = (req, res, next) => {

};

module.exports = {
  getCities,
  getCity,
  createCity,
  updateCity,
  deleteCity
}