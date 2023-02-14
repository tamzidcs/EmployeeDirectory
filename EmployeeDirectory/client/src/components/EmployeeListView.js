import axios from "axios";
import {useState,useEffect } from "react";
import EmployeeList from "./EmployeeList";
import FilterView from './FilterView';
import PaginationView from './PaginationView';

export default function EmployeeListView() {
    const [location,setLocation] = useState('')
    const [department,setDepartment] = useState('')
    const [title,setTitle] = useState('')
    const [page,setPage] = useState(1)
    const [pageLimit,setPageLimit] = useState(10)
    const [totalPage,setTotalPage] = useState(10)
    const [data, setData] = useState([])
    
    const getEmployees = (location,department,title,page,skip,pageLimit) => {
        console.log('get employee',location,department,title,skip)
        axios.get('http://localhost:3005/employees',{params: {
            location: location,
            department:department,
            title:title,
            page:page,
            skip:skip,
            pageLimit:pageLimit
        }}).then(resp => {
                console.log('data',resp.data)
                setData(resp.data.employees)
                if(resp.data.employee_count == 0 )
                    setPage(0)
                setTotalPage(Math.ceil(resp.data.employee_count/pageLimit))
            }) 
    }

    const applyFilter =(e,location,department,title)=>{
        e.preventDefault();
        setLocation(location)
        setDepartment(department)
        setTitle(title)
        getEmployees(location,department,title)
    }

    const nextPage  =()=>{
        if(page<totalPage)
        {
            setPage(page+1)
            getEmployees(location,department,title,page+1,pageLimit*(page),pageLimit)
        }
    }
    const prevPage  =()=>{
        if(page>1) 
        {
            setPage(page-1)
            getEmployees(location,department,title,page+1,pageLimit*(page-2),pageLimit)
        }
    }
    useEffect(() => {
       getEmployees(location,department,title,page-1,pageLimit*(page-1),pageLimit)
    }, []);
    return (
        <div style={styles.container}>
            <FilterView applyFilter={applyFilter}/>
            <EmployeeList data={data} />
            <PaginationView nextPage={nextPage} prevPage={prevPage} page={page} totalPage={totalPage}/>
        </div>
    );
}

const styles = {
    container:{
        display:'flex',
        flexWrap: 'wrap',
        width:'100vw',
        backgroundColor:''
    },
    button: {
        padding: '1vw',
    }
}