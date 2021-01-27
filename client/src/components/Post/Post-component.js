import React from 'react';
import {useDispatch} from 'react-redux'
import userStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { deletePost } from '../../react-redux/actions/posts-actions'

const Post = ({ post, setCurrentId }) => {
  const classes = userStyles()
  const dispatch = useDispatch()

  // const EditForm = () => {
  //   const [ editForm, setEditForm ] = useState({ title: '', message: '', creator: '', tags: '', selectedFile: '' })
  //   const dispatch = useDispatch()
  //
  //   const post = useSelector(state => currentId ? state.posts.find(p=> p._id === currentId): null)
  //
  //   useEffect(() => {
  //     if(post) setEditForm(post)
  //   },[post])
  //
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //
  //     if(currentId) dispatch(updatePost(currentId, editForm))
  //     clear()
  //   }
  //
  //   const clear = () => {
  //     setCurrentId(null)
  //     setEditForm({ title: '', message: '', creator: '', tags: '', selectedFile: '' })
  //   }
  //
  //   return (
  //     <Paper className={ classes.paper }>
  //       <form autoComplete='off' noValidate className={ `${ classes.root } ${ classes.form }` } onSubmit={ handleSubmit }>
  //         <Typography variant='h6'>Updating an event</Typography>
  //
  //         <TextField name='creator' variant='outlined' label='Creator' fullWidth value={ editForm.creator }
  //                    onChange={ e => setEditForm({ ...editForm, creator: e.target.value }) }/>
  //         <TextField name='title' variant='outlined' label='Title' fullWidth value={ editForm.title }
  //                    onChange={ e => setEditForm({ ...editForm, title: e.target.value }) }/>
  //         <TextField name='message' rows={ 4 } multiline variant='outlined' label='Message' fullWidth value={ editForm.message }
  //                    onChange={ e => setEditForm({ ...editForm, message: e.target.value }) }/>
  //         <TextField name='tags' variant='outlined' label='Tags' fullWidth value={ editForm.tags }
  //                    onChange={ e => setEditForm({ ...editForm, tags: e.target.value }) }/>
  //
  //         <Button className={ classes.buttonSubmit } variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
  //         <Button variant='contained' color='secondary' fullWidth onClick={ clear }>Clear</Button>
  //       </form>
  //     </Paper>
  //   )
  // }

  return (
          <Card className={ classes.card }>
            <CardMedia className={ classes.media } image={ post.selectedFile } title={ post.title }/>
            <div className={ classes.overlay }>
              <Typography variant='h6'>{ post.creator }</Typography>
              <Typography variant='body2'> { moment(post.createdAt).fromNow() } </Typography>
            </div>
            <div className={ classes.overlay2 }>
              <Button style={ { color: 'skyblue' } } size='small' onClick={ () => setCurrentId(post._id) }>
                <MoreHorizIcon fontSize='default'/>
              </Button>
            </div>
            <div className={ classes.details }>
              <Typography variant='body2' color='textSecondary'>{ post.tags.map(tag => `#${ tag } `) }</Typography>
            </div>
            <Typography className={ classes.title } variant='h5' gutterBottom>{ post.title }</Typography>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>{ post.message }</Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
              <Button size='small' color='primary' onChange={ () => {
              } }>
                <ThumbUpAltIcon fontSize='small'/>
                Like
                { post.likeCount }
              </Button>
              <Button size='small' color='primary' onClick={ () => dispatch(deletePost(post._id)) }>
                <DeleteIcon fontSize='small'/>
                Delete
              </Button>
            </CardActions>
          </Card>
  )
};

export default Post;
