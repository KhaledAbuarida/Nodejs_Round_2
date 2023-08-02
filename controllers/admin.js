const Cart = require('../modules/cart');
const Product = require('../modules/product');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;

exports.getAddProduct =  (req, res, next)=> {
    res.render('admin/edit-product', {pageTitle: 'Add New Product', path: '/admin/add-product', editing: false});
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

exports.getEditProduct =  (req, res, next)=> {
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId)
    .then(product => {
        res.render('admin/edit-product', 
        {
            pageTitle: 'Edit Product', 
            product: product,
            path: '/admin/edit-product', 
            editing: editMode,
        });
    }).catch(err => {
        console.log(err);
    });
    // const productPrice = product.price;
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImage = req.body.imageUrl;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    const product = new Product(updatedTitle, updatedPrice, updatedImage, updatedDescription, new ObjectId(prodId));
    product.save().then(result => {
        console.log('Updated!');
    }).catch(err => {
        console.log(err);
    })
    res.redirect('/admin/products');
}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    //deleting product
    Product.deleteById(prodId)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })

    //deleting product from the cart
    // Cart.deleteProduct(prodId);

    console.log('After Deleting',Cart.getCart());
    res.redirect('/admin/products');
}

exports.getAdminProducts = (req, res, next) => {
    Product.showAll().then(product => {
        res.render('admin/products', {prods: product, pageTitle: 'Admin Products', path: '/admin/products'});
    })
    .catch(err => {
        console.log(err);
    });
}