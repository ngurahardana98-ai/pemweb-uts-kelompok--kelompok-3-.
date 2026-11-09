const express = require('express');
const router = express.Router();
const pendaftaranController = require('../controllers/pendaftaranController');

router.get('/', pendaftaranController.index);
router.get('/create', pendaftaranController.createForm);
router.post('/', pendaftaranController.store);
router.get('/:id/edit', pendaftaranController.editForm);
router.put('/:id', pendaftaranController.update);
router.delete('/:id', pendaftaranController.delete);

module.exports = router;