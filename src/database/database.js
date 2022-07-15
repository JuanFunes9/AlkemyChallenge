const { Sequelize } = require( 'sequelize' );

const sequelize = new Sequelize('disney', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;