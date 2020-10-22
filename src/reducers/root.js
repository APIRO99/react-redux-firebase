import auth from './auth'
import project from './project'

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const root = combineReducers({
  auth,
  project,
  firestore: firestoreReducer
})

export default root