const express = require("express");
const cors = require("cors");
const fs = require("fs");

const department = require("./controllers/department.controller.js");

const db = require("./models");
db.sequelize.sync();

const PORT = process.env.PORT || 3005;

const app = express();
app.use(express.json());
app.use(cors());

// Get employees
app.get("/employees", (req, res) => {});

// Get employee by id
app.get("/employees/:id", (req, res) => {});

// Add an employee
app.post("/employees", async (req, res) => {});

// Update
app.put("/employees", async (req, res) => {});

// Delete
app.delete("/employees", async (req, res) => {});


app.post("/departments", (req, res) => {department.create(req,res)});

// Fetch departments
app.get("/departments", (req, res) => {});

// Fetch jobs
app.get("/jobs", (req, res) => {});

// Fetch locations
app.get("/locations", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server listening  on ${PORT}`);
});
