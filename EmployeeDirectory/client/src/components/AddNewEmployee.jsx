import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useNavigate   } from 'react-router-dom';

const axios = require("axios");

export default function AddNewEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [titleId, setTitleId] = useState("");
  
  const [departmentList, setDepartmentList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [deptIdMap, setDeptIdMap] = useState({});
  const [titleIdMap, setTitleIdMap] = useState({});
  const [locationIdMap, setLocationIdMap] = useState({});
  const [titleList, setTitleList] = useState([]);
  const [dataReady, setDataReady] = useState(false);

  const alert = useAlert();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Add new employee
  const addNewEmployee = (data, event) => {
    event.preventDefault();
    console.log(departmentId, lastName);
    axios
      .post("http://localhost:3005/employees", {
        firstName: firstName,
        lastName: lastName,
        departmentId: departmentId,
        locationId: locationId,
        titleId: titleId,
      })
      .then((resp) => {
        if (resp.data.message === "New employee added")
          navigate('/')
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
  const getRandomNames = async()=>{
    await axios.get('https://randomuser.me/api')
            .then(res => {
                console.log(res.data)
                setFirstName(res.data.results[0].name.first)
                setLastName(res.data.results[0].name.last)
                setValue("first_name",res.data.results[0].name.first);
                setValue("last_name",res.data.results[0].name.last);
            })
            .catch(err => console.log(err))
  }
  useEffect(() => {
    getRandomNames()
    updateData();
  },[]);

  return (
    <div style={styles.container}>
      <div style={styles.headerText}>Add New Employee</div>
      {dataReady ? (
        <div style={styles.addNewEmployeeForm}>
          <form onSubmit={handleSubmit(addNewEmployee)}>
            <label style={styles.label}>First Name:</label>
            <input
              {...register("first_name", { required: true, maxLength: 20 })}
              onChange={(e) => {
                setFirstName(e.target.value);
                setValue("first_name", e.target.value);
              }}
              value={firstName}
              style={styles.textField}
            />
            <span style={styles.error}>
              {errors.first_name && <span>First name is required</span>}
            </span>
           
            <label style={styles.label}>Last Name:</label>
            <input
              {...register("last_name", { required: true, maxLength: 20 })}
              onChange={(e) => {
                setLastName(e.target.value);
                setValue("last_name", e.target.value);
              }}
              value={lastName}
              style={styles.textField}
            />
            <span style={styles.error}>
              {errors.last_name && <span>Last name is required</span>}
            </span>
            <label style={styles.label}>Department:</label>
            <input
              list='departmentList'
              {...register("department", { required: true })}
              onChange={(e) => {
                setValue("department", e.target.value);
                setDepartmentId(deptIdMap[e.target.value]);
              }}
              
              style={styles.textField}
            />

            <datalist id='departmentList' style={styles.nameDropDown}>
              {departmentList.length > 0
                ? departmentList.map((val) => (
                    <option key={val.id}>{val.name}</option>
                  ))
                : true}
            </datalist>
            <span style={styles.error}>
              {errors.department && <span>Department is required</span>}
            </span>
            <label style={styles.label}>Title:</label>
            <input
              list='titleList'
              {...register("title", { required: true })}
              onChange={(e) => {
                setValue("title", e.target.value);
                setTitleId(titleIdMap[e.target.value]);
              }}
              style={styles.textField}
            />
            <span style={styles.error}>
              {errors.title && <span>Title is required</span>}
            </span>
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
              {...register("location", { required: true })}
              onChange={(e) => {
                setValue("location", e.target.value);
                setLocationId(locationIdMap[e.target.value]);
              }}
              style={styles.textField}
            />
            <span style={styles.error}>
              {errors.location && <span>Location is required</span>}
            </span>
            <datalist id='locationList' style={styles.nameDropDown}>
              {locationList.length > 0
                ? locationList.map((val) => (
                    <option key={val.id}>{val.city}</option>
                  ))
                : true}
            </datalist>

            <input style={styles.submitButton} type='submit' value='Add' />
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
  error: {
    float: "left",
    color: "red",
    paddingBottom: "2vh",
  },
};
