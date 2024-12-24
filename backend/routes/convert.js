const express = require('express');
const router = express.Router();
const { convertCurrency } = require('../controllers/convertController');

router.get('/', convertCurrency);

module.exports = router;