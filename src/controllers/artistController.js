const artistService = require('../app/services/artistService');
const utils = require('../utils/utils');

class ArtistController {

    async findAll(req, res) {
        try{
            const artistList = await artistService.findAll();

            if(artistList.length > 0){
                utils.setSuccess(200, "Artists", artistList);
            } else {
                utils.setSuccess(200, "There is no artists");
            }
            return utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            return utils.send(res);
        }
    }

    async getOne(req, res) {
        try{
            const artistId = req.params.id;
            const artist = await artistService.getOne(artistId);
            if(artist){
                utils.setSuccess(200, "Artist", artist);
            } else {
                utils.setError(404, {message: `Artist with id: ${artistId} not found`})
            }
            return utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            return utils.send(res);
        }
    }

    async create(req, res) {
        const artist = req.body;
        try{
            const createdArtist = await artistService.create(artist);
            utils.setSuccess(201, "Artist created: ", createdArtist);
            return utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            return utils.send(res);
        }
    }

    async delete(req, res) {
        try{
            const artistId = req.params.id;
            const deletedArtist = await artistService.delete(artistId);
            if(deletedArtist){
                utils.setSuccess(200, "Artist deleted", deletedArtist);
            } else {
                utils.setError(404, {message: `Artist with id: ${artistId} not found`},);
            }
            return utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            return utils.send(res);
        }
    }

    async update(req, res) {
        try{
            const artistId = req.params.id;
            const artistToUpdate = req.body;
            const artistUpdated = await artistService.update(artistId,artistToUpdate);
            if(artistUpdated){
                utils.setSuccess(200, "Artist updated", artistUpdated);
            } else {
                utils.setError(404, {message: `Artist with id: ${artistId} not found`},);
            }
            return utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            return utils.send(res);
        }
    }
}

module.exports = new ArtistController();