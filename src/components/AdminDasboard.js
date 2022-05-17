import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid,Stack,TextField,FormControl,InputLabel,InputBase,alpha,MenuItem,Select, Button, Paper} from '@mui/material';
import ResponsiveAppBar from './ResponsiveNavBar';
import './css/studentdashboard.css'
import {styled} from '@mui/material/styles'
import downArw from './assets/down.svg'
import SupervisorApprovedTableDisplay from './SupervisorApprovedTableDisplay';
import ApprovalListAccordion from './ApprovalListAccordion'


let eduLevels = [{value:"Undergraduate",key:"ugd"},{value:"Masters",key:"mst"},{value:"Postgraduate",key:"pugd"}]

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  color:"#825AF4",
  '& .MuiTabs-indicator': {
    backgroundColor: '#825AF4',
  },
});

const AntTab = styled((props) => <Tab  {...props}  />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#825AF4',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#825AF4',
    fontSize:"1em",
    fontWeight: "bolder",
    border:"2px solid #825AF4"
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#825AF4',
  },
}));
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: "1.8em",
    marginBottom: "1em"
  },
  
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'rgba(116, 116, 116, 0.33)',
    border: '1px solid #ced4da',
    fontSize: 12,
    width: '100%',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha('#825AF4', 0.25)} 0 0 0 0.2rem`,
      borderBottom:"3px solid #825AF4",
      
    },
  },
}));

const SubmitBtn = styled(Button)(({ theme }) => ({
  color: "rgba(130, 90, 244, 1)",
  fontStyle:'normal',
  fontWeight: 'bold',
  textAlign: "center",
  fontSize:"0.8em",
  wordBreak:"break-word",
  width:"7em",
  border: '2px solid',
  borderColor:"rgba(130, 90, 244, 1)",
  borderRadius:"27px",
  '&:hover': {
    backgroundColor: "rgba(130, 90, 244, 1)",
    color:"white"
  },
}));

const iconComponent = (props) => {
  return (
    <img src={downArw} className={props.className}/>
  )};
export default function StudentDashboard() {
  const [value, setValue] = React.useState(0);
  const [eduLevel,setEduLevel] = useState();
  const [department,setDepartment] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSelectChange = (event) => {
    setEduLevel(event.target.value);
  };
  return (
    <div>
      <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={5}>
        <Grid item sx={{background:"#E2E8EC"}} width={"90%"}>
          <ResponsiveAppBar></ResponsiveAppBar>
        </Grid>
        <Grid item  sx={{background:"#E2E8EC"}} width={"90%"} height="auto">
        <h1 style={{textAlign:"center"}}>Admin Dasboard</h1>
        <Stack direction={{ xs: 'column', md: 'column' ,lg: 'row' }} spacing={4} justifyContent={"center"} alignItems={"center"} >
            <div>
                <Paper sx={{backgroundColor:'#C4C4C4',width:'20em',textAlign:'center'}} elevation={5}>
                    <span style={{fontStyle:'normal',fontFamily:'Roboto Mono',fontWeight:'bold',fontSize:'1.3em',padding:'2em'}}>
                        Students
                    </span><br/>
                    <span >
                      table for students in the system
                    </span>
                </Paper>
            </div>
            <div >
                <Paper sx={{backgroundColor:'#C4C4C4',width:'20em'}} elevation={5}>
                    <span style={{fontStyle:'normal',fontFamily:'Roboto Mono',fontWeight:'bold',fontSize:'1.3em',padding:'2em'}}>
                        Add New Major
                    </span>
                    <hr width='80%'></hr>
                    <form style={{padding:'2em'}}>
                        <FormControl variant="standard" sx={{width:'90%'}}>
                            <InputLabel shrink htmlFor="bootstrap-input" color='secondary' sx={{fontSize:"1.32em",color:"#07271E"}}>
                            select the department 
                            </InputLabel>
                            <Select
                              id="outlined-select-currency"
                              value={eduLevel}
                              onChange={handleSelectChange}
                              input={<BootstrapInput/>}

                            >
                              {eduLevels.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.value}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <FormControl variant="standard" sx={{width:'90%'}}>
                            <InputLabel shrink htmlFor="bootstrap-input" color='secondary' sx={{fontSize:"1.32em",color:"#07271E"}}>
                            Enter the name of the major
                            </InputLabel>
                            <Select
                              id="outlined-select-currency"
                              value={eduLevel}
                              onChange={handleSelectChange}
                              input={<BootstrapInput/>}

                            >
                              {eduLevels.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.value}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <SubmitBtn>
                              Submit
                          </SubmitBtn>      
                    </form>
                </Paper>
            </div>
        </Stack> 
            
           
        </Grid>
        <Grid item  sx={{background:"#E2E8EC" ,paddingBottom:"3em"}} width="90%" height="auto">
        <Stack direction={{ xs: 'column', md: 'column' ,lg: 'row'  }} spacing={4}justifyContent={"center"} alignItems={"center"} >
          <div>
              <Paper sx={{backgroundColor:'#C4C4C4',width:'20em',textAlign:'center'}} elevation={5}>
                  <span style={{fontStyle:'normal',fontFamily:'Roboto Mono',fontWeight:'bold',fontSize:'1.3em',padding:'2em'}}>
                    Instructor
                  </span><br/>
                  <span>
                    table for Instuctor in the system
                  </span>
              </Paper>
          </div>
          <div>
              <Paper sx={{backgroundColor:'#C4C4C4',width:'20em',textAlign:'center'}} elevation={5}>
                  <span style={{fontStyle:'normal',fontFamily:'Roboto Mono',fontWeight:'bold',fontSize:'1.3em',padding:'2em'}}>
                      Department 
                  </span><br/>
                  <span>
                    table for Department in the system
                  </span>

              </Paper>
          </div>
          <div>
              <Paper sx={{backgroundColor:'#C4C4C4',width:'20em',textAlign:'center'}} elevation={5}>
                  <span style={{fontStyle:'normal',fontFamily:'Roboto Mono',fontWeight:'bold',fontSize:'1.3em',padding:'2em'}}>
                      Majors
                  </span><br/>
                  <span>
                    table for Majors in the system
                  </span>
              </Paper>
          </div>
        </Stack>
        </Grid>
      </Grid>
      
    </div>
  )
}
