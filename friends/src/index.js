import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux' 
import {Provider} from 'react-redux'
import reduxPromise from 'redux-promise'

import rootReducer from './reducers'
import App from './App'

import registerServiceWorker from './registerServiceWorker'

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , 
  document.getElementById('root')
)

registerServiceWorker()
