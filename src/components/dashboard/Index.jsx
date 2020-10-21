import React from 'react'
import { Notifications } from './Notifications'
import { ProjectList } from 'components/projects/ProjectList'
import { Container, Row, Col } from 'reactstrap'

export const Dashboard = () => {
  

  return(
    <Container className="my-3">
      <Row>
        <Col xs="12" sm={{ size: 6, }}>
          <ProjectList />
        </Col>
        <Col xs="12" sm={{ size: 4, offset: 1 }}>
          <Notifications />
        </Col>
      </Row>
    </Container>
  )
}