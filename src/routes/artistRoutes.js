const artistController = require('../controllers/artistController');
const { Router } = require("express");
const router = Router();

router.get('/', artistController.findAll);
router.post('/', artistController.create);

module.exports = router;