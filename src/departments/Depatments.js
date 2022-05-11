import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import URL from '../config'

import DepartmentCard from './DepartmentCard'
import Box from '@mui/material/Box'


function Departments(){
    const [departments, setDepartments] = useState([])
    const navigate = useNavigate()
    console.log(departments,`departments`)

    useEffect(()=>{
        async function fetchDepartments(){
            try{
                const res = await axios.get(`${URL}departments`)
                setDepartments(res.data)

            }catch(e){
                console.log(e)
            }
        }

        fetchDepartments()
    },[])

    if(departments.length<1){
        return <h1>Fetching</h1>
    }
    return(
        <Box display="flex"
        flexDirection='column'
        justifyContent="center"
        alignItems="center"
            >
            
            {departments.map((department,i)=><DepartmentCard department={department} key={i}/>)}
        </Box>
        
        
    )
}

export default Departments
