const { Router } = require('express');
const productController = require('../controllers/product.controller');

const router = Router();

router.route('/').get(productController.getAllProducts);

module.exports = router;
