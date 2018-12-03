import React from 'react'
import Layout from '../components/Layout'
import WithRoute from '../components/WithRoute'

class Signin extends React.PureComponent {
  render () {
    return (
      <Layout>
        <header className="signin-bg">

        </header>
        <section className="signin-wrapper">
          <div className="signin-header">
            <a href=""></a>
          </div>
          <div className="signin-content">
            <div className="signin-form">
            </div>
            <div className="signin-caption">
            </div>
          </div>
        </section>
        <style jsx scoped>{`
          .signin-bg {
            height: 360px;
            background-color: #00b38a;
          }
          .signin-wrapper {
            position: absolute;
            top: 76px;
            width: 552px;
            left: 50%;
            transform: translateX(-50%);
          }
          .signin-header {
            margin-bottom: 40px;
          }
          .signin-header>a {
            display: inline-block;
            width: 112px;
            height: 42px;
            background: url('/static/signin_logo.png') center center no-repeat;
            background-size: cover;
          }
          .signin-content {
            padding: 62px 70px 68px 78px;
            background-color: #fff;
            border: 1px solid #dce1e6;
            border-radius: 4px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default WithRoute(Signin)
