const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res, next)=> {
    res.send('<form method="POST" action="/product"><input type="text" name="title"><button type="submit">Add</button></form>')
})

app.use('/product', (req, res, next)=> {
    console.log(req.body);
    // res.send("<h1> Product Page </h1>");
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    res.send('<h1> Hello i am Khaled a backend developer </h1>');
});

app.listen(5000);