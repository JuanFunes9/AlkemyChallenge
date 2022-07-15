const { response } = require('express');
const MoviesModel = require('../database/models/Movies');

class Movie {

  async getMovies() {
    const responseDB = await MoviesModel.findAll()
    // return responseDB.map( obj => {
    //   return {img: obj.img, title: obj.title, date: obj.date}
    // } );
    return (responseDB);
  }

  async getMovieById(id) {
    try {
      const responseDB = await MoviesModel.findOne(
        { where: { id: id } }
      )
      if (responseDB == undefined) {
        return ({ error: "Pelicula no encontrada." })
      } else {
        return (responseDB);
      }
    } catch (error) {
      return ({ error: "Ingrese un parametro ID valido." })
    }
  }

  async newMovie(newMovie) {
    const { img, title, date, rate } = newMovie;
    const responseDB = await MoviesModel.create({
      img,
      title,
      date,
      rate
    })
    return responseDB;
  }

  async editMovie(id, editMovie) {
    try {
      const { img, title, date, rate } = editMovie;
      const responseDB = await MoviesModel.update({
        img,
        title,
        date,
        rate
      }, {
        where: {
          id: id
        }
      });
      if (responseDB[0] == 1) {
        return (editMovie);
      } else {
        return ({ error: "No se  ha podido editar. Pelicula no encontrada." })
      }
    } catch (error) {
      return ({ error: "Ingrese un parametro ID valido." })
    }
  }

  async deleteMovie(id) {
    try {
      const countDeleted = await MoviesModel.destroy(
        { where: { id: id } }
      );
      if( countDeleted == 0 ){
        return ({ error: "No se  ha podido eliminar. Pelicula/serie no encontrada." });
      } else {
        return ( { message: `Se ha eliminado la pelicula o serie con id: ${ id }` } );
      }
    } catch (error) {
      return ({ error: "Ingrese un parametro ID valido." })
    }

  }

}

const movie = new Movie;

module.exports = movie;