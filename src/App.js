import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {useState} from 'react'
import Layout from './components/navigation/Layout'
import './App.css'

// import GetDepartment from './testing/GetDepartment'
//navigation
import Navbar from './components/navigation/NavbarTemplate' // template
import NavTest from './components/navigation/Navbar'
import Login from './components/navigation/Login'
import Register from './components/navigation/Register'
import Home from './Home'

//links
import Departments from "./components/departments/Departments"
import DepartmentDetails from "./components/departments/DepartmentDetails"

import Checklists from "./components/checklists/Checklists"

import Tasks from "./components/checklists/Tasks"
import Items from "./components/checklists/Items"
import NewItemOrTask from "./components/forms/NewItemOrTask"


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

        <Route index element={<Home  loggedIn={loggedIn} user={user}/>} />
        <Route path="/login" element={ <Login setLoggedIn={setLoggedIn} setUser={setUser} />} />
        <Route path="/register" element={<Register />}/>


        <Route path="/departments" element={<Departments />}/>
        <Route path="/departments/:id" element={<DepartmentDetails />} />

        <Route path="/tasks" element={<Tasks />} />
        {/* <Route path="/tasks/:id" element={<TaskDetails />} /> */}
        
        <Route path="/items" element={<Items />} />
        {/* <Route path="/items/:id" element={<ItemDetails />} /> */}

        <Route path="/checklists" element={<Checklists />} />
        {/*<Route path="/checklists/:id" element={<ChecklistDetails />} /> */}


        <Route path="new/:destination" element={<NewItemOrTask />} />

          <Route index element = {<h1>Index</h1>} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
