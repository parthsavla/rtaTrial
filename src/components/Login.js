import { Button, Grid,Paper,Stack,TextField } from '@mui/material'
import React from 'react'
import './css/signup.css'
export default function SignUp() {
  return (
    <div style={{height:"l00%",width:"100%"}} >
      <div className='centerDiv' >
        <Paper elevation={12} className="pape-style" sx={{background:"#dde4e9"}}>
          <h2>Login</h2>
          <Stack justifyContent={"center"}>
              <TextField sx={{width:'87%',margin:'10px auto 10px auto',marginBottom:''}} variant='filled' label="E-Mail" margin='normal' size='small'></TextField>
              <TextField sx={{width:'87%',margin:'10px auto 10px auto'}} variant='filled' label="Password" margin='normal' size='small'></TextField>
              <Button variant='contained' sx={{background:'#825af4',width:"75%",margin:'10px auto 10px auto'}}>Login</Button>
          </Stack>
        </Paper>
      </div> 
    </div>
  )
}
