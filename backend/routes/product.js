const express = require('express')
const router = express.Router();


const { getproducts } = require('../controllers/productController')

router.route('/products').get(getproducts);

module.exports = router;