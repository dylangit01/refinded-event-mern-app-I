import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import { Paper, TextField, Typography, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { createPost } from '../../react-redux/actions/posts-actions'


const Form = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [ postData, setPostData ] = useState({ title: '', message: '', creator: '', tags: '', selectedFile: '' })

  const handleSubmit = (e) => {
    console.log('asdfaefafef')
    e.preventDefault()
    dispatch(createPost(postData))
    console.log(postData)
    clear()
  }

  const clear = () => {
    setPostData({ title: '', message: '', creator: '', tags: '', selectedFile: '' })
  }


  return (
    <Paper className={ classes.paper }>
      <form autoComplete='off' noValidate className={ `${ classes.root } ${ classes.form }` } onSubmit={ handleSubmit }>
        <Typography variant='h6'>Creating an event</Typography>
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
