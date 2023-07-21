//imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//static directories
app.use(express.static(path.join(__dirname, 'public')));

//------ using ejs template engine
app.set('view engine', 'ejs');
app.set('views','views');

//------ body-parser
app.use(bodyParser.urlencoded({extended: false}))

//------ importing Routes
const adminData = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');

//------ Routes
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'PNF'});
});

app.listen(5000);