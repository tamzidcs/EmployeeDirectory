module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    city: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Location;
};
