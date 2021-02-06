const albumModel = require('../models/album');

const AlbumService = {

    findAll: async () => {
        try{
            return await albumModel.findAll();
        }
        catch(error) {
            throw error;
        }
    },

    create: async(newAlbum) => {
        try{
            return await albumModel.create(newAlbum);
        }
        catch(error){
            throw error;
        }
    },

    update: async (id, editedAlbum) => {
        try{
            const albumToUpdate = await albumModel.findOne({
                where: {id: Number(id)}
            });

            if(albumToUpdate){
                await albumToUpdate.update(editedAlbum, {where: {id: Number(id)}})

                return editedAlbum;
            }
            return null;
        }
        catch(error){
            throw error;
        }
    },

    getOne: async (id) => {
        try{
            const album = await albumModel.findOne({
                where: {id: Number(id)}
            });

            return album;
        }
        catch(error){
            throw error;
        }
    },

    delete: async (id) => {
        try{
            const albumToDelete = await albumModel.findOne({
                where: {id: Number(id)}
            });

            if(albumToDelete){
                const deletedAlbum = await albumModel.destroy({
                    where: {id: Number(id)}});

                return deletedAlbum;
            }
            return null;
        }
        catch(error){
            return error;
        }
    }
}

module.exports = AlbumService;