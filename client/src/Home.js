import React, { useContext, useEffect, useState } from 'react';
import { Grid, IconButton } from  '@material-ui/core';

export default function Home () {
  return (
    <Grid container spacing={4} style={{ backgroundColor: '#720D5D', color: 'white' }}>
      <Grid item xs={3}>
       <h2> Vocab </h2>
      </Grid>
      <Grid item xs={6}>
        <IconButton>Search</IconButton>
      </Grid>
    </Grid>
  )
}