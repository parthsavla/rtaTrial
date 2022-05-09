import React from 'react'
import { Grid } from '@mui/material'
import './css/hproto.css'
import ResponsiveAppBar from './ResponsiveNavBar'

function HomePrototype() {
  return (
    <div className='homeMainContainer'>
      <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
        <Grid item>
        <ResponsiveAppBar></ResponsiveAppBar>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePrototype