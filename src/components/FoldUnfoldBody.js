
import React from 'react'
import styled from 'styled-components'

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const LSpan = styled.span`
  float: left;
  text-align: left;
  white-space: nowrap;
`;

const RSpan = styled.span`
  float: right;
  text-align: right;
  white-space: nowrap;
  color: #4CAF50;
`;

export default (({ body }) => (
  <tbody>
    {body.rows.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {body.common.map((value, columnIndex) => (
          <th key={columnIndex}>
            <LSpan>{row.data[columnIndex]}</LSpan>
            <RSpan>{value}</RSpan>
          </th>
        ))}
      </TableRow>
    ))}
  </tbody>
))
