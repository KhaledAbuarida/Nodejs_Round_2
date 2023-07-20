const express = require('express');

const routes = express.Router();

routes.get('/add-product', (req, res, next)=> {
    res.send('<form method="POST" action="/admin/product"><input type="text" name="title"><button type="submit">Add</button></form>')
})

routes.post('/product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
})

module.exports = routes;