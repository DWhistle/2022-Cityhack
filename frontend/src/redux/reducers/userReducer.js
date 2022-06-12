import { ADD_USER, DEL_USER, GET_USER, SIGNIN_USER, EDIT_USER } from '../types/userTypes'

export const userReducer = (state = null, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_USER:
      return payload

    case DEL_USER:
      return null

    case EDIT_USER:
      return payload
      
    case GET_USER:
      return payload

    case SIGNIN_USER:
      return payload

    default: {
      return state
    }
  }
}
