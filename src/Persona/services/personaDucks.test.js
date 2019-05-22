import personaReducer, { 
    GET_PERSONA, 
    GET_PERSONA_COMPLETE,
    GET_PERSONA_ERROR,
    getPersona,
    getPersonaComplete,
    getPersonaError,
    initialState
} from './personaDucks';

describe('persona related actions',  () => {
    it('should create a get persona action', () => {
        const id = 20;
        const action = getPersona(id);
        expect(action).toEqual({
            type: GET_PERSONA,
            payload: id
        });
    });

    it('should create a get persona complete action', () => {
        const persona = {};
        const action = getPersonaComplete(persona);
        expect(action).toEqual({
            type: GET_PERSONA_COMPLETE,
            payload: persona
        })
    });

    it('should create a get persona error action', () => {
        const error = {};
        const action = getPersonaError(error);
        expect(action).toEqual({
            type: GET_PERSONA_ERROR,
            payload: error
        })
    });
});

describe('Persona reducer', () => {
    it('should return initial state', () => {
        expect(
            personaReducer(undefined, {})
        ).toEqual(initialState);
    });
    
    it('should set persona to loading state', () => {
        expect(
            personaReducer(initialState, getPersona(20))
        ).toEqual({
            ...initialState,
            entityStatus: 'LOADING'
        });
    });

    it('should set persona to error state and add errors', () => {
        const errors = {
            name: 'Name is required'
        };
        expect(
            personaReducer(initialState, getPersonaError(errors))
        ).toEqual({
            ...initialState,
            entityStatus: 'ERROR',
            errors: errors
        });
    });

    it('should load persona', () => {
        const persona = {
            "id":20,
            "name":"Klaus",
            "initials":"KLA",
            "color":"#F46060",
            "avatar":"klaus"
        };
        expect(
            personaReducer(initialState, getPersonaComplete(persona))
        ).toEqual({
            ...persona,
            entityStatus: 'STABLE',
            errors: {}
        });
    });

});