import { useState, useEffect } from "react";


const axios = require("axios");

export default function FilterView(props) {
 
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [departmentList, setDepartmentList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [titleList, setTitleList] = useState([]);
  const [dataReady, setDataReady] = useState(false);


  const getDepartments = async () => {
    axios.get("http://localhost:3005/departments").then((resp) => {
      console.log(resp.data);
      let map = {};
      resp.data.forEach((elem) => {
        map[elem.name] = elem.id;
      });
      setDepartmentList(resp.data);
    });
  };

  const getJobs = () => {
    axios.get("http://localhost:3005/jobs").then((resp) => {
      console.log("jobs", resp.data);
      let map = {};
      resp.data.forEach((elem) => {
        map[elem.title] = elem.id;
      });
      setTitleList(resp.data);
    });
  };

  const getLocations = async () => {
    axios.get("http://localhost:3005/locations").then((resp) => {
      console.log(resp.data);
      let map = {};
      resp.data.forEach((elem) => {
        map[elem.city] = elem.id;
      });
      setLocationList(resp.data);
    });
  };
  const updateData = async () => {
    await getDepartments();
    await getJobs();
    await getLocations();
    setDataReady(true);
  };
  useEffect(() => {
    updateData(); 
  },[]);

  return (
    <div style={styles.container}>
      {dataReady ? (
        <div style={styles.addNewEmployeeForm}>
          <form onSubmit={(e)=>props.applyFilter(e,location,department,title)}>
            <label style={styles.label}>Department:</label>
            <input
              list='departmentList'
              onChange={(e) =>{
                setDepartment(e.target.value)
              } }
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
              onChange={(e) =>{
                 setTitle(e.target.value)
                }}
              style={styles.textField}
            />
            <datalist id='titleList' style={styles.nameDropDown}>
              {titleList.length > 0
                ? titleList.map((val) => (
                    <option key={val.id}>{val.title}</option>
                  ))
                : true}
            </datalist>
            <label style={styles.label}>Location:</label>
            <input
              list='locationList'
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              style={styles.textField}
            />
            <datalist id='locationList' style={styles.nameDropDown}>
              {locationList.length > 0
                ? locationList.map((val) => (
                    <option key={val.id}>{val.city}</option>
                  ))
                : true}
            </datalist>

            <input style={styles.submitButton} type='submit' value='Apply' />
          </form>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

const styles = {
  submitButton: {
    width: "10vw",
    height: "5vh",
    marginTop: "1vw",
  },
  container: {
    display: "flex-row",
    width:'20vw',
    paddingTop: "5vh",
    paddingLeft:'3.5vw',
    marginBottom: "10vh",
    backgroundColor:''
  },
  addNewEmployeeForm: {
    display: "block",
    alignIten: "left",
    paddingTop: "3.5vw",
    width: "15vw",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: "2.5vw",
  },
  textField: {
    width: "15vw",
    height: "4vh",
    marginBottom: "2vh",
    fontSize: "1.1vw",
    paddingLeft:'0vw'
  },
  label: {
    display: "flex",
    justifyContent: "left",
    width: "25vw",
    paddingRight: "0vw",
  },
};
