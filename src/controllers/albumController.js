const albumService = require('../app/services/albumService');
const utils = require('../utils/utils');

const AlbumController = {

    findAll: async(req, res) => {
        try{
            const albumList = await albumService.findAll();
        
            if (albumList.length > 0) {
                utils.setSuccess(200, 'Albums', albumList);
            } else {
                utils.setSuccess(200, 'There is no albums');
            }
            return utils.send(res);
        } 
        catch (error) {
            utils.setError(400, error.message);
            return utils.send(res);
        }
    },

    create: async(req, res) => {
        const album = req.body;
        try{
            const createdAlbum = await albumService.create(album);
            utils.setSuccess(201, 'Album created: ', createdAlbum);
            return utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            return utils.send(res);
        }
    }

    
}

module.exports =  AlbumController;