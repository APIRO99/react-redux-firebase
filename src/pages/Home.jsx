import React from 'react'
import { Layout } from 'components/layout'
import { Dashboard } from 'components/dashboard'

const Home = () => {
  return(
    <Layout>
      {(true)
        ? <Dashboard className="flex-fill"/>
        : <h1>This is the landing page</h1>
      }
    </Layout>
  )
}

export default Home