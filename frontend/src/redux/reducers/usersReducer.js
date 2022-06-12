
import { ALL_USERS, CHANGE_STATUS } from '../types/usersTypes'
import { SEARCH_WORKER } from '../types/userTypes'


export const usersReducer = (state = [], action) => {
  const { payload, type } = action

  switch (type) {
    case ALL_USERS: {
      return payload
    }

    case CHANGE_STATUS: {
      return payload
    }

    case SEARCH_WORKER: {
      const newPa = payload.toLowerCase()
      return state.filter((el) => {
        return el.name.toLowerCase().includes(newPa)
      })
    }


    default: {
      return state
    }
  }
} 
