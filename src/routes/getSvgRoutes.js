const express = require('express');
const router = express.Router();
const getSvgController = require('../controllers/getSvgController');

router.get('/get-svg', getSvgController.get );

module.exports = router;
