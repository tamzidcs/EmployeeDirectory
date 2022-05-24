# PostLightChallenge

# How to install and run:

# Database:

1. run "psql -U username -d database_name -f employee_directory.sql" to import the db

   employee_directory.sql file is in employee_directory folder under the root dir.

# Client:

1. run "npm install" in client folder.
2. run "npm start"

# Server:

1. Configure the db:
   1.1 Replace with proper username,host,database and password in db.js file

    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'employee_directory',
        password: 'minat123',
        port: 5432,
    })

    File is located in Employee_Directory/server/database folder.


2. run "npm install" in server folder.
3. run "npm start"
