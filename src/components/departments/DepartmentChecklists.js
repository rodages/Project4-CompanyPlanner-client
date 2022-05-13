import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import ChecklistItem from '../checklists/ChecklistItem';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Checklists({checklists}){
    console.log(checklists,"checklists")
    if (checklists.length<1){
        return(
        <>
        <Typography variant="h4" gutterBottom component="div">Current department does not have any checklists yet</Typography>

        </>
        )}
    return(
        <div style={{marginTop:'30px', width: '80%'}}>
        <Stack direction="row" spacing={2}>
          {checklists.map((checklist,index)=><ChecklistItem key={index} checklist={checklist} />)}
        </Stack>
      </div>

    )
}


export default Checklists

