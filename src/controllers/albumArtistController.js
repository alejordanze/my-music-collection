const utils = require('../utils/utils');
const albumArtistService = require('../app/services/albumArtistService');
const Album = require('../app/models/album');

const AlbumArtistController = {

    addArtistToAlbum: async(req, res) => {
        try{
            const artistId = req.query.artistId;
            const albumId = req.query.albumId;

            const createdRelation = await albumArtistService.addArtistToAlbum(albumId, artistId);
            utils.setSuccess(200, "Artist added to Album", createdRelation);
            utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            utils.send(res);
        }
    },

    removeArtistFromAlbum: async(req, res) => {
        try{
            const artistId = req.query.artistId;
            const albumId = req.query.albumId;
            const removedRelation = await albumArtistService.removeArtistFromAlbum(albumId, artistId);
            utils.setSuccess(200, "Artist removed from Album", removedRelation);
            utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            utils.send(res);
        }
    }
}

module.exports = AlbumArtistController;