const express = require('express')
const cors = require('cors')
const fs = require('fs')
let {pool: pool,sequelize} = require("./db")
const PORT = process.env.PORT || 3005;

const app = express()
app.use(express.json());
app.use(cors())

let currentemployeeId=-1

// Fetch
app.get("/employees", (req, res) => {
    const query = 'SELECT employee.id,employee.first_name,employee.middle_name,employee.last_name,department.name AS department FROM employee,department,emp_dept where department.id = emp_dept.dept_id AND employee.id = emp_dept.emp_id'
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows).end()
    })
})

const  insertIntoemployeeAuthor = async (employeeId,authorId) =>{
    query ="INSERT INTO employee_author(employee_id,author_id) VALUES('"+employeeId+"',"+authorId+")"
    await pool.query(query)
}

const  insertIntoemployee = async (firstName,middleName,lastName) =>{  
    let query = "INSERT INTO employee(first_name,middle_name,last_name) VALUES('"+firstName+"','"+middleName+"','"+lastName+"') RETURNING *"
    const results = await pool.query(query)
    return results.rows[0].id
}

const insertIntoEmpDept = async (empid,deptId)=>{
    console.log(empid,deptId)
    let query = "INSERT INTO emp_dept(emp_id,dept_id) VALUES('"+empid+"','"+deptId+"') RETURNING *"
    const results = await pool.query(query)
    return results
}

// Add
app.post("/employees", async(req, res) => { 
    console.log(req.body.departmentId)
    const id = await insertIntoemployee(req.body.firstName,req.body.middleName,req.body.lastName)
    console.log(id)
    await insertIntoEmpDept(id,req.body.departmentId)
    res.status(200).json({message:'employee added'}).end()
})

// Update
app.put("/employees", async(req, res) => { 
    let query = "UPDATE employee set title='"+req.body.title+"'year=2009 where employee_id=" +req.body.employee_id
    await pool.query(query)
})

// Delete
app.delete("/employees", async(req, res) => { 
    let query = "DELETE FROM employee where employee_id=" +req.body.employee_id
    await pool.query(query)
})

// Fetch departments
app.get("/departments", (req, res) => {
    const query = 'SELECT id,name FROM department'
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows).end()
    })
})

// Fetch departments
app.get("/jobs", (req, res) => {
    const query = 'SELECT id,title FROM jobs'
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows).end()
    })
})
app.listen(PORT, () => {
    console.log(`Server listening  on ${PORT}`);
})

