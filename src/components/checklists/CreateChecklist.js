import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import URL from '../../config'

import { Box, TextField,Typography, FormControl, InputLabel, OutlinedInput,InputAdornment, Button, Select } from '@mui/material'
import MultiSelect from './MultiSelect'


function CreateChecklist(){
    const navigate = useNavigate()

    const [fetchedItems, setFetchedItems] = useState([])
    const [fetchedTasks, setFetchedTasks] = useState([])

    // const [refreshItems,setRefreshItems] = useState(false)
    // const [refreshTasks, setRefreshTasks] = useState(false)

    const [selectedItems, setSelectedItems] = useState([])
    const [selectedTasks, setSelectedTasks] = useState([])
    console.log(selectedItems)

    const [formData, setFormData] = useState({
        "inventory_items": [],
        "tasks": [],
        "name": "",
        "description": "",
        "sales_target": null,
        "department": null
    })


    useEffect(()=>{
        async function fetchItems(){
            try{
                const res = await axios.get(`${URL}/inventoryitems`)
                setFetchedItems(res.data)

            }catch(e){
                console.log(e)
            }
        }

        fetchItems()
    },[])

    useEffect(()=>{
        async function fetchTasks(){
            try{
                const res = await axios.get(`${URL}/tasks`)
                setFetchedTasks(res.data)

            }catch(e){
                console.log(e)
            }
        }

        fetchTasks()
    },[])

    function handleChange (e) {
        console.log(e.target.id, e.target.value)
        setFormData({...formData, [e.target.id]:e.target.value})

        console.log({...formData, [e.target.id]:e.target.value})
    }
    
    function handleSubmit (){
        const data = {...formData,inventory_items:selectedItems, tasks:selectedTasks}
        const accessToken =JSON.parse(localStorage.getItem('accessToken'))
        const token = `Bearer ${accessToken.replaceAll('"','')}`
        console.log(token)
        console.log(data)
        async function submit(){
            try{
                const res = await axios.post(
                    `${URL}/checklists/`, 
                data,
                {
                    headers: {
                      Authorization: token,
                    },
            })
                navigate("/checklists")
            }catch(e){
                console.log(e)
            }
        }
        submit()
    }

    return(
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            <Typography sx={{textAlign:'center', flex:'auto', marginBottom:'10px'}}variant="h4">Create a new Checklist</Typography>

            <FormControl sx={{m: 1, minWidth:'35ch'}}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    label='Name'
                />
            </FormControl>

            <FormControl sx={{m: 1, minWidth:'35ch'}}>
                <InputLabel htmlFor="name">Description</InputLabel>
                <OutlinedInput
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    label='Description'
                />
            </FormControl>

            <TextField
            onChange={handleChange}
            id="sales_target"
            label="sales target"
            type="number"
            value={formData.sales_target}
            sx={{m: 1, minWidth:'35ch'}}
        />

        <MultiSelect fetchedArr={fetchedItems} selections={"items"} setSelectedArr={setSelectedItems} />
        <MultiSelect fetchedArr={fetchedTasks} selections={"tasks"} setSelectedArr={setSelectedTasks} />

        <Button size='large' sx={{display:"block", margin:'0 auto', marginTop:'10px'}} onClick={handleSubmit} variant="outlined">Submit</Button>

        </Box>
    )
}

export default CreateChecklist