import React from 'react'
import { ProjectSummary } from './ProjectSummary'

export const ProjectList = ( { projects } ) => {
  return(
    <>
    {
      (projects.length > 0) ? (
        projects.map(project => 
          <ProjectSummary 
          key={project.id}
          project={project}
          />
        )
      ) : (
        <h3>There are not any remaining project</h3>
      )
    }
    </>
  )
}