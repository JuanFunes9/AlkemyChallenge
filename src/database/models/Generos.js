const { DataTypes } = require( 'sequelize' );
const sequelize = require( '../database' );

const Generos = sequelize.define( 'generos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  img: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING }
}, {
  timestamps: false
} );

module.exports = Generos;