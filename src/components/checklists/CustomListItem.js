import { useState } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function CustomListItem({listItem}){
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return(
        <>
        <ListItemButton onClick={handleClick}>
            <ListItemText primary={`${listItem.name}`} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      
        <Collapse in={open} timeout="auto" unmountOnExit>
      <CardActionArea onClick={handleClick}>
      <ListItemText>
        <CardContent style={{paddingBottom:0,paddingTop:0, paddingLeft:'30px'}}>
            {listItem.image?
            <CardMedia
                component="img"
                height="140"
                image={listItem.image}
                alt="green iguana"
            />:''}
            <Typography variant="body2">
                -  Notes: {listItem.comment? listItem.comment : "None"}
            </Typography>
            <Typography variant="body2">
                -  Subsection:  {listItem.section_name}
            </Typography>
            <Typography variant="body2">
                {listItem.extra_from_checklist_amount>0? `Extra from Checklist: ${listItem.extra_from_checklist_amount}`:''}
                {/* -Used in:  {listItem?.checklist_tems.length>0?`${listItem.checklist_tasks.join(', ')} checklists`:'Not in Use '} */}
            </Typography>
        </CardContent>
      </ListItemText>

      </CardActionArea>
        </Collapse>
        </>
    )
}

export default CustomListItem