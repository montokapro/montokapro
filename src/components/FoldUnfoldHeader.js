
import React from 'react';
import styled from 'styled-components';
import Collapse from 'react-collapse';
import FoldUnfoldRow from '../components/FoldUnfoldRow';

const foldComment = 'A fold is an operation that transforms one algebra to another. An algebra has a morphism of the form \'F a → a\'. F represents an functor that can be mapped across (as in map reduce). Folding is often called reducing.';
const unfoldComment = 'An unfold is an operation that transforms one coalgebra to another. A coalgebra has a morphism of the form \'a → F a\'. F represents an functor that can be mapped across (as in map reduce). Unfolding is the dual of reducing';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

const Cell = styled.div`
  flex-grow: 1;
  width: 50%;
`;

const H1 = styled.h1`
  float: center;
  text-align: center;
  cursor: pointer;
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
      foldExpanded: false,
      unfoldExpanded: false
    }
    this.toggleFoldExpanded = this.toggleFoldExpanded.bind(this);
    this.toggleUnfoldExpanded = this.toggleUnfoldExpanded.bind(this);
  }

  toggleFoldExpanded() {
    this.setState({ foldExpanded: !this.state.foldExpanded });
  }

  toggleUnfoldExpanded() {
    this.setState({ unfoldExpanded: !this.state.unfoldExpanded });
  }

  render() {
    return (
      <Div>
        <Cell>
          <H1 onClick={this.toggleFoldExpanded}>Fold</H1>
          <Collapse isOpened={this.state.foldExpanded}>
            <Comment>{foldComment}</Comment>
          </Collapse>
        </Cell>
        
        <Cell>
          <H1 onClick={this.toggleUnfoldExpanded}>Unfold</H1>
          <Collapse isOpened={this.state.unfoldExpanded}>
            <Comment>{unfoldComment}</Comment>
          </Collapse>
        </Cell>
      </Div>
    );
  }
};
