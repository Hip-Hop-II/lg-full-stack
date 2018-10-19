import * as React from 'react'
import Link from 'next/link'
import WithRoute from '../components/WithRoute'
import Layout from '../components/Layout'

class App extends React.PureComponent {
  render () {
    return (
      <Layout>
        <p>hello world</p>
        <Link href="/detail">
          <a>详情页</a>
        </Link>
      </Layout>
    )
  }
}

export default WithRoute(App)
