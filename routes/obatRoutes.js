const express = require('express');
const router = express.Router();
const obatController = require('../controllers/obatController');

router.get('/', obatController.index);
router.get('/create', obatController.createForm);
router.post('/', obatController.store);
router.get('/:id/edit', obatController.editForm);
router.put('/:id', obatController.update);
router.delete('/:id', obatController.delete);

module.exports = router;