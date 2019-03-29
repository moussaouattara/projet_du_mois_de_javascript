const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/produit/:id', shopController.getProductDetails);

router.get('/panier', shopController.getCart);

router.post('/ajouter-au-panier', shopController.postCart);

module.exports = router;
