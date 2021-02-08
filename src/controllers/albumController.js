const albumService = require('../app/services/albumService');
const utils = require('../utils/utils');

class AlbumController {

    async findAll(req, res) {
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
    }

    async getOne(req, res) {
        try{
            const albumId = req.params.id;
            const album = await albumService.getOne(albumId);

            if(album){
                utils.setSuccess(200, 'Album', album);
            } else {
                utils.setError(404, {message: `Album with id: ${albumId} not found`});
            }
            return utils.send(res);
        } catch(error){
            utils.setError(400, error.message);
            return utils.send(res);
        }
    }

    async create(req, res) {
        const album = req.body;
        try{
            const createdAlbum = await albumService.create(album);
            utils.setSuccess(201, 'Album created', createdAlbum);
            return utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            return utils.send(res);
        }
    }

    async delete(req, res) {
        const albumId = req.params.id;
        try{
            const albumDeleted = await albumService.delete(albumId);
            if(albumDeleted){
                utils.setSuccess(200, 'Album deleted', albumDeleted);
            } else {
                utils.setError(404, {message: `Album with id: ${albumId} not found`});
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
            const albumId = req.params.id;
            const albumToUpdate = req.body;
            const albumUpdated = await albumService.update(albumId, albumToUpdate);
            if(albumUpdated){
                utils.setSuccess(200, 'Album updated', albumUpdated);
            } else {
                utils.setError(404, {message: `Album with id: ${albumId} not found`});
            }
            return utils.send(res);
        }
        catch(error){
            utils.setError(400, error.message);
            return utils.send(res);
        }
    }
}

module.exports = new AlbumController();