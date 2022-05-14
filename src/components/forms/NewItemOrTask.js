import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import URL from '../../config'
import { Box, TextField,Typography, FormControl, InputLabel, OutlinedInput,InputAdornment,IconButton, Button, Select } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
//fields:

//extra_from_checklist_amount:dropdown
//createdby

function NewItemOrTask({endpoint}){
    let urlEndPoint = endpoint
    let params = useParams()
    //takes destination-task or item from url if they are not provided by props
    if(!urlEndPoint) urlEndPoint = params.destination

    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        section_name:'Other',
        name:'',
        image:'',
        comment:'',
        extra_from_checklist_amount:0,
    })
    const taskOptions = [
        "Other",
        "Pre-Departure",
        "Briefing",
        "Sightseeing Boat",
        "Last Cruise of the day",
        "Pier Works",
        "Kitchen"
        ]

    const itemOptions = [
        "Other",
        "Crockery",
        "Cutlery",
        "Serving Tools",
        "Food Serivce Area",
        "Drinks Bar",
        "Supervising"
    ]


    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    function handleChange (e) {
        console.log(e.target.id, e.target.value)
        setFormData({...formData, [e.target.id]:e.target.value})
        if(e.target.id=='extra_from_checklist_amount' && e.target.value<0){
            setFormData({...formData, 'extra_from_checklist_amount':0})
        }
        console.log({...formData, [e.target.id]:e.target.value})
    }
    function handleDropdownChange (e) {
    
        setFormData({...formData, 'section_name':e.target.value})
        console.log({...formData, 'section_name':e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const token =JSON.parse(localStorage.getItem('accessToken'))
        console.log(token)
        console.log(`Bearer ${token.replaceAll('"','')}`)
        let submissionPoint
        console.log(formData)
        if(urlEndPoint=='task'){
            submissionPoint='tasks'
        }else if(urlEndPoint=='item'){
            submissionPoint='inventoryitems'
        }
        async function submit(){
            try{
                const res = await axios.post(
                    `${URL}/${submissionPoint}/`, 
                JSON.stringify(formData),
                {
                    headers: {
                      Authorization: `Bearer ${token.replaceAll('"','')}`,
                    },
            })
                console.log(res)
            }catch(e){
                console.log(e)
            }
        }
        submit()
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            <Typography sx={{textAlign:'center', flex:'auto', marginBottom:'10px'}}variant="h4">Create a new {urlEndPoint}</Typography>

            <FormControl sx={{m: 1, minWidth:'35ch'}}>
                <InputLabel htmlFor="name">{urlEndPoint} name</InputLabel>
                <OutlinedInput
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    label={`${urlEndPoint} name`}
                />
            </FormControl>

            <FormControl sx={{m: 1, minWidth:'35ch'}}>
                <InputLabel htmlFor="comment">comment/description</InputLabel>
                <OutlinedInput
                    id="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    label="comment/description"
                />
            </FormControl>

            <FormControl sx={{m: 1, minWidth:'35ch'}}>
                <InputLabel htmlFor="image">{urlEndPoint} image link</InputLabel>
                <OutlinedInput
                    id="image"
                    value={formData.image}
                    onChange={handleChange}
                    label={`${urlEndPoint} image link`}
                />
            </FormControl>

            <TextField
            onChange={handleChange}
          id="extra_from_checklist_amount"
          label="extra from checklist"
          type="number"
          value={formData.extra_from_checklist_amount}
          sx={{m: 1, minWidth:'35ch'}}
        />

            <FormControl>
                <InputLabel id="section_name_label">section</InputLabel>
                <Select
                    labelId="section_name_label"
                    id="section_name"
                    value={formData.section_name}
                    onChange={handleDropdownChange}
                    input={<OutlinedInput label='section' />}
                    MenuProps={MenuProps}
                    sx={{m: 1, minWidth:'32ch'}}
                >
                
                {urlEndPoint=='item'? 
                //list items dropdown
                itemOptions.map((item, index) =>(
                    <MenuItem
                        key={index}
                        value={item}
                        >
                        {item}
                    </MenuItem>
                )):
                taskOptions.map((item, index) =>(
                    <MenuItem
                        key={index}
                        value={item}
                        >
                        {item}
                    </MenuItem>
                ))
                }
                </Select>
            </FormControl>

            <Button size='large' sx={{display:"block", margin:'0 auto', marginTop:'10px'}} onClick={handleSubmit} variant="outlined">Submit</Button>
        </Box>
        )

}

export default NewItemOrTask