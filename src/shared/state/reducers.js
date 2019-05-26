import { combineReducers } from 'redux';
import personaReducer from '../../Persona/services/personaDucks';
import columnsReducer from '../../Persona/services/columnDucks';
import draggingReducer from '../services/draggingDucks';

// All Business Entities Goes Here
const entities = combineReducers({
    persona: personaReducer,
    columns: columnsReducer
});

//All ui stuff goes here
const ui = combineReducers({
    dragging: draggingReducer
});

export default combineReducers({
    entities,
    ui
});