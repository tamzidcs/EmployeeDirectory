const db = require("../models");
const Location = db.job;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.city) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
    // Create a Department
    const location = {
      city: req.body.city,
    };
    // Save Department in the database
    Location.create(location)
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