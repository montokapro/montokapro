
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`

`;

const Header = styled.h2`
  float: center;
  text-align: center;
  margin: 0;
  border: 4px solid #4CAF50;

  background-color: #4CAF50;
  color: white;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Cell = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const Unique = styled.pre`
  white-space: nowrap;
  padding: 4px;
`;

const Common = styled.pre`
  white-space: nowrap;
  color: #4CAF50;
  padding: 4px;
`;

export default (({ body }) => (
  <Div>
    <Header>{body.name}</Header>
    {body.rows.map((row, rowIndex) => (
      <Row key={rowIndex}>
        {body.common.map((value, columnIndex) => (
          <Cell key={columnIndex}>
            <Unique>{row.data[columnIndex]}</Unique>
            <Common>{value}</Common>
          </Cell>
        ))}
      </Row>
    ))}
  </Div>
))
