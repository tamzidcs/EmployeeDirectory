const db = require("../models");
const Department = db.department;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
    // Create a Department
    const department = {
      name: req.body.name,
    };
    // Save Department in the database
    Department.create(department)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the department."
        });
      });
  };