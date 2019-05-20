import { combineReducers } from 'redux';

// All Business Entities Goes Here
const entities = combineReducers({
    //todos: TodoReducer
});

//All ui stuff goes here
// const ui = combineReducers({
// });

export default combineReducers({
    entities,
    //ui
});