const {Album} = require('../models');

const AlbumService = {

    findAll: async () => {
        try{
            return await Album.findAll({
                include: 'artists'
            });
        }
        catch(error) {
            throw error;
        }
    },

    create: async(newAlbum) => {
        try{
            return await Album.create(newAlbum);
        }
        catch(error){
            throw error;
        }
    },

    update: async (id, editedAlbum) => {
        try{
            const albumToUpdate = await Album.findOne({
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
            const album = await Album.findOne({
                where: {id: Number(id)},
                include: {all:true}
            });

            return album;
        }
        catch(error){
            throw error;
        }
    },

    delete: async (id) => {
        try{
            const albumToDelete = await Album.findOne({
                where: {id: Number(id)}
            });

            if(albumToDelete){
                const deletedAlbum = await Album.destroy({
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