import {useState, useEffect} from 'react'
import { useParams, useLocation} from 'react-router-dom'
import axios from 'axios';
import URL from '../../config'

import Departments from './Depatments';
import DepartmentCard from './DepartmentCard';
import WorkersTable from './WorkersTable'
import DepartmentChecklists from './DepartmentChecklists'
import Posts from './posts/Posts'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function DepartmentDetails(){
    const {id} = useParams() //gets id from url
    const [department, setDepartment] = useState({loading:true})
    console.log(department)

    const [tabIndex, setTabIndex] = useState(4)
    const [currentDisplay, setCurrentDisplay] = useState('')

    const tabOptions = [<DepartmentCard department={department}/>,<Posts posts={department.department_posts}/>,<WorkersTable workers={department.workers}/>,<DepartmentChecklists checklists={department.department_checklists}/>,<Fetching name={"default"} />]

    useEffect(()=>{
        async function fetchDepartments(){
            try{
                const res = await axios.get(`${URL}/departments/${id}`)
                setDepartment(res.data)
                setTabIndex(0)
            }catch(e){
                console.log(e)
            }
        }
        fetchDepartments()
    },[])

    function handleChange(event, newTabIndex){
        setTabIndex(newTabIndex)
    }

    return(
        <Box display="flex"
        flexDirection='column'
        justifyContent="center"
        alignItems="center">
            <Tabs value={tabIndex} onChange={handleChange} aria-label="department-tabs">
                <Tab label="Department" />
                <Tab label="Posts" />
                <Tab label="Staff" />
                <Tab label="Checklists" />
            </Tabs>
            {tabOptions[tabIndex]}
        </Box>
    )
}

export default DepartmentDetails

function Fetching({name}){
    return <h1>Fetching {name}</h1>
}