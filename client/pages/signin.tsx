import React from 'react'
import Layout from '../components/Layout'
import WithRoute from '../components/WithRoute'

class Signin extends React.PureComponent {
  render () {
    return (
      <Layout>
        <div>hello signin</div>
      </Layout>
    )
  }
}

export default WithRoute(Signin)
