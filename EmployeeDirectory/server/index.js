const express = require("express");
const cors = require("cors");
const fs = require("fs");
let { pool: pool, sequelize } = require("./db");
const PORT = process.env.PORT || 3005;

const app = express();
app.use(express.json());
app.use(cors());

// Fetch
app.get("/employees", (req, res) => {
  let query =
    "SELECT employee.id,employee.first_name,employee.middle_name,employee.last_name," +
    "department.name AS department,location.city AS location,job.title  FROM employee,department," +
    "emp_dept,emp_location,location,job,emp_job where department.id = emp_dept.dept_id AND " +
    "employee.id = emp_dept.emp_id AND emp_location.emp_id = employee.id AND emp_location.location_id = location.id AND " +
    "emp_job.job_id = job.id AND emp_job.emp_id = employee.id";

  if (req.query.location != "" && req.query.location != undefined)
    query += " AND location.city = " + "'" + req.query.location + "'";
  if (req.query.department != "" && req.query.department != undefined)
    query += " AND department.name = " + "'" + req.query.department + "'";
  if (req.query.title != "" && req.query.title != undefined)
    query += " AND job.title = " + "'" + req.query.title + "'";

  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows).end();
  });
});

// Fetch
app.get("/employees/:id", (req, res) => {
  const query =
    "SELECT employee.id,employee.first_name,employee.middle_name,employee.last_name," +
    "department.name AS department,location.city AS location,job.title  FROM employee,department," +
    "emp_dept,emp_location,location,job,emp_job where department.id = emp_dept.dept_id AND " +
    "employee.id = emp_dept.emp_id AND emp_location.emp_id = employee.id AND emp_location.location_id = location.id AND " +
    "emp_job.job_id = job.id AND emp_job.emp_id = employee.id AND employee.id =" +
    req.params.id;
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows).end();
  });
});

const insertIntoemployee = async (firstName, middleName, lastName) => {
  let query =
    "INSERT INTO employee(first_name,middle_name,last_name) VALUES('" +
    firstName +
    "','" +
    middleName +
    "','" +
    lastName +
    "') RETURNING *";
  const results = await pool.query(query);
  return results.rows[0].id;
};

const insertIntoEmpDept = async (empid, deptId) => {
  console.log(empid, deptId);
  let query =
    "INSERT INTO emp_dept(emp_id,dept_id) VALUES('" +
    empid +
    "','" +
    deptId +
    "') RETURNING *";
  const results = await pool.query(query);
  return results;
};
const insertIntoEmpLocation = async (empid, locationId) => {
  console.log(empid, locationId);
  let query =
    "INSERT INTO emp_location(emp_id,location_id) VALUES('" +
    empid +
    "','" +
    locationId +
    "')";
  const results = await pool.query(query);
  return results;
};

const insertIntoEmpJob = async (empid, titleId) => {
  console.log(empid, titleId);
  let query =
    "INSERT INTO emp_job(emp_id,job_id) VALUES('" +
    empid +
    "','" +
    titleId +
    "') RETURNING *";
  const results = await pool.query(query);
  return results;
};

// Add employee
app.post("/employees", async (req, res) => {
  console.log(req.body);
  const id = await insertIntoemployee(
    req.body.firstName,
    req.body.middleName,
    req.body.lastName
  );
  console.log(id);
  await insertIntoEmpDept(id, req.body.departmentId);
  await insertIntoEmpLocation(id, req.body.locationId);
  await insertIntoEmpJob(id, req.body.titleId);
  res.status(200).json({ message: "employee added" }).end();
});

const deleteInsertEmpDept = async(empId,deptId)=>{
  
  let query =
    "DELETE FROM emp_dept where emp_id='" +
    empId +
    "') RETURNING *";
  const results = await pool.query(query);
  await insertIntoEmpDept(empId,deptId);
  return results;
}

const deleteInsertEmpJob = async(empId,jobId)=>{
  
  let query =
    "DELETE FROM emp_job where emp_id='" +
    empId +
    "'";
  const results = await pool.query(query);
  await insertIntoEmpJob(empId,jobId);

  return results;
}

const deleteInsertEmpLocation = async(empId,locationId)=>{
  console.log('del emp loc')
  let query =
    "DELETE FROM emp_location where emp_id="+empId
  const results = await pool.query(query);
  await insertIntoEmpLocation(empId,locationId);
  return results;
}

// Update
app.put("/employees", async (req, res) => {
  console.log('loc_id',req.body.locationId)
  let query =
    "UPDATE employee set first_name='" +req.body.firstName +"',middle_name='"+req.body.middleName +"',"
    +"last_name='"+req.body.lastName +"'"+
    "where id =" +
    req.body.employeeId;
    
    await pool.query(query);

    if (req.body.locationId)
      deleteInsertEmpLocation(req.body.employeeId,req.body.locationId)

    if (req.body.departmentId != "" && req.query.departmentId != undefined)
      deleteInsertEmpDept(req.body.employeeId,req.body.departmentId)
    
    if (req.body.titleId != "" && req.query.titleId != undefined)
      deleteInsertEmpJob(req.body.employeeId,req.body.titleId)
    
});

// Delete
app.delete("/employees", async (req, res) => {
  let query = "DELETE FROM employee where employee_id=" + req.body.employee_id;
  await pool.query(query);
});

// Fetch departments
app.get("/departments", (req, res) => {
  const query = "SELECT id,name FROM department";
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows).end();
  });
});

// Fetch jobs
app.get("/jobs", (req, res) => {
  const query = "SELECT id,title FROM job";
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows).end();
  });
});

// Fetch locations
app.get("/locations", (req, res) => {
  const query = "SELECT id,city FROM location";
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows).end();
  });
});
app.listen(PORT, () => {
  console.log(`Server listening  on ${PORT}`);
});
