import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid,Stack,TextField,FormControl,InputLabel,InputBase,alpha,MenuItem,Select, Button} from '@mui/material';
import ResponsiveAppBar from './ResponsiveNavBar';
import './css/studentdashboard.css'
import {styled} from '@mui/material/styles'
import downArw from './assets/down.svg'
import ResearchApprovedTableDisplay from './ResearchApprovedTableDisplay';
import ResearchApprovalListAccordion from './ResearchApprovalListAccordion'


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
    backgroundColor: '#C4C4C4',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3,border:'3px solid #825AF4' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
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
      <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
        <Grid item sx={{background:"#E2E8EC"}} width={"90%"}>
          <ResponsiveAppBar></ResponsiveAppBar>
        </Grid>
        <Grid item  sx={{background:"#E2E8EC"}} width={"90%"} height="auto">
          <h1 style={{textAlign:"center"}}>Research Dasboard</h1>
          <Stack alignItems={"center"} spacing={6}>
            <div style={{width:"80%",paddingBottom:"2em",paddingTop:'4 em'}}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ bgcolor: 'transparent' }}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                  <AntTab label="Pending Approval" />
                  <AntTab label="Approved" />
                </AntTabs>
                <TabPanel value={value} index={0}>
                  <ResearchApprovalListAccordion></ResearchApprovalListAccordion>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <ResearchApprovedTableDisplay></ResearchApprovedTableDisplay>
                </TabPanel> 
               
              </Box>
            </Box>
            </div>
          </Stack>
          
        </Grid>
      </Grid>
      
    </div>
  )
}
