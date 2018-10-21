import React from 'react'
import Link from 'next/link'

const cateList  = [
  {
    id: 1,
    title: '技术',
    fire: [
      {title: 'Java'},
      {title: 'PHP'},
      {title: 'C++'},
      {title: '区块链'}
    ],
    children: [
      {
        id: 1,
        title: '后端开发',
        children: [
          {title: 'Java'},
          {title: 'C++'}
        ]
      },
      {
        id: 2,
        title: '移动开发',
        children: [
          {title: 'HTML5'},
          {title: 'Android'}
        ]
      }
    ]
  }
]

export default class CateList extends React.PureComponent {
  state = {
    isEnter: false
  }
  onMouseEnter = () => {
    this.setState({
      isEnter: true
    })
  }
  onMouseLeave = () => {
    this.setState({
      isEnter: false
    })
  }
  render () {
    const {isEnter} = this.state
    return (
      <ul className="wrapper">
        {cateList.map((item, index) => (
          <li key={index} className={`cate-item ${isEnter ? 'open' : ''}`} 
          onMouseLeave={this.onMouseLeave}
          onMouseEnter={this.onMouseEnter}>
            <div className="cate-item__title">
              <h2>{item.title}</h2>
              <div className="cate-item__sub">
                {item.fire.map((current, key) => (
                  <Link key={key} href={item.title}>
                    <a>{current.title}</a>
                  </Link>
                ))}
              </div>
            </div>
            {isEnter && <ul className="sub-wrapper">
              {item.children.map((child, key) => (
                <li className="sub-item" key={key}>
                  <h3>{child.title}</h3>
                  <div className="sub-item__content">
                    {child.children.map((c, index) => (
                      <Link key={index}>
                        <a>{c.title}</a>
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul> }
          </li>
        ))}
        <style jsx>{`
          .cate-item {
            display: flex;
            width: 321px;
            position: relative;
          }
          .cate-item__title {
            padding: 18px 0 17px 15px;
            width: 321px;
            display: flex;
            position: relative;
            z-index: 20;
          }
          .cate-item__title>h2 {
            font-size: 18px;
            margin-right: 10px;
          }
          .cate-item.open .cate-item__title {
            box-shadow: -5px 0 4px 2px rgba(0,0,0,.09);
            background-color: #fff;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
          }
          .cate-item__sub {
            margin-top: 3px;
          }
          .cate-item__sub>a {
            padding: 0 8px;
            margin-right:6px;
          }
          .cate-item__sub>a:hover {
            color: #00b38a;
          }
          .sub-wrapper {
            position: absolute;
            left: 321px;
            top: 0;
            width: 600px;
            padding: 20px 10px 0 15px;
            z-index: 10;
          }
          .cate-item.open .sub-wrapper{
            background-color: #fff;
            box-shadow: 0 0 4px 2px rgba(0,0,0,.09);
          }
          .sub-item>h3 {
            color: #333;
          }
          .sub-item__content {
            margin: 15px 0 20px;
          }
          .sub-item__content>a {
            margin-right: 15px;
            color: #777;
          }
          .sub-item__content>a:hover {
            color: #00b38a;
          }
        `}</style>
      </ul>
    )
  }
}
