module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "minat123",
    DB: "employee_directory_sequelize",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };