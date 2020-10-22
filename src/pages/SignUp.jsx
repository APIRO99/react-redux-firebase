import React from 'react'
import SignUpForm from 'components/auth/SignUpForm'
import { Container } from 'reactstrap'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const SignUp = ({ isLogged }) =>{

  const signUpForm = (
    <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
      <SignUpForm />
    </Container>
  )

  return (
    <>{
      (!isLogged)
        ? signUpForm
        :<Redirect to="/" />
    }</>
  )
}

const mapStateToProps = (state) =>{
  return{
    isLogged: !state.firebase.auth.isEmpty
  }
}

export default connect(mapStateToProps)(SignUp)