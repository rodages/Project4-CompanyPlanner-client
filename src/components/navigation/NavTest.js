import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

//icons
import ArchitectureIcon from "@mui/icons-material/Architecture"; //logo
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'; // register
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'; //login

import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined'; //departments
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; //shifts
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'; //checklists
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'; //tasks
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'; //items
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; //logout
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'; //edit

//other
import { Link , useNavigate} from "react-router-dom";
import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

function NavTest({loggedIn, user, setLoggedIn}) {
    console.log(user)
    const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
    const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");
    const navigate=useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "desktop-menu";

    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        {loggedIn?(<div>
            <MenuItem onClick={()=>{
            handleMenuClose()
            navigate('/editprofile')
        }}><EditOutlinedIcon/>Edit Profile</MenuItem>
        
        <MenuItem onClick={()=>{
                console.log("this runs")
                setLoggedIn(false)
                setAccessToken("")
                setRefreshToken("")
                handleMenuClose()
                navigate('/')
                console.log("this doesnt")
        }}><LockOutlinedIcon/>Logout</MenuItem>
        </div>):(<div>
            <MenuItem onClick={()=>navigate('/register')}>
            <AssignmentIndOutlinedIcon/>Register</MenuItem>

            <MenuItem onClick={()=>navigate('/login')}>
            <LockOpenOutlinedIcon/>Login</MenuItem>

        </div>)}
        
        </Menu>
    );

    const mobileMenuId = "mobile-menu";

    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >

        <MenuItem
        onClick={()=>navigate('/departments')}>
               <Typography ><CorporateFareOutlinedIcon/>Departments</Typography>
        </MenuItem>
        <MenuItem
        onClick={()=>navigate('/shifts')}>
               <Typography ><AccessTimeOutlinedIcon/>Shifts</Typography>
        </MenuItem>
        <MenuItem
        onClick={()=>navigate('/checklists')}>
               <Typography ><ListAltOutlinedIcon/>Checklists</Typography>
        </MenuItem>
        <MenuItem
        onClick={()=>navigate('/tasks')}>
               <Typography ><TaskAltOutlinedIcon/>Tasks</Typography>
        </MenuItem>
        <MenuItem
        onClick={()=>navigate('/items')}>
               <Typography ><PlaylistAddCheckOutlinedIcon/>Items</Typography>
        </MenuItem>
        

        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
            {loggedIn?<p>Account Management</p>:<p>Login/register</p>}
        </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Link to="/" style={{color:'white', textDecoration:'none', marginTop:'-15px', marginLeft:'-15px'}}>
                <Typography
                //add onClick to homepage
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: "15px", display: { xs: "block", sm: "block" } }}
                >
                <ArchitectureIcon fontSize="large"/>
                CompanyPlanner
                </Typography>
            </Link>

            <Box
                sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-evenly",
                display:{xs:'none', md:'flex'}
                }}
            >
                <Link to='#' style={{color:'white', textDecoration:'none', marginTop:'5px' }}>
                    <Typography ><CorporateFareOutlinedIcon/>Departments</Typography>
                </Link>

                <Link to='#' style={{color:'white', textDecoration:'none', marginTop:'5px' }}>
                    <Typography ><AccessTimeOutlinedIcon/>Shifts</Typography>
                </Link>

                <Link to='#' style={{color:'white', textDecoration:'none', marginTop:'5px' }}>
                    <Typography ><ListAltOutlinedIcon/>Checklists</Typography>
                </Link>

                <Link to='#' style={{color:'white', textDecoration:'none', marginTop:'5px' }}>
                    <Typography ><TaskAltOutlinedIcon/>Tasks</Typography>
                </Link>

                <Link to='#' style={{color:'white', textDecoration:'none', marginTop:'5px' }}>
                    <Typography ><PlaylistAddCheckOutlinedIcon/>Items</Typography>
                </Link>

            </Box>

            <Box sx={{ ml: "15px", display: { xs: "none", md: "flex" } }}>
            {loggedIn ? (
                <>
                    <h4 style={{color:'black'}}>Logged in as {user?.username}</h4>
                    <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                >
                
                <AccountCircle />
                </IconButton>
                </>
            ):(
                <>

                
                {/* //REGISTER*/}
                <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={()=>navigate('/register')}
                >
                    <AssignmentIndOutlinedIcon />
                    <Typography>Register</Typography>
                </IconButton>
                {/* //LogIn */}
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={()=>navigate('/login')}
                >
                <LockOpenOutlinedIcon />
                    <Typography>Login</Typography>
                </IconButton>
                </>
            )}
               
                
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                >
                <MoreIcon />
                </IconButton>
            </Box>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        </Box>
    );
}

export default NavTest;
