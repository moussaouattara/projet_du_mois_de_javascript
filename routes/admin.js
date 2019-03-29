const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/', adminController.getIndex);

router.post('/ajouter-un-produit', adminController.postIndex);

module.exports = router;
