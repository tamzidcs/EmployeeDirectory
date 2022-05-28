const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'minat123', {
  host: 'localhost',
  dialect: 'postgres'
});



const insertIntoemployee = async (firstName, middleName, lastName) => {
  let query =
    "INSERT INTO employee(first_name,last_name) VALUES('" +
    firstName +"','" +
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

const deleteInsertEmpDept = async(empId,deptId)=>{

  let query =
    "DELETE FROM emp_dept where emp_id="+empId
  const results = await pool.query(query);
  await insertIntoEmpDept(empId,deptId);
  return results;
}

const deleteInsertEmpJob = async(empId,jobId)=>{
  let query =
    "DELETE FROM emp_job where emp_id="+empId
  const results = await pool.query(query);
  console.log(results)
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

module.exports={pool,insertIntoemployee,insertIntoEmpDept,insertIntoEmpJob,insertIntoEmpLocation,deleteInsertEmpDept,deleteInsertEmpLocation,deleteInsertEmpJob}