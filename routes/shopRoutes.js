const express = require('express');

const path = require('path');

const adminData = require('./adminRoutes');

const routes = express.Router();

routes.get('/', (req, res, next) => {
    console.log(adminData.products);
    const products = adminData.products;
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});

module.exports = routes;
