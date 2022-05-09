//material ui imports
import { Alert, Button, Grid,Paper,Stack,TextField } from '@mui/material'

//react modules imports
import React,{useRef,useState} from 'react'

//css imports
import './css/signup.css'

import validator from 'validator'


export default function SignUp() {
  //input refs to capture inputs 
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [passwordCheckFlag,setPasswordCheckFlag] = useState()
  //handle submit function
  function handleSubmit(e){
    e.preventDefault()
    console.log(passwordRef.current.value)
    console.log(passwordConfirmRef.current.value)
    console.log(emailRef.current.value)

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      console.log("password doesnt match")
    
    }
  }

  //handle on change 
  function handlePasswordChange(e){
    e.preventDefault()
    if(passwordRef.current.value === passwordConfirmRef.current.value & validator.isStrongPassword(passwordRef.current.value, {minLength: 8, minLowercase: 1,minUppercase: 1, minNumbers: 1, minSymbols: 1})){
      setPasswordCheckFlag(false)
    }else{
      setPasswordCheckFlag(true)
    }
  }

  


  return (
    <div style={{height:"l00%",width:"100%"}} >
      <div className='centerDiv' >
        <Paper elevation={12} className="pape-style" sx={{background:"#dde4e9"}}>
          <h2>SIGN UP</h2>
          <Stack justifyContent={"center"}>

              <TextField sx={{width:'87%',margin:'10px auto 10px auto',marginBottom:''}} type="email" variant='filled' label="E-Mail" margin='normal' size='small' inputRef={emailRef} required></TextField>
              <TextField sx={{width:'87%',margin:'10px auto 10px auto'}} type="password" variant='filled' label="Password" margin='normal' size='small' inputRef={passwordRef} error={passwordCheckFlag} required></TextField>
              <TextField sx={{width:'87%',margin:'10px auto 10px auto'}} type="password" variant='filled' label="Confirm Password" margin='normal' size='small' inputRef={passwordConfirmRef} error={passwordCheckFlag} onChange={handlePasswordChange} required ></TextField>
              <Button variant='contained' sx={{background:'#825af4',width:"75%",margin:'10px auto 10px auto'}} onClick={handleSubmit}>SignUp</Button>
          </Stack>
        </Paper>
      </div> 
    </div>
  )
}
