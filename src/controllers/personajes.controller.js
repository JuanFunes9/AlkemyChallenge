const { response } = require('express');
const PersonajesModel = require('../database/models/Personajes');
const { Op } = require('sequelize');

class Personajes {

  async getPersonajes(query) {
    if (query.name) {
      const responseDB = await PersonajesModel.findAll({
        attributes: ["img", "name"],
        where: {
          name: {
            [Op.substring]: query.name,
          }
        }
      })
      return (responseDB);
    } else if (query.age) {
      const responseDB = await PersonajesModel.findAll({
        attributes: ["img", "name"],
        where: {
          age: {
            [Op.eq]: query.age,
          }
        }
      })
      return (responseDB);
    } else if (query.weight) {
      const responseDB = await PersonajesModel.findAll({
        attributes: ["img", "name"],
        where: {
          weight: {
            [Op.eq]: query.weight,
          }
        }
      })
      return (responseDB);
    } else {
      const responseDB = await PersonajesModel.findAll({
        // attributes: ["img", "name"]
      });
      return (responseDB);
    }
  }

  async getPersonajesById(id) {
    try {
      const responseDB = await PersonajesModel.findOne(
        { where: { id: id } }
      )
      if (responseDB == undefined) {
        return ({ error: "Personaje no encontrado." })
      } else {
        return (responseDB);
      }
    } catch (error) {
      return ({ error: "Ingrese un parametro ID valido." })
    }
  }

  async newPersonaje(newPersonaje) {
    let { img, name, age, weight, history } = newPersonaje;
    name = name.toLowerCase();
    const responseDB = await PersonajesModel.create({
      img,
      name,
      age,
      weight,
      history
    })
    return responseDB;
  }

  async editPersonaje(id, editPersonaje) {
    try {
      const { img, name, age, weight, history } = editPersonaje;
      const responseDB = await PersonajesModel.update({
        img,
        name,
        age,
        weight,
        history
      }, {
        where: {
          id: id
        }
      });
      if (responseDB[0] == 1) {
        return (editPersonaje);
      } else {
        return ({ error: "No se  ha podido editar. Personaje no encontrado." })
      }
    } catch (error) {
      return ({ error: "Ingrese un parametro ID valido." })
    }

  }

  async deletePersonaje(id) {
    try {
      const countDeleted = await PersonajesModel.destroy(
        { where: { id: id } }
      );
      if (countDeleted == 0) {
        return ({ error: "No se  ha podido eliminar. Personaje no encontrado." });
      } else {
        return ({ message: `Se ha eliminado el personaje con id: ${id}` });
      }
    } catch (error) {
      return ({ error: "Ingrese un parametro ID valido." })
    }
  }

}

const personaje = new Personajes;

module.exports = personaje;