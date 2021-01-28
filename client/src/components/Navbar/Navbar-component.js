import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import events from '../../images/event.png'
import useStyles from './styles'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../react-redux/constants/action-type'

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    // when logout, the auth state should be changed accordingly
    dispatch({ type: LOGOUT })
    history.push('/auth');
    setUser(null);
  }

  useEffect(() => {
    // const token = user?.token

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [])

  return (
    <AppBar className={ classes.appBar } position='static' color='inherit'>
      <div className={ classes.brandContainer }>
        <Typography component={ Link } to='/' className={ classes.heading } variant='h2' align='center'> Events </Typography>
        <img className={ classes.image } src={ events } alt="Events-book" height='60'/>
      </div>
      <Toolbar className={ classes.toolbar }>
        {
          user ? (
            <div className={ classes.profile }>
              <Avatar className={ classes.purple } alt={ user.result.name } src={ user.result.imageUrl }>{ user.result.name.charAt(0) }</Avatar>
              <Typography className={ classes.userName } variant='h6'>{ user.result.name }</Typography>
              <Button variant='contained' color='secondary' onClick={ logout }>Logout</Button>
            </div>
          ) : (
            <Button component={ Link } to='/auth' variant='contained' color='primary'>Sign In</Button>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
