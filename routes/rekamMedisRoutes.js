const express = require('express');
const router = express.Router();
const rekamMedisController = require('../controllers/rekamMedisController');

router.get('/', rekamMedisController.index);
router.get('/create', rekamMedisController.createForm);
router.post('/', rekamMedisController.store);
router.get('/:id/edit', rekamMedisController.editForm);
router.put('/:id', rekamMedisController.update);
router.delete('/:id', rekamMedisController.delete);

module.exports = router;