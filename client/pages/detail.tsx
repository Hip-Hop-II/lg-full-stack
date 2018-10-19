import React from 'react'
import WithRoute from '../components/WithRoute'
import Layout from '../components/Layout'

class Detail extends React.PureComponent {
  render () {
    return (
      <Layout>
        <p>hello detail</p>
      </Layout>
    )
  }
}

export default WithRoute(Detail)
