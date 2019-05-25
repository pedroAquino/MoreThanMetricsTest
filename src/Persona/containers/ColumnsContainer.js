// @flow
import React from 'react';
import type { ColumnState } from '../services/columnDucks';
import { connect } from 'react-redux';
import { getColumns } from '../services/columnDucks';
import { DEFAULT_PERSONA_ID } from './PersonaContainer';

type Props = {
  children: any;
  columns: ColumnState;
  dispatchGet: (personaId: number) => void;
};

type State = {
  
};

class ColumnsContainer extends React.Component<Props, State>{
  
  componentDidMount() {
      this.props.dispatchGet(DEFAULT_PERSONA_ID);
  }
  
  render() {
      return this.props.children(
          this.props.columns
      );
  }

};

const mapStateToProps = state => ({
    columns: state.columns
});

const mapDispatchToProps = dispatch => ({
    dispatchGet: id => dispatch(getColumns(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsContainer);