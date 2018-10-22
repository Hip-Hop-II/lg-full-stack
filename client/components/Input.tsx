import React, {Fragment} from 'react'

export default ({placeholder, value, onChange, width, className}) => (
  <Fragment>
    <input placeholder={placeholder} value={value} 
    onChange={onChange}
    style={{width: `${width}px`}}
    className={`wrapper-input ${className}`}
    />
    <style jsx>{`
      .wrapper-input {
        line-height: 20px;
        padding: 12px 16px;
        transition: all .4s ease;
        border: 1px solid #E8E8E8;
        outline: none;
        font-size: 16px;
      }
      .wrapper-input:focus {
        border: 1px solid #00b38a;
      }
    `}</style>
  </Fragment>
)