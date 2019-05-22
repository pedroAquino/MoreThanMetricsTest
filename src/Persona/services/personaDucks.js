// @flow
import type { EntityState } from '../../shared/state/entityStateFactory';
import type { PersonaModel } from './personaFactory';
import { withEntityState } from '../../shared/state/entityStateFactory';
import personaFactory from './personaFactory';
import { compose, tap } from 'ramda';

export const GET_PERSONA = 'GET_PERSONA';
export const GET_PERSONA_COMPLETE = 'GET_PERSONA_SUCCESS';
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

const initialState: EntityState<PersonaModel> = compose(
    tap(console.log),
    withEntityState,
    personaFactory,
)({});

export default function personaReducer(state: EntityState<PersonaModel> = initialState , action: any) {
    switch (action.type) {
        default:
            return state;
    }
};
