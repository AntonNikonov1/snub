import React from 'react'

export const Table = ({
  leftList,
  rightList,
  leftListTitle,
  rightListTitle,
}) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__header-item">
          <th className="table__header-item-content left">{leftListTitle}</th>
          <th className="table__header-item-content right">{rightListTitle}</th>
        </tr>
      </thead>
      <tbody>
        {leftList.map((_, indx) => (
          <tr key={indx} className="table__body-item">
            <th className="table__body-item-content">{leftList[indx]}</th>
            <th className="table__body-item-content">{rightList[indx]}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
