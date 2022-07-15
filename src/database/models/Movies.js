const { DataTypes } = require( 'sequelize' );
const sequelize = require( '../database' );

const Peliculas = sequelize.define( 'peliculas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  img: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE },
  rate: { type: DataTypes.FLOAT }
}, {
  timestamps: false
} );

module.exports = Peliculas;