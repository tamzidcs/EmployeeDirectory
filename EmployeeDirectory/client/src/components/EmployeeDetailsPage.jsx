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
          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={styles.label}>First Name</td>
                <td>:</td>
                <td style={styles.data}>{data[0].first_name}</td>
              </tr>
              <tr>
                <td style={styles.label}>Middle Name</td>
                <td>:</td>
                <td  style={styles.data}>{data[0].middle_name}</td>
              </tr>
              <tr>
                <td style={styles.label}>Last Name</td>
                <td>:</td>
                <td style={styles.data}>{data[0].last_name}</td>
              </tr>
              <tr>
                <td style={styles.label}>Department</td>
                <td>:</td>
                <td style={styles.data}>{data[0].department}</td>
              </tr>
              <tr>
                <td style={styles.label}>Title</td>
                <td>:</td>
                <td style={styles.data}>{data[0].title}</td>
              </tr>
              <tr>
                <td style={styles.label}>Location</td>
                <td>:</td>
                <td style={styles.data}>{data[0].location}</td>
              </tr>
            </tbody>
          </table>
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
  detailsView: {
    display: "inline-block",
    flexWrap: "wrap",
    width: "15vw",
    padding: "2vh",
  },
  label: {
    fontWeight: "bold",
    backgroundColor:'',
    textAlign:'right'
  },
  table:{
    borderSpacing: '0px 4.5vh'
  },
  data:{
    backgroundColor:'',
    paddingLeft:'1.5vw',
    textAlign:'left'
  }
};
