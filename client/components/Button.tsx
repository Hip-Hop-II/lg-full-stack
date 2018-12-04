import React from 'react'

type Props = {
  style?: Object;
  onClick?: (any) => void;
  className?: string;
}

export default class Button extends React.PureComponent<Props> {
  render () {
    const {children, onClick, className, style} = this.props
    return (
      <button style={style} onClick={onClick} className={`wrapper ${className}`}>
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