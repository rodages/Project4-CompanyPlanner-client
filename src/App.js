import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {useState} from 'react'
import Layout from './components/navigation/Layout'

// import GetDepartment from './testing/GetDepartment'
//navigation
import Navbar from './components/navigation/NavbarTemplate' // template
import NavTest from './components/navigation/Navbar'
import Login from './components/navigation/Login'
import Register from './components/navigation/Register'

//links
import Departments from "./departments/Depatments"
import DepartmentDetails from "./departments/DepartmentDetails"


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user,setUser] = useState({username:"default"})
  console.log(user,"user")
  console.log(user)
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Layout 
        loggedIn={loggedIn} user={user} setLoggedIn={setLoggedIn}/>}>

        <Route path="/login" element={ <Login setLoggedIn={setLoggedIn} setUser={setUser} />} />
        <Route path="/register" element={<Register />}/>


        <Route path="/departments" element={<Departments />}/>
        <Route path="/departments/:id" element={<DepartmentDetails />} />



          <Route index element = {<h1>Index</h1>} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
