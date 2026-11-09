const express = require('express');
const router = express.Router();
const dokterController = require('../controllers/dokterController');

router.get('/', dokterController.index);
router.get('/create', dokterController.createForm);
router.post('/', dokterController.store);
router.get('/:id/edit', dokterController.editForm);
router.put('/:id', dokterController.update);
router.delete('/:id', dokterController.delete);

module.exports = router;