const express = require('express');
const router = express.Router();

const myController = require('../controllers/')

router.get('/', myController.getData);

router.get('/:id', myController.getObject);

module.exports = router;