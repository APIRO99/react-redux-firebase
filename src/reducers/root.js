import auth from './auth'
import project from './project'

import { combineReducers } from 'redux'

const root = combineReducers({
  auth,
  project
})

export default root