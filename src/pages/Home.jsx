import React from 'react'
import Dashboard from 'components/dashboard'
import { Container } from 'reactstrap'

const Home = () => {
  return(
    <Container className="flex-grow-1 bg-chanpage m-0" fluid={true}>
      {(true)
        ? <Dashboard className="flex-fill"/>
        : <h1>This is the landing page</h1>
      }
    </Container>
  )
}

export default Home