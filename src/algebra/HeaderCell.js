import React from 'react';
import styled from 'styled-components';
import Collapse from 'react-collapse';

const Div = styled.div`
  width: 50%;
  background: #108db8;
`;

const Less = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0.25em;
`;

const More = styled.p`
  margin: 0;
  padding: 0.25em;
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
