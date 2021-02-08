const {AlbumArtist} = require('../models');
const albumService = require('./albumService');
const artistService = require('./artistService');

class AlbumArtistService {
    async addArtistToAlbum(albumId, artistId){
        try{
            const albumToAdd = await albumService.getOne(albumId);
            const artistToAdd = await artistService.getOne(artistId);
    
            if(albumToAdd && artistToAdd){
                const createdAlbumArtist = await AlbumArtist.create({albumId, artistId});
                return createdAlbumArtist;
            }
            return null;
        }
        catch(error){
            throw error;
        }
    }

    async removeArtistFromAlbum(albumId, artistId){
        try{
            const albumToAdd = await albumService.getOne(albumId);
            const artistToAdd = await artistService.getOne(artistId);
    
            if(albumToAdd && artistToAdd){
                const albumArtistToDelete = await AlbumArtist.destroy({
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

module.exports = new AlbumArtistService();
