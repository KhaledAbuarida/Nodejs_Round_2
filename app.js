//imports
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//------ body-parser
app.use(bodyParser.urlencoded({extended: false}))

//------ importing Routes
const adminRoutes = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');

//------ Routes
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1> Page Not Found! </h1>')
})

app.listen(5000);