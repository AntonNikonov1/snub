import React from 'react'

export const ExampleWork = ({ uri, descriptionList, price }) => {
  return (
    <div className="example-work">
      <img src={uri} alt="example work" className="example-work__img" />

      <div>
        <ul className="example-work__description-list">
          {descriptionList.map((description, indx) => (
            <li className="example-work__description-item" key={indx}>
              {description}
            </li>
          ))}
        </ul>
        <p className="example-work__price">Цена водной горки {price} евро</p>
      </div>
    </div>
  )
}
