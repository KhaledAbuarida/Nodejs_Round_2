const express = require('express');

const path = require('path');

const productsController = require('../controllers/products');

const routes = express.Router();

routes.get('/', productsController.getProduct);

module.exports = routes;
