import { combineReducers } from 'redux';
import personaReducer from '../../Persona/services/personaDucks';

// All Business Entities Goes Here
const entities = combineReducers({
    persona: personaReducer
});

//All ui stuff goes here
// const ui = combineReducers({
// });

export default combineReducers({
    entities,
    //ui
});