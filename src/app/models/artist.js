const sequelize = require('../../config/sequelize-config').sequelize
const DataTypes = require('../../config/sequelize-config').datatype

const Artist = sequelize.define('Artist', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDate: { 
    type: DataTypes.DATE,
    allowNull: false
  }
})
  
module.exports = Artist;