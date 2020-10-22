export const SignIn = (credentials) => {
  return (dispatch, getState, { getFirebase } ) => {
    const firebase = getFirebase()
    console.log(firebase);
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() =>{
      dispatch({ type: 'SIGNIN_SUCCESS'})

    }).catch(err => {
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