import EmployeeListView from './EmployeeListView';

export default function HomePage(){
    return(
        <div style={styles.container}>
            <EmployeeListView />
        </div>
    );
}

const styles={
    container:{
        display:'inline-block'
    }
}