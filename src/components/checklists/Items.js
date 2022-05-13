import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import URL from '../../config'
import CustomListItem from './CustomListItem'

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';





function Items(){
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        async function fetchItems(){
            try{
                const res = await axios.get(`${URL}/inventoryitems`)
                setItems(res.data)

            }catch(e){
                console.log(e)
            }
        }

        fetchItems()
    },[])

    if(items.length<1){
        return <h1>Fetching</h1>
    }

    return(
        <div>
            <Typography align='center' variant="h4" gutterBottom component="div"> Currently Uploaded Items
            <div></div><Button onClick={()=>navigate('/new/item')
            } variant="outlined">Add Item</Button></Typography>
            
            <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin:'auto'}}
        component="nav"
        aria-labelledby="submitted-items"
        //   subheader={
        //     <ListSubheader component="div" id="submitted-items">
        //       Currently Submitted items
        //     </ListSubheader>
        //     }
            >
                {items.map((item,index)=><CustomListItem key={index}  listItem={item} type="item"/>)}
            </List>
        </div>
    )
}

export default Items

