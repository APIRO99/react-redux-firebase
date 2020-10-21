import React from 'react'
import CreateProject from 'components/projects/CreateProject'
import { Container } from 'reactstrap'

const NewProject = () => {
  return (
    <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
      <CreateProject />
    </Container>
  )
}

export default NewProject