import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const Div = styled.div`
  background-color: #f2f2f2;
`;

const More = styled.p`
  margin: 0;
  padding: 4px;
`;

const Less = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export default (({ comment, columns }) => (
  <Div>
    {comment && 
      <More>{comment}</More>
    }
    <Less>
      {columns.map((value, index) => (
        <Cell key={index} less={value.name} more={value.comment}/>
      ))}
    </Less>
  </Div>
));
