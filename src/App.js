import React from 'react'
import './App.css';

import ProjectCoordinatorNavbar from './components/Navbar/ProjectCoordinatorNavbar';
import InsertStudents from './components/projectCoordinator/InsertStudents';
import AddCircular from './components/projectCoordinator/AddCircular';
import PublishMarks from './components/projectCoordinator/PublishMarks';
import Selection from './components/projectCoordinator/marks/Selection';
import MarkDist from './components/projectCoordinator/marks/MarksDist';
import InsertReviwers from './components/projectCoordinator/InsertReviwers';
import InsertGuides from './components/projectCoordinator/InsertGuides';
import MainCoordinatorNavbar from './components/Navbar/MainCoordinatorNavbar';
import AssignSubCoordinator from './components/mainCooridinator/assignSubCoordinator';
import InsertFaculty from './components/mainCooridinator/InsertFaculty';
import DisplayFaculty from './components/mainCooridinator/DisplayFaculty';
import UpdateFaculty from './components/mainCooridinator/UpdateFaculty';
import DisplayCourse from './components/mainCooridinator/DisplayCourse';
import ProjectAllocation from './components/mainCooridinator/ProjectAllocation';
import ResetPassword from './components/Login/ResetPassword';
import Otp from './components/Login/otp';
import Login from './components/Login/login';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeCaps from './components/HomePage/HomeCaps';
import Employee from './components/HomePage/Employee';
import Error from './components/Error/Error';

function App() {
  return (
    <>
{/*HOME PAGE */}
<Router>
  <Navbar />
  <Routes>
    <Route exact path="/" element={<Login />}/>
  <Route exact path="/home" element={<HomeCaps />} />
  <Route export path="/employee" element={<Employee />}/>
  <Route export path="*" element={<Error />}/>
  </Routes>
  </Router>


{/*MAINCOORDINATOR */}
  {/* <Router >
      <MainCoordinatorNavbar />
      <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/insertFaculty" element={<InsertFaculty />} />
                <Route exact path="/assignSubcordinator" element={<AssignSubCoordinator />}> </Route>
                <Route exact path="/displayFaculty" element={<DisplayFaculty />} />
                <Route exact path="/updateFaculty" element={<UpdateFaculty />} />
                <Route exact path="/displayCourse" element={<DisplayCourse />} />
                <Route exact path="/resetPassword" element={<ResetPassword />} />
                <Route exact path="/projectAllocation" element={<ProjectAllocation />} />
                <Route exact path="/otp" element={<Otp />} />
                 <Route export path="*" element={<Error />}/>
                
      </Routes>
</Router>  */}
   
{/*PROJECT COORDINATOR */}
  {/*<Router>
        <ProjectCoordinatorNavbar />
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/resetPassword" element={<ResetPassword />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/insertStudents" element={<InsertStudents/>} />
        <Route exact path="/insertReviwers" element={<InsertReviwers/>} />
        <Route exact path="/insertGuides" element={<InsertGuides/>} />
        <Route exact path="/addCirculars" element={<AddCircular />} />
        <Route exact path='/publishMarks' element={<PublishMarks />} />
        <Route exact path="/marksPath" element={<Selection />} />
        <Route exact path="/marksconfiguration" element={<MarkDist />} />
         <Route export path="*" element={<Error />}/>
        </Routes>
</Router>*/}
 
  </> 
  );
}

export default App;
