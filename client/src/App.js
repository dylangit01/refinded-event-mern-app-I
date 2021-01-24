import React from 'react';
import {Container, Typography, Grid, Grow, AppBar} from "@material-ui/core";
import events from './images/event.png';
import Posts from './components/Posts/Posts-component';
import Form from './components/Form/Form-component';
import userStyles from './styles'


const App = () => {
  const classes = userStyles()
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'> Events </Typography>
        <img className={classes.image} src={events} alt="Events-book" height='60'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
};

export default App;
