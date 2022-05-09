import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Stack } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
const approvalList =[
    {
        id:"1",
        studentName:"student 1",
        projectTitle:"title 1",
        EduLevel:"undergrade",
        Date:"10/4/2002",
        supervisor:"1"
    },
    {
        id:"2",
        studentName:"student 2",
        projectTitle:"title 2",
        EduLevel:"undergrade",
        Date:"11/4/2002",
        supervisor:"2"
    },
    {
        id:"3",
        studentName:"student 3",
        projectTitle:"title 3",
        EduLevel:"undergrade",
        Date:"10/4/2002",
        supervisor:"3"
    },
    {
        id:"4",
        studentName:"student 4",
        projectTitle:"title 4",
        EduLevel:"undergrade",
        Date:"10/4/2002",
        supervisor:"4"
    }
]

const BtnDecline = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "rgba(130, 90, 244, 1)",
    fontStyle:'normal',
    fontWeight: 'semi-bold',
    textAlign: "center",
    wordBreak:"break-word",
    fontSize:"0.74em",
    borderRadius:"27px",
    width:"10em",
    '&:hover': {
      backgroundColor: "white",
      color:"rgba(130, 90, 244, 1)"
    },
  }));
  
  const BtnApproved = styled(Button)(({ theme }) => ({
    color: "rgba(130, 90, 244, 1)",
    fontStyle:'normal',
    fontWeight: 'semi-bold',
    textAlign: "center",
    fontSize:"0.7em",
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

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {
          approvalList.map((listitem)=>(
            <Accordion key={listitem.id} expanded={expanded === listitem.id} onChange={handleChange(listitem.id)} sx={{backgroundColor:"#C4C4C4"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0,color:"#07271E",fontWeight:"bold",fontFamily:"Roboto Mono"}}>
                      {listitem.studentName}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{listitem.projectTitle}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                        <span style={{fontWeight:'bold',paddingRight:'1em'}}>
                          Education Level :   
                        </span>
                        <span style={{fontWeight:'normal'}}>
                          {listitem.EduLevel}
                        </span>
                        <br/><br/>
                        <span style={{fontWeight:'bold',paddingRight:'1em'}}>
                          Date :   
                        </span>
                        <span style={{fontWeight:'normal'}}>
                          {listitem.Date}
                        </span>
                        <br/><br/>
                        <span style={{fontWeight:'bold',paddingRight:'1em'}}>
                          Supervisor :   
                        </span>
                        <span style={{fontWeight:'normal'}}>
                          {listitem.supervisor}
                        </span>
                        
                        <Stack sx={{display:"block",float:"right",paddingBottom:'0.5em'}} width={"30%"} direction={"row"} spacing={2}>
                            <BtnApproved>
                                Approved
                            </BtnApproved>
                            <BtnDecline>
                                Decline
                            </BtnDecline>
                        </Stack>
                        
                    </div>
                  </AccordionDetails>
                </Accordion>
          ))
      }  
      
    </div>
  );
}
