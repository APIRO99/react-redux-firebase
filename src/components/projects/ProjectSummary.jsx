import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap'

export const ProjectSummary = ( { project } ) => {
  const { id, title, content } = project
  return(
    <Card body className="text-center my-2">
      <CardTitle>{ title }</CardTitle>
      <CardText>{ content }</CardText>
      <Link to={"/project/" + id}>
        <Button className="btn-warning btn-block">Project details</Button>
      </Link>
    </Card>
  )
}