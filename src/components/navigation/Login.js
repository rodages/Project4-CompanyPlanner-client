import axios from 'axios'
import {useState,useEffect} from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import URL from '../../config'

import { Box, Typography, FormControl, InputLabel, OutlinedInput,InputAdornment,IconButton, Button } from '@mui/material'
import {Visibility, VisibilityOff } from '@mui/icons-material'



function Login({setLoggedIn, setUser}){
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        showPassword:false
    })
    const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
    const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");

    useEffect(()=>{

        async function testingDeployedDatabase(){
            const res = await axios.get("https://seiproject4.herokuapp.com/users/users/")
            console.log(res)
        }
        testingDeployedDatabase()
    },[])

    function handleChange(e){

        console.log(e.target.id, e.target.value)
        setFormData({...formData, [e.target.id]:e.target.value})
        console.log(formData)
    }

    function handleMouseDownPassword(event){
        event.preventDefault()
    }

    function handleClickShowPassword(){
        setFormData({
            ...formData, showPassword:!formData.showPassword
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        async function login(){
            try{
                const res = await axios.post(`${URL}/api/token/`,formData)
                console.log("response")
                console.log(res)
                if(res.statusText=="OK"){
                    console.log("this runs")
                    console.log(res,"res")
                    // console.log(JSON.parse(res.data.access),"parsed")
                    setAccessToken(res.data.access);
                    setRefreshToken(res.data.refresh);
                    setLoggedIn(true)
                    const userID = jwt_decode(res.data.access).user_id
                    console.log(userID)
                    async function getUserInfo(){
                        try{
                            const res = await axios.get(`${URL}/users/update/${userID}`)
                            console.log(res.data)
                            setUser({...res.data})
                            navigate('/departments')
                            console.log("finished")
                        }catch(e){
                            console.log(e)
                        }
                    }
                    getUserInfo()
                }
            }catch(e){
                console.log(e)
            }
        }
        login()
    }

    return(
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            
            <Typography sx={{textAlign:'center', flex:'auto', marginBottom:'10px'}}variant="h4">Login</Typography>

            <FormControl sx={{m: 1, minWidth:'35ch'}}>
                <InputLabel htmlFor="username">Username: First Name.Last Name</InputLabel>
                <OutlinedInput
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    label="username"
                />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: '35ch'}} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    type={formData.showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <Button size='large' sx={{display:"block", margin:'0 auto', marginTop:'10px'}} onClick={handleSubmit} variant="outlined">Sign In</Button>
        </Box>
    )
}

export default Login