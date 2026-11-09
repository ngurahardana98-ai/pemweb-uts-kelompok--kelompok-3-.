const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');

router.get('/', pasienController.index);
router.get('/create', pasienController.createForm);
router.post('/', pasienController.store);
router.get('/:id/edit', pasienController.editForm);
router.put('/:id', pasienController.update);
router.delete('/:id', pasienController.delete);

module.exports = router;