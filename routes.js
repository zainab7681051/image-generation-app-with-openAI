const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.post('/create', controller.generateImage);

module.exports = router;