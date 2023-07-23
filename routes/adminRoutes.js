const express = require('express');

const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();

//------ Adding Product
router.get('/add-product', adminController.getAddProduct);

router.post('/add-product',adminController.postAddProduct);

//------ Editing Product
router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.get('/products', adminController.getAdminProducts);

module.exports = router;