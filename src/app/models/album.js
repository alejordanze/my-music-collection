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
});

module.exports = Album;