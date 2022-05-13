import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';

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
          {checklists.map((checklist,index)=><Checklist key={index} checklist={checklist} />)}
        </Stack>
      </div>

    )
}


export default Checklists

function Checklist({checklist}){

    return(
        <Card sx={{}}>
            <CardHeader 
                action={
                <IconButton aria-label="edit">
                    <EditIcon onClick={(e) => console.log("clocked")} />
                </IconButton>}
                title={<Typography variant="h4" gutterBottom component="div">
                    -{/* {checklist.title} */}
                </Typography>}
                        subheader={  <Typography variant="caption" gutterBottom component="div">
                    -{/* {new Date(checklist.updatedAt).toString()} */}
                </Typography>}>
                
                -{/* {checklist.createdBy}  */}
            </CardHeader>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    -{/* {checklist.content} */}
                </Typography>
                <Typography variant="overline" gutterBottom style={{float:'right'}}>
                    -{/* Posted by {checklist.createdBy} */}
                </Typography>
            </CardContent>
        </Card>
    )
}