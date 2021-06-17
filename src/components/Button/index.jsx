import React from 'react'

export const Button = (props) => (
  <button
    {...props}
    className={props.className ? `btn ${props.className}` : 'btn'}
  >
    <span className="btn__text">{props.children}</span>
  </button>
)
