import { 
    GET_PERSONA, 
    GET_PERSONA_COMPLETE,
    GET_PERSONA_ERROR,
    getPersona,
    getPersonaComplete,
    getPersonaError
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