const express = require('express');
const router = express.Router();

const myController = require('../controllers/')

router.get('/', myController.getData);

router.get('/:id', myController.getObject);

router.post('/', myController.createContact);

router.put('/:id', myController.updateContact);

router.delete('/:id', myController.deleteContact);


module.exports = router;