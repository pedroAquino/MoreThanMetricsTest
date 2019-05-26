
// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { PersonaState } from '../services/personaDucks';
import { updatePersona, updatePersonaError, getPersona } from '../services/personaDucks';
import { validatePersona } from '../services/personaFactory';

export const DEFAULT_PERSONA_ID = 20;

type Props = {
    dispatchGet: (id: number) => void;
    dispatchUpdate: (persona: PersonaState) => void;
    dispatchUpdateError: (error: any) => void;
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

    componentDidUpdate(prevProps: Props) {
        if (prevProps.persona.name !== this.props.persona.name ||
            prevProps.persona.initials !== this.props.persona.initials) {
            const errors = validatePersona(this.props.persona);
            if (errors) {
                this.props.dispatchUpdateError(errors);
            }
        }
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
    dispatchUpdate: (persona: PersonaState) => dispatch(updatePersona(persona)),
    dispatchUpdateError: (error: any) => dispatch(updatePersonaError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonaContainer);