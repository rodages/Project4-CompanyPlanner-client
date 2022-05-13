import {Link, Outlet} from "react-router-dom"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import Navbar from "./Navbar";


function Layout({loggedIn, user, setLoggedIn}){
    console.log(user,"user")
    return(
    <>
        <Navbar loggedIn={loggedIn} user={user} setLoggedIn={setLoggedIn}/>
        <Box pb='50px' pt='60px'>
            <Outlet/>
        </Box>
        
        {/* Footer */}
        <Box style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          height: '40px',
          
        }}>
            <BottomNavigation style={{backgroundColor:'#1F4A9F', display:'flex', justifyContent:'center', alignItems:'center', paddingBottom:'10px'}}>
                <Button style={{color:'white', backgroundColor:'#1F4A9F', borderColor:'white'}} href="#about">
                    About
                </Button>
            </BottomNavigation>
        </Box>
    </>
    )
}

export default Layout