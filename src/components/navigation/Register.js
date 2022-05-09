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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


export default function InputAdornments() {
  const [values, setValues] = React.useState({
    username: '',
    DOB: '2020-01-01',
    password: '',
    password_repeat: '',
    showPassword:false,
    showRepeatPassword:false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values)
  };
  const handleDateCHange = (newValue) =>{
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
        <FormControl sx={{ m: 1 , width: '25ch', display:'block'}}>
          <InputLabel htmlFor="usernamet">Username</InputLabel>
          <OutlinedInput
            id="username"
            value={values.username}
            onChange={handleChange('username')}
            label="username"
          />
        </FormControl>
        
        <LocalizationProvider dateAdapter={AdapterDateFns} dateFormats='keyboardDate'>
            <MobileDatePicker
            label="Date mobile"
            inputFormat="yyyy/MM/dd"
            value={values.DOB}
            onChange={handleDateCHange}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider> 

        <FormControl sx={{ m: 1, width: '25ch', display:'block' }} variant="outlined">
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

        <FormControl sx={{ m: 1, width: '25ch' , display:'block'}} variant="outlined">
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
