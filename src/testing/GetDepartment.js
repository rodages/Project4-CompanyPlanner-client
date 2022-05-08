import {useEffect, useState } from 'react'

function GetDepartment(){
    const [department,setDepartment] = useState([])
    useEffect(()=>{
        async function fetchDepartments(){
            const response = await fetch('http://localhost:8000/departments')
            const result = await response.json(response)
            setDepartment(result)

        }
        fetchDepartments()
    },[])
    console.log(department, 'department')
    return <h1>fetching</h1>
}

export default GetDepartment