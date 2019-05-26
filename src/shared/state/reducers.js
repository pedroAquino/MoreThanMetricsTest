import { combineReducers } from 'redux';
import personaReducer from '../../Persona/services/personaDucks';
import columnsReducer from '../../Persona/services/columnDucks';

// All Business Entities Goes Here
const entities = combineReducers({
    persona: personaReducer,
    columns: columnsReducer
});

//All ui stuff goes here
// const ui = combineReducers({
// });

export default combineReducers({
    entities,
    //ui
});