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
  },
  {
    id: 2,
    title: '产品',
    fire: [
      {title: '产品总监'},
      {title: '产品经理'},
      {title: '产品助理'}
    ],
    children: [
      {
        id: 1,
        title: '产品经理',
        children: [
          {title: '产品经理'},
          {title: '网页产品经理'}
        ]
      },
      {
        id: 2,
        title: '产品设计师',
        children: [
          {title: '网页产品设计师'},
          {title: '无线产品设计师'}
        ]
      }
    ]
  },
  {
    id: 3,
    title: '设计',
    fire: [
      {title: 'UI设计师'},
      {title: '交互设计'},
      {title: '网页设计师'}
    ],
    children: [
      {
        id: 1,
        title: '视觉设计',
        children: [
          {title: '视觉设计师'},
          {title: '网页设计师'}
        ]
      },
      {
        id: 2,
        title: '交互设计',
        children: [
          {title: '交互设计师'},
          {title: '无线交互设计师'}
        ]
      }
    ]
  },
  {
    id: 4,
    title: '运营',
    fire: [
      {title: '新媒体运营'},
      {title: '编辑'},
      {title: '数据运营'}
    ],
    children: [
      {
        id: 1,
        title: '运营',
        children: [
          {title: '用户运营'},
          {title: '产品运营'}
        ]
      },
      {
        id: 2,
        title: '编辑',
        children: [
          {title: '副主编'},
          {title: '内容编辑'}
        ]
      }
    ]
  },
  {
    id: 5,
    title: '市场与销售',
    fire: [
      {title: '市场推广'},
      {title: '市场总监'}
    ],
    children: [
      {
        id: 1,
        title: '市场/营销',
        children: [
          {title: '市场营销'},
          {title: '市场策划'}
        ]
      },
      {
        id: 2,
        title: '公关',
        children: [
          {title: '媒介经理'},
          {title: '广告协调'}
        ]
      }
    ]
  },
  {
    id: 6,
    title: '职能',
    fire: [
      {title: 'HR'},
      {title: '行政'},
      {title: '财务'},
      {title: '审计'}
    ],
    children: [
      {
        id: 1,
        title: '人力资源',
        children: [
          {title: '人力资源'},
          {title: '招聘'}
        ]
      },
      {
        id: 2,
        title: '行政',
        children: [
          {title: '助理'},
          {title: '前台'}
        ]
      }
    ]
  },
  {
    id: 7,
    title: '金融',
    fire: [
      {title: '投资'},
      {title: '融资'},
      {title: '并购'},
      {title: '风控'}
    ],
    children: [
      {
        id: 1,
        title: '投融资',
        children: [
          {title: '投资经理'},
          {title: '分析师'}
        ]
      },
      {
        id: 2,
        title: '风控',
        children: [
          {title: '风控'},
          {title: '资信评估'}
        ]
      }
    ]
  }
]

export default class CateList extends React.PureComponent {
  state = {
    isEnter: false,
    currentIndex: -1
  }
  onMouseEnter = (index) => {
    this.setState({
      isEnter: true,
      currentIndex: index
    })
  }
  onMouseLeave = (index) => {
    this.setState({
      isEnter: false,
      currentIndex: -1
    })
  }
  render () {
    const {isEnter, currentIndex} = this.state
    return (
      <ul className="wrapper">
        {cateList.map((item, index) => (
          <li key={index} className={`cate-item ${isEnter && currentIndex === index ? 'open' : ''}`} 
          onMouseLeave={() => this.onMouseLeave(index)}
          onMouseEnter={() => this.onMouseEnter(index)}>
            <div className="cate-item__title">
              <h2>{item.title}</h2>
              <div className="cate-item__sub">
                {item.fire.map((current, key) => (
                  <Link key={key} as={`/zhaopin/${item.title}`} href={`/position-detail?title=${item.title}`}>
                    <a>{current.title}</a>
                  </Link>
                ))}
              </div>
              <i className="arrow"></i>
            </div>
            {isEnter && currentIndex === index && <ul className="sub-wrapper">
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
            padding: 18px 0 17px 10px;
            width: 321px;
            display: flex;
            position: relative;
            z-index: 20;
            align-items: center;
          }
          .cate-item__title .arrow {
            margin-right: 8px;
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
            margin-top: 2px;
            flex: 1;
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
            padding: 20px 10px 0 25px;
            z-index: 10;
          }
          .cate-item.open .sub-wrapper{
            background-color: #fff;
            box-shadow: 0 0 4px 2px rgba(0,0,0,.09);
            border-radius: 2px;
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
