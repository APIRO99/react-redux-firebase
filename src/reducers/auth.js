const initialState = {
  Logged:false,
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



const authReducer = (state = initialState, action) =>{
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return singin(state)

    case 'SIGNIN_ERROR':
      return singinErr(state)

    default:
      return state;
  }
}

export default authReducer