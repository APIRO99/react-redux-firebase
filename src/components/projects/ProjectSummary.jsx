import React from 'react'
import { Card, Button, CardTitle, CardText, Form } from 'reactstrap'

export const ProjectSummary = () => {
  return(
    <Card body className="text-center my-2">
      <CardTitle>Project Title</CardTitle>
      <CardText>Project description goes here jajajajaj. Well.... it is more like a summary</CardText>
      <Button className="btn-warning">Project details</Button>
    </Card>
  )
}