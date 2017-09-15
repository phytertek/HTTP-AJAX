import {
  GET_FRIENDS,
  ADD_FRIEND,
  UPDATE_FRIEND,
  DELETE_FRIEND
} from '../actions'

export default (state = [], {type, payload}) => {
  let newFriends
  switch (type) {

    case GET_FRIENDS: 
      return payload.data

    case ADD_FRIEND:
      newFriends = Array.from(state)
      newFriends.push(payload.friend)
      return newFriends

    case UPDATE_FRIEND:
      newFriends = Array.from(state)
      newFriends[payload.index] = payload.friend
      return newFriends

    case DELETE_FRIEND:
      newFriends = Array.from(state)
      newFriends.splice(payload.index, 1)
      return newFriends

    default: return state
  }
}

