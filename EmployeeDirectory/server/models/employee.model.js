module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
  return Employee;
};
