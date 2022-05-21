import { useState,useEffect } from "react";
import { useAlert } from "react-alert";

const axios = require("axios");

export default function AddNewEmployee() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [departmentList, setDepartmentList] = useState([]);
  const [titleList, setTitleList] = useState([]);

  const alert = useAlert();

  // Add new employee
  const addNewEmployee = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3005/employees", {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
      })
      .then((resp) => {
        if (resp.data.message === "employee added")
          alert.show("New Employee Added.");
      });
  };

  const getDepartments = ()=>{
    axios
      .get("http://localhost:3005/departments")
      .then((resp) => {
        setDepartmentList(resp.data)
      });
  }

  const getJobs = ()=>{
    axios
      .get("http://localhost:3005/jobs")
      .then((resp) => {
        setTitleList(resp.data)
      });
  }

  useEffect(()=>{
    getDepartments()
    getJobs()
  },[])

  return (
    <div style={styles.container}>
      <div style={styles.headerText}>Add New Employee</div>
      <div style={styles.addNewEmployeeForm}>
        <form onSubmit={addNewEmployee}>
          <label style={styles.label}>First Name:</label>
          <input
            type='text'
            name='first_name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.textField}
          />
          <label style={styles.label}>Middle Name:</label>
          <input
            type='text'
            name='middle_name'
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            style={styles.textField}
          />
          <label style={styles.label}>Last Name:</label>
          <input
            type='text'
            name='last_name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.textField}
          />
          <label style={styles.label}>Department:</label>
          <input
            
            list='departmentList'
            onChange={(e) => setDepartment(e)}
            style={styles.textField}
          />
          <datalist id='departmentList' style={styles.nameDropDown}>
            {departmentList.length > 0
              ? departmentList.map((val) => (
                  <option key={val.id}>{val.name}</option>
                ))
              : true}
          </datalist>
          <label style={styles.label}>Title:</label>
          <input
            
            list='titleList'
            onChange={(e) => setTitleList(e)}
            style={styles.textField}
          />
          <datalist id='titleList' style={styles.nameDropDown}>
            {titleList.length > 0
              ? titleList.map((val) => <option key={val.id}>{val.name}</option>)
              : true}
          </datalist>

          <input style={styles.submitButton} type='submit' value='Add' />
        </form>
      </div>
    </div>
  );
}

const styles = {
  submitButton: {
    width: "10vw",
    height:'5vh',
    marginTop: "1vw",
  },
  container:{
    display:'inline-block',
    paddingTop:'5vh',
    marginBottom:'10vh'
  },
  addNewEmployeeForm: {
    display:'block',
    alignIten:'left',
    paddingTop: "3.5vw",
    width:'20vw',
    
  },
  headerText:{
    fontWeight:'bold',
    fontSize:'2.5vw',
  },
  textField:{
    width:'20vw',
    height:'4vh',
    marginBottom:'2vh',
    fontSize:'1.1vw'
  },
  label:{
    display: "flex",
    justifyContent: "left",
    width: "25vw",
    paddingRight: "1vw",
  }
  
};
