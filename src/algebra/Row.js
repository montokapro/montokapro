import React from 'react';
import styled from 'styled-components';
import Collapse from 'react-collapse';
import Cell from './Cell';

const Div = styled.div`
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
  }
`;

const Padding = styled.div`
  padding: 0.25em;
`;

const More = styled.p`
  // margin: 0.25em;
  margin: 0;
  background-color: #f2f2f2;
  padding: 0.25em;
`;

const Less = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: this.props.expanded ? this.props.expanded : false,
    }
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded = event => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <Div onClick={this.toggleExpanded}>  
        {this.props.comment &&
          <Collapse isOpened={this.state.expanded}>
            <Padding> 
              <More>{this.props.comment}</More>
            </Padding>
          </Collapse>
        }
        <Less>
          {this.props.columns.map((value, index) => (
            <Cell expanded={this.state.expanded} key={index} less={value.name} more={value.comment}/>
          ))}
        </Less>
      </Div>
    );
  }
};
