//Import models:
const Personajes = require( './models/Personajes' );
const Peliculas = require( './models/Movies' );
const Generos = require( './models/Generos' );

//Asociacion 1 a N:
//Una pelicula va a tener muchos personajes:
Personajes.hasMany( Peliculas, {
  foreignKey: 'associated',
  sourceKey: 'id'
} );

Peliculas.belongsTo( Personajes, {
  foreignKey: 'associated',
  targetId: 'id'
} );

//Un personaje va a tener muchas peliculas:
Peliculas.hasMany( Peliculas, {
  foreignKey: 'associated',
  sourceKey: 'id'
} );

Personajes.belongsTo( Personajes, {
  foreignKey: 'associated',
  targetId: 'id'
} );

//Un genero va a tener muchas peliculas:
Generos.hasMany( Peliculas, {
  foreignKey: 'associated',
  sourceKey: 'id'
} );

Peliculas.belongsTo( Generos, {
  foreignKey: 'associated',
  targetId: 'id'
} );