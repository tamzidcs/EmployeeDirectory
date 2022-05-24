const express = require("express");
const cors = require("cors");
const fs = require("fs");
let { pool: pool ,insertIntoEmpDept,insertIntoEmpLocation,insertIntoEmpJob,insertIntoemployee,
  deleteInsertEmpDept,deleteInsertEmpLocation,deleteInsertEmpJob
} = require("./database/db");
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

  if (req.query.pageLimit != "" && req.query.pageLimit != undefined)
    query += " LIMIT " + "'" + req.query.pageLimit + "'";
  
  if (req.query.skip != "" && req.query.skip != undefined)
    query += " OFFSET " + "'" + req.query.skip + "'";

  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    let resp = {}
    resp['employees'] = results.rows

    query = 'SELECT COUNT(id) from EMPLOYEE'
    pool.query(query, (error, results) => {
      if (error) {
        throw error;
      }
        resp['total_employee'] = results.rows[0]['count']
        res.status(200).json(resp).end();
    });
    
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
      res.status(500).json({message:'failed to retrieve emplyee'}).end();
      throw error;
    }
    res.status(200).json(results.rows).end();
  });
});


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
  res.status(200).json({ message: "New employee added" }).end();
});



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

    if (req.body.departmentId)
      deleteInsertEmpDept(req.body.employeeId,req.body.departmentId)
    
    if (req.body.titleId)
      deleteInsertEmpJob(req.body.employeeId,req.body.titleId)
    
    res.status(200).json({ message: "Employee updated" }).end();
});

// Delete
app.delete("/employees", async (req, res) => {
  let query = "DELETE FROM employee where employee_id=" + req.body.employee_id;
  await pool.query(query);
  res.status(200).json({ message: "Employee deleted" }).end();
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
