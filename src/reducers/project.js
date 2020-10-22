const initialState = {
  projects:[]
}


const createProject = (state, { project }) =>{
  return state
}

const handleError = (state, { err }) => {
  console.log(err);
  return state
}



const projectReducer = (state = initialState, action) =>{

  switch (action.type) {
    case 'CREATE_PROJECT':
      return createProject(state, action)

    case 'CREATE_PROJECT_ERROR':
      return handleError(state, action)
  
    default:
      return state
  }
}
export default projectReducer