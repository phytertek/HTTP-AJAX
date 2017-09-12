import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getFriends} from './actions'
import {FriendsList, NewFriend} from './components'

class App extends Component {
  componentDidMount = () => {
    this.props.getFriends()
  }

  render = () => {
    return (
      <div>
        <NewFriend/>
        <FriendsList/>
      </div>
    )
  }
}
export default connect(null, {getFriends})(App)
