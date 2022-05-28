const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'minat123', {
  host: 'localhost',
  dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;