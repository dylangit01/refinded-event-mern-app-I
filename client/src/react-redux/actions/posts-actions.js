import * as api from '../../api/api'
import { FETCH_ALL, CREATE } from '../constants/action-type'

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: FETCH_ALL, payload: data })
  } catch( error ) {
    console.log(error)
  }
}

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost)
    dispatch({ type: CREATE, payload: data })
  } catch( error ) {
    console.log(error)
  }
}
