import React from 'react'
import ProjectDetails from 'components/projects/ProjectDetails'
import { Container } from 'reactstrap'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Project = (props) => {
  const { id } = props.match.params
  const { isLogged } = props
  const projectDetails = (
    <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
      <ProjectDetails id={id}/>
    </Container>
  )

  return (
    <>{
      (isLogged)
        ? projectDetails
        :<Redirect to="/signin" />
    }</>
  )
}

const mapStateToProps = (state) =>{
  return{
    isLogged: !state.firebase.auth.isEmpty
  }
}

export default connect(mapStateToProps)(Project)