const Product = require('../modules/product');
const Cart = require('../modules/cart');

exports.getIndex = (req, res, next) => {
    // console.log(Product.showAll());
    const products = Product.showAll();
    res.render('shop/index', {prods: products, pageTitle: 'Shop', path: '/'});
}

exports.getProducts = (req, res, next) => {
    const products = Product.showAll();
    res.render('shop/product-list', {prods: products, pageTitle: 'Products', path: '/products'});
}

exports.getProductForDetails = (req, res, next) => {
    const prodId = req.params.productId;
    const product = Product.findById(prodId);
    res.render('shop/product-details', {product: product, pageTitle: product.title, path: '/products'});
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {pageTitle: 'Cart', path: '/cart'});
}

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    const product = Product.findById(productId);
    Cart.save(product);
    
    console.log(Cart.getCart());
    res.redirect('/products');
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'});
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {pageTitle: 'Orders', path: '/orders'});
}
