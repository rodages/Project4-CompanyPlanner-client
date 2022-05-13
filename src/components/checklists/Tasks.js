import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import URL from '../../config'
import CustomListItem from './CustomListItem'

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';





function Tasks(){
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()
    console.log(tasks,`tasks`)

    useEffect(()=>{
        async function fetchTasks(){
            try{
                const res = await axios.get(`${URL}/tasks`)
                setTasks(res.data)

            }catch(e){
                console.log(e)
            }
        }

        fetchTasks()
    },[])

    if(tasks.length<1){
        return <h1>Fetching</h1>
    }

    return(
        <>
        <Typography align='center' variant="h4" gutterBottom component="div"> Currently Submitted Tasks</Typography>
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin:'auto'}}
      component="nav"
      aria-labelledby="submitted-tasks"
    //   subheader={
    //     <ListSubheader component="div" id="submitted-tasks">
    //       Currently Submitted Tasks
    //     </ListSubheader>
    //     }
        >
            {tasks.map((task,index)=><CustomListItem key={index}  listItem={task} type="task"/>)}
    </List>
    </>
    )
}

export default Tasks

