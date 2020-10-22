const initialState = {
  authError:null
}


const singin = (state) => {
  return {
    ...state,
  Logged:true,
  authError:null
  }
}

const singinErr = (state) => {
  return {
    ...state,
  Logged:false,
  authError:'Login failed'
  }
}

const signout = (state) => {
  return {
    ...state,
  Logged:false,
  authError:null
  }
}

const signoutErr = (state) => {
  return {
    ...state,
  Logged: state.Logged,
  authError:'Login failed'
  }
}

const authReducer = (state = initialState, action) =>{
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return singin(state)

    case 'SIGNIN_ERROR':
      return singinErr(state)

    case 'SIGNOUT_SUCCESS':
      return signout(state)

    case 'SIGNOUT_ERROR':
      return signoutErr(state)

    default:
      return state;
  }
}

export default authReducer