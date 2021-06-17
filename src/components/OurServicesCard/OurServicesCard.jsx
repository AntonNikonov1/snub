import React from 'react'
import { Button } from '../Button'

export const OurServicesCard = ({ isSmallCard, linkName, title }) => {
  return (
    <div
      className={isSmallCard ? 'our-service-item small' : 'our-service-item'}
    >
      <h4 className="our-service-item__title">{title}</h4>
      <a href={linkName}>
        <Button className="our-service-item__btn">Подробние</Button>
      </a>
    </div>
  )
}
