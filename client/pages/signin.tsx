import React from 'react'
import Layout from '../components/Layout'
import WithRoute from '../components/WithRoute'

const signTabs = [
  {title: '密码登录'},
  {title: '验证码登录'}
]

class Signin extends React.PureComponent {
  state = {
    slideLeft: 0,
    selectedIndex: 0
  }
  itemClick = (event, item, index) => {
    const {selectedIndex} = this.state
    if (selectedIndex !== index) {
      this.setState({
        slideLeft: `${event.currentTarget.offsetLeft}px`,
        selectedIndex: index
      })
    } 
  }
  render () {
    const {slideLeft, selectedIndex} = this.state
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
              <div className="signin-form__header">
                <ul className="signin-tabs">
                  {signTabs.map((item, index) => (
                    <li className={index === selectedIndex ? 'signin-tab__item active' : 'signin-tab__item'} onClick={(event) => this.itemClick(event, item, index)} key={index}>{item.title}</li>
                  ))}
                </ul>
                <span className="signin-tabs__active" style={{left: slideLeft}}></span>
              </div>
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
            display: flex;
          }
          .signin-form {
            width: 290px;
          }
          .signin-form__header {
            margin-bottom: 15px;
            position: relative;
          }
          .signin-tabs {
            display: flex;
            position: relative;
          }
          .signin-tabs::after {
            content: '';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #ebebeb;
          }
          .signin-tab__item {
            flex: 0 0 50%;
            text-align: center;
            font-size: 16px;
            line-height: 24px;
            height: 33px;
            transition: all .3s ease;
            cursor: pointer;
          }
          .signin-tab__item.active {
            color: #00b38a;
          }
          .signin-tabs__active {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50%;
            height: 1px;
            background-color: #00b38a;
            transition: all .4s ease;
          }
        `}</style>
      </Layout>
    )
  }
}

export default WithRoute(Signin)
