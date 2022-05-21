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
    const query = 'SELECT employee.first_name,employee.middle_name,employee.last_name FROM employee'
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
    return results.rows[0].employee_id
}

// Add
app.post("/employees", async(req, res) => { 
    const id = await insertIntoemployee(req.body.firstName,req.body.middleName,req.body.lastName)
    //await insertIntoemployeeAuthor(id,req.body.authorId)
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

