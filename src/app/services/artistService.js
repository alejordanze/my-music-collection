const {Artist} = require('../models');

class ArtistService {

    async findAll() {
        try{
            return await Artist.findAll({
                include: 'albums'
            });
        }
        catch(error){
            throw error;
        }
    }

    async create (newArtist){
        try{
            return await Artist.create(newArtist);
        }
        catch(error){
            throw error;
        }
    }

    async update(id, updatedArtist){
        try{
            const artistToUpdate = await Artist.findOne({
                where: {id: Number(id)}
            });
            if(artistToUpdate){
                await Artist.update(updatedArtist, {
                    where: {id: Number(id)}
                })

                return updatedArtist;
            }
            return null;
        }
        catch(error){
            throw error;
        }
    }
    
    async getOne(id){
        try{
            const artist = await Artist.findOne({
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
    }

    async delete(id){
        try{
            const artistToDelete = await Artist.findOne({
                where: {id: Number(id)}
            });

            if(artistToDelete){
                const deletedArtist = await Artist.destroy({
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

module.exports = new ArtistService();