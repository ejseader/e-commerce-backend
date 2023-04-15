const { Sequelize } = require('sequelize');
require('dotenv').config();

// process.env.JAWSDB_URL

const connection = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = connection;
