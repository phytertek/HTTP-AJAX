import React, {Component} from 'react'
import {FriendForm} from '../'

class Friend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateMode: false,
      friend: {name: '', age: '', email: ''}
    }
  }

  toggleMode = () => {
    this.setState(() => ({
      updateMode: !this.state.updateMode
    }))
  }

  componentDidMount = () => {
    const {friend} = this.props
    this.setState(() => ({friend}))
  }

  componentWillReceiveProps = (nProps) => {
    this.setState(() => ({friend: nProps.friend}))
  }

  submitHandler = (updatedFriend) => {
    this.props.updateAction(this.props.index, updatedFriend)
    this.setState(() => ({friend: updatedFriend}))
    this.toggleMode()
  }

  deleteHandler = () => {
    this.props.deleteAction(this.props.index)
  }

  render = () => {
    const {
      submitHandler, toggleMode, deleteHandler
    } = this
    const {friend, updateMode} = this.state
    return (
      <div>
        {updateMode 
            ?
            <FriendForm 
              submitAction={submitHandler} 
              updateFriend={friend}
            />
            :
            <div>
              <div>{friend.email}</div>
              <div>
                <button onClick={toggleMode}>
                  Edit
                </button>
              </div>
              <div>
                <button onClick={deleteHandler}>
                  Delete
                </button>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default Friend
