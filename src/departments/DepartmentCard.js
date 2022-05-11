import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button, CardActionArea, CardActions } from '@mui/material';

import {useNavigate } from 'react-router-dom'



function DepartmentCard({department}){
    const navigate = useNavigate()

    const styles = {
        image :{
            width: '100%',
            margin: 'auto',
            height:'auto'
        }
    }
    return(
        <Card sx={{ maxWidth: '80%', marginTop:'15px'}}>
            <CardActionArea onClick={()=>{
                navigate(`/departments/${department.id}`)
            }}>
                <Typography align='center' gutterBottom variant="h5" component="div">
                    {department.name}
                    </Typography>
                
                <CardMedia 
                    component="img"
                    style={styles.image}
                    image={department.image}
                    alt={`${department.name} image`}
                />
                <CardContent>
                    
                    <Typography variant="body2" color="text.secondary">
                    {department.description}
                    </Typography>
                </CardContent>
            </CardActionArea>

      </Card>
    )
}

export default DepartmentCard