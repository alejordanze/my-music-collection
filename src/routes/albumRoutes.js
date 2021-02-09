const { Router } = require('express');
const albumController = require('../controllers/albumController.js');

const router = Router();

router.get('/', albumController.findAll);
router.get('/:id', albumController.getOne);
router.post('/', albumController.create);
router.delete('/:id', albumController.delete);
router.put('/:id', albumController.update);

module.exports = router;
