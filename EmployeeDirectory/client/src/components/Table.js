export default function Table(props) {
    console.log(props)
    return (
        <div style={styles.tableView}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeaderStyle}>First Name</th>
                        <th style={styles.tableHeaderStyle}>Middle Name</th>
                        <th style={styles.tableHeaderStyle}>Last Name</th>
                        <th style={styles.tableHeaderStyle}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rows.map(rows => (

                            <tr>
                                <td>{rows.first_name}</td>
                                <td>{rows.middle_name}</td>
                                <td>{rows.last_name}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))
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
}