import { Link } from 'react-router-dom';

export default function Table(props) {

    return (
        <div style={styles.tableView}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeaderStyle}>First Name</th>
                        <th style={styles.tableHeaderStyle}>Last Name</th>
                        <th style={styles.tableHeaderStyle}>Department</th>
                        <th style={styles.tableHeaderStyle}>Title</th>
                        <th style={styles.tableHeaderStyle}>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rows.length>0 ?
                        props.rows.map(rows => (
                            <tr key={rows.id}>
                                <td>{rows.first_name}</td>
                                <td>{rows.last_name}</td>
                                <td>{rows.department}</td>
                                <td>{rows.title}</td>
                                <td>{rows.location}</td>
                                <td><Link to="/employee-details-page" state={{ id:rows.id }}>Details</Link></td>
                            </tr>
                        )) : <tr><td colSpan='5' style={styles.noEmployeeLabel}>No employee in database.</td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    table: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    tableView: {
        display: 'inline-block',
        alignItems: 'center',
        justifyContents: 'center',
        padding: '3vw',

    },
    tableHeaderStyle: {
        padding: '1vw',
        minWidth: '10vw',
        backgroundColor: 'gray'
    },
    noEmployeeLabel:{
        backgroundColor:''
    }
}