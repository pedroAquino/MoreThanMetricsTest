
// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { PersonaState } from '../services/personaDucks';
import { updatePersona, getPersona } from '../services/personaDucks';

const DEFAULT_PERSONA_ID = 20;

type Props = PersonaState & {
    dispatchGet: (id: number) => void;
    dispatchUpdate: (persona: PersonaState) => void;
    children: any;
}

class PersonaContainer extends React.Component<Props, any>{
    constructor(props) {
        super(props);
        this.onUpdatePersona = this.onUpdatePersona.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatchGet(DEFAULT_PERSONA_ID);
    }

    /*:: onUpdatePersona: () => void */
    onUpdatePersona(persona: PersonaState) {
        this.props.dispatchUpdate(persona);
    }

    render() {
        return this.props.children(
            this.props, 
            this.onUpdatePersona
        );
    }
};

const mapStateToProps = state => ({
    ...state.entities.persona
});

const mapDispatchToProps = dispatch => ({
    dispatchGet: (id: number) => dispatch(getPersona(id)),
    dispatchUpdate: (persona: PersonaState) => dispatch(updatePersona(persona))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonaContainer);