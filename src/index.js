import React from 'react'
import ReactDOM from 'react-dom'
import App from 'routes/App'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers/root'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import 'assets/styles/index.scss'
import 'assets/styles/CustomPallete.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
);