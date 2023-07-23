const Product = require('../modules/product');

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
    const product = Product.findById(prodId);
    const productPrice = product.price;
    res.render('admin/edit-product', 
    {
        pageTitle: 'Edit Product', 
        product: product,
        path: '/admin/edit-product', 
        editing: editMode,
    });
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const product = Product.findById(prodId);
    product.title = req.body.title;
    product.imageUrl = req.body.imageUrl;
    product.price = req.body.price;
    product.description = req.body.description;
    console.log(product);
    res.redirect('/admin/products');
}

exports.getAdminProducts = (req, res, next) => {
    const product = Product.showAll();
    res.render('admin/products', {prods: product, pageTitle: 'Admin Products', path: '/admin/products'});
}