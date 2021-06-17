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
        <tr>
          <th className="table__header left">{leftListTitle}</th>
          <th className="table__header right">{rightListTitle}</th>
        </tr>
      </thead>
      <tbody>
        {leftList.map((_, indx) => (
          <tr key={indx}>
            <th className="table__body">{leftList[indx]}</th>
            <th className="table__body">{rightList[indx]}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
