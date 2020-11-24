import React from 'react'
import SignInForm from 'components/auth/SignInForm'
import { Container } from 'reactstrap'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const SignIn = ({ isLogged }) =>{

  const signInForm = (
    <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
      <SignInForm />
    </Container>
  )

  return (
    <>{
      (!isLogged)
        ? signInForm
        :<Redirect to="/" />
    }</>
  )
}

const mapStateToProps = (state) =>{
  return{
    isLogged: !state.firebase.auth.isEmpty
  }
}

export default connect(mapStateToProps)(SignIn)