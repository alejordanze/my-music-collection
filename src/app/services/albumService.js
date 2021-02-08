const {Album} = require('../models');

class AlbumService {

    async findAll() {
        try{
            return await Album.findAll({
                include: 'artists'
            });
        }
        catch(error) {
            throw error;
        }
    }

    async create(newAlbum) {
        try{
            return await Album.create(newAlbum);
        }
        catch(error){
            throw error;
        }
    }

    async update(id, editedAlbum) {
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
    }

    async getOne(id) {
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
    }

    async delete(id){
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

module.exports = new AlbumService();