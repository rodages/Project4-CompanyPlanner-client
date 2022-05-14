import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({selections,fetchedArr,setSelectedArr}) {
  return (
    <Autocomplete
      multiple
      onChange={(_,selectedOptions)=>{
        setSelectedArr(selectedOptions)
      }}
      id={`selected ${selections}`}
      options={fetchedArr}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      sx={{m: 1, width:'35ch'}}
      renderInput={(params) => (
        <TextField {...params} label={`selected ${selections}`} placeholder={`selected ${selections}`} />
      )}
    />
  );
}

