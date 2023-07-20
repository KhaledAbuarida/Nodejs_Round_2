const express = require('express');

const routes = express.Router();

routes.get('/',(req, res, next) => {
    res.send('<h1> Hello i am Khaled a backend developer </h1>');
});

module.exports = routes;
