const dbConfig = require("../config/db.config.js");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require("./employee.model.js")(sequelize, Sequelize);
db.department = require("./department.model.js")(sequelize, Sequelize);
db.job = require("./job.model.js")(sequelize, Sequelize);
db.location = require("./location.model.js")(sequelize, Sequelize);

module.exports = db;