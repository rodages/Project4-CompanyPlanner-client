import {Link, Outlet} from "react-router-dom"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';


function Layout(){
    return(
    <div>
        <h1>Layout</h1>
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
    </div>
    )
}

export default Layout