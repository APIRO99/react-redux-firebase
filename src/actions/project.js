export const createProject = (project) => {
  return (dispatch, getState) => {
    //Make async call
    dispatch({
      type: 'CREATE_PROJECT',
      project
    })
  }
} 