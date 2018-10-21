import React from 'react'
import Layout from '../components/Layout'
import WithRoute from '../components/WithRoute'

class Signup extends React.PureComponent {
  render () {
    return (
      <Layout>
        <div>hello signup</div>
      </Layout>
    )
  }
}

export default WithRoute(Signup)
