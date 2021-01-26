import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/action-type'

const posts = (posts = [], action) => {
  switch( action.type ) {
    case FETCH_ALL:
      return action.payload
    case CREATE:
      return [...posts, action.payload]
    case UPDATE:
      return posts
    case DELETE:
      return posts
    default:
      return posts
  }
}

export default posts
