import React from 'react'
import { compose } from 'redux'

import { Notifications } from './Notifications'
import { ProjectList } from 'components/projects/ProjectList'
import { Container, Row, Col } from 'reactstrap'
import { firestoreConnect } from 'react-redux-firebase'


import { connect } from 'react-redux'

const Dashboard = (props) => {
  const { projects } = props 
  return(
    <Container className="my-3">
      <Row>
        <Col xs="12" sm={{ size: 6, }}>
          <ProjectList projects={projects}/>
        </Col>
        <Col xs="12" sm={{ size: 4, offset: 1 }}>
          <Notifications />
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) =>{
  console.warn('Check why the dashboard its calling 4 times');
  const { projects } = state.firestore.ordered
  return {
    projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['projects'])
)(Dashboard)


