const { sequelize } = require('../../config/sequelize-config');
const DataTypes = require('../../config/sequelize-config').datatype;

const Artist = sequelize.define('Artist', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {});

Artist.associate = (models) => {
  Artist.belongsToMany(models.Album, {
    through: models.AlbumArtist,
    as: 'albums',
    foreignKey: 'artistId',
  });
};

module.exports = Artist;
