import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Grid,Divider } from '@mui/material';
import { borderRadius } from '@mui/system';


//style for buttons
const navBtn = {
  paddingRight:"2.5em",
  paddingLeft:"2em",
  borderRight:"3px #825AF4 solid",
  borderRadius:'0'
}
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{
              background:"transparent",
              boxShadow:"none",
              color:"#825AF4",
              padding:'1em'
            }}>
        <Toolbar>
          <Typography 
            className='navbar_logo' 
            component="div" 
            sx={{ 
                  flexGrow: 1,
                  paddingLeft:"2em",
                  fontSize:"3em"
                }}>
            Logo
          </Typography>
          <Grid 
            container 
            direction={"row"} 
            spacing={4} 
            justifyContent={"flex-end"}
            sx={{paddingRight:"4em"}}
            >
            <Grid item>
              <Button color="inherit" sx={navBtn}>Home</Button>
            </Grid>
            
            <Grid item>
              <Button className='btn_nav' color="inherit" sx={{paddingRight:"2.3em",paddingLeft:"1em",borderRight:"3px #825AF4 solid",borderRadius:'0'}}>About</Button>
            </Grid>
            <Grid item>
              <Button className='btn_nav' color="inherit" >Contact</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}