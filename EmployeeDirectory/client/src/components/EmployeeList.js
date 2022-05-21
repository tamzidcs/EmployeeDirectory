import Table from "./Table";
const axios = require('axios')

export default function EmployeeList(props){
     // Delete employees from the server
     const deleteEmployee = (employeeId) => {
         console.log('........')
        axios.delete('http://localhost:3005/employees',{employeeId:employeeId})
            .then(resp => {
                //console.log(resp.data)
                //setData(resp.data)
            })
    }
    return(
        <div style={styles.container}>
            <Table rows={props.data} deleteemployee={deleteEmployee}/>
        </div>
    );
}

const styles={
    container:{
        display:'inline-block'
    }
}