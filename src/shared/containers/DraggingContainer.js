// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Field } from '../../Persona/services/fieldFactory';
import type { Position } from '../services/positionFactory';
import type { DraggingState } from '../services/draggingDucks';
import { startDragging, stopDragging } from '../services/draggingDucks';
import fieldFactory from '../../Persona/services/fieldFactory';
import positionFactory from '../services/positionFactory';
import { addField } from '../../Persona/services/columnDucks';

type Props = {
  dragging: DraggingState;
  children: any;
  dispatchStart: (field: Field) => void;
  dispatchStop: (field: Field, position: Position) => void;
  dispatchAddField: (field: Field) => void;
};

type State = {
  
};

class DraggingContainer extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.field = fieldFactory({
      title: 'info',
      fieldType: 'short-text',
      columnId: 2,
      isNew: true
    });
  }

  field: Field;
  
  /*:: onStart: () => void */
  onStart() {
    this.props.dispatchStart(this.field);
  }

  /*:: onStop: () => void */
  onStop({ clientX, clientY }: any) {
    const position = positionFactory({
      x: clientX, 
      y: clientY
    });
    this.props.dispatchStop(this.field, position);
    this.props.dispatchAddField(this.field);
  }

  render() {
    return this.props.children(
      this.props.dragging,
      this.onStart,
      this.onStop
    );
  }
};

const mapStateToProps = state => ({
  dragging: state.ui.dragging
});

const mapDispatchToProps = dispatch => ({
  dispatchStart: (field: Field) => dispatch(startDragging(field)),
  dispatchStop: (field: Field, position: Position) => dispatch(stopDragging(field, position)),
  dispatchAddField: (field: Field) => dispatch(addField(field))
});

export default connect(mapStateToProps, mapDispatchToProps)(DraggingContainer);