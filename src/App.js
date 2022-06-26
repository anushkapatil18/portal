import './App.css';
import MainCoordinatorNavbar from './components/Navbar/MainCoordinatorNavbar';
import InsertFaculty from './components/mainCooridinator/InsertFaculty';
import DisplayFaculty from './components/mainCooridinator/DisplayFaculty';
import UpdateFaculty from './components/mainCooridinator/UpdateFaculty';
import DisplayCourse from './components/mainCooridinator/DisplayCourse';
import ProjectAllocation from './components/mainCooridinator/ProjectAllocation';
import ResetPassword from './components/Login/ResetPassword';
import Login from './components/Login/login';
import Circular from './components/Circular';
import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>

      <Router >
      <MainCoordinatorNavbar />
      <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/insertFaculty" element={<InsertFaculty />} />
                <Route exact path="/displayFaculty" element={<DisplayFaculty />} />
                <Route exact path="/updateFaculty" element={<UpdateFaculty />} />
                <Route exact path="/displayCourse" element={<DisplayCourse />} />
                <Route exact path="/resetPassword" element={<ResetPassword />} />
                <Route exact path="/projectAllocation" element={<ProjectAllocation />} />
                <Route exact path="/circular" element={<Circular />} />
                <Route  path="*" element={<Circular />} />
                
      </Routes>
      </Router>
    
    </>
  );
}

export default App;
