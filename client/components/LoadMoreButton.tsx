import React from 'react'

export default () => (
  <button className="button">
    查看更多
  <style jsx>{`
    .button {
      width: 387px;
      height: 42px;
      line-height: 42px;
      font-size: 16px;
      color: #00b38a;
      display: inline-block;
      border: none;
      border-radius: 2px;
      text-align: center;
      background-color: #fff;
      border: 1px solid #00b38a;
      outline: none;
      cursor: pointer;
      transition: all .3s ease;
    }
    .button:hover {
      background-color: #00b38a;
      color: #fff;
    }
  `}</style>
  </button>
)