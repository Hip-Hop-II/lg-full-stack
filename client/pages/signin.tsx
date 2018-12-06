import React from 'react'
import Layout from '../components/Layout'
import WithRoute from '../components/WithRoute'
import SignInput from '../components/signForm/SignInput'
import Button from '../components/Button'
import Link from 'next/link'
import {signin} from '../lib/api/user'
import Router from 'next/router'

const signTabs = [
  {title: '密码登录'},
  {title: '验证码登录'}
]
class Signin extends React.PureComponent {
  state = {
    slideLeft: 0,
    selectedIndex: 0,
    username: '',
    password: ''
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
  handleChange = (tag: string, value: string):void => {
    if (tag === 'username') {
      this.setState({username: value})
    } else {
      this.setState({password: value})
    }
  }
  submitClick = async () => {
    const {username, password} = this.state
    try {
      const result:any = await signin({username, password})
      if (result.status === 200) {
        Router.push('/')
      }
    } catch (error) {
      throw error
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
              <div>
                <SignInput placeholder="请输入常用手机号/邮箱" value={this.state.username} onChange={value => this.handleChange('username', value)} />
                <SignInput placeholder="请输入密码" type="password" value={this.state.password} onChange={value => this.handleChange('password', value)} style={{marginTop: '20px'}} />
                <div className="sign-forget">
                    <Link href="">
                      <a>忘记密码？</a>
                    </Link>
                </div>
                <Button onClick={this.submitClick} style={{width: '100%', height: '46px'}}>登录</Button>
              </div>
            </div>
            <div className="signin-divider"></div>
            <div className="signin-caption">
              <div className="signin-caption__body">
                 <h4>还没有账户:</h4>
                 <Link href="">
                    <a>立即注册</a>
                 </Link>
              </div>
              <div className="signin-caption__footer">
                 <h5>使用以下账号直接登录:</h5>
              </div>
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
          .sign-input {
            margin-top: 20px;
          }
          .sign-forget {
            margin: 20px 0;
            text-align: right;
          }
          .sign-forget>a {
            color: #00b38a;
            font-size: 14px;
          }
          .signin-divider {
            position: relative;
            border-left: 1px dashed #ededed;
            height: 274px;
            color: #d8d8d8;
            margin: 0 52px;
          }
          .signin-divider::after {
            content: 'or';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 2px;
            background-color: #fff;
          }
          .signin-caption {
            width: 150px;
            text-algin: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
          .signin-caption__body {
            margin-top: 22px;
          }
          .signin-caption__body h4 {
            margin-bottom: 8px;
            color: #555;
          }
          .signin-caption__body a {
            color: #00b38a;
          }
          .signin-caption__footer {
            margin-top: 44px;
          }
          .signin-caption__footer h5 {
            color: #555;
          }
        `}</style>
      </Layout>
    )
  }
}

export default WithRoute(Signin)
