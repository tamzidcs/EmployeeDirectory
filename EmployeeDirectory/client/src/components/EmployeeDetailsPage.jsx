import axios from "axios";
import { useState, useEffect } from "react";
import EmployeeList from "./EmployeeList";
import { useLocation } from "react-router-dom";
export default function EmployeeDetailsPage(props) {
  const [data, setData] = useState();
  const location = useLocation();
  const { id } = location.state;
  const getEmployee = (id) => {
    axios.get("http://localhost:3005/employees/" + id).then((resp) => {
      console.log("data", resp.data);
      setData(resp.data);
    });
  };
  useEffect(() => {
    console.log(id);
    getEmployee(id);
  }, []);
  return (
    <div style={styles.container}>
      {data ? (
        <div style={styles.detailsView}>
          
          <div style={styles.label}>First Name</div>
          <div>{data[0].first_name}</div>
          <div style={styles.label}>Middle Name</div>
          <div>{data[0].middle_name}</div>
          <div style={styles.label}>Last Name</div>
          <div>{data[0].last_name}</div>
          <div style={styles.label}>Department</div>
          <div>{data[0].department}</div>
          <div style={styles.label}>Title</div>
          <div>{data[0].title}</div>
          <div style={styles.label}>Location</div>
          <div>{data[0].location}</div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "inline-block",
    verticalAlign: "top",
    padding: "3vw",
  },
  button: {
    padding: "1vw",
  },
  detailsView:{
      display:'inline-block',
      flexWrap:'wrap',
      width:'15vw',
      padding:'2vh'
  },
  label:{
      fontWeight:'bold',
      paddingTop:'2vh'
      
  }
};
