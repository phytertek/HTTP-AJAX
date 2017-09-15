import React from 'react'
import {connect} from 'react-redux'
import Friend from './Friend'

const FriendsList = ({friends, updateAction, deleteAction}) => (
  <div>
    {friends.map((friend, index) => (
      <Friend 
        key={index} 
        index={index} 
        friend={friend} 
        updateAction={updateAction}
        deleteAction={deleteAction}
      />
    ))}
  </div>
)

export default connect(({friends}) => ({friends}))(FriendsList)


