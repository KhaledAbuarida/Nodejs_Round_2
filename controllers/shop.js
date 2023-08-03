const Product = require('../modules/product');
const Cart = require('../modules/cart');

exports.getIndex = (req, res, next) => {
    Product.showAll()
    .then(products => {
        res.render('shop/index', {prods: products, pageTitle: 'Shop', path: '/'});
    })
    .catch(err => {
        console.log(err);
    })
};

exports.getProducts = (req, res, next) => {
    Product.showAll().then(products => {
        res.render('shop/product-list', {prods: products, pageTitle: 'Products', path: '/products'});
    }).catch(err => {
        console.log(err);
    })
};

exports.getProductForDetails = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId).then(product => {
        res.render('shop/product-details', {product: product, pageTitle: product.title, path: '/products'});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getCart = (req, res, next) => {
    const cart = Cart.getCart();
    res.render('shop/cart', {pageTitle: 'Cart', path: '/cart', crt: cart});
};

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    Product.findById(productId)
        .then(product => {
            return req.user.addToCart(product);
            // console.log(product);
        })


    // Cart.save(product);
    
    // console.log(Cart.getCart());
    // if(req.body.isIndex === "true"){
    //     return res.redirect('/');
    // }
    // else{
    //     return res.redirect('/products');
    // }
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'});
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {pageTitle: 'Orders', path: '/orders'});
};
