import React from 'react'
import { ProjectDetails} from 'components/projects/ProjectDetails'
import { Container } from 'reactstrap'

const Project = (props) => {
  const { id } = props.match.params
  return (
    <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
      <ProjectDetails id={id}/>
    </Container>
  )
}

export default Project