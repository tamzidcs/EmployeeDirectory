import axios from "axios";
import {useState,useEffect } from "react";
import EmployeeList from "./EmployeeList";

export default function EmployeeListView() {
    const [data, setData] = useState([])
    const getEmployees = () => {
        console.log('get employee')
        axios.get('http://localhost:3005/employees')
            .then(resp => {
                console.log('data',resp.data)
                setData(resp.data)
            }) 
    }
    useEffect(() => {
       getEmployees()
    }, []);
    return (
        <div>
            <EmployeeList data={data} />
        </div>
    );
}

const styles = {
    getBooksButtonView: {
        display: 'inline-block',
        verticalAlign: 'top',
        padding: '3vw'

    },
    button: {
        padding: '1vw',
    }
}