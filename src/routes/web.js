const express = require('express');
const { getHome, getAbc, getThanhNguyen } = require('../controllers/home_controller')

const route = express.Router();

route.get('/', getHome);

route.get('/abc', getAbc);

route.get('/thanhnguyen', getThanhNguyen);

module.exports = route;