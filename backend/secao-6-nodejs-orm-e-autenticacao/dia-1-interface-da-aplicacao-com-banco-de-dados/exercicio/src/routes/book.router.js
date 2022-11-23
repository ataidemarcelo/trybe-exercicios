const express = require('express');
const { BookController } = require('../controllers');

const router = express.Router();

router.get('/', BookController.findAll);
router.get('/:id', BookController.findById);
router.post('/', BookController.create);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.remove);

module.exports = router;
