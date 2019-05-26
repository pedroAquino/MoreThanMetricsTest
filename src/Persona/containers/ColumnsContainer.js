// @flow
import React from 'react';
import type { ColumnState } from '../services/columnDucks';
import { connect } from 'react-redux';
import { getColumns, updateField } from '../services/columnDucks';
import { DEFAULT_PERSONA_ID } from './PersonaContainer';
import fieldFactory from '../services/fieldFactory';
import type { Field } from '../services/fieldFactory';

type Props = {
  children: any;
  columns: ColumnState;
  dispatchGet: (personaId: number) => void;
  dispatchUpdate: (field: Field) => void;
};

type State = {
  
};

class ColumnsContainer extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.onUpdateFeld = this.onUpdateFeld.bind(this);
    }


  componentDidMount() {
      this.props.dispatchGet(DEFAULT_PERSONA_ID);
  }

  /*:: onUpdateFeld: () => void */
  onUpdateFeld(field: any) {
      const parsed = fieldFactory({
          title: 'info',
          data: field.info
      });
      this.props.dispatchUpdate(parsed);
  }
  
  render() {
      return this.props.children(
          this.props.columns,
          this.onUpdateFeld
      );
  }

};

const mapStateToProps = state => ({
    columns: state.entities.columns
});

const mapDispatchToProps = dispatch => ({
    dispatchGet: id => dispatch(getColumns(id)),
    dispatchUpdate: field => dispatch(updateField(field))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsContainer);