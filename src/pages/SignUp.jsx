import React from 'react'
import { SignUpForm } from 'components/auth/SignUpForm'
import { Container } from 'reactstrap'

const SignUp = () =>{

  return (
  <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
    <SignUpForm />
  </Container>
  )
}

export default SignUp