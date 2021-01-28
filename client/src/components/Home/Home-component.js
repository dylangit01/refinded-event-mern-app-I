import React, { useEffect, useState } from 'react'
import { Container, Grid, Grow } from '@material-ui/core'
import Form from '../Form/Form-component'
import Posts from '../Posts/Posts-component'
import { getPosts } from '../../react-redux/actions/posts-actions'

import { useDispatch } from 'react-redux'   // the way to use dispatch(dispatch is used to dispatch an action) is in useEffect

const Home = () => {
  const [ currentId, setCurrentId ] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [ dispatch ])

  return (
    <Grow in>
      <Container>
        <Grid container justify='space-between' alignItems='stretch' spacing={ 3 }>
          <Grid item xs={ 12 } sm={ 4 }>
            <Form currentId={ currentId } setCurrentId={ setCurrentId }/>
          </Grid>
          <Grid item xs={ 12 } sm={ 7 }>
            <Posts setCurrentId={ setCurrentId }/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )

}

export default Home
