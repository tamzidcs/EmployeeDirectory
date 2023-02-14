const db = require("../models");
const Job = db.job;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
    // Create a Department
    const job = {
      title: req.body.title,
    };
    // Save Department in the database
    Job.create(job)
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