import { Grid, Paper, Stack, TextField,InputLabel, Button } from '@mui/material'
import React from 'react'
import ResponsiveAppBar from './ResponsiveNavBar'
import avatar from './assets/avatar.png'
import { alpha, styled } from '@mui/material/styles';
import { display, padding, textAlign } from '@mui/system';
import './css/accountpage.css'


const AccountTextField = styled((props) => (
  <TextField margin="dense"  sx={{height:"2.3em"}} InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    fontSize:"1.5em",

    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
    borderBottom:"4px solid #825AF4",
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: '#C4C4C4',
    },
    '&.Mui-focused': {
      backgroundColor: '#C4C4C4',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
//styled button components
const BtnGetApproved = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "rgba(130, 90, 244, 1)",
  fontStyle:'normal',
  fontWeight: 'bold',
  textAlign: "center",
  wordBreak:"break-word",
  fontSize:"1em",
  borderRadius:"27px",
  width:"10em",
  '&:hover': {
    backgroundColor: "white",
    color:"rgba(130, 90, 244, 1)"
  },
}));

const BtnHomeSignUp = styled(Button)(({ theme }) => ({
  color: "rgba(130, 90, 244, 1)",
  fontStyle:'normal',
  fontWeight: 'bold',
  textAlign: "center",
  fontSize:"1em",
  wordBreak:"break-word",
  width:"10em",
  border: '2px solid',
  borderColor:"rgba(130, 90, 244, 1)",
  borderRadius:"27px",
  '&:hover': {
    backgroundColor: "rgba(130, 90, 244, 1)",
    color:"white"
  },
}));


const txtFieldSpan = {
  marginTop:"1.5em",
  display:"block",

}
const labelsty = {
  marginRight:"2em",
  color:"#825AF4",
  fontSize:"1.2em"
}
const labelstysm = {
  marginRight:"4em",
  color:"#825AF4",
  textAlign:"center",
  fontSize:"1.2em"
}
const verticleMenuStyle = {fontWeight:"600",fontSize:"1em",textAlign:"center",padding:"1em" }
const trueStyle = {borderRadius:"1.6em",fontWeight:"600",fontSize:"1em",color:"whitesmoke",textAlign:"center",padding:"1em",background:"#825AF4"}

export default function AccoutPage(props) {
  const flag = true;
  return (
    <div>
      <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}  >
        <Grid item sx={{background:"#E2E8EC"}} width={"90%"}>
          <ResponsiveAppBar></ResponsiveAppBar>
        </Grid>
        <Grid item  sx={{background:"#E2E8EC"}} width={"90%"} height="80vh">
          <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={8} >
            <Stack direction={"column"} width="20%" spacing={4}>
              <img src={avatar} width={'150'} style={{margin:"auto",padding:"1em"}} ></img>
              <Paper sx={{background:"rgba(196, 196, 196, 1)",borderRadius:"2em"}}>
                <Stack>
                  <div style={flag?trueStyle:verticleMenuStyle}>
                    Account Settings
                  </div>
                  <div style={verticleMenuStyle} className="vertMenuBtn">
                    Submission History
                  </div>
                  <div style={verticleMenuStyle} className="vertMenuBtn">
                    Change 
                  </div>
                </Stack>
              </Paper>
            </Stack>
            <Stack direction={"column"} sx={{padding:"3em"}} justifyContent={"center"} alignItems={"center"} >
            <div>
              <label htmlFor="fName" style={labelsty}>FIRST NAME:</label>
              <AccountTextField id="fName" variant="filled"/>
            </div>
              <div style={txtFieldSpan}>
                <label  htmlFor="lName" style={labelsty}>
                   LAST NAME:
                </label>
                <AccountTextField id="lName" variant="filled"/>
              </div>
              <span style={txtFieldSpan} >
                <label  htmlFor="email" style={labelstysm}>
                   E-MAIL:
                </label>
                <AccountTextField id="email" variant="filled"/>
              </span>
              <span style={txtFieldSpan}>
                <label  htmlFor="stdId" style={labelsty}>
                   STUDENT ID:
                </label>
                <AccountTextField id="reddit-input" variant="filled"/>
              </span>
              <span style={txtFieldSpan}>
                <label  htmlFor="course" style={labelstysm}>
                   COURSE:
                </label>
                <AccountTextField id="course" variant="filled" />
              </span>
              <span style={{marginTop:"3em"}}>
                <Stack direction={"row"} spacing={4}>
                  <BtnGetApproved>EDIT</BtnGetApproved>
                  <BtnHomeSignUp>SAVE</BtnHomeSignUp>
                </Stack>
              </span>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}
