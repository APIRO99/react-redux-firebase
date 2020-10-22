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