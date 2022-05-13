import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import URL from '../../config'
import ChecklistItem from './ChecklistItem'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Checklists(){
  const [checklists, SetChecklists] = useState([])
    const navigate = useNavigate()
    console.log(checklists,`checklists`)

    useEffect(()=>{
        async function fetchChecklists(){
            try{
                const res = await axios.get(`${URL}/checklists`)
                SetChecklists(res.data)

            }catch(e){
                console.log(e)
            }
        }

        fetchChecklists()
    },[])
    if(checklists.length<1){
      return <h1>Fetching</h1>
    }
  return(

      <Box style={{margin:'0 auto',width: '80%'}}>
        <Typography>All Existing Checklists</Typography>
          <Stack direction="row" spacing={2}>
            {checklists.map((checklist,index)=><ChecklistItem key={index} checklist={checklist} />)}
          </Stack>
        </Box>


  )
}

export default Checklists