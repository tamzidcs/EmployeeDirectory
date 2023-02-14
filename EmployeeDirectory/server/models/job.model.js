module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Job;
};
