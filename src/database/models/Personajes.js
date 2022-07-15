//Sequelize con mayus hace ref. a la libreria, sin mayus hace ref. a una instancia de la misma:
const { DataTypes } = require( 'sequelize' );
const sequelize = require( '../database' );
//import schemas para relacionarlos:
const Peliculas = require( './Movies' );

const Personajes = sequelize.define( 'personajes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  img: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  weight: { type: DataTypes.FLOAT },
  history: { type: DataTypes.STRING }
}, {
  timestamps: false
} );


module.exports = Personajes;