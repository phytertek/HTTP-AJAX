import {combineReducers} from 'redux'

import friendsReducer from './friends'

export default combineReducers({
  friends: friendsReducer
})
