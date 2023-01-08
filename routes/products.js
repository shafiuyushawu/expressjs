var express = require('express')

var router = express.Router()

// /products
router.get('/', (req, res) => {
  res.send('Get request for products')
})

// /products/get-products-details
router.get('/get-product-details', (req, res) => {
  res.send('Get request for product details')
})

// /products/create-products
router.post('/create-products', (req, res) => {
  res.send('Create product details')
})

// /products/delete-products
router.delete('/delete-products', (req, res) => {
  res.send('Delete products')
})

// /products/update-products
router.put('/update-products', (req, res) => {
  res.send('Update products details')
})

//prouduct/patch-product
router.patch('/patch-products', (req, res) => {
  res.send('Patch product-details')
})

module.exports = router
