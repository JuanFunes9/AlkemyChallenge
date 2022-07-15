const express = require('express');
const app = express();

//Import routes
const RoutesPersonajes = require('./routes/personajes.routes');
const RoutesMovies = require('./routes/movies.routes')

//settings:
app.use(express.json());                            //guarda la info que llega en el req.body
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/characters', RoutesPersonajes);
app.use('/movies', RoutesMovies);
app.get('/*', (req, res) => {
  res.json({
    error: -2,
    desc: "Ruta no implementada"
  })
})

module.exports = app;