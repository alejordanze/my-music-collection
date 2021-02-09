const utils = require('../utils/utils');
const albumArtistService = require('../app/services/albumArtistService');

class AlbumArtistController {
  async addArtistToAlbum(req, res) {
    try {
      const { artistId } = req.query;
      const { albumId } = req.query;

      const createdRelation = await albumArtistService.addArtistToAlbum(albumId, artistId);
      if (createdRelation) {
        utils.setSuccess(200, 'Artist added to Album', createdRelation);
      } else {
        utils.setError(404, { message: `Artist with id: ${artistId} or Album with id: ${albumId} not found` });
      }
      utils.send(res);
    } catch (error) {
      utils.setError(400, { message: error.message });
      utils.send(res);
    }
  }

  async removeArtistFromAlbum(req, res) {
    try {
      const { artistId } = req.query;
      const { albumId } = req.query;
      const removedRelation = await albumArtistService.removeArtistFromAlbum(albumId, artistId);
      if (removedRelation) {
        utils.setSuccess(200, 'Artist removed from Album', removedRelation);
      } else {
        utils.setError(404, { message: `Artist with id: ${artistId} or Album with id: ${albumId} not found` });
      }

      utils.send(res);
    } catch (error) {
      utils.setError(400, { message: error.message });
      utils.send(res);
    }
  }
}

module.exports = new AlbumArtistController();
