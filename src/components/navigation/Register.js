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
import FormHelperText from '@mui/material/FormHelperText';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DatePicker } from '@mui/x-date-pickers';


export default function InputAdornments() {
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
    // const year = values.DOB.getFullYear()
    // const month = values.DOB.getMonth()
    // const day = values.DOB.getday()
    // console.log(`${year}-${month}-${day}` )
    // const year = values.DOB.getFullYear()
    // const month = values.DOB.getMonth()
    // const day = values.DOB.getDay()
    // console.log(year,month,day)
    setValues({ ...values, [prop]: event.target.value, username:username },);
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

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <Typography variant="h4">Register</Typography>
        <FormControl sx={{ m: 1,display:'block'}} disabled>
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput
            id="username"
            value={values.username}
            onChange={handleChange('username')}
            label="username"
          />
        </FormControl>

        <FormControl sx={{ m: 1 , minWidth: '25ch',width:'40%'}}>
          <InputLabel htmlFor="first_name">First Name</InputLabel>
          <OutlinedInput
            id="first_name"
            value={values.first_name}
            onChange={handleChange('first_name')}
            label="First Name"
          />
        </FormControl>

        <FormControl sx={{ m: 1 , minWidth: '25ch',width:'40%'}}>
          <InputLabel htmlFor="last_name">Last Name</InputLabel>
          <OutlinedInput
            id="last_name"
            value={values.last_name}
            onChange={handleChange('last_name')}
            label="Last Name"
          />
        </FormControl>
        
        <FormControl sx={{ m: 1 , minWidth: '25ch',width:'40%'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DatePicker
                mask="____/__/__"
                openTo="year"
                views={['year', 'month', 'day']}
                // mask="yyyy/MM/dd"
                label="DOB"
                inputFormat="yyyy/MM/dd"
                value={values.DOB}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> 
        </FormControl>

        <FormControl sx={{ m: 1 , minWidth: '25ch',width:'40%'}}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            value={values.email}
            onChange={handleChange('email')}
            label="email"
          />
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: '25ch',width:'40%'}} variant="outlined">
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

        <FormControl sx={{ m: 1, minWidth: '25ch',width:'40%'}} variant="outlined">
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
      </div>
      
    </Box>
  );
}
