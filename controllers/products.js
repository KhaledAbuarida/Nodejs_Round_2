const products = [];

exports.getAddProduct =  (req, res, next)=> {
    // res.sendFile(path.join(__dirname,'..' ,'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add New Product', path: '/admin/add-product'});
};

exports.postAddProduct =  (req, res, next)=> {
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    console.log(products);
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
};