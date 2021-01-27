import React from 'react';
import Post from '../Post/Post-component'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core'

const Posts = ({ currentId, setCurrentId }) => {
  const classes = useStyles()
  const posts = useSelector(state => state.posts)     // Fetch the state data from react-redux

  return (
    !posts.length ? <CircularProgress/> : (
      <Grid className={ classes.container } container alignItems='stretch' spacing={ 3 }>
        {
          posts.map(post => (
            <Grid key={ post._id } item xs={ 12 } sm={ 6 }>
              <Post post={ post } currentId = {currentId} setCurrentId={ setCurrentId }/>
            </Grid>
          ))
        }
      </Grid>
    )
  )
};

export default Posts;
