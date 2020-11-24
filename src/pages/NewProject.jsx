import React from 'react'
import CreateProject from 'components/projects/CreateProject'
import { Container } from 'reactstrap'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const NewProject = ({ history, isLogged }) => {

  const newProject = (
    <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
      <CreateProject history={history}/>
    </Container>
  )

  return (
    <>{
      (isLogged)
        ? newProject
        :<Redirect to="/signin" />
    }</>
  )
}

const mapStateToProps = (state) =>{
  return{
    isLogged: !state.firebase.auth.isEmpty
  }
}

export default connect(mapStateToProps)(NewProject)