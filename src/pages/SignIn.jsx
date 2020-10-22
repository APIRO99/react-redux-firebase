import React from 'react'
import SignInForm from 'components/auth/SignInForm'
import { Container } from 'reactstrap'

const SignIn = () =>{
  return (
    <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
      <SignInForm />
    </Container>
  )
}

export default SignIn