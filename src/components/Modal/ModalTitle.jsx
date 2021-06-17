import React from 'react'

export const ModalTitle = ({ children }) => {
  return (
    <h2 className="modal__title-wrapper">
      <span className="modal__title-text">{children}</span>
    </h2>
  )
}
