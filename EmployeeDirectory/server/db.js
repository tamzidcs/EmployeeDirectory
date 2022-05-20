const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_directory',
  password: 'minat123',
  port: 5432,
})

module.exports={pool}