import axios from 'axios'

export const GET_FRIENDS = 'GET_FRIENDS'
export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends')
  return {
    type: GET_FRIENDS,
    payload: promise
  }
}

export const ADD_FRIEND = 'ADD_FRIEND'
export const addFriend = (friend) => {
  const promise = axios.post('http://localhost:5000/new-friend', friend)
  return {
    type: ADD_FRIEND,
    payload: {friend}
  }
}


