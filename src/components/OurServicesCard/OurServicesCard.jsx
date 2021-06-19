import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const OurServicesCard = ({ isSmallCard, linkName, title }) => {
  return (
    <Link
      to={linkName}
      className={isSmallCard ? 'our-service-item' : 'our-service-item'}
    >
      <h4 className="our-service-item__title">{title}</h4>
      {/* <a href={linkName}> */}
      <Button className="our-service-item__btn">Подробнее</Button>
      {/* </a> */}
    </Link>
  )
}
