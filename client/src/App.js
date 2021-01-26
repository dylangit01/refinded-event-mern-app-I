import React, {useEffect} from 'react';
import {Container, Typography, Grid, Grow, AppBar} from "@material-ui/core";
import events from './images/event.png';
import Posts from './components/Posts/Posts-component';
import Form from './components/Form/Form-component';
import userStyles from './styles'
import { getPosts } from './react-redux/actions/posts-actions'

import {useDispatch} from 'react-redux'   // the way to use dispatch(dispatch is used to dispatch an action) is in useEffect

const App = () => {
  const classes = userStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])

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
