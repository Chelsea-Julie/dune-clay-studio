import express from 'express';
import bodyParser from 'body-parser';

import { Products } from '../model/Products.js';

const productRouter = express.Router ()

productRouter.use(bodyParser.json())

// to get all the products
productRouter.get('/', (req, res) => {
  Products.fetchProducts(req, res)
})

// to get the recnet product
productRouter.get('/recent', (req, res) => {
    Products.recentProducts(req, res)
  })

  // to fetch one productspecified by the id
  productRouter.get('/:id', (req, res) => {
    Products.fetchOneProduct(req, res)
  })

  // to add a new product
  productRouter.post('/add', (req, res) => {
    Products.addProduct(req, res)
  })

  // to update an existing product specified by the id
  productRouter.patch('/:id', (req, res) => {
    Products.updateProduct(req, res)
  })

  // ton delet a product specified by the id
  productRouter.delete('/:id', (req, res) => {
    Products.deleteProduct(req, res)
  })

export {
    express,
    productRouter
}