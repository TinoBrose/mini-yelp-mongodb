const express = require("express");
const {
  getTags,
  getTag,
  createTag,
  updateTag,
  deleteTag
} = require('../controllers/tags');

const api = express.Router();

api
  .route("/")
  .get(getTags)
  .post(createTag)

api
  .route('/:id')
  .get(getTag)
  .put(updateTag)
  .delete(deleteTag)

module.exports = api;