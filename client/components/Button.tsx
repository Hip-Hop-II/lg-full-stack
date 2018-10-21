import React from 'react'

export default class Button extends React.PureComponent {
  render () {
    const {children, onClick, className} = this.props
    return (
      <button onClick={onClick} className={`wrapper ${className}`}>
        {children}
        <style jsx>{`
          .wrapper {
            width: 142px;
            height: 46px;
            display: flex;
            font-size: 18px;
            justify-content: center;
            align-items: center;
            color: #fff;
            border: none;
            text-align: center;
            background-color: #00b38a;
            outline: none;
            cursor: pointer;
            transition: all .4s ease;
          }
          .wrapper:hover {
            opacity: .8;
          }
        `}</style>
      </button>
    )
  }
}