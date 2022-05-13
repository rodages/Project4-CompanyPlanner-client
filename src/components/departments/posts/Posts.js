import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Posts({posts}){
    console.log(posts,"posts")
    if (posts.length<1){
        return(
        <>
        <Typography variant="h4" gutterBottom component="div">Current department does not have any posts yet</Typography>

        </>
        )}
    return(
        <Box sx={{ width: '80%' }}>
            <Stack spacing={2}>
                {posts.map((post,index)=><Post key={index} post={post} />)}
            </Stack>
            </Box>
    )
}

export default Posts

function Post({post}){

    return(
        <Card sx={{}}>
            <CardHeader 
                action={
                <IconButton aria-label="edit">
                    <EditIcon onClick={(e) => console.log("clocked")} />
                </IconButton>}
                title={<Typography variant="h4" gutterBottom component="div">
                    {post.title}
                </Typography>}
                        subheader={  <Typography variant="caption" gutterBottom component="div">
                    {new Date(post.updatedAt).toString()}
                </Typography>}>
                
                {post.createdBy} 
            </CardHeader>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    {post.content}
                </Typography>
                <Typography variant="overline" gutterBottom style={{float:'right'}}>
                    Posted by {post.createdBy}
                </Typography>
            </CardContent>
        </Card>
    )
}