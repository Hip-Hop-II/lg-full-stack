import React, { PureComponent } from 'react'
import Layout from '../components/Layout'

class Company extends PureComponent {
  render() {
    return (
      <Layout>
        <section className="banner"></section>
        <style jsx>{`
        .banner {
          background-color: #00b38a;
          height: 387px;
        }
        `}</style>
      </Layout>
    )
  }
}

export default Company
