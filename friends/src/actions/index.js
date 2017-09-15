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
  axios.post('http://localhost:5000/new-friend', friend)
  return {
    type: ADD_FRIEND,
    payload: {friend}
  }
}

export const UPDATE_FRIEND = 'UPDATE_FRIENDS'
export const updateFriend = (index, friend) => {
  axios.put('http://localhost:5000/update-friend', {index, friend})
  return {
    type: UPDATE_FRIEND,
    payload: {index, friend}
  }
}

export const DELETE_FRIEND = 'DELETE_FRIEND'
export const deleteFriend = (index) => {
  axios.delete('http://localhost:5000/delete-friend', {index})
  return {
    type: DELETE_FRIEND,
    payload: {index}
  }
}
