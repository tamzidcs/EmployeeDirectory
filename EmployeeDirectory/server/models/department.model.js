module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define("department", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Department;
};
