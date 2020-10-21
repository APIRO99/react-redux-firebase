const initialState = {
  projects:[
    {id: '1', title:'Learn react', content:'Learn react with the net ninja'},
    {id: '2', title:'Learn redux', content:'Learn redux with the net ninja'},
    {id: '3', title:'Learn firebase', content:'Learn firebase with the net ninja'}
  ]
}


const createProject = (state, action) =>{
  console.log('create project cicle complete!!! Congrats pro', action.project);
  return state
}





const projectReducer = (state = initialState, action) =>{

  switch (action.type) {
    case 'CREATE_PROJECT':
      return createProject(state, action)
  
    default:
      return state
  }
}
export default projectReducer