module.exports = {
  up: async (queryInterface, Sequelize) => {
    const albums = await queryInterface.sequelize.query(
      'SELECT id from "Albums";',
    );
    const albumsrows = albums[0];

    const artists = await queryInterface.sequelize.query(
      'SELECT id from "Artists";',
    );

    const artistsrows = artists[0];

    return queryInterface.bulkInsert('AlbumArtists', [{
      albumId: albumsrows[0].id,
      artistId: artistsrows[0].id,
    },
    {
      albumId: albumsrows[1].id,
      artistId: artistsrows[0].id,
    },
    {
      albumId: albumsrows[2].id,
      artistId: artistsrows[1].id,
    },
    {
      albumId: albumsrows[3].id,
      artistId: artistsrows[1].id,
    },
    {
      albumId: albumsrows[4].id,
      artistId: artistsrows[2].id,
    },
    {
      albumId: albumsrows[5].id,
      artistId: artistsrows[3].id,
    },
    {
      albumId: albumsrows[5].id,
      artistId: artistsrows[4].id,
    },
    ]);
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('AlbumArtists', null, {}),
};
