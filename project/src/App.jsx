import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Pages/Home';
import Main2 from './users/Tasks/main2';
import { UserRegister } from './users/Auth/register';
import { UserLogin } from './users/Auth/login';
import { VolunteerLogin } from './Volenteer/Auth/login';
import { VolunteerRegister } from './Volenteer/Auth/register';
// import SignUp from './Pages/dummylogin';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/login" element={<SignUp />} /> */}
              {/* <Route path="/user" element={<UserRegister />} /> */}
              <Route path="/user/register" element={<UserRegister />} />
              <Route path="/user/login" element={<UserLogin />} />

              <Route path="/volunteer/login" element={<VolunteerLogin />} />
              <Route path="/volunteer/register" element={<VolunteerRegister />} />

              <Route path="/user/task" element={<Main2 />} />
              {/* <Route path="/volunteer" element={<VolunteerRegister />} /> */}
              {/* <Route path="/volunteer" element={<VolunteerRegister />} /> */}
            </Routes>
          </Router>
      
    </div>
  )
}

export default App
