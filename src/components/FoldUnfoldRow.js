import React from 'react';
import styled from 'styled-components';
import Collapse from 'react-collapse';

const Div = styled.div`
  
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;

  // &:nth-child(even) {
  //   background-color: #f2f2f2;
  // }
`;

const Cell = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

const Unique = styled.pre`
  white-space: nowrap;
  margin: 0;
  padding: 4px;
`;

const Common = styled.pre`
  white-space: nowrap;
  color: #4CAF50;
  margin: 0;
  padding: 4px;
`;

const Comment = styled.p`
  background-color: #f2f2f2;
  margin: 0;
  padding: 4px;
`;

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <Div>
        <Row onClick={this.toggleExpanded}>
          {this.props.common.map((value, columnIndex) => (
            <Cell key={columnIndex}>
              <Unique>{this.props.unique[columnIndex]}</Unique>
              <Common>{value}</Common>
            </Cell>
          ))}
        </Row>
        <Collapse isOpened={this.state.expanded}>
          <Comment>{this.props.comment}</Comment>
        </Collapse>
      </Div>
    );
  }
};
