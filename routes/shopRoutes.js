const express = require('express');

const path = require('path');

const shopController = require('../controllers/shop');

const routes = express.Router();

routes.get('/', shopController.getIndex);

routes.get('/products', shopController.getProducts);

routes.get('/products/:productId', shopController.getProductForDetails);

//------ Cart
routes.get('/cart', shopController.getCart);

routes.post('/cart', shopController.postCart);

//------ Order
routes.get('/orders', shopController.getOrders);

//------ Checkout
routes.get('/checkout', shopController.getCheckout);

module.exports = routes;
