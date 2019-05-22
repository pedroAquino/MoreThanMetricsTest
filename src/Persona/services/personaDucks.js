// @flow
import type { EntityState } from '../../shared/state/entityStateFactory';
import { withEntityState } from '../../shared/state/entityStateFactory';
import personaFactory from './personaFactory';

export const GET_PERSONA = 'GET_PERSONA';
export const GET_PERSONA_COMPLETE = 'GET_PERSONA_SUCCESS';
export const GET_PERSONA_ERROR = 'GET_PERSONA_ERROR';

export const getPersona = (id: number) => ({
    type: GET_PERSONA,
    payload: id
});

export const getPersonaComplete = (persona: any) => ({
    type: GET_PERSONA_COMPLETE,
    payload: {...persona}
});

export const getPersonaError = (error: any) => ({
    type: GET_PERSONA_ERROR,
    payload: {...error}
});

const initialState = withEntityState(personaFactory());

// export default function personaReducer(state, action) {
//     switch (action.type) {
//         case GET_PERSONA:
            
//             break;
    
//         default:
//             break;
//     }
// };
