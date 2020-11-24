//React stuff
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'routes/App'


//Redux-Firebase stuff
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'reducers/root'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from'redux-firestore'
import { ReactReduxFirebaseProvider,  getFirebase } from 'react-redux-firebase'
import fbConfig from 'config/firebase'
import rrfProps from 'config/react-redux-firebase'
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';


//Styles
import 'assets/styles/index.scss'
import 'assets/styles/CustomPallete.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig)
  ))

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  return (isLoaded(auth))
    ? children
    : <div>Loading Screen...</div>
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps(store)}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("App")
);