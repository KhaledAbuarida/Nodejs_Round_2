//imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pnfController = require('./controllers/404');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./modules/user');

const app = express();

//static directories
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

//------ using ejs template engine
app.set('view engine', 'ejs');
app.set('views','views');

//------ body-parser
app.use(bodyParser.urlencoded({extended: false}))

//------ importing Routes
app.use((req, res, next) => {
    User.findById("64cb055d0864637441226cc9")
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id);
            next();
        })
        .catch(err => {
            console.log(err);
        })
});
const adminRoutes = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');

//------ Routes
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(pnfController.get404);


mongoConnect(() => {
    app.listen(3000);
})