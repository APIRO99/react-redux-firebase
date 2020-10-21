import React from 'react'
import { Layout } from 'components/layout'

const Home = () => {
  return(
    <Layout>
      {(true)
        ? <h1>This is the main page where you will see your dashboard and stuff like that</h1>
        : <h1>This is the landing page</h1>
      }
    </Layout>
  )
}

export default Home