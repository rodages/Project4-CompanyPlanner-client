import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from './components/navigation/Layout'

import GetDepartment from './testing/GetDepartment'
import Navbar from './components/navigation/Navbar'
import NavTest from './components/navigation/NavTest'
import Register from './components/navigation/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Layout />}>

          <Route index element = {<Register/>} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
