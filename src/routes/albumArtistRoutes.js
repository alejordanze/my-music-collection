const albumArtistController = require('../controllers/albumArtistController');
const { Router } = require("express");
const router = Router();

router.post("/", albumArtistController.addArtistToAlbum);
router.delete("/", albumArtistController.removeArtistFromAlbum);

module.exports = router;