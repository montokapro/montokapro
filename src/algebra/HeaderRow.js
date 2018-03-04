import React from 'react';
import styled from 'styled-components';
import HeaderCell from './HeaderCell';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export default (({ columns }) => (
  <Div>
    {columns.map((value, index) => (
      <HeaderCell key={index} less={value.name} more={value.comment}/>
    ))}
  </Div>
));
