import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div style={styles.topbar}>
            <div style={styles.topbarLinks}><Link to='/'>Home</Link></div>
            <div style={styles.topbarLinks}><Link to='/AddNewEmployee'>Add New Employee</Link></div>
        </div>
    );
}

const styles = {
    topbar: {
        color: 'white',
        backgroundColor: 'lightgray',
        width: '100vw',
        height: '9vh',
        display: 'flex'
    },
    topbarLinks:
    {
        backgroundColor: 'lightgray',
        padding: '1vw',
        display: 'inline-block'
    }
}

