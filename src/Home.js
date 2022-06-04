import React from 'react';

import Image from './images/night.jpeg'
import { useNavigate } from 'react-router-dom'
import { Paper,Button, Typography, Box } from '@mui/material';



const styles = {
    paperContainer: {
        background: `url(${Image}) no-repeat center center`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'90vh',
        border:'1px solid red',
        color:'white',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    boxContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        color:'white',
         borderColor:'white'
    }
};

function Home ({loggedIn,user}){
    const navigate=useNavigate()
    return (
        <Paper style={styles.paperContainer}>
            <Typography variant="h2" component="div" gutterBottom style={{marginTop:'5%'}}>
                Welcome to Company Planner
            </Typography>
            <Box style={styles.boxContainer}>
            <Typography variant="h5" component="div" gutterBottom >
                Your content management tool
            </Typography>
                {loggedIn?<h1>Welcome back {user.username}</h1>:(
                    <Box style={{display:'flex',justifyContent:'space-evenly', width:'30vh', marginTop:'5%'}}>
                            <Button onClick={()=>navigate('/login')} style={styles.button} variant="outlined">Login</Button>
                            <Button onClick={()=>navigate('/register')} style={styles.button} variant="outlined">Register</Button>
                    
                    </Box>
                )}
        
            </Box>
        </Paper>
    )
}

export default Home