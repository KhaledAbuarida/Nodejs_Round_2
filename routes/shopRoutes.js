const express = require('express');

const path = require('path');

const shopController = require('../controllers/shop');

const routes = express.Router();

routes.get('/', shopController.getIndex);

routes.get('/products', shopController.getProducts);

routes.get('/products/:productId', shopController.getProductForDetails);

routes.get('/cart', shopController.getCart);

routes.get('/orders', shopController.getOrders);

routes.get('/checkout', shopController.getCheckout);

module.exports = routes;
