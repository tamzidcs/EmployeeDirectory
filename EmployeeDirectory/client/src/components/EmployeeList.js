import axios from "axios";
import {useState,useEffect } from "react";
import EmployeeListView from "./EmployeeListView";

export default function EmployeeList() {
    const [data, setData] = useState([])
    const getEmployees = () => {
        axios.get('http://localhost:3005/employees')
            .then(resp => {
                console.log(resp.data)
                setData(resp.data)
            })
    }
    useEffect(() => {
       getEmployees()
    }, []);
    return (
        <div>
            <EmployeeListView data={data} />
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