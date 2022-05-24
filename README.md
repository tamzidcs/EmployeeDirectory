# PostLightChallenge

# How to install and run:

# Client:

1. Run "npm install" in client folder.
2. Run "npm start"

# Server:
1. Run "psql -U username -d database_name -f employee_directory.sql" to import the db

   employee_directory.sql file is in employee_directory folder under the root dir.
2. Configure the db:
   - Replace with proper username, host, database and password in "db.js" file
```js
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'employee_directory',
        password: 'minat123',
        port: 5432,
    })
```
    File is located in Employee_Directory/server/database folder.


3. Run "npm install" in server folder.
4. Run "npm start"

# How to use:
   Read the features.txt file.
