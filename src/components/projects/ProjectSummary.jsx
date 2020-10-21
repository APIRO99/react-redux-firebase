import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap'

export const ProjectSummary = () => {
  const id = 9;
  return(
    <Card body className="text-center my-2">
      <CardTitle>Project Title</CardTitle>
      <CardText>Project description goes here jajajajaj. Well.... it is more like a summary</CardText>
      <Link to={"/project/" + id}>
        <Button className="btn-warning btn-block">Project details</Button>
      </Link>
    </Card>
  )
}