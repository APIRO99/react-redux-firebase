import React from 'react'
import { Layout} from 'components/layout'
import { ProjectDetails} from 'components/projects/ProjectDetails'

const Project = (props) => {
  const { id } = props.match.params
  return (
    <Layout>
      <ProjectDetails id={id}/>
    </Layout>
  )
}

export default Project