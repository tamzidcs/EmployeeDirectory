export default function HomePage(){
    return(
        <div style={styles.container}>
            <DisplayBooks />
        </div>
    );
}

const styles={
    container:{
        display:'inline-block'
    }
}