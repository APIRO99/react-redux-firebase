import React from 'react'
import { ProjectSummary } from './ProjectSummary'
import { Container, Spinner } from 'reactstrap'

export const ProjectList = ( { projects } ) => {

  const Loading = (projects) ? true : false

  const Card = (project) => {
    const { id } = project
    return(
      <ProjectSummary 
      key={id}
      project={project}
      />
    )
  }

  const LoadingSpinners = (
      <Container className="my-5 d-flex justify-content-center" fluid={true}>
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="warning" />
      </Container>
  )

  return(
    <>
    {
      (Loading)
      ? (Loading) 
        ? projects.map(project => Card(project))
        : <h3>There are not any remaining project</h3>
      : LoadingSpinners
    }
    </>
  )
}