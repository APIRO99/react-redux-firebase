import React, { useState } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

import { SignIn } from 'actions/auth'
import { connect } from 'react-redux'

const SignInForm = ({signIn, authEroor}) =>{

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
    signIn(state)
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

        { inputField('Email',             'email',            'email@example.com' ) }
        { inputField('Password',          'password',         'password'          ) }

        <FormGroup check className="mb-2">
          <Label check>
            <Input type="checkbox" />
            Remember me
          </Label>
        </FormGroup>

        <Button className="btn-warning btn-block">Sign in</Button>
      </Form>
      </Col>
      {(authEroor)? <p>{authEroor}</p> : <></>}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return{
    authEroor: state.auth.authError
  }
}



const mapDispatchToPorps = (dispatch) => {
  return{
    signIn: (cred) => dispatch(SignIn(cred))
  }
}

export default connect(mapStateToProps, mapDispatchToPorps)(SignInForm)