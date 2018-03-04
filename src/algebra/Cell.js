import React from 'react';
import styled from 'styled-components';
import Collapse from 'react-collapse';

const Div = styled.div`
  width: 50%;
`;

const Less = styled.pre`
  background-color: #ffffff;
  margin: 0;
  padding: 4px;
`;

const More = styled.p`
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
      <Div onClick={this.toggleExpanded}>
        <Less>{this.props.less}</Less>
        <Collapse isOpened={this.state.expanded}>
          <More>{this.props.more}</More>
        </Collapse>
      </Div>
    );
  }
};
