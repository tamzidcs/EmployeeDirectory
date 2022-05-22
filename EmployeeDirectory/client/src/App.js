import "./App.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import AddNewEmployee from "./components/AddNewEmployee";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeListView from "./components/EmployeeList";
import HomePage from "./components/HomePage";
import EmployeeDetailsPage from "./components/EmployeeDetailsPage";
import { NavigateProvider } from 'react-use-navigate'

const Landing = () => {
  return (
    <div>
      <h2 style={styles.landing}>Landing</h2>
    </div>
  );
};
function App() {

  return (
    <div className='App'>
      
        <Router>
          <Header />
          <TopBar />
          <Routes style={styles.container}>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/employee-details-page'
              element={<EmployeeDetailsPage />}
            />
            <Route path='/add-new-employee' element={<AddNewEmployee />} />
          </Routes>
        </Router>
      
    </div>
  );
}
const styles = {
  test: {
    color: "red",
    display: "inline-flex",
  },
  sidebar: {
    display: "inline-block",
    width: "100vw",
  },
  container: {
    display: "inline-flex",
    width: "10vw",
  },
  landing: {
    width: "10vw",
    display: "inine-flex",
  },
};
export default App;
