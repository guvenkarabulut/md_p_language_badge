const express = require('express');
const router = express.Router();
const badgeController = require('../controllers/badgeController');

router.get('/:slug', badgeController.get);

module.exports = router;
