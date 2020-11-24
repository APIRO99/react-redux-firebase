export const SignUp = ({ name, userName, email, password }) => {
  return (dispatch, getState, { getFirebase, getFirestore } ) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return firestore.collection('users').doc(res.user.uid).set({
          name,
          userName
        })
      
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS'})
      
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err})
      })
  }
}

export const SignIn = (credentials) => {
  return (dispatch, getState, { getFirebase } ) => {
    const firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password

    )
    .then(() =>{
      dispatch({ type: 'SIGNIN_SUCCESS'})

    })
    .catch(err => {
      dispatch({ type: 'SIGNIN_ERROR', err})

    })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase.auth().signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS'})
      
      })
      .catch((err) => {
        dispatch( { type: 'SIGNOUT_ERROR', err})
      })
  }
}