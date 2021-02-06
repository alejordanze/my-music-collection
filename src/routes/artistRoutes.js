const artistController = require('../controllers/artistController');
const { Router } = require("express");
const router = Router();

router.get('/', artistController.findAll);
router.get('/:id', artistController.getOne);
router.post('/', artistController.create);
router.delete('/:id',artistController.delete);
router.put('/:id', artistController.update);


module.exports = router;