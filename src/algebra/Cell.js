import React from 'react';
import styled from 'styled-components';
import Collapse from 'react-collapse';

const Div = styled.div`
  width: 50%;
`;

const Padding = styled.div`
  padding: 0.25em;
`;

const Less = styled.pre`
  margin-left: 0.25em;
  margin-right: 0.25em;
  margin-top: 0em;
  margin-bottom: 0em;
  padding: 0.25em;
`;

const More = styled.p`
  margin: 0em;
  background-color: #f2f2f2;
  padding: 0.25em;
`;

export default class extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   expanded: false,
    // }
    // this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  // toggleExpanded() {
    // this.setState({ expanded: !this.state.expanded });
  // }

  render() {
    return (
      <Div>
        <Less>{this.props.less}</Less>
        {this.props.more &&
          <Collapse isOpened={this.props.expanded}>
            <Padding>
              <More>{this.props.more}</More>
            </Padding>
          </Collapse>
        }
      </Div>
    );
  }
};
