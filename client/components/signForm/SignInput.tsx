import React, { PureComponent } from 'react'

type Props = {
  style?: Object;
  onChange?: (any) => void;
  value?: number|string|any;
  placeholder?: string;
}
export default class SignInput extends PureComponent<Props> {
  public render () {
    const {style, onChange, value, ...arg} = this.props
    return (
      <div style={style} className="wrapper" >
        <input className="wrapper-input" 
          onChange = {(event) => onChange(event.target.value)}
          value={value}
          {...arg} />
          <style>{`
            .wrapper {
              border-bottom: 1px solid #ededed;
            }
            .wrapper-input {
              border: 0;
              outline: 0;
              height: 44px;
              background-color: transparent;
              width: 100%;
            }
          `}</style>
      </div>
    )
  }
}
