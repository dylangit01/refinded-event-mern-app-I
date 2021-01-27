import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'
import { Paper, TextField, Typography, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { createPost, updatePost } from '../../react-redux/actions/posts-actions'


const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null)     // Fetch the specific state data with id from react-redux

  const [ postData, setPostData ] = useState({ title: '', message: '', creator: '', tags: '', selectedFile: '' })

  // useEffect is used whenever we want some date has been updated or changed, in this case, when the post has been found, the form changes
  useEffect(() => {
    if(post) setPostData(post)
  },[post])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clear()
  }

  const clear = () => {
    setCurrentId(null)
    setPostData({ title: '', message: '', creator: '', tags: '', selectedFile: '' })
  }

  return (
    <Paper className={ classes.paper }>
      <form autoComplete='off' noValidate className={ `${ classes.root } ${ classes.form }` } onSubmit={ handleSubmit }>
        <Typography variant='h6'> { currentId ? 'Updating' : 'Creating' } an event</Typography>


        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={ postData.creator }
                   onChange={ e => setPostData({ ...postData, creator: e.target.value }) }/>
        <TextField name='title' variant='outlined' label='Title' fullWidth value={ postData.title }
                   onChange={ e => setPostData({ ...postData, title: e.target.value }) }/>
        <TextField name='message' rows={ 4 } multiline variant='outlined' label='Message' fullWidth value={ postData.message }
                   onChange={ e => setPostData({ ...postData, message: e.target.value }) }/>
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={ postData.tags }
                   onChange={ e => setPostData({ ...postData, tags: e.target.value }) }/>


        <div className={ classes.fileInput }>
          <FileBase type='file' multiple={ false } onDone={ ({ base64 }) => setPostData({ ...postData, selectedFile: base64 }) }/>
        </div>
        <Button className={ classes.buttonSubmit } variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' fullWidth onClick={ clear }>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
