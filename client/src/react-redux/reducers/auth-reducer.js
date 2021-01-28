import { AUTH, LOGOUT } from '../constants/action-type'

const authReducer = (state = { authData: null }, action) => {     // state is the object got from Google login data
  switch( action.type ) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      return { ...state, authData: action?.data }
    case LOGOUT:
      localStorage.clear()
      return { ...state, authData: null }
    default:
      return state
  }
}

export default authReducer
