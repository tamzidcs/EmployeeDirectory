import { useEffect, useState } from 'react';
const axios = require('axios')

export default function AddNewEmployee() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    
    // Add new employee
    const addNewEmployee = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3005/employees', { firstName: firstName, middleName: middleName,lastName:lastName })
            .then(resp => {
                console.log(resp)
            })
    }
    return (
        <div style={styles.addNewEmployee}>
            <form onSubmit={addNewEmployee}>
                <label>First Name</label>
                <input type='text' name='first_name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                <label>Middle Name</label>
                <input type='text' name='middle_name' value={middleName} onChange={e => setMiddleName(e.target.value)} />
                <label>Last Name</label>
                <input type='text' name='last_name' value={lastName} onChange={e => setLastName(e.target.value)} />
                <label>Title</label>
                <input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} />
                <label>Department</label>
                <input type='text' name='department' value={department} onChange={e => setDepartment(e.target.value)} />
                <label>Location</label>
                <input type='text' name='location' value={location} onChange={e => setLocation(e.target.value)} />
                
                <input style={styles.submitButton} type='submit' value='Add' />
            </form>
        </div>
    );
}

const styles = {
    submitButton: {
        width: '10vw',
        marginTop: '1vw'
    },
    addNewEmployee: {
        display: 'inline-block',
        justifyContent: 'center',
        width: '10vw',
        paddingTop: '5vw'
    }
}