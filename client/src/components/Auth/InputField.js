import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from "@material-ui/icons";

const InputField = ({ half, name, handleChange, label, autoFocus, type, handleShowPassword }) => {

  return (
    <Grid item xs={ 12 } sm={ half ? 6 : 12 }>
      <TextField name={ name } onChange={ handleChange } type={ type } variant='outlined' required fullWidth label={ label } autoFocus={ autoFocus }
                 InputProps={ name === 'password' || name === 'confirmPassword' ? {
                   endAdornment: (
                     <InputAdornment position='end'>
                       <IconButton onClick={ handleShowPassword } >
                         { type === 'password' ? <Visibility/> : <VisibilityOff/> }   {/* when type is text, the icon is VisibilityOff, vice vase */}
                       </IconButton>
                     </InputAdornment>
                   )
                 } : null }
      />
    </Grid>

  )
}

export default InputField
