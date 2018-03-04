import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export default (({ columns }) => (
  <Div>
    {columns.map((value, index) => (
      <Cell key={index} less={value.name} more={value.comment}/>
    ))}
  </Div>
));
