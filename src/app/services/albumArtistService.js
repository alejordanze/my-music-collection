const albumArtistModel = require('../models/albumartist');
const albumService = require('./albumService');
const artistService = require('./artistService');

const AlbumArtistService = {
    addArtistToAlbum: async(albumId, artistId) => {
        try{
            const albumToAdd = await albumService.getOne(albumId);
            const artistToAdd = await artistService.getOne(artistId);
    
            if(albumToAdd && artistToAdd){
                createdAlbumArtist = await albumArtistModel.create({albumId, artistId});
                return createdAlbumArtist;
            }
            return null;
        }
        catch(error){
            throw error;
        }
    },

    removeArtistFromAlbum: async(albumId, artistId) => {
        try{
            const albumToAdd = await albumService.getOne(albumId);
            const artistToAdd = await artistService.getOne(artistId);
    
            if(albumToAdd && artistToAdd){
                albumArtistToDelete = await albumArtistModel.destroy({
                   where:{albumId: Number(albumId), artistId: Number(artistId)}
                });
                return albumArtistToDelete;
            }
            return null;
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = AlbumArtistService;
