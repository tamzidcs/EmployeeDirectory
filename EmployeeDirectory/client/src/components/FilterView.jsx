import { useState, useEffect } from "react";
import { useAlert } from "react-alert";

const axios = require("axios");

export default function FilterView(props) {
  const [departmentId, setDepartmentId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [titleId, setTitleId] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [departmentList, setDepartmentList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [deptIdMap, setDeptIdMap] = useState({});
  const [titleIdMap, setTitleIdMap] = useState({});
  const [locationIdMap, setLocationIdMap] = useState({});
  const [titleList, setTitleList] = useState([]);
  const [dataReady, setDataReady] = useState(false);

  const alert = useAlert();

  // Add new employee
  const addNewEmployee = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3005/employees", {
        departmentId: departmentId,
        locationId: locationId,
        titleId: titleId,
      })
      .then((resp) => {
        if (resp.data.message === "employee added")
          alert.show("New Employee Added.");
      });
  };

  const getDepartments = async () => {
    axios.get("http://localhost:3005/departments").then((resp) => {
      console.log(resp.data);
      let map = {};
      resp.data.forEach((elem) => {
        map[elem.name] = elem.id;
      });
      setDeptIdMap(map);
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
      setTitleIdMap(map);
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
      setLocationIdMap(map);
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
  }, []);

  return (
    <div style={styles.container}>
      {dataReady ? (
        <div style={styles.addNewEmployeeForm}>
          <form onSubmit={(e)=>props.applyFilter(e,location,department,title)}>
            <label style={styles.label}>Department:</label>
            <input
              list='departmentList'
              onChange={(e) =>{
                setDepartmentId(deptIdMap[e.target.value])
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
                 setTitleId(titleIdMap[e.target.value])
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
                setLocationId(locationIdMap[e.target.value]);
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
    display: "inline-block",
    paddingTop: "5vh",
    marginBottom: "10vh",
  },
  addNewEmployeeForm: {
    display: "block",
    alignIten: "left",
    paddingTop: "3.5vw",
    width: "20vw",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: "2.5vw",
  },
  textField: {
    width: "20vw",
    height: "4vh",
    marginBottom: "2vh",
    fontSize: "1.1vw",
  },
  label: {
    display: "flex",
    justifyContent: "left",
    width: "25vw",
    paddingRight: "1vw",
  },
};
