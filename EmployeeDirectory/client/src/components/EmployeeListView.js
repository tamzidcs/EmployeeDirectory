import axios from "axios";
import {useState,useEffect } from "react";
import EmployeeList from "./EmployeeList";
import FilterView from './FilterView';

export default function EmployeeListView() {
    const [location,setLocation] = useState('')
    const [department,setDepartment] = useState('')
    const [title,setTitle] = useState('')

    const [data, setData] = useState([])
    
    const getEmployees = (location,department,title) => {
        console.log('get employee',location,department,title)
        axios.get('http://localhost:3005/employees',{params: {
            location: location,
            department:department,
            title:title
        }}).then(resp => {
                console.log('data',resp.data)
                setData(resp.data)
            }) 
    }

    const applyFilter =(e,location,department,title)=>{
        e.preventDefault();
        setLocation(location)
        setDepartment(department)
        setTitle(title)
        getEmployees(location,department,title)
    }
    useEffect(() => {
       getEmployees(location,department,title)
    }, []);
    return (
        <div>
            <FilterView applyFilter={applyFilter}/>
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