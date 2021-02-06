const artistModel = require('../models/artist');
const albumModel = require('../models/album');

const artistService = {

    findAll: async () => {
        try{
            return await artistModel.findAll({
                include: 'albums'
            });
        }
        catch(error){
            throw error;
        }
    },

    create: async (newArtist) => {
        try{
            return await artistModel.create(newArtist);
        }
        catch(error){
            throw error;
        }
    },

    update: async (id, updatedArtist) => {
        try{
            const artistToUpdate = await artistModel.findOne({
                where: {id: Number(id)}
            });
            if(artistToUpdate){
                await artistModel.update(updatedArtist, {
                    where: {id: Number(id)}
                })

                return updatedArtist;
            }
            return null;
        }
        catch(error){
            throw error;
        }
    },
    
    getOne: async(id) => {
        try{
            const artist = await artistModel.findOne({
                where: {id: Number(id)}
            });
            if(artist){
                return artist;
            }
            return null;
        }
        catch(error){
            throw error;
        }
    },

    delete: async(id) => {
        try{
            const artistToDelete = await artistModel.findOne({
                where: {id: Number(id)}
            });

            if(artistToDelete){
                const deletedArtist = await artistModel.destroy({
                    where: {id: Number(id)}
                })

                return deletedArtist;
            }
            return null;
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = artistService;