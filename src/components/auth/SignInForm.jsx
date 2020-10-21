import React, { useState } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export const SignInForm = () =>{

  const [state, setState] = useState({
    email: '',
    password:''
  })


  const handleChange = (event) =>{
    setState({
      ...state,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmint = (event) =>{
    event.preventDefault()
    console.log(state);
  }

  const inputField = (label, id, placeholder) => (
    <FormGroup row>
      <Col className="p-0">
        <Label for={ id }>{ label }</Label>
        <Input type={ id } name={ id } id={ id } placeholder={ placeholder } onChange={handleChange} />
      </Col>
    </FormGroup>
  )


  return (
    <Container className="flex-grow-1" fluid="md">
      <Col  xs="12" lg={{ size: 6, offset:3}}>
      <Form className =" my-5 mx-3" onSubmit={handleSubmint}>

        { inputField('Email',             'email',            'email@example.com' ) }
        { inputField('Password',          'password',         'password'          ) }

        <FormGroup check className="mb-2">
          <Label check>
            <Input type="checkbox" />
            Remember me
          </Label>
        </FormGroup>

        <Button className="btn-warning btn-block">Submit</Button>
      </Form>
      </Col>
    </Container>
  )
}