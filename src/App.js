import './App.css';
import Navbar from './components/Navbar/Navbar';
import ResetPassword from './components/Login/ResetPassword';
import Login from './components/Login/login';
import Circular from './components/Circular';
import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Router >
      <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/insertfaculty" element={<Login />} />
                <Route exact path="/displayfaculty" element={<Login />} />
                <Route exact path="/updatefaculty" element={<Login />} />
                <Route exact path="/displaycourse" element={<Login />} />
                <Route exact path="/resetpassword" element={<ResetPassword />} />
                
      </Routes>
      </Router>

      {/*<Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/resetpassword" element={<ResetPassword />}></Route>
          <Route  path="*" element={<Login />}></Route>
        </Routes>
  </Router>*/}
    </>
  );
}

export default App;
