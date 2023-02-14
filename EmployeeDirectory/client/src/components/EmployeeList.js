import Table from "./Table";
const axios = require('axios')

export default function EmployeeList(props){
    return(
        <div style={styles.container}>
            <Table rows={props.data} /> 
        </div>
    );
}

const styles={
    container:{
        display:'flex-row',
        width:'70vw',
        backgroundColor:''
    }
}