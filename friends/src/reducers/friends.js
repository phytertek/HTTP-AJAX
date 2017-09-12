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
      console.log('Payload', payload)
      newFriends = Array.from(state)
      console.log(newFriends)
      newFriends.push(payload.friend)
      return newFriends

    default: return state
  }
}

