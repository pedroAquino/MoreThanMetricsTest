import personaReducer, { 
    GET_PERSONA, 
    GET_PERSONA_COMPLETE,
    GET_PERSONA_ERROR,
    getPersona,
    getPersonaComplete,
    getPersonaError,
    updatePersona,
    updatePersonaError,
    updatePersonaComplete,
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

    it('should create an update persona action', () => {
        const action = updatePersona({
            id: 20,
            name: 'John',
            initials: 'JOH',
            avatar: 'john.png',
            color: '#000'
        });
        expect(action).toEqual({
            type: 'UPDATE_PERSONA',
            payload: {
                id: 20,
                name: 'John',
                initials: 'JOH',
                avatar: 'john.png',
                color: '#000'
            }
        });
    });

    it('should create an update persona error action', () => {
        const action = updatePersonaError({ status: 500 });
        expect(action).toEqual({
            type: 'UPDATE_PERSONA_ERROR',
            payload: { status: 500 }
        });
    });

    it('should create an update persona complete action', () => {
        const action = updatePersonaComplete({
            "id": 20,
            "name": "Martin",
            "initials": "MAR",
            "color": "#F46060",
            "avatar": "star"
        });
        expect(action).toEqual({
            type: 'UPDATE_PERSONA_COMPLETE',
            payload: {
                "id": 20,
                "name": "Martin",
                "initials": "MAR",
                "color": "#F46060",
                "avatar": "star"
            }
        });
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

    it('should set persona to PERSISTING state',  () => {
        const prevState = {
            "id":20,
            "name":"Klaus",
            "initials":"KLA",
            "color":"#F46060",
            "avatar":"klaus",
            entityStatus: 'STABLE',
            errors: {}
        };

        const action = updatePersona({
            ...prevState,
            name: 'John',
            initials: 'JOH'
        });

        const result = expect(personaReducer(prevState, action)).toEqual({
            ...prevState,
            entityStatus: 'PERSISTING',
        });

    });

    it('should put persona to PERSISTING_ERRORS state', () => {
        const action = updatePersonaError({ status: 500 });
        const result = personaReducer(initialState, action);
        expect(result).toEqual({
            ...initialState,
            entityStatus: 'PERSISTING_ERRORS',
            errors: { status: 500 }
        })
    });

    it('should put persona to STABLE state with  updated fields', () => {
        const prevState = {
            "id":20,
            "name":"Klaus",
            "initials":"KLA",
            "color":"#F46060",
            "avatar":"klaus",
            entityStatus: 'STABLE',
            errors: {}
        };

        const action = updatePersonaComplete({
            ...prevState,
            name: 'John',
            initials: 'JOH'
        });

        const result = expect(personaReducer(prevState, action)).toEqual({
            "id":20,
            "name":"John",
            "initials":"JOH",
            "color":"#F46060",
            "avatar":"klaus",
            entityStatus: 'STABLE',
            errors: {}
        });
    });

});