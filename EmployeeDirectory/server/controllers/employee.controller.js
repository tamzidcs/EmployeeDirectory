const db = require("../models");
const Employee = db.employee;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.first_name || !req.body.last_name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
    // Create a Department
    const employee = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };
    // Save Department in the database
    Employee.create(employee)
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