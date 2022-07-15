const app = require('./app');
const PORT = process.env.PORT || 3000;
const sequelize = require('./database/database');

//Import models:
// const Personajes = require( './database/models/Personajes' );
// const Peliculas = require( './database/models/Movies' );
// const Generos = require( './database/models/Generos' );
// const associations = require( './database/associations' )

async function main() {
  try {
    await sequelize.sync({ force: false })
    console.log('Connection to database has been established successfully.');
    const server = app.listen(PORT, () => {
      console.log(`Server on PORT: ${PORT}`);
    });
    server.on('error', err => console.log('Error en el server: ' + err));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();