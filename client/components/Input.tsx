import React, {Fragment} from 'react'

type Props = {
  placeholder?: string;
  value?: any;
  onChange?: (any) => void;
  width?: number;
  className?: string;
}

export default (props: Props) => (
  <Fragment>
    <input placeholder={props.placeholder} value={props.value} 
    onChange={(event) => props.onChange(event.target.value)}
    style={{width: `${props.width}px`}}
    className={`wrapper-input ${props.className}`}
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