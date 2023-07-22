const Product = require('../modules/product');

exports.getAddProduct =  (req, res, next)=> {
    // res.sendFile(path.join(__dirname,'..' ,'views', 'add-product.html'));
    res.render('admin/add-product', {pageTitle: 'Add New Product', path: '/admin/add-product'});
};

exports.postAddProduct =  (req, res, next)=> {
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;

    const prod = new Product(title, price, imageUrl, description);

    prod.save();
    res.redirect('/');
};

exports.getAdminProducts = (req, res, next) => {
    const product = Product.showAll();
    res.render('admin/products', {prods: product, pageTitle: 'Admin Products', path: '/admin/products'});
}