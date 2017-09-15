import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getFriends,
  addFriend,
  updateFriend,
  deleteFriend
} from '../../actions'
import {FriendsList, FriendForm} from '../../components'

class FriendsContainer extends Component {
  componentDidMount = () => {
    this.props.getFriends()
  }

  render = () => {
    return (
      <div>
        <FriendForm 
          submitAction={this.props.addFriend}
        />
        <FriendsList 
          updateAction={this.props.updateFriend}
          deleteAction={this.props.deleteFriend}
          friendList={this.props.friendList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  friendList: state.friends
})

export default connect(
  mapStateToProps, 
  {getFriends, addFriend, updateFriend, deleteFriend}
)(FriendsContainer)
