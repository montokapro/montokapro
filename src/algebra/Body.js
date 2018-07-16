import React from 'react';
import styled from 'styled-components';
import HeaderRow from './HeaderRow';
import Row from './Row';

const Div = styled.div`
`;

const Less = styled.h3`
  margin: 0;
  padding: 0.25em;
`;

const More = styled.div`
  background-color: #f2f2f2;
  margin: 0;
  padding: 0.25em;
`;

export default (({ body }) => (
  <Div>
    <HeaderRow columns={body.header}/>
    {body.rows && body.rows.map((row, index) => (
      <Row key={index} comment={row.comment} columns={row.data}/>
    ))}
    {body.rows &&
      <div>
        <Less>References</Less>
        {body.references.map((reference, index) => (
          <More key={index}>
            <a href={reference.link}>{reference.name}</a>
          </More>
        ))}
      </div>
    }
  </Div>
))
