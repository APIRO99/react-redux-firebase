import React from 'react'
import Dashboard from 'components/dashboard'
import { Container } from 'reactstrap'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Home = ({ isLogged }) => {
  
  const dashboard = (
    <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
      <Dashboard className="flex-fill"/>
    </Container>
  )

  return (
    <>{
      (isLogged)
        ? dashboard
        :<Redirect to="/signin" />
    }</>
  )
}

const mapStateToProps = (state) =>{
  return{
    isLogged: !state.firebase.auth.isEmpty
  }
}

export default connect(mapStateToProps)(Home)