import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import InputField from './InputField'
import { GoogleLogin } from 'react-google-login'
import { FaGoogle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { AUTH } from '../../react-redux/constants/action-type'
import { useHistory } from 'react-router-dom'


const Auth = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [ isSignUp, setIsSignUp ] = useState(false)
  const [ showPassword, setShowPassword ] = useState(false)
  const history = useHistory()

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const switchMode = () => {
    setIsSignUp(!isSignUp)
    setShowPassword(false)
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    // console.log(result)
    try {
      dispatch({ type: AUTH, data: { result, token } })     //dispatch action (the data got from Google auth) and create reducer accordingly
      history.push('/')
    } catch( error ) {
      console.log(error)
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log('Google Sign In was unsuccessful, please try again')
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={ classes.paper } elevation={ 3 }>
        <Avatar className={ classes.avatar }>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component='h1' variant='h5'>{ isSignUp ? 'Sign Up' : 'Sign In' }</Typography>
        <form className={ classes.form } onSubmit={ handleSubmit }>
          <Grid container spacing={ 2 }>
            {
              isSignUp && (
                <>
                  <InputField name='firstName' label='First Name' autoFocus handleChange={ handleChange } half/>
                  <InputField name='lastName' label='Last Name' handleChange={ handleChange } half/>
                </>
              ) }
            <InputField name='email' label='Email Address' handleChange={ handleChange } type='email'/>
            <InputField name='password' label='Password' handleChange={ handleChange } type={ showPassword ? 'text' : 'password' }
                        handleShowPassword={ handleShowPassword }/>
            { isSignUp &&
            <InputField name='confirmPassword' label='Confirm Password' handleChange={ handleChange } type={ showPassword ? 'text' : 'password' }
                        handleShowPassword={ handleShowPassword }/> }
          </Grid>
          <Button className={ classes.submit } type='submit' variant='contained' color='primary' fullWidth>
            { isSignUp ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId='411530278656-u453e1fstb4eb87r2e5n0si55mp3r31c.apps.googleusercontent.com'
            render={ renderProps => (
              <Button variant='contained' className={ classes.googleButton } color='primary' fullWidth onClick={ renderProps.onClick }
                      disabled={ renderProps.disabled } startIcon={ <FaGoogle/> }>
                Google Sign In
              </Button>
            ) }
            onSuccess={ googleSuccess }
            onFailure={ googleFailure }
            cookiePolicy='single_host_origin'
          />

          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={ switchMode } style={ { fontSize: '15px' } }>
                { isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
