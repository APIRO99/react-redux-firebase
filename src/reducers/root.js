import auth from './auth'
import project from './project'

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const root = combineReducers({
  auth,
  project,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default root