import React, { useState } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

import { connect } from 'react-redux'
import { createProject } from 'actions/project'

const CreateProject = ({ createProject }) =>{

  const [project, setProject] = useState({
    title:'',
    content: '',
  })

  const handleChange = (event) =>{
    setProject({
      ...project,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmint = (event) =>{
    event.preventDefault()
    createProject(project)
  }
  
  return (
    <Container fluid="md">
      <Col  xs="12" lg={{ size: 6, offset:3}}>
      <Form className =" my-5 mx-3" onSubmit={handleSubmint}>

      <FormGroup row>
        <Col className="p-0">
          <Label for='title'>Title</Label>
          <Input type='title' name='title' id='title' placeholder='Title' onChange={handleChange} />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col className="p-0">
          <Label for='content'>Description</Label>
          <Input rows="10" type='textarea' name='content' id='content' placeholder='a brief description of your project :)' onChange={handleChange} />
        </Col>
      </FormGroup>

        <Button className="btn-warning btn-block">CreateProject</Button>
      </Form>
      </Col>
    </Container>
  )
}




const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)