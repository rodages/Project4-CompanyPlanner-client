import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DatePicker } from '@mui/x-date-pickers';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import URL from '../../config'


export default function InputAdornments() {
  const navigate=useNavigate()
  const [values, setValues] = React.useState({
    username: '',
    first_name:'',
    last_name:'',
    email:'',
    DOB: new Date,
    password: '',
    password_repeat: '',
    showPassword:false,
    showRepeatPassword:false,
  });

  const handleChange = (prop) => (event) => {
    let username
    if(prop=="first_name"){
        username=`${event.target.value.toLowerCase()}.${values.last_name.toLocaleLowerCase()}`
    }else if(prop=="last_name"){
        username=`${values.first_name.toLowerCase()}.${event.target.value.toLowerCase()}`
    }else{
        username=`${values.first_name.toLowerCase()}.${values.last_name.toLocaleLowerCase()}`
    }
    setValues({ ...values, [prop]: event.target.value, username:username },);
    console.log(values)
  };
  const handleDateChange = (newValue) =>{
    console.log(newValue)
      setValues({...values, DOB:newValue})
      console.log(values)
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
const handleClickShowRepeatPassword = () => {
    setValues({
      ...values,
      showRepeatPassword: !values.showRepeatPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  function handleSubmit(event){
      event.preventDefault()
        const year = values.DOB.getFullYear()
        const month = values.DOB.getMonth()
        const day = values.DOB.getDay()
        const DOB = `${year}-${month}-${day}`
      const submitValues = {...values,DOB:DOB}
      console.log(submitValues)
      async function register(){
          try{
              const res = await axios.post(`${URL}users/register`, submitValues)
              //navigate to login
              if(res.status==201){
                navigate("/login")
              }
          }catch(e){
              //handle errors with form validators OR SNACK BAR

              console.log(e)
          }

      }
      register()
  }
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
        
        <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
        
            <Typography sx={{textAlign:'center', flex:'auto', marginBottom:'10px'}}variant="h4">Registration</Typography>
            <FormControl sx={{m: 1, minWidth:'35ch', width:'50%'}} disabled>
                <InputLabel htmlFor="username">Username: First Name.Last Name</InputLabel>
                <OutlinedInput
                    id="username"
                    value={values.username}
                    onChange={handleChange('username')}
                    label="username"
                />
            </FormControl>
        </Box>
        
        <Box sx={{display:'flex', justifyContinent:'center', flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
            <FormControl sx={{ m: 1, minWidth: '31ch',flex:'1'}}>
            <InputLabel htmlFor="first_name">First Name</InputLabel>
            <OutlinedInput
                id="first_name"
                value={values.first_name}
                onChange={handleChange('first_name')}
                label="First Name"
            />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: '31ch',flex:'1'}}>
            <InputLabel htmlFor="last_name">Last Name</InputLabel>
            <OutlinedInput
                id="last_name"
                value={values.last_name}
                onChange={handleChange('last_name')}
                label="Last Name"
            />
            </FormControl>
        </Box>

        <Box sx={{display:'flex', justifyContinent:'center', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
            <FormControl sx={{ m: 1, minWidth: '25ch',flex:'1'}}>
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <DatePicker
                    mask="____/__/__"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    // mask="yyyy/MM/dd"
                    label="Date of Birth"
                    inputFormat="yyyy/MM/dd"
                    value={values.DOB}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider> 
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: '31ch',flex:'1'}}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
                id="email"
                value={values.email}
                onChange={handleChange('email')}
                label="email"
            />
            </FormControl>
        </Box>

        <Box sx={{display:'flex', justifyContinent:'center', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
        <FormControl sx={{ m: 1, minWidth: '25ch',flex:'1'}} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: '25ch',flex:'1'}} variant="outlined">
          <InputLabel htmlFor="password">Repeat Password</InputLabel>
          <OutlinedInput
            id="repeat_password"
            type={values.showRepeatPassword ? 'text' : 'password'}
            value={values.password_repeat}
            onChange={handleChange('password_repeat')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRepeatPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="repeat_password"
          />
        </FormControl>
        </Box>
        <Button size='large' sx={{display:"block", margin:'0 auto', marginTop:'10px'}}onClick={handleSubmit} variant="outlined">Register</Button>
      
    </Box>
  );
}
