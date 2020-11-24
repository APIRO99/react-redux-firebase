import firebase from "firebase/app"
import { createFirestoreInstance } from'redux-firestore'
//import fbConfig from 'config/firebase'

const config = {
  userProfile: 'users',                       // Tells react-redux-firebase where are stored the users 
  useFirestoreForProfile: true                // Enables firestore reducer to load profile data from firestore
}

const rrfProps = (store) => {
  return {
    firebase,
    config,                                   // Gives RRF the configuartion of firebase to connect to it
    dispatch: store.dispatch,
    createFirestoreInstance
  }
}

export default rrfProps