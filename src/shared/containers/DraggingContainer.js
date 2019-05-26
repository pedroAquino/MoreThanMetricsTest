// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Field } from '../../Persona/services/fieldFactory';
import type { Position } from '../services/positionFactory';
import type { DraggingState } from '../services/draggingDucks';
import { startDragging, stopDragging } from '../services/draggingDucks';

type Props = {
  dragging: DraggingState;
  children: any;
  dispatchStart: (field: Field) => void;
  dispatchStop: (field: Field, position: Position) => void;
};

type State = {
  
};

class DraggingContainer extends React.Component<Props, State>{
  
  render() {
    return this.props.children(
      this.props.dragging
    );
  }
};

const mapStateToProps = state => ({
  dragging: state.ui.dragging
});

const mapDispatchToProps = dispatch => ({
  dispatchStart: (field: Field) => dispatch(startDragging(field)),
  dispatchStop: (field: Field, position: Position) => dispatch(stopDragging(field, position))
});

export default connect(mapStateToProps, mapDispatchToProps)(DraggingContainer);