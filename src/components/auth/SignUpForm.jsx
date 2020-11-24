import React, { useState } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

import { SignUp } from 'actions/auth'
import { connect } from 'react-redux'

const SignUpForm = ({ signUp }) =>{

  const [state, setState] = useState({
    name:'',
    userName:'',
    email: '',
    password:'',
    confirmPassword:''
  })

  const handleChange = (event) =>{
    setState({
      ...state,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmint = (event) =>{
    event.preventDefault()
    signUp(state)
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
    <Container fluid="md">
      <Col  xs="12" lg={{ size: 6, offset:3}}>
      <Form className =" my-5 mx-3" onSubmit={handleSubmint}>

        { inputField('Name',              'name',             'name'              ) }
        { inputField('Username',          'userName',         'Username'          ) }
        { inputField('Email',             'email',            'email@example.com' ) }
        { inputField('Password',          'password',         'password'          ) }
        { inputField('Confirm password',  'confirmPassword',  'Confirm password'  ) }

        <Button className="btn-warning btn-block">Sign Up Now</Button>
      </Form>
      </Col>
    </Container>
  )
}


const mapDispatchToPorps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(SignUp(newUser))
  }
}

export default connect(null, mapDispatchToPorps)(SignUpForm)