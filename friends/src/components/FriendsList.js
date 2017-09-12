import React from 'react'
import {connect} from 'react-redux'

const FriendsList = ({friends}) => (
  <div>
    {friends.map((friend, index) => (
      <div key={index}>
        <div>{friend.email}</div>
      </div>
    ))}
  </div>
)

export default connect(({friends}) => ({friends}))(FriendsList)


