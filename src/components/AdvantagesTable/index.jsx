import React from 'react'

export const AdvantagesTable = ({ leftTable, rightTable }) => {
  return (
    <section className="advantages-table pt100">
      <ul className="advantages-table__left-list">
        {leftTable.map((item, indx) => (
          <li className="advantages-table__left-item" key={indx}>
            {item}
          </li>
        ))}
      </ul>

      <ul className="advantages-table__right-list">
        {rightTable.map((item, indx) => (
          <li className="advantages-table__right-item" key={indx}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
