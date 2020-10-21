import React from 'react'
import { Notifications } from './Notifications'
import { ProjectList } from 'components/projects/ProjectList'
import { Container, Row, Col } from 'reactstrap'

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
  const { projects } = state.project
  return {
    projects
  }
}

export default connect(mapStateToProps)(Dashboard)