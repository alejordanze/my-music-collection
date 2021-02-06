const sequelize = require('../../config/sequelize-config').sequelize
const DataTypes = require('../../config/sequelize-config').datatype

const AlbumArtist = sequelize.define('AlbumArtist', {
  artistId: {
    type: DataTypes.INTEGER,
    allowNull:  false
  },
  albumId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {});

module.exports = AlbumArtist;