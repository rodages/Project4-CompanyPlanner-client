import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

function ChecklistItem({checklist}){

    return(
        <Card sx={{}}>
            <CardHeader 
                action={
                <IconButton aria-label="edit">
                    <EditIcon onClick={(e) => console.log("clicked")} />
                </IconButton>}
                title={<Typography variant="h4" gutterBottom component="div">
                    {checklist.name}
                </Typography>}
                        subheader={  <Typography variant="caption" gutterBottom component="div">
                    {/* {new Date(checklist.edited_at).toString()} */}
                    Items:{checklist.inventory_items.length} | Tasks:{checklist.tasks.length}
                </Typography>}>
                
                {/* {checklist.createdBy}  */}
            </CardHeader>
            <CardContent sx={{paddingTop:'0'}}>
                <Typography variant="subtitle1" gutterBottom>
                    Checklist Description:
                </Typography>
                <Typography variant="body2" gutterBottom >
                {checklist.description?checklist.description : 'No description provided'}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ChecklistItem