# Eployee Directory

# How to install and run:

# Requirements:
1. Node
2. Express
3. React
4. Postgres

# Server:
1. Create a new postgres database called employee_directory.
   ```sql
      "create database employee_directory"
   ```
2. To import the db Run(from PostgreSQL\14\bin> folder):
   ```cmd
      "./psql -U username -d employee_directory -f employee_directory.sql" 
   ```
   employee_directory.sql file is in employee_directory folder under the root dir.
   
   Replace username with appropriate database username.
   
3. Configure the db:
   - Replace with proper username, host, database and password in "db.js" file
```js
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'employee_directory',
        password: 'your_password',
        port: 5432,
    })
```
    File is located in Employee_Directory/server/database folder.


4. Inside server folder Run:
   ```cmd
      npm install
   ```
6. Run:
    ```cmd
      npm start
   ```

# Client:

1. Inside the client folder Run:
 ```cmd 
   npm install
   ```
2. Run:
  ```cmd 
   npm start
   ```
   
# How to use:
   Read the features.txt file.
