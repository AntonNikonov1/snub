import React from 'react'

export const Title = (props) => (
  <h2 {...props} className={props.isIntro ? 'intro-title' : 'title'}>
    {props.children}
  </h2>
)
