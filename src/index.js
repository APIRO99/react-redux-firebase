//React stuff
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'routes/App'


//Redux-Firebase stuff
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'reducers/root'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, createFirestoreInstance } from'redux-firestore'
import { ReactReduxFirebaseProvider,  getFirebase } from 'react-redux-firebase'
import firebaseConnection from 'services/firebase'
import firebase from "firebase/app"


//Styles
import 'assets/styles/index.scss'
import 'assets/styles/CustomPallete.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConnection)
  ))

const rrfProps = {
  firebase,
  config: firebaseConnection,
  dispatch: store.dispatch,
  createFirestoreInstance
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("App")
);
