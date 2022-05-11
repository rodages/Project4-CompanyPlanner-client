import {Link, Outlet} from "react-router-dom"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import Navbar from "./Navbar";


function Layout({loggedIn, user, setLoggedIn}){
    console.log(user,"user")
    return(
    <>
        <Navbar loggedIn={loggedIn} user={user} setLoggedIn={setLoggedIn}/>

        <Outlet />
        
        {/* Footer */}
        <Box style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
        }}>
            <BottomNavigation>
                <Link to='#about'>
                    <p>About</p>
                </Link>
            </BottomNavigation>
        </Box>
    </>
    )
}

export default Layout