const artistService = require('../app/services/artistService');
const utils = require('../utils/utils');

const artistController = {

    findAll: async(req, res) => {
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
    },

    create: async(req, res) => {
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
}

module.exports = artistController;