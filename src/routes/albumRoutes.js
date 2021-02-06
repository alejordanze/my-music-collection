const albumController = require('../controllers/albumController.js');
const { Router } = require("express");
const router = Router();

router.get('/', albumController.findAll);
router.post('/', albumController.create);

module.exports = router;