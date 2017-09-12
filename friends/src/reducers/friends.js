import {
  GET_FRIENDS,
  ADD_FRIEND
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

    default: return state
  }
}

