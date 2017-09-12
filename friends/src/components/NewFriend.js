import React from 'react'
import {connect} from 'react-redux'

import {addFriend} from '../actions'

const NewFriend = ({addFriend}) => { 

  const initState = {
    name: '',
    age: null,
    email: ''
  }

  let state = {...initState}

  const submitHandler = (e) => {
    e.preventDefault()
    addFriend(state)
    e.target.reset()
    state = {...initState}
  }

  const changeHandler = (e) => {
    const {name, value} = e.target
    state[name] = value
    console.log(state)
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name</label>
      <input 
        type="text" 
        name="name" 
        id="name"
        onChange={changeHandler}
      />
      <label htmlFor="age">Age</label>
      <input 
        type="number" 
        name="age" 
        id="age"
        size={3}
        onChange={changeHandler}
      />
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        name="email" 
        id="email"
        onChange={changeHandler}
      />
      <input type="submit" onSubmit={submitHandler}/>
    </form>
  )
}

export default connect(null, {addFriend})(NewFriend)
