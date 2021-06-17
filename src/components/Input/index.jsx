import React from 'react'

export const Input = (props) => (
  <div className="input__wrapper">
    <input className="input" required {...props} />

    <span className="input__highlight"></span>
    <span className="input__bar"></span>
    <label className="input__label">{props.title}</label>
  </div>
)
