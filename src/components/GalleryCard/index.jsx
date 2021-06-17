import React from 'react'

export const GalleryCard = (props) => {
  return (
    <img
      src={props.uri}
      alt="gallery photo"
      className="gallery-card"
      {...props}
    />
  )
}
