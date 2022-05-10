import React from 'react'
import {Link} from 'react-router-dom'
//css imports
import './css/home.css'
//imports from MaterialUI
import {
        Grid,
        Stack,
        Paper,
        Button,
        useMediaQuery
      } 
from '@mui/material'
import styled from '@emotion/styled';
//lottie imports
import Lottie from 'react-lottie'
import AnimationOne from './assets/lottie/animationOne.json';
//component imports

import NavBar from './NavBar';
import ResponsiveNavBar from './ResponsiveNavBar';


//styled button components
const BtnGetApproved = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "rgba(130, 90, 244, 1)",
  padding:"1.8em",
  fontStyle:'normal',
  fontWeight: 'bold',
  textAlign: "center",
  wordBreak:"break-word",
  borderRadius:"27px",
  width:"10em",
  '&:hover': {
    backgroundColor: "white",
    color:"rgba(130, 90, 244, 1)"
  },
}));

const BtnHomeSignUp = styled(Button)(({ theme }) => ({
  color: "rgba(130, 90, 244, 1)",
  padding:"1.5em",
  fontStyle:'normal',
  fontWeight: 'bold',
  textAlign: "center",
  wordBreak:"break-word",
  width:"10em",
  border: '5px solid',
  borderColor:"rgba(130, 90, 244, 1)",
  borderRadius:"27px",
  '&:hover': {
    backgroundColor: "rgba(130, 90, 244, 1)",
    color:"white"
  },
}));

//lottie animation configurations
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: AnimationOne,
  rendererSettings: {
   preserveAspectRatio: "xMidYMid slice"
  }
};

//export function
export default function Home() {
  //media query
const smallScreen = useMediaQuery('(min-width:600px)');
  return ( 
    <div style={{height:'100%' ,width:"100%"}}>
      
      <Grid container 
            className='home_main_container'
            direction={'column'} 
            justifyContent={"center"}
            sx={{margin:"auto",marginTop:"1%"}}
            lg={10}
            alignItems={"center"}
          >
        <Grid item width={"100%"}>
         <ResponsiveNavBar/>
        </Grid>
        <Grid item>
        
          <div style={{padding:"2em"}}>
            <div className='home_txt_bold'>
            

              <span >Seek Approval for your research</span>
            </div>
            <div className='home_txt_light'>

              {
                smallScreen?
                <span>
                Without the need to queue, the hassle of<br/>
                hopping from one office <br/>
                to the next, and<br/>
                the mountains<br/>
                of paper.<br/>
              </span>
                :
                <span>
                Without the need to queue, the hassle of
                hopping from one office 
                to the next, and
                the mountains
                of paper.
              </span>
              }
            </div>
            <div className='btnGroup'>
              <Stack direction={'row'} spacing={4}>
                <Link to='login'>
                  <BtnGetApproved variant='contained'> Login</BtnGetApproved>
                </Link>
                <Link to='/signUp'>
                  <BtnHomeSignUp variant='outlined'>Sign up</BtnHomeSignUp>
                </Link>
              </Stack>
            </div>
            <div className='animation_one'>
              <Lottie 
	              options={defaultOptions}
                height={smallScreen?350:250}
                width={smallScreen?350:250}
              />
          </div>
          </div>
        </Grid>
      </Grid>
      </div>
  )
}
