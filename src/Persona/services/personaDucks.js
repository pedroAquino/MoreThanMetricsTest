// @flow
import type { EntityState } from '../../shared/state/entityStateFactory';
import type { PersonaModel } from './personaFactory';
import { withEntityState } from '../../shared/state/entityStateFactory';
import personaFactory from './personaFactory';
import { compose } from 'ramda';

type PersonaState = PersonaModel & EntityState;

// ---- FETCH PERSONA ------
export const GET_PERSONA = 'GET_PERSONA';
export const GET_PERSONA_COMPLETE = 'GET_PERSONA_COMPLETE';
export const GET_PERSONA_ERROR = 'GET_PERSONA_ERROR';

export const getPersona = (id: number) => ({
    type: GET_PERSONA,
    payload: id
});

export const getPersonaComplete = (persona: PersonaModel) => ({
    type: GET_PERSONA_COMPLETE,
    payload: {...persona}
});

export const getPersonaError = (error: any) => ({
    type: GET_PERSONA_ERROR,
    payload: {...error}
});

// ---- UPDATE PERSONA ------
export const UPDATE_PERSONA = 'UPDATE_PERSONA';
export const UPDATE_PERSONA_ERROR = 'UPDATE_PERSONA_ERROR';
export const UPDATE_PERSONA_COMPLETE = 'UPDATE_PERSONA_COMPLETE';

export const  updatePersona = (persona: PersonaModel) => ({
    type: UPDATE_PERSONA,
    payload: {...persona}
});

export const updatePersonaError = (error: any) =>  ({
    type: UPDATE_PERSONA_ERROR,
    payload: {...error}
});

export const updatePersonaComplete = (persona:PersonaModel) => ({
    type: UPDATE_PERSONA_COMPLETE,
    payload: {...persona}
});

export const initialState: PersonaState = compose(
    withEntityState,
    personaFactory,
)({});

export default function personaReducer(state: PersonaState = initialState , action: any) {
    switch (action.type) {
        case GET_PERSONA:
            return Object.assign({}, state, { entityStatus: 'LOADING' });
        case GET_PERSONA_ERROR:
            return Object.assign({}, state, { entityStatus: 'ERROR', errors: action.payload });
        case GET_PERSONA_COMPLETE: {
            const persona = compose(
                withEntityState,
                personaFactory
            )(action.payload);
            return Object.assign({}, persona, { entityStatus: 'STABLE' });
        }
        case UPDATE_PERSONA:
            return Object.assign({}, state, { entityStatus: 'PERSISTING' })
        case UPDATE_PERSONA_ERROR:
            return Object.assign({}, state, { entityStatus: 'PERSISTING_ERRORS', errors: action.payload });
        case UPDATE_PERSONA_COMPLETE: {
            const persona = compose(
                withEntityState,
                personaFactory
            )(action.payload);
            return Object.assign({}, persona, { entityStatus: 'STABLE' });
        }
        default:
            return state;
    }
};
