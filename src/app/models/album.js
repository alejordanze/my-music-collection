const sequelize = require('../../config/sequelize-config').sequelize
const DataTypes = require('../../config/sequelize-config').datatype

const Album = sequelize.define('Album', {

  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {});

Album.associate = (models) => {
  Album.belongsToMany(models.Artist, {
    through: models.AlbumArtist,
    as: "artists",
    foreignKey: "albumId",
  });
}


module.exports = Album;