const initialState = {
  authError:null
}

const signup = (state) => {
  return {
    ...state,
  authError:null
  }
}

const singupErr = (state, { err }) => {
  return {
    ...state,
  authError:err.message
  }
}

const singin = (state) => {
  return {
    ...state,
  authError:null
  }
}

const singinErr = (state) => {
  return {
    ...state,
  authError:'Login failed'
  }
}

const signout = (state) => {
  return {
    ...state,
  authError:null
  }
}

const signoutErr = (state) => {
  return {
    ...state,
  authError:'Login failed'
  }
}

const authReducer = (state = initialState, action) =>{
  switch (action.type) {
    
    case 'SIGNUP_SUCCESS':
      return signup(state)
      
    case 'SIGNUP_ERROR':
      return singupErr(state, action)

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