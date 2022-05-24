export default function PaginationView(props) {

  return (
    <div style={styles.container}>
        <button style={styles.button} onClick={()=>props.prevPage()}>Prev</button>
        {props.page} 0f {props.totalPage}
        <button style={styles.button} onClick={()=>props.nextPage()}>Next</button>
    </div>
  );
}

const styles = {
  container:{
    display:'inline-block',
    paddingTop:'5vh',
    marginBottom:'10vh',
    backgroundColor:'',
    width:'100vw'
  },
  button:{
      marginLeft:'2vw',
      marginRight:'2vw',
      paddingLeft:'2vw',
      paddingRight:'2vw'
  }
  
};
