const Product = require('../modules/product');

exports.getIndex = (req, res, next) => {
    console.log(Product.showAll());
    const products = Product.showAll();
    res.render('shop/index', {prods: products, pageTitle: 'Shop', path: '/'});
};

exports.getProducts = (req, res, next) => {
    const products = Product.showAll();
    res.render('shop/product-list', {prods: products, pageTitle: 'Products', path: '/products'});
}

exports.getProductForDetails = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {pageTitle: 'Cart', path: '/cart'});
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'});
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {pageTitle: 'Orders', path: '/orders'});
}
