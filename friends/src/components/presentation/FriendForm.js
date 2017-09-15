import React, {Component} from 'react'

class FriendForm extends Component { 
  constructor(props) {
    super(props)
    this.state = {name: '', age: '', email: ''}
  }

  componentDidMount = () => {
    if (this.props.updateFriend) this.setState(
      () => this.props.updateFriend
    )
  }

  clearState = () => {
    this.setState(() => ({name: '', age: '', email: ''}))
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitAction(this.state)
    this.clearState()
    e.target.reset()
  }

  changeHandler = (e) => {
    const {name, value} = e.target
    const newState = {...this.state}
    newState[name] = value
    this.setState(() => ({...this.state, ...newState}))
  }

  render = () => {
    const {submitHandler, changeHandler} = this
    const {name, age, email} = this.state
    return (
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          id="name"
          value={name}
          onChange={changeHandler}
        />
        <label htmlFor="age">Age</label>
        <input 
          type="number" 
          name="age" 
          id="age"
          size={3}
          value={age}
          onChange={changeHandler}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email"
          value={email}
          onChange={changeHandler}
        />
        <input type="submit" onSubmit={submitHandler}/>
      </form>
    )
  }
}

export default FriendForm
