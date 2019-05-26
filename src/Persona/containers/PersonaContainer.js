
// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { PersonaState } from '../services/personaDucks';
import { updatePersona, getPersona } from '../services/personaDucks';

export const DEFAULT_PERSONA_ID = 20;

type Props = {
    dispatchGet: (id: number) => void;
    dispatchUpdate: (persona: PersonaState) => void;
    children: any;
    persona: PersonaState;
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
    onUpdatePersona(persona: any) {
        const parsed = Object.assign({}, this.props.persona, persona);
        this.props.dispatchUpdate(parsed);
    }

    render() {
        return this.props.children(
            this.props.persona, 
            this.onUpdatePersona
        );
    }
};

const mapStateToProps = state => ({
    persona: state.entities.persona
});

const mapDispatchToProps = dispatch => ({
    dispatchGet: (id: number) => dispatch(getPersona(id)),
    dispatchUpdate: (persona: PersonaState) => dispatch(updatePersona(persona))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonaContainer);